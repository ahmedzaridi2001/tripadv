import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin } from "lucide-react"

// Mock data for featured places with Moroccan focus
const featuredPlaces = [
  {
    id: 1,
    name: "Médina de Marrakech",
    location: "Marrakech, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    reviews: 12453,
    category: "Patrimoine",
  },
  {
    id: 2,
    name: "Chefchaouen",
    location: "Chefchaouen, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    reviews: 8765,
    category: "Ville",
  },
  {
    id: 3,
    name: "Mosquée Hassan II",
    location: "Casablanca, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 9876,
    category: "Monument",
  },
  {
    id: 4,
    name: "Désert du Sahara",
    location: "Merzouga, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    reviews: 7654,
    category: "Nature",
  },
]

export default function FeaturedPlaces() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredPlaces.map((place) => (
        <Link href={`/places/${place.id}`} key={place.id}>
          <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow border-moroccan-neutral/30 group">
            <div className="relative h-48 w-full">
              <Image
                src={place.image || "/placeholder.svg"}
                alt={place.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <Badge className="absolute top-2 right-2 bg-moroccan-primary/90 hover:bg-moroccan-primary text-white border-none">
                {place.category}
              </Badge>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-semibold text-white line-clamp-1">{place.name}</h3>
                <div className="flex items-center text-white/90 text-sm">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{place.location}</span>
                </div>
              </div>
            </div>
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">
                    <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 mr-1" />
                    <span className="font-medium">{place.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-xs ml-2">({place.reviews.toLocaleString()} avis)</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-moroccan-primary/10 flex items-center justify-center">
                  <Star className="h-4 w-4 text-moroccan-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

