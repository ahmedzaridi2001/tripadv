import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

// Mock data for categories
const categories = [
  {
    id: "monuments",
    name: "Monuments",
    description: "Explorez les palais, mosquées, et sites historiques emblématiques du Maroc et du monde entier.",
    image: "/placeholder.svg?height=300&width=500",
    count: 245,
  },
  {
    id: "nature",
    name: "Nature",
    description:
      "Découvrez des paysages à couper le souffle, des montagnes majestueuses aux déserts infinis et plages paradisiaques.",
    image: "/placeholder.svg?height=300&width=500",
    count: 187,
  },
  {
    id: "musees",
    name: "Musées",
    description:
      "Plongez dans l'histoire, l'art et la culture à travers des collections fascinantes et des expositions uniques.",
    image: "/placeholder.svg?height=300&width=500",
    count: 124,
  },
  {
    id: "gastronomie",
    name: "Gastronomie",
    description:
      "Savourez les délices culinaires locaux, des restaurants traditionnels aux cafés branchés et marchés colorés.",
    image: "/placeholder.svg?height=300&width=500",
    count: 156,
  },
  {
    id: "activites",
    name: "Activités",
    description:
      "Vivez des expériences inoubliables, des excursions guidées aux aventures en plein air et ateliers culturels.",
    image: "/placeholder.svg?height=300&width=500",
    count: 210,
  },
  {
    id: "hebergements",
    name: "Hébergements",
    description:
      "Trouvez le logement idéal pour votre séjour, des riads traditionnels aux hôtels de luxe et maisons d'hôtes.",
    image: "/placeholder.svg?height=300&width=500",
    count: 178,
  },
]

// Mock featured places for each category
const featuredPlaces = {
  monuments: [
    { id: 1, name: "Mosquée Hassan II", location: "Casablanca, Maroc", image: "/placeholder.svg?height=100&width=150" },
    { id: 2, name: "Koutoubia", location: "Marrakech, Maroc", image: "/placeholder.svg?height=100&width=150" },
    { id: 3, name: "Volubilis", location: "Meknès, Maroc", image: "/placeholder.svg?height=100&width=150" },
  ],
  nature: [
    { id: 4, name: "Désert du Sahara", location: "Merzouga, Maroc", image: "/placeholder.svg?height=100&width=150" },
    { id: 5, name: "Cascades d'Ouzoud", location: "Azilal, Maroc", image: "/placeholder.svg?height=100&width=150" },
    { id: 6, name: "Vallée du Dadès", location: "Ouarzazate, Maroc", image: "/placeholder.svg?height=100&width=150" },
  ],
  musees: [
    {
      id: 7,
      name: "Musée Yves Saint Laurent",
      location: "Marrakech, Maroc",
      image: "/placeholder.svg?height=100&width=150",
    },
    { id: 8, name: "Musée de Marrakech", location: "Marrakech, Maroc", image: "/placeholder.svg?height=100&width=150" },
    { id: 9, name: "Musée Berbère", location: "Marrakech, Maroc", image: "/placeholder.svg?height=100&width=150" },
  ],
  gastronomie: [
    { id: 10, name: "La Mamounia", location: "Marrakech, Maroc", image: "/placeholder.svg?height=100&width=150" },
    { id: 11, name: "Rick's Café", location: "Casablanca, Maroc", image: "/placeholder.svg?height=100&width=150" },
    { id: 12, name: "Café Clock", location: "Fès, Maroc", image: "/placeholder.svg?height=100&width=150" },
  ],
  activites: [
    {
      id: 13,
      name: "Randonnée dans l'Atlas",
      location: "Haut Atlas, Maroc",
      image: "/placeholder.svg?height=100&width=150",
    },
    { id: 14, name: "Balade en chameau", location: "Merzouga, Maroc", image: "/placeholder.svg?height=100&width=150" },
    {
      id: 15,
      name: "Cours de cuisine marocaine",
      location: "Marrakech, Maroc",
      image: "/placeholder.svg?height=100&width=150",
    },
  ],
  hebergements: [
    { id: 16, name: "Riad Fès", location: "Fès, Maroc", image: "/placeholder.svg?height=100&width=150" },
    { id: 17, name: "La Sultana", location: "Marrakech, Maroc", image: "/placeholder.svg?height=100&width=150" },
    { id: 18, name: "Kasbah Tamadot", location: "Asni, Maroc", image: "/placeholder.svg?height=100&width=150" },
  ],
}

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative mb-12 rounded-lg overflow-hidden">
        <div className="relative h-[300px] w-full">
          <Image src="/placeholder.svg?height=300&width=1200" alt="Catégories" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-moroccan-primary/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Amiri']">Explorez par Catégorie</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Découvrez les merveilles du Maroc et du monde entier classées par type d'expérience
            </p>
          </div>
        </div>

        {/* Decorative Moroccan arch pattern at the bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 C240,60 480,60 720,60 C960,60 1200,60 1440,0 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.id}`}>
            <Card className="overflow-hidden border-moroccan-neutral/30 h-full hover:shadow-lg transition-shadow group">
              <div className="relative h-48">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.count} lieux</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground line-clamp-3">{category.description}</p>
                <div className="mt-4 flex justify-end">
                  <Button variant="link" className="p-0 h-auto text-moroccan-primary hover:text-moroccan-primary/80">
                    Explorer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Featured Places by Category */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-moroccan-dark font-['Amiri'] mb-8 text-center">
          Lieux Populaires par Catégorie
        </h2>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id} className="bg-moroccan-primary/5 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-moroccan-dark">{category.name}</h3>
                <Link href={`/categories/${category.id}`}>
                  <Button
                    variant="outline"
                    className="border-moroccan-primary text-moroccan-primary hover:bg-moroccan-primary/10"
                  >
                    Voir Tout
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredPlaces[category.id as keyof typeof featuredPlaces].map((place) => (
                  <Link key={place.id} href={`/places/${place.id}`}>
                    <Card className="overflow-hidden border-moroccan-neutral/30 hover:shadow-md transition-shadow group">
                      <div className="flex">
                        <div className="relative h-24 w-24 flex-shrink-0">
                          <Image
                            src={place.image || "/placeholder.svg"}
                            alt={place.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-3 flex-1">
                          <h4 className="font-medium text-moroccan-dark group-hover:text-moroccan-primary line-clamp-1">
                            {place.name}
                          </h4>
                          <p className="text-xs text-muted-foreground flex items-center mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            {place.location}
                          </p>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-moroccan-dark rounded-lg text-white text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 font-['Amiri']">Prêt à Explorer?</h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Créez un compte pour sauvegarder vos lieux préférés, laisser des avis et recevoir des recommandations
          personnalisées.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/register">
            <Button className="bg-moroccan-primary hover:bg-moroccan-primary/90 text-white min-w-[150px]">
              S'inscrire
            </Button>
          </Link>
          <Link href="/places">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 min-w-[150px]">
              Explorer les Lieux
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

