import React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function MainNav() {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="flex items-center font-bold text-xl text-moroccan-primary">
        <div className="relative w-8 h-8 mr-2">
          <Image src="/logo/hamsa.svg" alt="Logo" width={32} height={32} />
        </div>
        <span className="font-['Amiri'] tracking-wide">MaghrebVoyage</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-moroccan-dark hover:text-moroccan-primary">
              Destinations
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] zellige-pattern">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-moroccan-primary p-6 no-underline outline-none focus:shadow-md"
                      href="/destinations"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium text-white">Destinations Populaires</div>
                      <p className="text-sm leading-tight text-white/90">
                        Découvrez les lieux les plus visités au Maroc et dans le monde
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/destinations/maroc" title="Maroc">
                  Marrakech, Fès, Chefchaouen, Essaouira, et plus
                </ListItem>
                <ListItem href="/destinations/afrique" title="Afrique">
                  Égypte, Tunisie, Sénégal, Afrique du Sud, et plus
                </ListItem>
                <ListItem href="/destinations/monde" title="Monde">
                  Europe, Asie, Amériques, et plus
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/coupe-du-monde" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  "text-moroccan-dark hover:text-moroccan-primary",
                )}
              >
                Coupe du Monde
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/hotels" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  "text-moroccan-dark hover:text-moroccan-primary",
                )}
              >
                Hébergements
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/restaurants" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  "text-moroccan-dark hover:text-moroccan-primary",
                )}
              >
                Restaurants
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/itineraires" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  "text-moroccan-dark hover:text-moroccan-primary",
                )}
              >
                Itinéraires
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/questions-reponses" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  "text-moroccan-dark hover:text-moroccan-primary",
                )}
              >
                Questions & Réponses
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-moroccan-dark hover:text-moroccan-primary">
              Catégories
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] moroccan-pattern">
                <ListItem href="/categories/monuments" title="Monuments">
                  Palais, mosquées, et sites historiques
                </ListItem>
                <ListItem href="/categories/nature" title="Nature">
                  Montagnes, déserts, plages, et merveilles naturelles
                </ListItem>
                <ListItem href="/categories/musees" title="Musées">
                  Art, histoire, et culture
                </ListItem>
                <ListItem href="/categories/gastronomie" title="Gastronomie">
                  Restaurants, cafés, et expériences culinaires
                </ListItem>
                <ListItem href="/categories/activites" title="Activités">
                  Tours, aventures, et expériences
                </ListItem>
                <ListItem href="/categories/hebergements" title="Hébergements">
                  Riads, hôtels, et séjours uniques
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  "text-moroccan-dark hover:text-moroccan-primary",
                )}
              >
                À Propos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-moroccan-primary/10 hover:text-moroccan-primary focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

