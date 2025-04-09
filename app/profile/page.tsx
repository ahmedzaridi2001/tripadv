"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MapPin, Star, Heart, Settings, Edit, MoreHorizontal, Calendar, Plane, ThumbsUp } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import ProtectedRoute from "@/components/protected-route"

export default function ProfilePage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("reviews")

  // Mock reviews data - in a real app, this would come from an API
  const reviews = [
    {
      id: 1,
      place: {
        id: 101,
        name: "Médina de Marrakech",
        image: "/placeholder.svg?height=80&width=80",
      },
      rating: 5,
      date: "2023-11-15",
      content:
        "Une expérience inoubliable! Les ruelles étroites de la médina sont remplies de couleurs, d'odeurs épicées et de sons captivants. Un véritable labyrinthe où l'on prend plaisir à se perdre.",
      likes: 42,
    },
    {
      id: 2,
      place: {
        id: 102,
        name: "Jardin Majorelle",
        image: "/placeholder.svg?height=80&width=80",
      },
      rating: 4,
      date: "2023-09-22",
      content:
        "Un havre de paix au cœur de Marrakech. Les nuances de bleu sont magnifiques et contrastent parfaitement avec la végétation luxuriante. J'ai particulièrement apprécié la collection du musée berbère.",
      likes: 28,
    },
    {
      id: 3,
      place: {
        id: 103,
        name: "Chefchaouen",
        image: "/placeholder.svg?height=80&width=80",
      },
      rating: 5,
      date: "2023-07-10",
      content:
        "La ville bleue est simplement magique! Chaque coin de rue offre une nouvelle perspective photogénique. L'atmosphère est paisible et les habitants sont accueillants. À ne pas manquer lors d'un voyage au Maroc!",
      likes: 35,
    },
  ]

  // Mock favorites data
  const favorites = [
    {
      id: 1,
      name: "Désert du Sahara",
      location: "Merzouga, Maroc",
      image: "/placeholder.svg?height=100&width=150",
      category: "Nature",
    },
    {
      id: 2,
      name: "Mosquée Hassan II",
      location: "Casablanca, Maroc",
      image: "/placeholder.svg?height=100&width=150",
      category: "Monument",
    },
    {
      id: 3,
      name: "Palais Bahia",
      location: "Marrakech, Maroc",
      image: "/placeholder.svg?height=100&width=150",
      category: "Palais",
    },
    {
      id: 4,
      name: "Cascades d'Ouzoud",
      location: "Azilal, Maroc",
      image: "/placeholder.svg?height=100&width=150",
      category: "Nature",
    },
  ]

  // Mock trips data
  const trips = [
    {
      id: 1,
      title: "Découverte du Nord Marocain",
      startDate: "2023-07-05",
      endDate: "2023-07-15",
      places: ["Tanger", "Chefchaouen", "Tétouan", "Asilah"],
      image: "/placeholder.svg?height=150&width=300",
    },
    {
      id: 2,
      title: "Route des Villes Impériales",
      startDate: "2023-10-10",
      endDate: "2023-10-20",
      places: ["Rabat", "Meknès", "Fès", "Marrakech"],
      image: "/placeholder.svg?height=150&width=300",
    },
  ]

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="relative mb-8">
          {/* Cover Photo */}
          <div className="h-48 w-full rounded-lg overflow-hidden relative">
            <Image
              src="/placeholder.svg?height=200&width=1000"
              alt="Cover Photo"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col md:flex-row md:items-end -mt-12 md:-mt-16 px-4 md:px-8 relative z-10">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background">
              <AvatarImage src={user?.avatarUrl || "/placeholder.svg?height=128&width=128"} alt={user?.name || ""} />
              <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>

            <div className="mt-4 md:mt-0 md:ml-6 md:mb-4 flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white md:text-moroccan-dark">{user?.name}</h1>
                  <div className="flex items-center mt-1 text-white/90 md:text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{user?.location || "Emplacement non spécifié"}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>
                      Membre depuis{" "}
                      {new Date(user?.createdAt || Date.now()).toLocaleDateString("fr-FR", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-2">
                  <Button
                    variant="outline"
                    className="border-moroccan-primary text-moroccan-primary hover:bg-moroccan-primary/10"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Modifier
                  </Button>
                  <Link href="/profile/settings">
                    <Button
                      variant="outline"
                      className="border-moroccan-primary text-moroccan-primary hover:bg-moroccan-primary/10"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Paramètres
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* About */}
            <Card className="border-moroccan-neutral/30">
              <CardHeader>
                <CardTitle className="text-xl font-['Amiri'] text-moroccan-dark">À Propos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{user?.bio || "Aucune biographie renseignée."}</p>

                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-moroccan-primary/5 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-moroccan-primary">{reviews.length}</p>
                    <p className="text-xs text-muted-foreground">Avis</p>
                  </div>
                  <div className="bg-moroccan-primary/5 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-moroccan-primary">0</p>
                    <p className="text-xs text-muted-foreground">Photos</p>
                  </div>
                  <div className="bg-moroccan-primary/5 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-moroccan-primary">{favorites.length}</p>
                    <p className="text-xs text-muted-foreground">Favoris</p>
                  </div>
                  <div className="bg-moroccan-primary/5 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-moroccan-primary">0</p>
                    <p className="text-xs text-muted-foreground">Abonnés</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card className="border-moroccan-neutral/30">
              <CardHeader>
                <CardTitle className="text-xl font-['Amiri'] text-moroccan-dark">Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { name: "Explorateur", icon: <Plane className="h-4 w-4 mr-1" /> },
                    { name: "Photographe", icon: <Star className="h-4 w-4 mr-1" /> },
                    { name: "Connaisseur", icon: <ThumbsUp className="h-4 w-4 mr-1" /> },
                  ].map((badge, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-3 py-1 border-moroccan-primary/30 bg-moroccan-primary/5"
                    >
                      {badge.icon}
                      <span className="ml-1">{badge.name}</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Trips */}
            <Card className="border-moroccan-neutral/30">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-['Amiri'] text-moroccan-dark">Voyages Récents</CardTitle>
                <Link href="/trips">
                  <Button variant="link" className="text-moroccan-primary h-8 px-2">
                    Voir tout
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trips.map((trip) => (
                    <Link key={trip.id} href={`/trips/${trip.id}`}>
                      <div className="group border border-moroccan-neutral/20 rounded-lg overflow-hidden hover:shadow-md">
                        <div className="relative h-32 w-full">
                          <Image
                            src={trip.image || "/placeholder.svg"}
                            alt={trip.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <div className="absolute bottom-2 left-2 right-2">
                            <h3 className="text-white font-medium line-clamp-1">{trip.title}</h3>
                            <p className="text-white/80 text-xs">
                              {new Date(trip.startDate).toLocaleDateString("fr-FR", {
                                month: "short",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="p-2 text-xs text-muted-foreground">
                          {trip.places.slice(0, 3).join(", ")}
                          {trip.places.length > 3 && "..."}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger
                  value="reviews"
                  className="data-[state=active]:bg-moroccan-primary data-[state=active]:text-white"
                >
                  Avis
                </TabsTrigger>
                <TabsTrigger
                  value="favorites"
                  className="data-[state=active]:bg-moroccan-primary data-[state=active]:text-white"
                >
                  Favoris
                </TabsTrigger>
                <TabsTrigger
                  value="photos"
                  className="data-[state=active]:bg-moroccan-primary data-[state=active]:text-white"
                >
                  Photos
                </TabsTrigger>
                <TabsTrigger
                  value="trips"
                  className="data-[state=active]:bg-moroccan-primary data-[state=active]:text-white"
                >
                  Voyages
                </TabsTrigger>
              </TabsList>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="space-y-6">
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <Card key={review.id} className="border-moroccan-neutral/30">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={review.place.image || "/placeholder.svg"}
                              alt={review.place.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <Link href={`/places/${review.place.id}`}>
                                <h3 className="font-semibold hover:text-moroccan-primary">{review.place.name}</h3>
                              </Link>
                              <div className="flex items-center">
                                <div className="flex items-center bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">
                                  <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 mr-1" />
                                  <span className="font-medium">{review.rating}</span>
                                </div>
                                <div className="ml-2">
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" className="h-8 w-8 p-0">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                      <DropdownMenuItem>
                                        <Edit className="h-4 w-4 mr-2" />
                                        Modifier
                                      </DropdownMenuItem>
                                      <DropdownMenuSeparator />
                                      <DropdownMenuItem className="text-red-600">Supprimer</DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {new Date(review.date).toLocaleDateString("fr-FR", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
                            </p>
                            <p className="mt-3 text-moroccan-dark">{review.content}</p>
                            <div className="mt-3 flex items-center text-muted-foreground text-sm">
                              <Button variant="ghost" size="sm" className="h-8 px-2">
                                <ThumbsUp className="h-4 w-4 mr-1" />
                                <span>Utile ({review.likes})</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Vous n'avez pas encore publié d'avis.</p>
                    <Button className="mt-4 bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">
                      Écrire un avis
                    </Button>
                  </div>
                )}
              </TabsContent>

              {/* Favorites Tab */}
              <TabsContent value="favorites" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {favorites.map((favorite) => (
                    <Link key={favorite.id} href={`/places/${favorite.id}`}>
                      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow border-moroccan-neutral/30 group">
                        <div className="flex">
                          <div className="relative h-24 w-24 flex-shrink-0">
                            <Image
                              src={favorite.image || "/placeholder.svg"}
                              alt={favorite.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="flex-1 p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium line-clamp-1 group-hover:text-moroccan-primary">
                                  {favorite.name}
                                </h3>
                                <p className="text-xs text-muted-foreground flex items-center mt-1">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {favorite.location}
                                </p>
                              </div>
                              <Badge className="bg-moroccan-primary/10 text-moroccan-primary border-0">
                                {favorite.category}
                              </Badge>
                            </div>
                            <Button variant="ghost" size="sm" className="mt-2 p-0 h-8 text-moroccan-primary">
                              <Heart className="h-4 w-4 mr-1 fill-moroccan-primary" />
                              Favori
                            </Button>
                          </CardContent>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              {/* Photos Tab */}
              <TabsContent value="photos" className="space-y-6">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Vous n'avez pas encore publié de photos.</p>
                  <Button className="mt-4 bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">
                    Ajouter des photos
                  </Button>
                </div>
              </TabsContent>

              {/* Trips Tab */}
              <TabsContent value="trips" className="space-y-6">
                {trips.map((trip) => (
                  <Card key={trip.id} className="border-moroccan-neutral/30 overflow-hidden">
                    <div className="sm:flex">
                      <div className="relative h-48 sm:h-auto sm:w-1/3">
                        <Image src={trip.image || "/placeholder.svg"} alt={trip.title} fill className="object-cover" />
                      </div>
                      <CardContent className="p-6 sm:w-2/3">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-semibold text-moroccan-dark">{trip.title}</h3>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-moroccan-primary text-moroccan-primary hover:bg-moroccan-primary/10"
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Modifier
                          </Button>
                        </div>
                        <div className="mt-2 flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>
                            {new Date(trip.startDate).toLocaleDateString("fr-FR", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}{" "}
                            -{" "}
                            {new Date(trip.endDate).toLocaleDateString("fr-FR", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <Separator className="my-4" />
                        <div>
                          <h4 className="font-medium mb-2 text-moroccan-dark">Lieux visités</h4>
                          <div className="flex flex-wrap gap-2">
                            {trip.places.map((place, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="border-moroccan-primary/30 bg-moroccan-primary/5"
                              >
                                {place}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4">
                          <Link href={`/trips/${trip.id}`}>
                            <Button className="bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">
                              Voir le voyage
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}

