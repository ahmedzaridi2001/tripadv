"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "@/contexts/AuthContext"
import { ApiError } from "@/lib/api"

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, rememberMe: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await login({
        email: formData.email,
        password: formData.password,
      })
      router.push("/profile")
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message)
      } else {
        setError("Une erreur s'est produite lors de la connexion")
        console.error(err)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 moroccan-pattern">
      <div className="max-w-md mx-auto">
        <Card className="border-moroccan-neutral/30 shadow-lg">
          <div className="h-2 bg-moroccan-primary rounded-t-lg"></div>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-moroccan-dark font-['Amiri']">Se connecter</CardTitle>
            <CardDescription>Entrez vos identifiants pour accéder à votre compte</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-moroccan-dark">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="mohammed.alami@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-moroccan-dark">
                  Mot de passe
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onCheckedChange={handleCheckboxChange}
                  className="border-moroccan-neutral/30 text-moroccan-primary"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Se souvenir de moi
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button
                type="submit"
                className="w-full mb-4 bg-moroccan-primary hover:bg-moroccan-primary/90 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Connexion en cours..." : "Se connecter"}
              </Button>
              <Link href="/auth/forgot-password" className="text-sm text-center text-moroccan-primary hover:underline">
                Mot de passe oublié?
              </Link>
            </CardFooter>
          </form>
          <div className="px-8 pb-6 text-center text-sm">
            Vous n&apos;avez pas de compte?{" "}
            <Link href="/auth/register" className="text-moroccan-primary hover:underline">
              S'inscrire
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}

