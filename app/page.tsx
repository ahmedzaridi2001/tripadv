import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Star, TrendingUp, Calendar } from "lucide-react"
import FeaturedPlaces from "@/components/featured-places"
import PopularDestinations from "@/components/popular-destinations"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Moroccan-inspired design */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
            filter: "brightness(0.7)",
          }}
        ></div>
        <div className="absolute inset-0 bg-moroccan-primary/20 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Decorative Moroccan arch pattern at the bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 C240,80 480,80 720,80 C960,80 1200,80 1440,0 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Amiri']">
            Découvrez le Maroc et les Pays Hôtes de la Coupe du Monde 2030
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Explorez les merveilles du Maroc, de l'Espagne et du Portugal avec des recommandations personnalisées pour
            la Coupe du Monde 2030
          </p>
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-2 flex items-center shadow-lg">
            <Input
              placeholder="Rechercher des destinations, attractions, activités..."
              className="border-none shadow-none focus-visible:ring-0"
            />
            <Button className="ml-2 bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">
              <Search className="h-4 w-4 mr-2" />
              Rechercher
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Featured Places */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-1 h-8 bg-moroccan-primary mr-3"></div>
              <h2 className="text-3xl font-bold text-moroccan-dark font-['Amiri']">Lieux Incontournables</h2>
            </div>
            <Link href="/places">
              <Button
                variant="outline"
                className="border-moroccan-primary text-moroccan-primary hover:bg-moroccan-primary/10"
              >
                Voir Tout
              </Button>
            </Link>
          </div>
          <FeaturedPlaces />
        </section>

        {/* Decorative divider */}
        <div className="moroccan-divider my-12"></div>

        {/* Popular Destinations */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-1 h-8 bg-moroccan-secondary mr-3"></div>
              <h2 className="text-3xl font-bold text-moroccan-dark font-['Amiri']">Destinations Populaires</h2>
            </div>
            <Link href="/destinations">
              <Button
                variant="outline"
                className="border-moroccan-secondary text-moroccan-secondary hover:bg-moroccan-secondary/10"
              >
                Voir Tout
              </Button>
            </Link>
          </div>
          <PopularDestinations />
        </section>

        {/* Why Choose Us - with Moroccan styling */}
        <section className="mb-16 py-12 px-6 rounded-lg zellige-pattern">
          <h2 className="text-3xl font-bold mb-8 text-center text-moroccan-dark font-['Amiri']">
            Pourquoi Nous Choisir
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-md border border-moroccan-neutral/20">
              <div className="bg-moroccan-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-moroccan-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-moroccan-dark">Lieux Exceptionnels</h3>
              <p className="text-muted-foreground">
                Découvrez des milliers de destinations, attractions et activités à travers le Maroc et le monde.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md border border-moroccan-neutral/20">
              <div className="bg-moroccan-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-moroccan-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-moroccan-dark">Avis Authentiques</h3>
              <p className="text-muted-foreground">
                Lisez les opinions honnêtes de millions de voyageurs pour prendre des décisions éclairées.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md border border-moroccan-neutral/20">
              <div className="bg-moroccan-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-moroccan-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-moroccan-dark">Recommandations Personnalisées</h3>
              <p className="text-muted-foreground">
                Obtenez des suggestions adaptées à votre âge, nationalité et préférences.
              </p>
            </div>
          </div>
        </section>

        {/* Moroccan Experience Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-4 text-moroccan-dark font-['Amiri']">
                Vivez l'Expérience Marocaine
              </h2>
              <p className="text-muted-foreground mb-6">
                Le Maroc est un pays de contrastes fascinants, où les traditions ancestrales rencontrent la modernité.
                Des médinas labyrinthiques aux vastes étendues du désert, en passant par les montagnes majestueuses de
                l'Atlas, chaque région offre une expérience unique.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-moroccan-primary/10 p-2 rounded-full mr-3">
                    <Star className="h-5 w-5 text-moroccan-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-moroccan-dark">Culture Riche et Diversifiée</h4>
                    <p className="text-sm text-muted-foreground">
                      Explorez l'héritage berbère, arabe et andalou du Maroc.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-moroccan-primary/10 p-2 rounded-full mr-3">
                    <Star className="h-5 w-5 text-moroccan-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-moroccan-dark">Gastronomie Exquise</h4>
                    <p className="text-sm text-muted-foreground">
                      Savourez les tajines, couscous et pâtisseries marocaines.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-moroccan-primary/10 p-2 rounded-full mr-3">
                    <Star className="h-5 w-5 text-moroccan-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-moroccan-dark">Artisanat Traditionnel</h4>
                    <p className="text-sm text-muted-foreground">
                      Découvrez les tapis, poteries et objets en cuivre faits à la main.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-6 bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">
                Découvrir le Maroc
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Expérience Marocaine"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-moroccan-accent/20 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-moroccan-primary/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </section>

        {/* World Cup 2030 Promo Section */}
        <section className="mb-16 bg-moroccan-primary/10 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-moroccan-dark font-['Amiri']">Coupe du Monde 2030</h2>
              <p className="text-muted-foreground mb-6">
                Préparez-vous pour la Coupe du Monde 2030 qui sera organisée conjointement par le Maroc, l'Espagne et le
                Portugal. Pour la première fois, la compétition se déroulera sur deux continents.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-moroccan-primary/20 p-2 rounded-full mr-3">
                    <MapPin className="h-5 w-5 text-moroccan-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-moroccan-dark">Trois Pays Hôtes</h4>
                    <p className="text-sm text-muted-foreground">
                      Découvrez les villes et stades qui accueilleront les matchs au Maroc, en Espagne et au Portugal.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-moroccan-primary/20 p-2 rounded-full mr-3">
                    <Calendar className="h-5 w-5 text-moroccan-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-moroccan-dark">Juin - Juillet 2030</h4>
                    <p className="text-sm text-muted-foreground">
                      Planifiez votre voyage dès maintenant pour vivre cet événement historique.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/coupe-du-monde">
                <Button className="mt-6 bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">
                  En Savoir Plus
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Coupe du Monde 2030"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-moroccan-accent/20 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-moroccan-primary/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

