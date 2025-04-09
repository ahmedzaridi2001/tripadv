"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Star, MapPin, Clock, Phone, Globe, Heart, Share2, ThumbsUp } from "lucide-react"

// Mock data for a place
const place = {
  id: 1,
  name: "Eiffel Tower",
  description:
    "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Locally nicknamed 'La dame de fer', it was constructed from 1887 to 1889 as the entrance to the 1889 World's Fair.",
  location: "Paris, France",
  address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  rating: 4.7,
  reviews: 12453,
  category: "Landmark",
  price: "$$",
  openingHours: "9:00 AM - 11:45 PM",
  phone: "+33 892 70 12 39",
  website: "https://www.toureiffel.paris/en",
  features: ["Iconic Views", "Historical Significance", "Restaurants", "Souvenir Shops"],
  nearbyPlaces: [
    { id: 5, name: "Louvre Museum", image: "/placeholder.svg?height=100&width=150", distance: "2.6 km" },
    { id: 9, name: "Arc de Triomphe", image: "/placeholder.svg?height=100&width=150", distance: "2.9 km" },
    { id: 10, name: "Seine River Cruise", image: "/placeholder.svg?height=100&width=150", distance: "0.5 km" },
  ],
}

// Mock reviews
const reviews = [
  {
    id: 1,
    user: { name: "Sarah Johnson", avatar: "/placeholder.svg?height=40&width=40", nationality: "USA" },
    rating: 5,
    date: "2023-05-15",
    content:
      "Absolutely breathtaking! The view from the top is incredible, especially at sunset. Worth every penny and the wait.",
    likes: 42,
  },
  {
    id: 2,
    user: { name: "Marco Rossi", avatar: "/placeholder.svg?height=40&width=40", nationality: "Italy" },
    rating: 4,
    date: "2023-04-22",
    content:
      "Beautiful landmark and a must-see in Paris. The lines can be long, so I recommend booking tickets in advance. The second floor actually has better views than the top in my opinion.",
    likes: 28,
  },
  {
    id: 3,
    user: { name: "Yuki Tanaka", avatar: "/placeholder.svg?height=40&width=40", nationality: "Japan" },
    rating: 5,
    date: "2023-03-10",
    content:
      "Iconic symbol of Paris! I visited at night when it was all lit up and sparkling. Magical experience and great photo opportunities.",
    likes: 35,
  },
]

export default function PlaceDetailPage({ params }: { params: { id: string } }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [reviewContent, setReviewContent] = useState("")

  // This would be replaced with actual data fetching based on the ID
  console.log("Place ID:", params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Images and Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image Gallery */}
          <div className="space-y-2">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src={place.images[activeImageIndex] || "/placeholder.svg"}
                alt={place.name}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-4 right-4">{place.category}</Badge>
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {place.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative h-20 w-32 rounded-md overflow-hidden cursor-pointer border-2 ${
                    index === activeImageIndex ? "border-primary" : "border-transparent"
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${place.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Place Details */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold">{place.name}</h1>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="flex items-center text-muted-foreground mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{place.address}</span>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                <div className="flex items-center bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
                  <span className="font-medium">{place.rating}</span>
                </div>
                <span className="text-muted-foreground text-sm ml-2">({place.reviews.toLocaleString()} reviews)</span>
              </div>
              <span className="text-muted-foreground">{place.price}</span>
            </div>

            <Tabs defaultValue="about">
              <TabsList className="mb-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="nearby">Nearby</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-4">
                <p className="text-muted-foreground">{place.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Opening Hours</h4>
                      <p className="text-sm text-muted-foreground">{place.openingHours}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-sm text-muted-foreground">{place.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Website</h4>
                      <a
                        href={place.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        {place.website}
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {place.features.map((feature, index) => (
                      <Badge key={index} variant="outline">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                {/* Write a review */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-medium mb-2">Write a Review</h3>
                    <Textarea
                      placeholder="Share your experience..."
                      className="mb-4"
                      value={reviewContent}
                      onChange={(e) => setReviewContent(e.target.value)}
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-yellow-500"
                          />
                        ))}
                      </div>
                      <Button>Submit Review</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Reviews list */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="pt-6">
                        <div className="flex justify-between mb-4">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src={review.user.avatar} alt={review.user.name} />
                              <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center">
                                <h4 className="font-medium">{review.user.name}</h4>
                                <Badge variant="outline" className="ml-2 text-xs">
                                  {review.user.nationality}
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {new Date(review.date).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm h-fit">
                            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 mr-1" />
                            <span className="font-medium">{review.rating}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{review.content}</p>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            <span>Helpful ({review.likes})</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="nearby" className="space-y-4">
                <h3 className="font-medium mb-2">Nearby Places</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {place.nearbyPlaces.map((nearbyPlace) => (
                    <Card key={nearbyPlace.id} className="overflow-hidden">
                      <div className="flex">
                        <div className="relative h-24 w-24">
                          <Image
                            src={nearbyPlace.image || "/placeholder.svg"}
                            alt={nearbyPlace.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="flex-1 p-4">
                          <h4 className="font-medium">{nearbyPlace.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{nearbyPlace.distance} away</p>
                          <Button variant="link" className="p-0 h-auto">
                            View Details
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Right Column - Recommendations */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium mb-4">Personalized For You</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Based on your age and nationality, you might also enjoy:
              </p>
              <div className="space-y-4">
                {place.nearbyPlaces.map((recommendation) => (
                  <div key={recommendation.id} className="flex items-center">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden mr-3">
                      <Image
                        src={recommendation.image || "/placeholder.svg"}
                        alt={recommendation.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{recommendation.name}</h4>
                      <p className="text-xs text-muted-foreground">{recommendation.distance} away</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium mb-4">Popular Among Visitors</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Visitors from USA</span>
                  <span className="font-medium">32%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "32%" }}></div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span>Visitors from Japan</span>
                  <span className="font-medium">24%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "24%" }}></div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span>Visitors from UK</span>
                  <span className="font-medium">18%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "18%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium mb-4">Best Time to Visit</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium">Least Crowded</h4>
                  <p className="text-sm text-muted-foreground">Weekdays, 9:00 AM - 11:00 AM</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Best Views</h4>
                  <p className="text-sm text-muted-foreground">Sunset (around 7:00 PM - 8:00 PM)</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Best Photos</h4>
                  <p className="text-sm text-muted-foreground">Evening, when the tower is illuminated</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

