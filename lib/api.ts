import { API_BASE_URL, TOKEN_STORAGE_KEY } from "./config"

// Types pour les options de requête
interface ApiOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>
  requireAuth?: boolean
  timeout?: number
}

// Erreur API personnalisée
export class ApiError extends Error {
  status: number
  data: any

  constructor(message: string, status: number, data?: any) {
    super(message)
    this.name = "ApiError"
    this.status = status
    this.data = data
  }
}

// Fonction principale pour les appels API
export async function apiRequest<T = any>(endpoint: string, options: ApiOptions = {}): Promise<T> {
  const { params, requireAuth = false, timeout = 30000, ...fetchOptions } = options

  // Construction de l'URL avec les paramètres de requête
  let url = `${API_BASE_URL}${endpoint}`

  if (params) {
    const queryParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams.append(key, String(value))
      }
    })

    const queryString = queryParams.toString()
    if (queryString) {
      url += `?${queryString}`
    }
  }

  // Configuration des en-têtes
  const headers = new Headers(fetchOptions.headers)

  if (!headers.has("Content-Type") && !fetchOptions.body) {
    headers.append("Content-Type", "application/json")
  }

  // Ajout du token d'authentification si nécessaire
  if (requireAuth) {
    const token = typeof window !== "undefined" ? localStorage.getItem(TOKEN_STORAGE_KEY) : null

    if (!token) {
      throw new ApiError("Authentication required", 401)
    }

    headers.append("Authorization", `Bearer ${token}`)
  }

  // Création d'un contrôleur d'abandon pour le timeout
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers,
      signal: controller.signal,
    })

    // Nettoyage du timeout
    clearTimeout(timeoutId)

    // Gestion des erreurs HTTP
    if (!response.ok) {
      let errorData
      try {
        errorData = await response.json()
      } catch (e) {
        errorData = { message: "An unknown error occurred" }
      }

      throw new ApiError(
        errorData.message || `Request failed with status ${response.status}`,
        response.status,
        errorData,
      )
    }

    // Vérifier si la réponse est vide
    const contentType = response.headers.get("content-type")
    if (contentType && contentType.includes("application/json")) {
      return await response.json()
    }

    return {} as T
  } catch (error) {
    // Nettoyage du timeout
    clearTimeout(timeoutId)

    // Gestion des erreurs de timeout
    if (error.name === "AbortError") {
      throw new ApiError("Request timeout", 408)
    }

    // Relancer l'erreur
    throw error
  }
}

