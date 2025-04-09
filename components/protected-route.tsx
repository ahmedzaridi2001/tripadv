"use client"

import { useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"

interface ProtectedRouteProps {
  children: ReactNode
  adminOnly?: boolean
}

export default function ProtectedRoute({ children, adminOnly = false }: ProtectedRouteProps) {
  const { isLoggedIn, loading, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!isLoggedIn) {
        router.push("/auth/login")
      } else if (adminOnly && !user?.roles?.includes("ADMIN")) {
        router.push("/")
      }
    }
  }, [isLoggedIn, loading, router, adminOnly, user])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-moroccan-primary"></div>
      </div>
    )
  }

  if (!isLoggedIn || (adminOnly && !user?.roles?.includes("ADMIN"))) {
    return null
  }

  return <>{children}</>
}

