import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, Search, MapPin } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="relative w-64 h-64 mb-8">
        <Image src="/placeholder.svg?height=250&width=250" alt="Page non trouvée" fill className="object-contain" />
      </div>

      <h1 className="text-4xl font-bold text-moroccan-dark mb-4 font-['Amiri']">Oups! Page Non Trouvée</h1>

      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Il semble que vous vous soyez perdu dans le désert. La page que vous recherchez n'existe pas ou a été déplacée.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Link href="/">
          <Button className="bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">
            <Home className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Button>
        </Link>

        <Link href="/destinations">
          <Button
            variant="outline"
            className="border-moroccan-primary text-moroccan-primary hover:bg-moroccan-primary/10"
          >
            <MapPin className="h-4 w-4 mr-2" />
            Explorer les destinations
          </Button>
        </Link>

        <Link href="/places">
          <Button
            variant="outline"
            className="border-moroccan-primary text-moroccan-primary hover:bg-moroccan-primary/10"
          >
            <Search className="h-4 w-4 mr-2" />
            Découvrir des lieux
          </Button>
        </Link>
      </div>

      <div className="bg-moroccan-primary/5 p-6 rounded-lg max-w-lg zellige-pattern">
        <h2 className="text-xl font-semibold text-moroccan-dark mb-3 font-['Amiri']">Destinations Populaires</h2>
        <div className="flex flex-wrap justify-center gap-2">
          <Link href="/destinations/1">
            <Button variant="ghost" className="text-moroccan-primary hover:bg-moroccan-primary/10">
              Marrakech
            </Button>
          </Link>
          <Link href="/destinations/2">
            <Button variant="ghost" className="text-moroccan-primary hover:bg-moroccan-primary/10">
              Fès
            </Button>
          </Link>
          <Link href="/destinations/3">
            <Button variant="ghost" className="text-moroccan-primary hover:bg-moroccan-primary/10">
              Chefchaouen
            </Button>
          </Link>
          <Link href="/destinations/4">
            <Button variant="ghost" className="text-moroccan-primary hover:bg-moroccan-primary/10">
              Essaouira
            </Button>
          </Link>
          <Link href="/destinations/5">
            <Button variant="ghost" className="text-moroccan-primary hover:bg-moroccan-primary/10">
              Désert du Sahara
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

