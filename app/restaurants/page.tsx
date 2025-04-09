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
import { Star, Search, MapPin, Filter, Clock } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Mock data for restaurants with Moroccan focus
const restaurants = [
  {
    id: 1,
    name: "La Mamounia",
    location: "Marrakech, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    reviews: 1253,
    cuisine: "Marocaine",
    price: "$$$",
    openingHours: "12:00 - 23:00",
    features: ["Terrasse", "Vue", "Réservation"],
    worldCupMenu: true,
  },
  {
    id: 2,
    name: "Rick's Café",
    location: "Casablanca, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 987,
    cuisine: "Internationale",
    price: "$$$",
    openingHours: "12:00 - 00:00",
    features: ["Musique Live", "Bar", "Réservation"],
    worldCupMenu: true,
  },
  {
    id: 3,
    name: "Dar Yacout",
    location: "Marrakech, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 876,
    cuisine: "Marocaine",
    price: "$$$",
    openingHours: "19:00 - 23:00",
    features: ["Terrasse", "Vue", "Réservation"],
    worldCupMenu: false,
  },
  {
    id: 4,
    name: "Le Jardin",
    location: "Marrakech, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviews: 765,
    cuisine: "Fusion",
    price: "$$",
    openingHours: "12:00 - 23:00",
    features: ["Jardin", "Végétarien", "Réservation"],
    worldCupMenu: true,
  },
  {
    id: 5,
    name: "Café Clock",
    location: "Fès, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.4,
    reviews: 654,
    cuisine: "Marocaine",
    price: "$$",
    openingHours: "10:00 - 22:00",
    features: ["Terrasse", "Végétarien", "Café"],
    worldCupMenu: false,
  },
  {
    id: 6,
    name: "La Sqala",
    location: "Casablanca, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.3,
    reviews: 543,
    cuisine: "Marocaine",
    price: "$$",
    openingHours: "12:00 - 23:00",
    features: ["Jardin", "Brunch", "Réservation"],
    worldCupMenu: true,
  },
  {
    id: 7,
    name: "Dar Moha",
    location: "Marrakech, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 876,
    cuisine: "Marocaine",
    price: "$$$",
    openingHours: "12:00 - 15:00, 19:00 - 23:00",
    features: ["Piscine", "Jardin", "Réservation"],
    worldCupMenu: true,
  },
  {
    id: 8,
    name: "Nomad",
    location: "Marrakech, Maroc",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviews: 765,
    cuisine: "Fusion",
    price: "$$",
    openingHours: "12:00 - 23:00",
    features: ["Terrasse", "Vue", "Réservation"],
    worldCupMenu: false,
  },
]

// Cities for filtering
const cities = ["Toutes les villes", "Marrakech", "Casablanca", "Rabat", "Fès", "Tanger"]

// Cuisines for filtering
const cuisines = [
  "Toutes les cuisines",
  "Marocaine",
  "Internationale",
  "Fusion",
  "Méditerranéenne",
  "Espagnole",
  "Portugaise",
]

export default function RestaurantsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("Toutes les villes")
  const [selectedCuisine, setSelectedCuisine] = useState("Toutes les cuisines")
  const [minRating, setMinRating] = useState(0)
  const [priceFilters, setPriceFilters] = useState({
    $: true,
    $$: true,
    $$$: true,
    $$$$: true,
  })
  const [featureFilters, setFeatureFilters] = useState({
    Terrasse: false,
    Vue: false,
    Jardin: false,
    "Végétarien": false,
    "Réservation": false,
  })
  const [showWorldCupMenu, setShowWorldCupMenu] = useState(false)

  // Filter restaurants based on search query, city, cuisine, rating, price, and features
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCity = selectedCity === "Toutes les villes" || restaurant.location.includes(selectedCity)
    const matchesCuisine = selectedCuisine === "Toutes les cuisines" || restaurant.cuisine === selectedCuisine
    const matchesRating = restaurant.rating >= minRating
    const matchesPrice = priceFilters[restaurant.price as keyof typeof priceFilters]
    const matchesFeatures = Object.entries(featureFilters).every(
      ([feature, isSelected]) => !isSelected || restaurant.features.includes(feature)
    )
    const matchesWorldCupMenu = !showWorldCupMenu || restaurant.worldCupMenu

    return matchesSearch && matchesCity && matchesCuisine && matchesRating && matchesPrice && matchesFeatures && matchesWorldCupMenu
  })

  const handlePriceFilterChange = (price: string, checked: boolean) => {
    setPriceFilters((prev) => ({
      ...prev,
      [price]: checked,
    }))
  }

  const handleFeatureFilterChange = (feature: string, checked: boolean) => {
    setFeatureFilters((prev) => ({
      ...prev,
      [feature]: checked,
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Amiri']">Restaurants</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Découvrez les meilleurs restaurants au Maroc, en Espagne et au Portugal
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-lg shadow-md border border-moroccan-neutral/20">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Rechercher des restaurants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
          />
        </div>
        <Select value={selectedCity} onValueChange={setSelectedCity}>
          <SelectTrigger className="w-full md:w-[180px] border-moroccan-neutral/30 focus:ring-moroccan-primary">
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
        <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
          <SelectTrigger className="w-full md:w-[180px] border-moroccan-neutral/30 focus:ring-moroccan-primary">
            <SelectValue placeholder="Cuisine" />
          </SelectTrigger>
          <SelectContent>
            {cuisines.map((cuisine) => (
              <SelectItem key={cuisine} value={cuisine}>
                {cuisine}
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
                        => (
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

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-moroccan-dark">Caractéristiques</h3>
                <div className="space-y-2">
                  {Object.keys(featureFilters).map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox
                        id={`feature-${feature}`}
                        checked={featureFilters[feature as keyof typeof featureFilters]}
                        onCheckedChange={(checked) => handleFeatureFilterChange(feature, checked as boolean)}
                        className="border-moroccan-neutral/30 text-moroccan-primary"
                      />
                      <label
                        htmlFor={`feature-${feature}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="world-cup-menu-mobile"
                  checked={showWorldCupMenu}
                  onCheckedChange={(checked) => setShowWorldCupMenu(checked as boolean)}
                  className="border-moroccan-neutral/30 text-moroccan-primary"
                />
                <label
                  htmlFor="world-cup-menu-mobile"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Menu Spécial Coupe du Monde
                </label>
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

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-moroccan-dark">Caractéristiques</h3>
          <div className="flex flex-wrap gap-4">
            {Object.keys(featureFilters).map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox
                  id={`feature-desktop-${feature}`}
                  checked={featureFilters[feature as keyof typeof featureFilters]}
                  onCheckedChange={(checked) => handleFeatureFilterChange(feature, checked as boolean)}
                  className="border-moroccan-neutral/30 text-moroccan-primary"
                />
                <label
                  htmlFor={`feature-desktop-${feature}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {feature}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="world-cup-menu-desktop"
            checked={showWorldCupMenu}
            onCheckedChange={(checked) => setShowWorldCupMenu(checked as boolean)}
            className="border-moroccan-neutral/30 text-moroccan-primary"
          />
          <label
            htmlFor="world-cup-menu-desktop"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Menu Spécial Coupe du Monde
          </label>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link href={`/restaurants/${restaurant.id}`} key={restaurant.id}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow border-moroccan-neutral/30 group">
                <div className="relative h-48 w-full">
                  <Image
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {restaurant.worldCupMenu && (
                    <Badge className="absolute top-2 right-2 bg-moroccan-accent hover:bg-moroccan-accent text-white border-none">
                      Menu Coupe du Monde
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-1 text-moroccan-dark line-clamp-1">{restaurant.name}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{restaurant.location}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="flex items-center bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">
                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 mr-1" />
                        <span className="font-medium">{restaurant.rating}</span>
                      </div>
                      <span className="text-muted-foreground text-xs ml-2">({restaurant.reviews.toLocaleString()})</span>
                    </div>
                    <span className="text-muted-foreground">{restaurant.price}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{restaurant.openingHours}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {restaurant.cuisine}
                    </Badge>
                    {restaurant.features.slice(0, 2).map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {restaurant.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{restaurant.features.length - 2}
                      </Badge>
                    )}
                  </div>
                  <Button
                    className="w-full bg-moroccan-primary hover:bg-moroccan-primary/90 text-white"
                    size="sm"
                  >
                    Réserver une Table
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium mb-2 text-moroccan-dark">Aucun restaurant trouvé</h3>
            <p className="text-muted-foreground">Essayez d'ajuster vos filtres ou votre recherche</p>
          </div>
        )}
      </div>
    </div>
  )
}

