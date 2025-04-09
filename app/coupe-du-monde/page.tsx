"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Ticket, Info, Hotel, Utensils, Plane } from "lucide-react"

export default function CoupeDuMondePage() {
  const [selectedCountry, setSelectedCountry] = useState("maroc")

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden mb-12">
        <div className="relative h-[400px] w-full">
          <Image src="/placeholder.svg?height=400&width=1200" alt="Coupe du Monde 2030" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

          {/* Flags of host countries */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <div className="h-8 w-12 relative rounded-sm overflow-hidden shadow-md">
              <Image src="/placeholder.svg?height=40&width=60" alt="Drapeau du Maroc" fill className="object-cover" />
            </div>
            <div className="h-8 w-12 relative rounded-sm overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=40&width=60"
                alt="Drapeau de l'Espagne"
                fill
                className="object-cover"
              />
            </div>
            <div className="h-8 w-12 relative rounded-sm overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=40&width=60"
                alt="Drapeau du Portugal"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 font-['Amiri']">Coupe du Monde 2030</h1>
            <p className="text-xl md:text-2xl mb-4">Maroc • Espagne • Portugal</p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Calendar className="h-4 w-4 mr-1" /> Juin - Juillet 2030
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <MapPin className="h-4 w-4 mr-1" /> 3 Pays Hôtes
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Ticket className="h-4 w-4 mr-1" /> 48 Équipes
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-12 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-moroccan-dark font-['Amiri']">
          Préparez Votre Voyage pour la Coupe du Monde
        </h2>
        <p className="text-muted-foreground mb-6">
          Pour la première fois, la Coupe du Monde sera organisée par trois pays sur deux continents. Découvrez tout ce
          que vous devez savoir pour profiter pleinement de cet événement historique au Maroc, en Espagne et au
          Portugal.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-moroccan-primary hover:bg-moroccan-primary/90">
            <Ticket className="h-4 w-4 mr-2" /> Informations Billetterie
          </Button>
          <Button
            variant="outline"
            className="border-moroccan-primary text-moroccan-primary hover:bg-moroccan-primary/10"
          >
            <Info className="h-4 w-4 mr-2" /> Guide du Supporter
          </Button>
        </div>
      </div>

      {/* Country Tabs */}
      <div className="mb-12">
        <Tabs defaultValue="maroc" onValueChange={setSelectedCountry} value={selectedCountry}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger
              value="maroc"
              className="data-[state=active]:bg-moroccan-primary data-[state=active]:text-white"
            >
              Maroc
            </TabsTrigger>
            <TabsTrigger
              value="espagne"
              className="data-[state=active]:bg-moroccan-primary data-[state=active]:text-white"
            >
              Espagne
            </TabsTrigger>
            <TabsTrigger
              value="portugal"
              className="data-[state=active]:bg-moroccan-primary data-[state=active]:text-white"
            >
              Portugal
            </TabsTrigger>
          </TabsList>

          {/* Morocco Content */}
          <TabsContent value="maroc" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-moroccan-dark font-['Amiri']">Découvrez le Maroc</h3>
                <p className="text-muted-foreground mb-4">
                  Le Maroc accueillera pour la première fois la Coupe du Monde, offrant aux visiteurs une expérience
                  unique mêlant passion du football et richesse culturelle. Des stades ultramodernes aux médinas
                  traditionnelles, préparez-vous à vivre une expérience inoubliable.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-moroccan-primary/10 p-2 rounded-full mr-3">
                      <MapPin className="h-5 w-5 text-moroccan-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-moroccan-dark">Villes Hôtes</h4>
                      <p className="text-sm text-muted-foreground">Casablanca, Rabat, Marrakech, Tanger, Agadir</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-moroccan-primary/10 p-2 rounded-full mr-3">
                      <Ticket className="h-5 w-5 text-moroccan-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-moroccan-dark">Stades Principaux</h4>
                      <p className="text-sm text-muted-foreground">
                        Grand Stade de Casablanca, Stade Mohammed V, Stade de Marrakech
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="mt-4 bg-moroccan-primary hover:bg-moroccan-primary/90">
                  Explorer les Villes Hôtes
                </Button>
              </div>
              <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image src="/placeholder.svg?height=300&width=500" alt="Stade au Maroc" fill className="object-cover" />
              </div>
            </div>

            {/* Host Cities */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-moroccan-dark font-['Amiri']">Villes Hôtes au Maroc</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Casablanca", "Rabat", "Marrakech", "Tanger", "Agadir"].map((city) => (
                  <Link href={`/destinations/maroc/${city.toLowerCase()}`} key={city}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-moroccan-neutral/30 h-full">
                      <div className="relative h-48 w-full">
                        <Image src="/placeholder.svg?height=200&width=300" alt={city} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="text-xl font-semibold text-white">{city}</h4>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          Découvrez les stades, hébergements, restaurants et attractions de {city} pour la Coupe du
                          Monde 2030.
                        </p>
                        <Button variant="link" className="p-0 h-auto mt-2 text-moroccan-primary">
                          Explorer {city}
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Spain Content */}
          <TabsContent value="espagne" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-moroccan-dark font-['Amiri']">Découvrez l'Espagne</h3>
                <p className="text-muted-foreground mb-4">
                  L'Espagne, pays à la riche tradition footballistique, accueillera des matchs clés de la Coupe du Monde
                  2030. Avec ses infrastructures modernes et son ambiance festive, l'Espagne promet une expérience
                  exceptionnelle aux supporters.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-moroccan-primary/10 p-2 rounded-full mr-3">
                      <MapPin className="h-5 w-5 text-moroccan-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-moroccan-dark">Villes Hôtes</h4>
                      <p className="text-sm text-muted-foreground">Madrid, Barcelone, Séville, Valence, Bilbao</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-moroccan-primary/10 p-2 rounded-full mr-3">
                      <Ticket className="h-5 w-5 text-moroccan-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-moroccan-dark">Stades Principaux</h4>
                      <p className="text-sm text-muted-foreground">Santiago Bernabéu, Camp Nou, La Cartuja, Mestalla</p>
                    </div>
                  </div>
                </div>
                <Button className="mt-4 bg-moroccan-primary hover:bg-moroccan-primary/90">
                  Explorer les Villes Hôtes
                </Button>
              </div>
              <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Stade en Espagne"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Host Cities */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-moroccan-dark font-['Amiri']">Villes Hôtes en Espagne</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Madrid", "Barcelone", "Séville", "Valence", "Bilbao"].map((city) => (
                  <Link href={`/destinations/espagne/${city.toLowerCase()}`} key={city}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-moroccan-neutral/30 h-full">
                      <div className="relative h-48 w-full">
                        <Image src="/placeholder.svg?height=200&width=300" alt={city} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="text-xl font-semibold text-white">{city}</h4>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          Découvrez les stades, hébergements, restaurants et attractions de {city} pour la Coupe du
                          Monde 2030.
                        </p>
                        <Button variant="link" className="p-0 h-auto mt-2 text-moroccan-primary">
                          Explorer {city}
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Portugal Content */}
          <TabsContent value="portugal" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-moroccan-dark font-['Amiri']">Découvrez le Portugal</h3>
                <p className="text-muted-foreground mb-4">
                  Le Portugal, terre de passion footballistique, vous accueille pour la Coupe du Monde 2030. Des stades
                  modernes aux villes historiques, le Portugal offre un cadre idéal pour vivre pleinement la
                  compétition.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-moroccan-primary/10 p-2 rounded-full mr-3">
                      <MapPin className="h-5 w-5 text-moroccan-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-moroccan-dark">Villes Hôtes</h4>
                      <p className="text-sm text-muted-foreground">Lisbonne, Porto, Braga, Guimarães, Faro</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-moroccan-primary/10 p-2 rounded-full mr-3">
                      <Ticket className="h-5 w-5 text-moroccan-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-moroccan-dark">Stades Principaux</h4>
                      <p className="text-sm text-muted-foreground">
                        Estádio da Luz, Estádio do Dragão, Estádio Municipal de Braga
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="mt-4 bg-moroccan-primary hover:bg-moroccan-primary/90">
                  Explorer les Villes Hôtes
                </Button>
              </div>
              <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Stade au Portugal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Host Cities */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-moroccan-dark font-['Amiri']">Villes Hôtes au Portugal</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Lisbonne", "Porto", "Braga", "Guimarães", "Faro"].map((city) => (
                  <Link href={`/destinations/portugal/${city.toLowerCase()}`} key={city}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-moroccan-neutral/30 h-full">
                      <div className="relative h-48 w-full">
                        <Image src="/placeholder.svg?height=200&width=300" alt={city} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="text-xl font-semibold text-white">{city}</h4>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          Découvrez les stades, hébergements, restaurants et attractions de {city} pour la Coupe du
                          Monde 2030.
                        </p>
                        <Button variant="link" className="p-0 h-auto mt-2 text-moroccan-primary">
                          Explorer {city}
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Services for World Cup */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-moroccan-dark font-['Amiri'] text-center">
          Services pour la Coupe du Monde
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-moroccan-neutral/30">
            <CardContent className="p-6">
              <div className="bg-moroccan-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Hotel className="h-6 w-6 text-moroccan-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-moroccan-dark">Hébergements</h3>
              <p className="text-muted-foreground mb-4">
                Trouvez les meilleurs hôtels, appartements et options d'hébergement près des stades et dans les villes
                hôtes.
              </p>
              <Button
                variant="outline"
                className="w-full border-moroccan-primary text-moroccan-primary hover:bg-moroccan-primary/10"
              >
                Réserver un Hébergement
              </Button>
            </CardContent>
          </Card>

          <Card className="border-moroccan-neutral/30">
            <CardContent className="p-6">
              <div className="bg-moroccan-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-moroccan-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-moroccan-dark">Transport</h3>
              <p className="text-muted-foreground mb-4">
                Planifiez vos déplacements entre les pays et les villes hôtes avec nos options de transport
                recommandées.
              </p>
              <Button
                variant="outline"
                className="w-full border-moroccan-primary text-moroccan-primary hover:bg-moroccan-primary/10"
              >
                Trouver un Transport
              </Button>
            </CardContent>
          </Card>

          <Card className="border-moroccan-neutral/30">
            <CardContent className="p-6">
              <div className="bg-moroccan-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Utensils className="h-6 w-6 text-moroccan-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-moroccan-dark">Restaurants</h3>
              <p className="text-muted-foreground mb-4">
                Découvrez les meilleurs restaurants et cafés près des stades et dans les zones touristiques des villes
                hôtes.
              </p>
              <Button
                variant="outline"
                className="w-full border-moroccan-primary text-moroccan-primary hover:bg-moroccan-primary/10"
              >
                Explorer les Restaurants
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Fan Guide */}
      <div className="bg-moroccan-primary/5 rounded-xl p-6 md:p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-moroccan-dark font-['Amiri']">Guide du Supporter</h2>
            <p className="text-muted-foreground mb-6">
              Tout ce que vous devez savoir pour profiter pleinement de la Coupe du Monde 2030 au Maroc, en Espagne et
              au Portugal.
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-moroccan-dark mb-2">Visa et Documents</h4>
                <p className="text-sm text-muted-foreground">
                  Informations sur les exigences de visa pour les trois pays hôtes et les documents nécessaires.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-moroccan-dark mb-2">Transport Entre Pays</h4>
                <p className="text-sm text-muted-foreground">
                  Comment se déplacer efficacement entre le Maroc, l'Espagne et le Portugal pendant le tournoi.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-moroccan-dark mb-2">Conseils de Sécurité</h4>
                <p className="text-sm text-muted-foreground">
                  Recommandations pour un séjour sûr et agréable dans les trois pays hôtes.
                </p>
              </div>
            </div>
            <Button className="mt-6 bg-moroccan-primary hover:bg-moroccan-primary/90">
              Télécharger le Guide Complet
            </Button>
          </div>
          <div className="relative h-[350px] w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=350&width=500"
              alt="Supporters de football"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-moroccan-dark font-['Amiri']">Restez Informé</h2>
        <p className="text-muted-foreground mb-6">
          Inscrivez-vous pour recevoir les dernières nouvelles, mises à jour et offres spéciales concernant la Coupe du
          Monde 2030.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button className="bg-moroccan-primary hover:bg-moroccan-primary/90 whitespace-nowrap">S'inscrire</Button>
        </div>
      </div>
    </div>
  )
}

