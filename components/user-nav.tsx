"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, LogOut, Settings, Heart, MapPin } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

export function UserNav() {
  const { isLoggedIn, user, logout } = useAuth()

  if (!isLoggedIn) {
    return (
      <div className="flex items-center gap-4">
        <Link href="/auth/login">
          <Button
            variant="ghost"
            className="text-moroccan-dark hover:text-moroccan-primary hover:bg-moroccan-primary/10"
          >
            Se connecter
          </Button>
        </Link>
        <Link href="/auth/register">
          <Button className="bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">S'inscrire</Button>
        </Link>
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8 border-2 border-moroccan-primary/20">
            <AvatarImage src={user?.avatarUrl || "/placeholder.svg?height=32&width=32"} alt={user?.name || "User"} />
            <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/profile">
          <DropdownMenuItem className="hover:bg-moroccan-primary/10 hover:text-moroccan-primary cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Profil</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/profile/favorites">
          <DropdownMenuItem className="hover:bg-moroccan-primary/10 hover:text-moroccan-primary cursor-pointer">
            <Heart className="mr-2 h-4 w-4" />
            <span>Favoris</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/profile/trips">
          <DropdownMenuItem className="hover:bg-moroccan-primary/10 hover:text-moroccan-primary cursor-pointer">
            <MapPin className="mr-2 h-4 w-4" />
            <span>Mes Voyages</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/profile/settings">
          <DropdownMenuItem className="hover:bg-moroccan-primary/10 hover:text-moroccan-primary cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Paramètres</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="hover:bg-moroccan-primary/10 hover:text-moroccan-primary cursor-pointer"
          onClick={() => logout()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Déconnexion</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

