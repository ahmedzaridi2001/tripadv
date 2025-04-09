import type React from "react"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/AuthContext"
import Link from "next/link"
import "./globals.css"

export const metadata = {
  title: "Morocco Explorer - Guide Officiel pour la Coupe du Monde 2030",
  description:
    "Découvrez le Maroc, l'Espagne et le Portugal - Pays hôtes de la Coupe du Monde 2030. Trouvez des hébergements, restaurants, itinéraires et conseils pour votre voyage.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <header className="border-b border-moroccan-neutral/20 bg-white">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                  <MainNav />
                  <UserNav />
                </div>
              </header>
              {children}
              <footer className="bg-moroccan-dark text-white py-12 mt-auto">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                      <h3 className="font-bold text-lg mb-4 font-['Amiri'] text-moroccan-accent">MaghrebVoyage</h3>
                      <p className="text-white/80 text-sm">
                        Découvrez votre prochaine aventure avec des recommandations personnalisées et des avis
                        authentiques.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-moroccan-accent">Explorer</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/destinations" className="text-white/80 hover:text-white">
                            Destinations
                          </Link>
                        </li>
                        <li>
                          <Link href="/categories" className="text-white/80 hover:text-white">
                            Catégories
                          </Link>
                        </li>
                        <li>
                          <Link href="/reviews" className="text-white/80 hover:text-white">
                            Avis
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-moroccan-accent">À Propos</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/about" className="text-white/80 hover:text-white">
                            À Propos de Nous
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact" className="text-white/80 hover:text-white">
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link href="/careers" className="text-white/80 hover:text-white">
                            Carrières
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-moroccan-accent">Légal</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/terms" className="text-white/80 hover:text-white">
                            Conditions d'Utilisation
                          </Link>
                        </li>
                        <li>
                          <Link href="/privacy" className="text-white/80 hover:text-white">
                            Politique de Confidentialité
                          </Link>
                        </li>
                        <li>
                          <Link href="/cookies" className="text-white/80 hover:text-white">
                            Politique de Cookies
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
                    © {new Date().getFullYear()} MaghrebVoyage. Tous droits réservés.
                  </div>
                </div>
              </footer>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'