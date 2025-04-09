import { apiRequest } from "./api"
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from "./config"

// Types pour l'authentification
export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  name: string
  email: string
  password: string
  location?: string
  nationality?: string
  age?: number
}

export interface User {
  id: number
  name: string
  email: string
  location?: string
  nationality?: string
  age?: number
  avatarUrl?: string
  bio?: string
  website?: string
}

export interface AuthResponse {
  token: string
  tokenType: string
  user: User
}

// Fonction de connexion
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  const response = await apiRequest<AuthResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  })

  // Stocker le token et les infos utilisateur
  if (typeof window !== "undefined") {
    localStorage.setItem(TOKEN_STORAGE_KEY, response.token)
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(response.user))
  }

  return response
}

// Fonction d'inscription
export async function register(userData: RegisterData): Promise<AuthResponse> {
  const response = await apiRequest<AuthResponse>("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
  })

  // Stocker le token et les infos utilisateur
  if (typeof window !== "undefined") {
    localStorage.setItem(TOKEN_STORAGE_KEY, response.token)
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(response.user))
  }

  return response
}

// Fonction de déconnexion
export function logout(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(TOKEN_STORAGE_KEY)
    localStorage.removeItem(USER_STORAGE_KEY)
  }
}

// Vérifier si l'utilisateur est authentifié
export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false
  return !!localStorage.getItem(TOKEN_STORAGE_KEY)
}

// Récupérer l'utilisateur actuel
export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null

  const userStr = localStorage.getItem(USER_STORAGE_KEY)
  if (!userStr) return null

  try {
    return JSON.parse(userStr)
  } catch (e) {
    return null
  }
}

// Récupérer le profil utilisateur depuis l'API
export async function getUserProfile(): Promise<User> {
  return apiRequest<User>("/api/users/me", {
    requireAuth: true,
  })
}

// Mettre à jour le profil utilisateur
export async function updateUserProfile(userData: Partial<User>): Promise<User> {
  const response = await apiRequest<User>("/api/users/me", {
    method: "PUT",
    body: JSON.stringify(userData),
    requireAuth: true,
  })

  // Mettre à jour les infos utilisateur dans le stockage local
  if (typeof window !== "undefined") {
    const currentUser = getCurrentUser()
    if (currentUser) {
      const updatedUser = { ...currentUser, ...response }
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser))
    }
  }

  return response
}

