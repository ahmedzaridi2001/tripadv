import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Globe, Star, Award, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative mb-16 rounded-lg overflow-hidden">
        <div className="relative h-[400px] w-full">
          <Image src="/placeholder.svg?height=400&width=1200" alt="À Propos" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-moroccan-primary/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Amiri']">À Propos de MaghrebVoyage</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Votre guide ultime pour découvrir les merveilles du Maroc et des destinations du monde entier
            </p>
          </div>
        </div>

        {/* Decorative Moroccan arch pattern at the bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 C240,60 480,60 720,60 C960,60 1200,60 1440,0 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-1 h-8 bg-moroccan-primary mr-3"></div>
              <h2 className="text-3xl font-bold text-moroccan-dark font-['Amiri']">Notre Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Chez MaghrebVoyage, notre mission est de vous aider à découvrir la beauté et la richesse culturelle du
              Maroc et du monde entier. Nous croyons que chaque voyage est une opportunité d'apprentissage, de
              croissance et de connexion.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Fondé en 2020, MaghrebVoyage est né de la passion pour les voyages et de l'amour pour le patrimoine
              marocain. Notre plateforme offre des informations détaillées, des avis authentiques et des recommandations
              personnalisées pour vous aider à planifier des expériences de voyage inoubliables.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-moroccan-primary">
                <Users className="h-5 w-5 mr-2" />
                <span className="font-medium">50K+ utilisateurs</span>
              </div>
              <div className="flex items-center text-moroccan-primary">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="font-medium">10K+ lieux</span>
              </div>
              <div className="flex items-center text-moroccan-primary">
                <Star className="h-5 w-5 mr-2" />
                <span className="font-medium">100K+ avis</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=400&width=600" alt="Notre mission" fill className="object-cover" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-moroccan-primary/20 rounded-lg -z-10"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-moroccan-accent/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20 py-16 px-6 bg-moroccan-primary/5 rounded-lg zellige-pattern">
        <h2 className="text-3xl font-bold mb-12 text-center text-moroccan-dark font-['Amiri']">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white border-moroccan-neutral/20 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="bg-moroccan-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-moroccan-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-moroccan-dark">Authenticité</h3>
              <p className="text-muted-foreground">
                Nous valorisons l'authenticité dans chaque aspect de notre plateforme, des avis d'utilisateurs aux
                recommandations de voyage.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-moroccan-neutral/20 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="bg-moroccan-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-moroccan-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-moroccan-dark">Inclusion</h3>
              <p className="text-muted-foreground">
                Nous célébrons la diversité des cultures et veillons à ce que notre plateforme soit accessible et utile
                à tous les voyageurs.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-moroccan-neutral/20 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="bg-moroccan-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-moroccan-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-moroccan-dark">Excellence</h3>
              <p className="text-muted-foreground">
                Nous nous efforçons d'offrir une expérience utilisateur exceptionnelle et des informations de la plus
                haute qualité.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <div className="flex items-center mb-8">
          <div className="w-1 h-8 bg-moroccan-secondary mr-3"></div>
          <h2 className="text-3xl font-bold text-moroccan-dark font-['Amiri']">Notre Équipe</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          MaghrebVoyage est animé par une équipe passionnée de voyageurs, d'experts en tourisme et de technologues qui
          partagent un amour commun pour l'exploration et la découverte.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="relative h-56 w-full mb-4 rounded-lg overflow-hidden group">
              <Image
                src="/placeholder.svg?height=250&width=200"
                alt="Membre de l'équipe"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-moroccan-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium">Fondateur & CEO</p>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-moroccan-dark">Karim Benali</h3>
            <p className="text-sm text-muted-foreground">Fondateur & CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <div className="relative h-56 w-full mb-4 rounded-lg overflow-hidden group">
              <Image
                src="/placeholder.svg?height=250&width=200"
                alt="Membre de l'équipe"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-moroccan-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium">Directrice Marketing</p>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-moroccan-dark">Leila Tazi</h3>
            <p className="text-sm text-muted-foreground">Directrice Marketing</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <div className="relative h-56 w-full mb-4 rounded-lg overflow-hidden group">
              <Image
                src="/placeholder.svg?height=250&width=200"
                alt="Membre de l'équipe"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-moroccan-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium">Responsable Technique</p>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-moroccan-dark">Rachid Mansouri</h3>
            <p className="text-sm text-muted-foreground">Responsable Technique</p>
          </div>

          {/* Team Member 4 */}
          <div className="text-center">
            <div className="relative h-56 w-full mb-4 rounded-lg overflow-hidden group">
              <Image
                src="/placeholder.svg?height=250&width=200"
                alt="Membre de l'équipe"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-moroccan-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium">Experte en Contenu</p>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-moroccan-dark">Nadia Ouazzani</h3>
            <p className="text-sm text-muted-foreground">Experte en Contenu</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-20">
        <div className="flex items-center mb-8">
          <div className="w-1 h-8 bg-moroccan-primary mr-3"></div>
          <h2 className="text-3xl font-bold text-moroccan-dark font-['Amiri']">Ce Que Disent Nos Utilisateurs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <Card className="bg-white border-moroccan-neutral/20 shadow-md">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6 text-center italic">
                "MaghrebVoyage a transformé ma façon de voyager au Maroc. Grâce à leurs recommandations personnalisées,
                j'ai découvert des endroits que je n'aurais jamais trouvés autrement."
              </p>
              <div className="flex items-center justify-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                  <Image src="/placeholder.svg?height=50&width=50" alt="Utilisateur" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-moroccan-dark">Sophie Dubois</h4>
                  <p className="text-sm text-muted-foreground">Paris, France</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className="bg-white border-moroccan-neutral/20 shadow-md">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6 text-center italic">
                "En tant que voyageur fréquent au Maroc, je trouve que les avis et les informations sur MaghrebVoyage
                sont incroyablement précis et utiles. C'est ma référence pour planifier chaque voyage."
              </p>
              <div className="flex items-center justify-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                  <Image src="/placeholder.svg?height=50&width=50" alt="Utilisateur" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-moroccan-dark">John Smith</h4>
                  <p className="text-sm text-muted-foreground">Londres, UK</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card className="bg-white border-moroccan-neutral/20 shadow-md">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6 text-center italic">
                "J'apprécie particulièrement la fonctionnalité de planification de voyage. Elle m'a permis d'organiser
                un itinéraire parfait pour notre lune de miel au Maroc, en tenant compte de nos intérêts et
                préférences."
              </p>
              <div className="flex items-center justify-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                  <Image src="/placeholder.svg?height=50&width=50" alt="Utilisateur" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-moroccan-dark">Maria Garcia</h4>
                  <p className="text-sm text-muted-foreground">Madrid, Espagne</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-moroccan-dark rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4 font-['Amiri']">Prêt à Explorer?</h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Rejoignez notre communauté de voyageurs passionnés et commencez à planifier votre prochaine aventure dès
          aujourd'hui.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/register">
            <Button className="bg-moroccan-primary hover:bg-moroccan-primary/90 text-white min-w-[150px]">
              S'inscrire
            </Button>
          </Link>
          <Link href="/destinations">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 min-w-[150px]">
              Explorer
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Info */}
      <section className="mt-20 mb-8">
        <Separator className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-medium text-moroccan-dark mb-2">Adresse</h3>
            <p className="text-muted-foreground">
              123 Avenue Mohammed V<br />
              Rabat, 10000
              <br />
              Maroc
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium text-moroccan-dark mb-2">Contact</h3>
            <p className="text-muted-foreground">
              info@maghrebvoyage.com
              <br />
              +212 5 37 12 34 56
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium text-moroccan-dark mb-2">Suivez-nous</h3>
            <div className="flex justify-center space-x-4">
              <Link href="#" className="text-moroccan-primary hover:text-moroccan-primary/80">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-moroccan-primary hover:text-moroccan-primary/80">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-moroccan-primary hover:text-moroccan-primary/80">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.
616 11.616 0 006.29 1.84"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

