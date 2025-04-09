"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePickerWithRange } from "@/components/date-range-picker"
import {
  Star,
  Search,
  MapPin,
  Filter,
  Wifi,
  Coffee,
  ParkingMeterIcon as Parking,
  PocketIcon as Pool,
  Utensils,
} from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Mock data for hotels
const hotels = [
  {
    id: 1,
    name: "Hôtel Royal Mansour",
    location: "Marrakech, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 5,
    reviews: 1243,
    price: 350,
    currency: "€",
    amenities: ["Piscine", "Spa", "Restaurant", "Wi-Fi", "Parking"],
    worldCupPromo: true,
  },
  {
    id: 2,
    name: "Mandarin Oriental",
    location: "Marrakech, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 5,
    reviews: 987,
    price: 420,
    currency: "€",
    amenities: ["Piscine", "Spa", "Restaurant", "Wi-Fi", "Parking"],
    worldCupPromo: false,
  },
  {
    id: 3,
    name: "Four Seasons Hotel",
    location: "Casablanca, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    reviews: 1567,
    price: 280,
    currency: "€",
    amenities: ["Piscine", "Spa", "Restaurant", "Wi-Fi", "Parking"],
    worldCupPromo: true,
  },
  {
    id: 4,
    name: "Sofitel Rabat Jardin des Roses",
    location: "Rabat, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 1123,
    price: 210,
    currency: "€",
    amenities: ["Piscine", "Spa", "Restaurant", "Wi-Fi", "Parking"],
    worldCupPromo: true,
  },
  {
    id: 5,
    name: "Hilton Tanger City Center",
    location: "Tanger, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviews: 876,
    price: 180,
    currency: "€",
    amenities: ["Piscine", "Wi-Fi", "Restaurant", "Parking"],
    worldCupPromo: false,
  },
  {
    id: 6,
    name: "Mövenpick Hotel Casablanca",
    location: "Casablanca, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.3,
    reviews: 754,
    price: 150,
    currency: "€",
    amenities: ["Piscine", "Restaurant", "Wi-Fi", "Parking"],
    worldCupPromo: true,
  },
  {
    id: 7,
    name: "Barceló Anfa Casablanca",
    location: "Casablanca, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.2,
    reviews: 632,
    price: 140,
    currency: "€",
    amenities: ["Piscine", "Spa", "Restaurant", "Wi-Fi"],
    worldCupPromo: false,
  },
  {
    id: 8,
    name: "Radisson Blu Hotel",
    location: "Marrakech, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.4,
    reviews: 892,
    price: 165,
    currency: "€",
    amenities: ["Piscine", "Spa", "Restaurant", "Wi-Fi", "Parking"],
    worldCupPromo: true,
  },
]

// Cities for filtering
const cities = ["Toutes les villes", "Marrakech", "Casablanca", "Rabat", "Tanger", "Agadir"]

export default function HotelsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("Toutes les villes")
  const [minRating, setMinRating] = useState(0)
  const [priceRange, setPriceRange] = useState([0, 500])
  const [amenityFilters, setAmenityFilters] = useState({
    Piscine: false,
    Spa: false,
    Restaurant: false,
    "Wi-Fi": false,
    Parking: false,
  })
  const [showWorldCupPromos, setShowWorldCupPromos] = useState(false)

  // Filter hotels based on search query, city, rating, price range, and amenities
  const filteredHotels = hotels.filter((hotel) => {
    const matchesSearch =
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCity = selectedCity === "Toutes les villes" || hotel.location.includes(selectedCity)
    const matchesRating = hotel.rating >= minRating
    const matchesPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1]
    const matchesAmenities = Object.entries(amenityFilters).every(
      ([amenity, isSelected]) => !isSelected || hotel.amenities.includes(amenity),
    )
    const matchesWorldCupPromo = !showWorldCupPromos || hotel.worldCupPromo

    return matchesSearch && matchesCity && matchesRating && matchesPrice && matchesAmenities && matchesWorldCupPromo
  })

  const handleAmenityFilterChange = (amenity: string, checked: boolean) => {
    setAmenityFilters((prev) => ({
      ...prev,
      [amenity]: checked,
    }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative mb-8 rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=200&width=1200')",
            filter: "brightness(0.7)",
          }}
        ></div>
        <div className="absolute inset-0 bg-moroccan-primary/20 mix-blend-multiply"></div>
        <div className="relative z-10 p-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Amiri']">Hébergements</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Trouvez les meilleurs hôtels au Maroc, en Espagne et au Portugal pour la Coupe du Monde 2030
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-moroccan-neutral/20 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Rechercher un hôtel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
            />
          </div>
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="border-moroccan-neutral/30 focus:ring-moroccan-primary">
              <SelectValue placeholder="Ville" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <DatePickerWithRange className="w-full" />
          <div className="flex items-center space-x-2">
            <Checkbox
              id="world-cup-promos"
              checked={showWorldCupPromos}
              onCheckedChange={(checked) => setShowWorldCupPromos(checked as boolean)}
              className="border-moroccan-neutral/30 text-moroccan-primary"
            />
            <label
              htmlFor="world-cup-promos"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Offres Spéciales Coupe du Monde
            </label>
          </div>
        </div>

        {/* Mobile Filter Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="md:hidden border-moroccan-primary text-moroccan-primary hover:bg-moroccan-primary/10 w-full"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filtres Avancés
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-moroccan-dark font-['Amiri']">Filtres</SheetTitle>
              <SheetDescription>Affinez vos résultats de recherche</SheetDescription>
            </SheetHeader>
            <div className="py-4 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-moroccan-dark">Note Minimum</h3>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[minRating]}
                    min={0}
                    max={5}
                    step={0.5}
                    onValueChange={(value) => setMinRating(value[0])}
                    className="[&>span]:bg-moroccan-primary"
                  />
                  <span className="w-12 text-center">{minRating}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-moroccan-dark">Fourchette de Prix (€)</h3>
                <div className="flex items-center gap-4">
                  <Slider
                    value={priceRange}
                    min={0}
                    max={500}
                    step={10}
                    onValueChange={(value) => setPriceRange(value)}
                    className="[&>span]:bg-moroccan-primary"
                  />
                  <span className="w-24 text-center">
                    {priceRange[0]} - {priceRange[1]}€
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-moroccan-dark">Équipements</h3>
                <div className="space-y-2">
                  {Object.keys(amenityFilters).map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox
                        id={`amenity-${amenity}`}
                        checked={amenityFilters[amenity as keyof typeof amenityFilters]}
                        onCheckedChange={(checked) => handleAmenityFilterChange(amenity, checked as boolean)}
                        className="border-moroccan-neutral/30 text-moroccan-primary"
                      />
                      <label
                        htmlFor={`amenity-${amenity}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Advanced Filters */}
      <div className="hidden md:flex gap-8 mb-8 bg-white p-4 rounded-lg shadow-md border border-moroccan-neutral/20">
        <div className="space-y-2 w-64">
          <h3 className="text-sm font-medium text-moroccan-dark">Note Minimum</h3>
          <div className="flex items-center gap-4">
            <Slider
              value={[minRating]}
              min={0}
              max={5}
              step={0.5}
              onValueChange={(value) => setMinRating(value[0])}
              className="[&>span]:bg-moroccan-primary"
            />
            <span className="w-12 text-center">{minRating}</span>
          </div>
        </div>

        <div className="space-y-2 w-64">
          <h3 className="text-sm font-medium text-moroccan-dark">Fourchette de Prix (€)</h3>
          <div className="flex items-center gap-4">
            <Slider
              value={priceRange}
              min={0}
              max={500}
              step={10}
              onValueChange={(value) => setPriceRange(value)}
              className="[&>span]:bg-moroccan-primary"
            />
            <span className="w-24 text-center">
              {priceRange[0]} - {priceRange[1]}€
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-moroccan-dark">Équipements</h3>
          <div className="flex flex-wrap gap-4">
            {Object.keys(amenityFilters).map((amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox
                  id={`amenity-desktop-${amenity}`}
                  checked={amenityFilters[amenity as keyof typeof amenityFilters]}
                  onCheckedChange={(checked) => handleAmenityFilterChange(amenity, checked as boolean)}
                  className="border-moroccan-neutral/30 text-moroccan-primary"
                />
                <label
                  htmlFor={`amenity-desktop-${amenity}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {amenity}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <Link href={`/hotels/${hotel.id}`} key={hotel.id}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow border-moroccan-neutral/30 group">
                <div className="relative h-48 w-full">
                  <Image
                    src={hotel.image || "/placeholder.svg"}
                    alt={hotel.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {hotel.worldCupPromo && (
                    <Badge className="absolute top-2 right-2 bg-moroccan-accent hover:bg-moroccan-accent text-white border-none">
                      Offre Coupe du Monde
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-1 text-moroccan-dark line-clamp-1">{hotel.name}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{hotel.location}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="flex items-center bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">
                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 mr-1" />
                        <span className="font-medium">{hotel.rating}</span>
                      </div>
                      <span className="text-muted-foreground text-xs ml-2">({hotel.reviews.toLocaleString()})</span>
                    </div>
                    <span className="text-moroccan-primary font-bold">
                      {hotel.price} {hotel.currency}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {hotel.amenities.slice(0, 3).map((amenity) => {
                      const icons = {
                        Piscine: <Pool className="h-3 w-3" />,
                        Spa: <Coffee className="h-3 w-3" />,
                        Restaurant: <Utensils className="h-3 w-3" />,
                        "Wi-Fi": <Wifi className="h-3 w-3" />,
                        Parking: <Parking className="h-3 w-3" />,
                      }
                      return (
                        <Badge key={amenity} variant="outline" className="text-xs py-0 h-5">
                          {icons[amenity as keyof typeof icons]}
                          <span className="ml-1">{amenity}</span>
                        </Badge>
                      )
                    })}
                    {hotel.amenities.length > 3 && (
                      <Badge variant="outline" className="text-xs py-0 h-5">
                        +{hotel.amenities.length - 3}
                      </Badge>
                    )}
                  </div>
                  <Button className="w-full bg-moroccan-primary hover:bg-moroccan-primary/90 text-white" size="sm">
                    Voir les Disponibilités
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium mb-2 text-moroccan-dark">Aucun hôtel trouvé</h3>
            <p className="text-muted-foreground">Essayez d'ajuster vos filtres ou votre recherche</p>
          </div>
        )}
      </div>
    </div>
  )
}

