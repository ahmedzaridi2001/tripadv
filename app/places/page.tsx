"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, MapPin, Filter } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Mock data for places with Moroccan focus
const places = [
  {
    id: 1,
    name: "Médina de Marrakech",
    location: "Marrakech, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    reviews: 12453,
    category: "Patrimoine",
    price: "$$",
  },
  {
    id: 2,
    name: "Chefchaouen",
    location: "Chefchaouen, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    reviews: 8765,
    category: "Ville",
    price: "$$",
  },
  {
    id: 3,
    name: "Mosquée Hassan II",
    location: "Casablanca, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 9876,
    category: "Monument",
    price: "$$$",
  },
  {
    id: 4,
    name: "Désert du Sahara",
    location: "Merzouga, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    reviews: 7654,
    category: "Nature",
    price: "$$",
  },
  {
    id: 5,
    name: "Jardin Majorelle",
    location: "Marrakech, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 11234,
    category: "Jardin",
    price: "$$",
  },
  {
    id: 6,
    name: "Volubilis",
    location: "Meknès, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviews: 5432,
    category: "Site Historique",
    price: "$",
  },
  {
    id: 7,
    name: "Palais Bahia",
    location: "Marrakech, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.4,
    reviews: 6789,
    category: "Palais",
    price: "$$",
  },
  {
    id: 8,
    name: "Cascades d'Ouzoud",
    location: "Azilal, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 4567,
    category: "Nature",
    price: "$",
  },
]

// Categories for filtering
const categories = ["Tous", "Patrimoine", "Monument", "Nature", "Ville", "Jardin", "Palais", "Site Historique", "Plage"]

export default function PlacesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [minRating, setMinRating] = useState(0)
  const [priceFilters, setPriceFilters] = useState({
    $: true,
    $$: true,
    $$$: true,
    $$$$: true,
  })

  // Filter places based on search query, category, rating, and price
  const filteredPlaces = places.filter((place) => {
    const matchesSearch =
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "Tous" || place.category === selectedCategory
    const matchesRating = place.rating >= minRating
    const matchesPrice = priceFilters[place.price as keyof typeof priceFilters]

    return matchesSearch && matchesCategory && matchesRating && matchesPrice
  })

  const handlePriceFilterChange = (price: string, checked: boolean) => {
    setPriceFilters((prev) => ({
      ...prev,
      [price]: checked,
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Amiri']">Explorez les Lieux</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Découvrez les merveilles du Maroc et trouvez votre prochaine destination
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-lg shadow-md border border-moroccan-neutral/20">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Rechercher des lieux, destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-[180px] border-moroccan-neutral/30 focus:ring-moroccan-primary">
            <SelectValue placeholder="Catégorie" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Mobile Filter Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="md:hidden border-moroccan-primary text-moroccan-primary hover:bg-moroccan-primary/10"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filtres
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
                <h3 className="text-sm font-medium text-moroccan-dark">Prix</h3>
                <div className="space-y-2">
                  {["$", "$$", "$$$", "$$$$"].map((price) => (
                    <div key={price} className="flex items-center space-x-2">
                      <Checkbox
                        id={`price-${price}`}
                        checked={priceFilters[price as keyof typeof priceFilters]}
                        onCheckedChange={(checked) => handlePriceFilterChange(price, checked as boolean)}
                        className="border-moroccan-neutral/30 text-moroccan-primary"
                      />
                      <label
                        htmlFor={`price-${price}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {price}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
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

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-moroccan-dark">Prix</h3>
          <div className="flex items-center space-x-4">
            {["$", "$$", "$$$", "$$$$"].map((price) => (
              <div key={price} className="flex items-center space-x-2">
                <Checkbox
                  id={`price-desktop-${price}`}
                  checked={priceFilters[price as keyof typeof priceFilters]}
                  onCheckedChange={(checked) => handlePriceFilterChange(price, checked as boolean)}
                  className="border-moroccan-neutral/30 text-moroccan-primary"
                />
                <label
                  htmlFor={`price-desktop-${price}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {price}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
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
                      <span className="text-muted-foreground text-xs ml-2">({place.reviews.toLocaleString()})</span>
                    </div>
                    <span className="text-muted-foreground">{place.price}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium mb-2 text-moroccan-dark">Aucun lieu trouvé</h3>
            <p className="text-muted-foreground">Essayez d'ajuster vos filtres ou votre recherche</p>
          </div>
        )}
      </div>
    </div>
  )
}

