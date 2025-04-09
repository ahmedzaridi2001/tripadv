import { apiRequest } from "./api"
import type { User } from "./authService"

// Types pour les avis
export interface Review {
  id: number
  user: User
  place: {
    id: number
    name: string
  }
  rating: number
  content: string
  likes: number
  images: string[]
  createdAt: string
  updatedAt: string
}

export interface ReviewFilters {
  placeId?: number
  page?: number
  size?: number
  sort?: string
}

export interface CreateReviewData {
  placeId: number
  rating: number
  content: string
  images?: string[]
}

// Récupérer tous les avis avec filtres
export async function getReviews(filters: ReviewFilters = {}): Promise<{
  content: Review[]
  totalElements: number
  totalPages: number
  size: number
  number: number
}> {
  return apiRequest("/api/reviews", {
    params: {
      ...filters,
      page: filters.page !== undefined ? filters.page : 0,
      size: filters.size || 20,
    },
  })
}

// Récupérer un avis par son ID
export async function getReviewById(id: number): Promise<Review> {
  return apiRequest(`/api/reviews/${id}`)
}

// Créer un nouvel avis
export async function createReview(reviewData: CreateReviewData): Promise<Review> {
  return apiRequest("/api/reviews", {
    method: "POST",
    body: JSON.stringify(reviewData),
    requireAuth: true,
  })
}

// Mettre à jour un avis
export async function updateReview(id: number, reviewData: Partial<CreateReviewData>): Promise<Review> {
  return apiRequest(`/api/reviews/${id}`, {
    method: "PUT",
    body: JSON.stringify(reviewData),
    requireAuth: true,
  })
}

// Supprimer un avis
export async function deleteReview(id: number): Promise<void> {
  return apiRequest(`/api/reviews/${id}`, {
    method: "DELETE",
    requireAuth: true,
  })
}

// Aimer un avis
export async function likeReview(id: number): Promise<void> {
  return apiRequest(`/api/reviews/${id}/like`, {
    method: "POST",
    requireAuth: true,
  })
}

