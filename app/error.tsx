"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="relative w-64 h-64 mb-8">
        <Image src="/placeholder.svg?height=250&width=250" alt="Erreur" fill className="object-contain" />
      </div>

      <div className="flex items-center justify-center mb-4">
        <AlertTriangle className="h-8 w-8 text-red-500 mr-2" />
        <h1 className="text-4xl font-bold text-moroccan-dark font-['Amiri']">Quelque chose s'est mal passé</h1>
      </div>

      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Nous sommes désolés, une erreur inattendue s'est produite. Notre équipe a été informée et travaille à résoudre
        le problème.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Button onClick={reset} className="bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">
          <RefreshCw className="h-4 w-4 mr-2" />
          Réessayer
        </Button>

        <Link href="/">
          <Button
            variant="outline"
            className="border-moroccan-primary text-moroccan-primary hover:bg-moroccan-primary/10"
          >
            <Home className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Button>
        </Link>
      </div>

      <div className="bg-moroccan-primary/5 p-6 rounded-lg max-w-lg">
        <h2 className="text-xl font-semibold text-moroccan-dark mb-3 font-['Amiri']">Besoin d'aide?</h2>
        <p className="text-muted-foreground mb-4">
          Si le problème persiste, n'hésitez pas à contacter notre équipe de support.
        </p>
        <Link href="/contact">
          <Button variant="ghost" className="text-moroccan-primary hover:bg-moroccan-primary/10">
            Contacter le support
          </Button>
        </Link>
      </div>

      {/* Error details for debugging (only in development) */}
      {process.env.NODE_ENV === "development" && (
        <div className="mt-8 p-4 bg-red-50 rounded-lg text-left max-w-2xl">
          <h3 className="text-sm font-medium text-red-800 mb-2">
            Détails de l'erreur (visible uniquement en développement):
          </h3>
          <p className="text-xs text-red-700 font-mono">{error.message}</p>
          {error.stack && (
            <pre className="mt-2 text-xs text-red-700 font-mono overflow-auto max-h-40 p-2 bg-red-100 rounded">
              {error.stack}
            </pre>
          )}
        </div>
      )}
    </div>
  )
}

