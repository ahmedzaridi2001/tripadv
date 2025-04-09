import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Mock data for popular destinations with Moroccan focus
const popularDestinations = [
  {
    id: 1,
    name: "Marrakech",
    country: "Maroc",
    image: "/placeholder.svg?height=200&width=300",
    places: 243,
  },
  {
    id: 2,
    name: "Fès",
    country: "Maroc",
    image: "/placeholder.svg?height=200&width=300",
    places: 187,
  },
  {
    id: 3,
    name: "Casablanca",
    country: "Maroc",
    image: "/placeholder.svg?height=200&width=300",
    places: 156,
  },
  {
    id: 4,
    name: "Rabat",
    country: "Maroc",
    image: "/placeholder.svg?height=200&width=300",
    places: 132,
  },
  {
    id: 5,
    name: "Tanger",
    country: "Maroc",
    image: "/placeholder.svg?height=200&width=300",
    places: 118,
  },
  {
    id: 6,
    name: "Essaouira",
    country: "Maroc",
    image: "/placeholder.svg?height=200&width=300",
    places: 98,
  },
]

export default function PopularDestinations() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {popularDestinations.map((destination) => (
        <Link href={`/destinations/${destination.id}`} key={destination.id}>
          <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow border-moroccan-neutral/30 group">
            <div className="relative h-40 w-full">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* Decorative arch overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-12 arch-top bg-white/10"></div>

              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <h3 className="font-semibold text-lg">{destination.name}</h3>
                <p className="text-xs text-white/90">{destination.country}</p>
              </div>
            </div>
            <CardContent className="p-3 text-center bg-moroccan-primary/5">
              <p className="text-xs text-moroccan-dark">{destination.places} lieux à visiter</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

