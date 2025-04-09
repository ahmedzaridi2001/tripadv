"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import {
  login as loginApi,
  register as registerApi,
  logout as logoutApi,
  getCurrentUser,
  isAuthenticated,
  getUserProfile,
  updateUserProfile,
  type User,
  type LoginCredentials,
  type RegisterData,
} from "@/lib/authService"

interface AuthContextType {
  user: User | null
  isLoggedIn: boolean
  loading: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  register: (userData: RegisterData) => Promise<void>
  logout: () => void
  updateProfile: (userData: Partial<User>) => Promise<void>
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Vérifier l'authentification au chargement
  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated()) {
        try {
          // Essayer de récupérer les données utilisateur depuis le stockage local
          const localUser = getCurrentUser()
          if (localUser) {
            setUser(localUser)
          }

          // Récupérer les données utilisateur fraîches depuis l'API
          const freshUser = await getUserProfile()
          setUser(freshUser)
        } catch (error) {
          console.error("Failed to get user profile:", error)
          logoutApi()
          setUser(null)
        }
      }
      setLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (credentials: LoginCredentials) => {
    setLoading(true)
    try {
      const response = await loginApi(credentials)
      setUser(response.user)
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData: RegisterData) => {
    setLoading(true)
    try {
      const response = await registerApi(userData)
      setUser(response.user)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    logoutApi()
    setUser(null)
    router.push("/auth/login")
  }

  const updateProfile = async (userData: Partial<User>) => {
    setLoading(true)
    try {
      const updatedUser = await updateUserProfile(userData)
      setUser(updatedUser)
    } finally {
      setLoading(false)
    }
  }

  const refreshUser = async () => {
    if (!isAuthenticated()) return

    try {
      const freshUser = await getUserProfile()
      setUser(freshUser)
    } catch (error) {
      console.error("Failed to refresh user profile:", error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        loading,
        login,
        register,
        logout,
        updateProfile,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

