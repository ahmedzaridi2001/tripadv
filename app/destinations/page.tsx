import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin } from "lucide-react"

// Mock data for popular destinations
const popularDestinations = [
  {
    id: 1,
    name: "Marrakech",
    country: "Maroc",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Surnommée la 'ville rouge', Marrakech est célèbre pour sa médina historique, ses souks animés et ses jardins luxuriants comme le Jardin Majorelle.",
    attractions: 243,
  },
  {
    id: 2,
    name: "Fès",
    country: "Maroc",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Avec sa médina médiévale labyrinthique, Fès est considérée comme la capitale culturelle et spirituelle du Maroc. Son artisanat traditionnel est mondialement réputé.",
    attractions: 187,
  },
  {
    id: 3,
    name: "Chefchaouen",
    country: "Maroc",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Connue comme la 'ville bleue', Chefchaouen est nichée dans les montagnes du Rif et célèbre pour ses bâtiments aux teintes bleues envoûtantes.",
    attractions: 95,
  },
  {
    id: 4,
    name: "Le Caire",
    country: "Égypte",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Capitale de l'Égypte, Le Caire abrite les pyramides de Gizeh et le Sphinx, ainsi que le célèbre musée égyptien et de nombreux monuments islamiques.",
    attractions: 312,
  },
  {
    id: 5,
    name: "Paris",
    country: "France",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "La ville lumière séduit par sa gastronomie, ses musées de renommée mondiale, son architecture et son atmosphère romantique incomparable.",
    attractions: 426,
  },
  {
    id: 6,
    name: "Istanbul",
    country: "Turquie",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "À cheval entre l'Europe et l'Asie, Istanbul fascine par son riche passé byzantin et ottoman, visible dans ses monuments comme Sainte-Sophie et la Mosquée Bleue.",
    attractions: 358,
  },
]

// Regions for classification
const regions = {
  maroc: ["Marrakech", "Fès", "Chefchaouen", "Essaouira", "Casablanca", "Rabat"],
  afrique: ["Le Caire", "Tunis", "Cape Town", "Dakar", "Zanzibar"],
  monde: ["Paris", "Istanbul", "Barcelone", "New York", "Tokyo"],
}

export default function DestinationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative mb-12 rounded-lg overflow-hidden">
        <div className="relative h-[300px] w-full">
          <Image
            src="/placeholder.svg?height=300&width=1200"
            alt="Destinations"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-moroccan-primary/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Amiri']">
              Découvrez des Destinations Extraordinaires
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Explorez des lieux emblématiques du Maroc et du monde entier, des médinas historiques aux sites naturels
              spectaculaires
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

      {/* Tabs for regions */}
      <Tabs defaultValue="all" className="mb-10">
        <div className="flex justify-center mb-6">
          <TabsList className="bg-moroccan-primary/5 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-moroccan-primary data-[state=active]:text-white">
              Toutes
            </TabsTrigger>
            <TabsTrigger
              value="maroc"
              className="data-[state=active]:bg-moroccan-primary data-[state=active]:text-white"
            >
              Maroc
            </TabsTrigger>
            <TabsTrigger
              value="afrique"
              className="data-[state=active]:bg-moroccan-primary data-[state=active]:text-white"
            >
              Afrique
            </TabsTrigger>
            <TabsTrigger
              value="monde"
              className="data-[state=active]:bg-moroccan-primary data-[state=active]:text-white"
            >
              Monde
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="maroc" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations
              .filter((destination) => regions.maroc.includes(destination.name))
              .map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="afrique" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations
              .filter((destination) => regions.afrique.includes(destination.name))
              .map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="monde" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations
              .filter((destination) => regions.monde.includes(destination.name))
              .map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Featured Regions Section */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <div className="w-1 h-8 bg-moroccan-secondary mr-3"></div>
          <h2 className="text-3xl font-bold text-moroccan-dark font-['Amiri']">Régions à Explorer</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Maroc Region */}
          <Link href="/destinations/maroc">
            <Card className="overflow-hidden border-moroccan-neutral/30 h-full hover:shadow-lg transition-shadow group">
              <div className="relative h-40">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Maroc"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white font-['Amiri']">Maroc</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground line-clamp-3">
                  Explorez les médinas, les montagnes de l'Atlas, les déserts et les plages du royaume chérifien. Le
                  Maroc offre une expérience culturelle et naturelle inégalée.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-moroccan-primary font-medium">{regions.maroc.length} destinations</span>
                  <Button variant="link" className="p-0 h-auto text-moroccan-primary hover:text-moroccan-primary/80">
                    Découvrir
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Afrique Region */}
          <Link href="/destinations/afrique">
            <Card className="overflow-hidden border-moroccan-neutral/30 h-full hover:shadow-lg transition-shadow group">
              <div className="relative h-40">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Afrique"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white font-['Amiri']">Afrique</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground line-clamp-3">
                  De l'Égypte antique aux savanes du Kenya, en passant par les plages de la Tunisie et la diversité
                  culturelle de l'Afrique de l'Ouest, le continent africain est un trésor de découvertes.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-moroccan-primary font-medium">
                    {regions.afrique.length} destinations
                  </span>
                  <Button variant="link" className="p-0 h-auto text-moroccan-primary hover:text-moroccan-primary/80">
                    Découvrir
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Monde Region */}
          <Link href="/destinations/monde">
            <Card className="overflow-hidden border-moroccan-neutral/30 h-full hover:shadow-lg transition-shadow group">
              <div className="relative h-40">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Monde"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white font-['Amiri']">Monde</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground line-clamp-3">
                  Voyagez des capitales européennes aux métropoles asiatiques, des plages des Caraïbes aux merveilles
                  naturelles de l'Océanie. Le monde entier s'offre à vous.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-moroccan-primary font-medium">{regions.monde.length} destinations</span>
                  <Button variant="link" className="p-0 h-auto text-moroccan-primary hover:text-moroccan-primary/80">
                    Découvrir
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Inspiration for travelers */}
      <section className="py-12 px-6 bg-moroccan-primary/5 rounded-lg hamsa-pattern">
        <h2 className="text-3xl font-bold mb-8 text-center text-moroccan-dark font-['Amiri']">
          Inspiration pour vos Voyages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-moroccan-neutral/30 bg-white/80 backdrop-blur-sm">
            <div className="p-6 text-center">
              <div className="bg-moroccan-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-moroccan-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-moroccan-dark">Destinations Culturelles</h3>
              <p className="text-muted-foreground">
                Explorez les sites historiques, musées et traditions locales pour une immersion culturelle
                enrichissante.
              </p>
            </div>
          </Card>

          <Card className="border-moroccan-neutral/30 bg-white/80 backdrop-blur-sm">
            <div className="p-6 text-center">
              <div className="bg-moroccan-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-moroccan-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-moroccan-dark">Aventures Naturelles</h3>
              <p className="text-muted-foreground">
                Des déserts aux montagnes, découvrez les merveilles naturelles et aventurez-vous hors des sentiers
                battus.
              </p>
            </div>
          </Card>

          <Card className="border-moroccan-neutral/30 bg-white/80 backdrop-blur-sm">
            <div className="p-6 text-center">
              <div className="bg-moroccan-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-moroccan-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-moroccan-dark">Délices Culinaires</h3>
              <p className="text-muted-foreground">
                Savourez la gastronomie locale et découvrez les saveurs authentiques des régions que vous visitez.
              </p>
            </div>
          </Card>

          <Card className="border-moroccan-neutral/30 bg-white/80 backdrop-blur-sm">
            <div className="p-6 text-center">
              <div className="bg-moroccan-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-moroccan-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-moroccan-dark">Plages Paradisiaques</h3>
              <p className="text-muted-foreground">
                Détendez-vous sur les plus belles plages du monde, des côtes méditerranéennes aux criques isolées.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

// Destination Card Component
function DestinationCard({ destination }: { destination: any }) {
  return (
    <Link href={`/destinations/${destination.id}`}>
      <Card className="overflow-hidden border-moroccan-neutral/30 h-full hover:shadow-lg transition-shadow group">
        <div className="relative h-48">
          <Image
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <Badge className="absolute top-2 right-2 bg-moroccan-primary/90 hover:bg-moroccan-primary text-white border-none">
            {destination.country}
          </Badge>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-bold text-white">{destination.name}</h3>
            <div className="flex items-center text-white/90 text-sm">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{destination.country}</span>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <p className="text-muted-foreground line-clamp-3">{destination.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-moroccan-primary font-medium">{destination.attractions} lieux à visiter</span>
            <Button variant="link" className="p-0 h-auto text-moroccan-primary hover:text-moroccan-primary/80">
              Explorer
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

