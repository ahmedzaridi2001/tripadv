"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePickerWithRange } from "@/components/date-range-picker"
import { Clock, Plane, Train, Car, Bus } from "lucide-react"

// Mock data for itineraries
const itineraries = [
  {
    id: 1,
    title: "Tour des Villes Hôtes Marocaines",
    image: "/placeholder.svg?height=200&width=300",
    duration: "10 jours",
    countries: ["Maroc"],
    cities: ["Casablanca", "Rabat", "Marrakech", "Tanger", "Agadir"],
    description: "Découvrez les 5 villes hôtes marocaines de la Coupe du Monde 2030 avec ce circuit complet.",
    highlights: ["Visite des stades", "Sites touristiques", "Expérience culinaire"],
    worldCupSpecial: true,
  },
  {
    id: 2,
    title: "Maroc - Espagne: Deux Continents",
    image: "/placeholder.svg?height=200&width=300",
    duration: "14 jours",
    countries: ["Maroc", "Espagne"],
    cities: ["Casablanca", "Marrakech", "Tanger", "Séville", "Madrid", "Barcelone"],
    description: "Un itinéraire unique entre l'Afrique et l'Europe pour vivre la Coupe du Monde sur deux continents.",
    highlights: ["Traversée du détroit", "Matchs dans deux pays", "Diversité culturelle"],
    worldCupSpecial: true,
  },
  {
    id: 3,
    title: "Grand Tour Ibérique",
    image: "/placeholder.svg?height=200&width=300",
    duration: "12 jours",
    countries: ["Espagne", "Portugal"],
    cities: ["Madrid", "Barcelone", "Séville", "Lisbonne", "Porto"],
    description: "Explorez la péninsule ibérique et ses villes hôtes de la Coupe du Monde 2030.",
    highlights: ["Grands stades européens", "Gastronomie ibérique", "Patrimoine historique"],
    worldCupSpecial: true,
  },
  {
    id: 4,
    title: "Maroc Authentique",
    image: "/placeholder.svg?height=200&width=300",
    duration: "7 jours",
    countries: ["Maroc"],
    cities: ["Marrakech", "Fès", "Chefchaouen", "Merzouga"],
    description: "Découvrez l'authenticité du Maroc au-delà des villes hôtes de la Coupe du Monde.",
    highlights: ["Médinas", "Désert du Sahara", "Montagnes de l'Atlas"],
    worldCupSpecial: false,
  },
  {
    id: 5,
    title: "Les Trois Pays Hôtes",
    image: "/placeholder.svg?height=200&width=300",
    duration: "21 jours",
    countries: ["Maroc", "Espagne", "Portugal"],
    cities: ["Casablanca", "Marrakech", "Madrid", "Barcelone", "Lisbonne", "Porto"],
    description: "L'itinéraire ultime pour vivre pleinement la Coupe du Monde 2030 dans les trois pays hôtes.",
    highlights: ["Tous les stades principaux", "Expérience complète", "Transport optimisé"],
    worldCupSpecial: true,
  },
  {
    id: 6,
    title: "Andalousie et Nord du Maroc",
    image: "/placeholder.svg?height=200&width=300",
    duration: "8 jours",
    countries: ["Espagne", "Maroc"],
    cities: ["Séville", "Grenade", "Tanger", "Tétouan", "Chefchaouen"],
    description: "Un voyage à travers l'héritage andalou partagé entre le sud de l'Espagne et le nord du Maroc.",
    highlights: ["Influence mauresque", "Gastronomie", "Architecture"],
    worldCupSpecial: false,
  },
]

// Countries for filtering
const countries = ["Tous les pays", "Maroc", "Espagne", "Portugal"]

// Duration options for filtering
const durations = ["Toutes les durées", "1-7 jours", "8-14 jours", "15+ jours"]

export default function ItinerairesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("Tous les pays")
  const [selectedDuration, setSelectedDuration] = useState("Toutes les durées")
  const [showWorldCupSpecial, setShowWorldCupSpecial] = useState(false)
  const [activeTab, setActiveTab] = useState("itineraires")

  // Filter itineraries based on search query, country, duration, and World Cup special
  const filteredItineraries = itineraries.filter((itinerary) => {
    const matchesSearch =
      itinerary.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      itinerary.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      itinerary.cities.some((city) => city.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCountry = selectedCountry === "Tous les pays" || itinerary.countries.includes(selectedCountry)

    let matchesDuration = true
    if (selectedDuration === "1-7 jours") {
      matchesDuration = Number.parseInt(itinerary.duration) <= 7
    } else if (selectedDuration === "8-14 jours") {
      matchesDuration = Number.parseInt(itinerary.duration) >= 8 && Number.parseInt(itinerary.duration) <= 14
    } else if (selectedDuration === "15+ jours") {
      matchesDuration = Number.parseInt(itinerary.duration) >= 15
    }

    const matchesWorldCupSpecial = !showWorldCupSpecial || itinerary.worldCupSpecial

    return matchesSearch && matchesCountry && matchesDuration && matchesWorldCupSpecial
  })

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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Amiri']">Planifiez Votre Voyage</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Itinéraires et planification pour la Coupe du Monde 2030 au Maroc, en Espagne et au Portugal
          </p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="itineraires" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="itineraires"
            className="data-[state=active]:bg-moroccan-primary data-[state=active]:text-white"
          >
            Itinéraires Suggérés
          </TabsTrigger>
          <TabsTrigger
            value="planificateur"
            className="data-[state=active]:bg-moroccan-primary data-[state=active]:text-white"
          >
            Planificateur Personnalisé
          </TabsTrigger>
        </TabsList>

        {/* Itineraries Tab */}
        <TabsContent value="itineraires" className="space-y-6">
          {/* Search and Filter Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow-md border border-moroccan-neutral/20">
            <div className="relative">
              <Input
                placeholder="Rechercher des itinéraires..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
              />
            </div>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="border-moroccan-neutral/30 focus:ring-moroccan-primary">
                <SelectValue placeholder="Pays" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedDuration} onValueChange={setSelectedDuration}>
              <SelectTrigger className="border-moroccan-neutral/30 focus:ring-moroccan-primary">
                <SelectValue placeholder="Durée" />
              </SelectTrigger>
              <SelectContent>
                {durations.map((duration) => (
                  <SelectItem key={duration} value={duration}>
                    {duration}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="world-cup-special"
                checked={showWorldCupSpecial}
                onChange={(e) => setShowWorldCupSpecial(e.target.checked)}
                className="rounded border-moroccan-neutral/30 text-moroccan-primary focus:ring-moroccan-primary"
              />
              <label
                htmlFor="world-cup-special"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Spécial Coupe du Monde
              </label>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItineraries.length > 0 ? (
              filteredItineraries.map((itinerary) => (
                <Link href={`/itineraires/${itinerary.id}`} key={itinerary.id}>
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow border-moroccan-neutral/30 group">
                    <div className="relative h-48 w-full">
                      <Image
                        src={itinerary.image || "/placeholder.svg"}
                        alt={itinerary.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {itinerary.worldCupSpecial && (
                        <Badge className="absolute top-2 right-2 bg-moroccan-accent hover:bg-moroccan-accent text-white border-none">
                          Spécial Coupe du Monde
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold mb-2 text-moroccan-dark">{itinerary.title}</h3>
                      <div className="flex items-center text-muted-foreground text-sm mb-2">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{itinerary.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {itinerary.countries.map((country) => (
                          <Badge key={country} variant="secondary" className="text-xs">
                            {country}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{itinerary.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {itinerary.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-moroccan-primary hover:bg-moroccan-primary/90 text-white" size="sm">
                        Voir l'Itinéraire
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-lg font-medium mb-2 text-moroccan-dark">Aucun itinéraire trouvé</h3>
                <p className="text-muted-foreground">Essayez d'ajuster vos filtres ou votre recherche</p>
              </div>
            )}
          </div>
        </TabsContent>

        {/* Custom Planner Tab */}
        <TabsContent value="planificateur" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-moroccan-dark font-['Amiri']">Créez Votre Itinéraire</h2>
              <p className="text-muted-foreground mb-6">
                Planifiez votre voyage personnalisé pour la Coupe du Monde 2030 en sélectionnant vos destinations et
                dates.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Dates du Voyage</label>
                    <DatePickerWithRange className="w-full" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Nombre de Voyageurs</label>
                    <Select defaultValue="2">
                      <SelectTrigger className="border-moroccan-neutral/30 focus:ring-moroccan-primary">
                        <SelectValue placeholder="Nombre de voyageurs" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "voyageur" : "voyageurs"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Pays à Visiter</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Maroc", "Espagne", "Portugal"].map((country) => (
                      <div key={country} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={`country-${country}`}
                          className="rounded border-moroccan-neutral/30 text-moroccan-primary focus:ring-moroccan-primary"
                        />
                        <label
                          htmlFor={`country-${country}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {country}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Villes à Visiter</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      "Casablanca",
                      "Rabat",
                      "Marrakech",
                      "Tanger",
                      "Agadir",
                      "Madrid",
                      "Barcelone",
                      "Séville",
                      "Valence",
                      "Bilbao",
                      "Lisbonne",
                      "Porto",
                      "Braga",
                      "Guimarães",
                      "Faro",
                    ].map((city) => (
                      <div key={city} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={`city-${city}`}
                          className="rounded border-moroccan-neutral/30 text-moroccan-primary focus:ring-moroccan-primary"
                        />
                        <label
                          htmlFor={`city-${city}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {city}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Modes de Transport Préférés</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[
                      { name: "Avion", icon: <Plane className="h-4 w-4 mr-1" /> },
                      { name: "Train", icon: <Train className="h-4 w-4 mr-1" /> },
                      { name: "Voiture", icon: <Car className="h-4 w-4 mr-1" /> },
                      { name: "Bus", icon: <Bus className="h-4 w-4 mr-1" /> },
                    ].map((transport) => (
                      <div key={transport.name} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={`transport-${transport.name}`}
                          className="rounded border-moroccan-neutral/30 text-moroccan-primary focus:ring-moroccan-primary"
                        />
                        <label
                          htmlFor={`transport-${transport.name}`}
                          className="text-sm font-medium leading-none flex items-center peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {transport.icon} {transport.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Intérêts</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      "Matchs de Football",
                      "Patrimoine Culturel",
                      "Gastronomie",
                      "Plages",
                      "Montagnes",
                      "Shopping",
                      "Vie Nocturne",
                      "Musées",
                      "Nature",
                    ].map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={`interest-${interest}`}
                          className="rounded border-moroccan-neutral/30 text-moroccan-primary focus:ring-moroccan-primary"
                        />
                        <label
                          htmlFor={`interest-${interest}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">
                    Générer Mon Itinéraire
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-moroccan-primary/5 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-moroccan-dark font-['Amiri']">Conseils pour Votre Voyage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-moroccan-dark mb-2">Transport Entre Pays</h4>
                <p className="text-sm text-muted-foreground">
                  Pour voyager entre le Maroc, l'Espagne et le Portugal, privilégiez les vols directs ou les ferries
                  traversant le détroit de Gibraltar.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-moroccan-dark mb-2">Hébergement</h4>
                <p className="text-sm text-muted-foreground">
                  Réservez votre hébergement bien à l'avance, surtout dans les villes accueillant des matchs importants
                  de la Coupe du Monde.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-moroccan-dark mb-2">Documents de Voyage</h4>
                <p className="text-sm text-muted-foreground">
                  Vérifiez les exigences de visa pour chaque pays et assurez-vous que votre passeport est valide pour au
                  moins 6 mois après votre voyage.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-moroccan-dark mb-2">Billets de Match</h4>
                <p className="text-sm text-muted-foreground">
                  Achetez vos billets pour les matchs uniquement via les canaux officiels pour éviter les arnaques et
                  les contrefaçons.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

