"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "@/contexts/AuthContext"
import { ApiError } from "@/lib/api"

export default function RegisterPage() {
  const { register } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    nationality: "",
    agreeTerms: false,
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeTerms: checked }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas")
      return
    }

    if (!formData.agreeTerms) {
      setError("Vous devez accepter les conditions d'utilisation")
      return
    }

    setIsLoading(true)

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        nationality: formData.nationality || undefined,
        age: formData.age ? Number.parseInt(formData.age) : undefined,
      })
      router.push("/profile")
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message)
      } else {
        setError("Une erreur s'est produite lors de l'inscription")
        console.error(err)
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Liste des pays pour nationalité
  const countries = [
    "Maroc",
    "Algérie",
    "Tunisie",
    "France",
    "Espagne",
    "États-Unis",
    "Canada",
    "Royaume-Uni",
    "Allemagne",
    "Italie",
    "Belgique",
    "Pays-Bas",
    "Suisse",
    "Égypte",
    "Arabie Saoudite",
  ]

  return (
    <div className="container mx-auto px-4 py-12 moroccan-pattern">
      <div className="max-w-md mx-auto">
        <Card className="border-moroccan-neutral/30 shadow-lg">
          <div className="h-2 bg-moroccan-primary rounded-t-lg"></div>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-moroccan-dark font-['Amiri']">Créer un compte</CardTitle>
            <CardDescription>Entrez vos informations pour créer un compte</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-moroccan-dark">
                  Nom Complet
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Mohammed Alami"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
                />
              </div>
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
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-moroccan-dark">
                  Confirmer le mot de passe
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age" className="text-moroccan-dark">
                  Âge
                </Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  min="18"
                  max="120"
                  value={formData.age}
                  onChange={handleChange}
                  className="border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
                />
                <p className="text-xs text-muted-foreground">Utilisé pour des recommandations personnalisées</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="nationality" className="text-moroccan-dark">
                  Nationalité
                </Label>
                <Select
                  onValueChange={(value) => handleSelectChange("nationality", value)}
                  value={formData.nationality}
                >
                  <SelectTrigger className="border-moroccan-neutral/30 focus:ring-moroccan-primary">
                    <SelectValue placeholder="Sélectionnez votre nationalité" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">Utilisé pour des recommandations personnalisées</p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeTerms}
                  onCheckedChange={handleCheckboxChange}
                  required
                  className="border-moroccan-neutral/30 text-moroccan-primary"
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  J'accepte les{" "}
                  <Link href="/terms" className="text-moroccan-primary hover:underline">
                    conditions d'utilisation
                  </Link>{" "}
                  et la{" "}
                  <Link href="/privacy" className="text-moroccan-primary hover:underline">
                    politique de confidentialité
                  </Link>
                </label>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-moroccan-primary hover:bg-moroccan-primary/90 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Création en cours..." : "Créer un compte"}
              </Button>
            </CardFooter>
          </form>
          <div className="px-8 pb-6 text-center text-sm">
            Vous avez déjà un compte?{" "}
            <Link href="/auth/login" className="text-moroccan-primary hover:underline">
              Se connecter
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}

