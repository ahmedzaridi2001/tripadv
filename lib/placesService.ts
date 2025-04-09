import { apiRequest } from "./api"

// Types pour les lieux
export interface Place {
  id: number
  name: string
  description?: string
  location: string
  address?: string
  images: string[]
  rating?: number
  reviewsCount?: number
  category?: {
    id: number
    name: string
  }
  price?: string
  openingHours?: string
  phone?: string
  website?: string
  features: string[]
  destination?: {
    id: number
    name: string
    country: string
  }
  latitude?: number
  longitude?: number
  worldCupRelated?: boolean
}

export interface PlaceFilters {
  search?: string
  category?: string
  location?: string
  minRating?: number
  price?: string
  page?: number
  size?: number
  sort?: string
}

// Récupérer tous les lieux avec filtres
export async function getPlaces(filters: PlaceFilters = {}): Promise<{
  content: Place[]
  totalElements: number
  totalPages: number
  size: number
  number: number
}> {
  return apiRequest("/api/places", {
    params: {
      ...filters,
      page: filters.page !== undefined ? filters.page : 0,
      size: filters.size || 20,
    },
  })
}

// Récupérer un lieu par son ID
export async function getPlaceById(id: number): Promise<Place> {
  return apiRequest(`/api/places/${id}`)
}

// Créer un nouveau lieu (admin seulement)
export async function createPlace(placeData: Partial<Place>): Promise<Place> {
  return apiRequest("/api/places", {
    method: "POST",
    body: JSON.stringify(placeData),
    requireAuth: true,
  })
}

// Mettre à jour un lieu (admin seulement)
export async function updatePlace(id: number, placeData: Partial<Place>): Promise<Place> {
  return apiRequest(`/api/places/${id}`, {
    method: "PUT",
    body: JSON.stringify(placeData),
    requireAuth: true,
  })
}

// Supprimer un lieu (admin seulement)
export async function deletePlace(id: number): Promise<void> {
  return apiRequest(`/api/places/${id}`, {
    method: "DELETE",
    requireAuth: true,
  })
}

