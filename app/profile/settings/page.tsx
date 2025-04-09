"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, ChevronLeft, Upload, Bell, Globe, Shield, User, Lock } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [formData, setFormData] = useState({
    name: "Mohammed Alami",
    email: "mohammed.alami@example.com",
    bio: "Passionné de voyages et de découvertes culturelles. J'adore explorer de nouveaux lieux et partager mes expériences.",
    location: "Rabat, Maroc",
    website: "",
    language: "fr",
    notifyReviews: true,
    notifyMessages: true,
    notifyTrips: true,
    notifyMarketing: false,
    profileVisibility: "public",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle save settings logic here
    console.log("Settings data:", formData)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/profile" className="mr-4">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold font-['Amiri'] text-moroccan-dark">Paramètres du Compte</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <Card className="border-moroccan-neutral/30 sticky top-4">
            <CardContent className="p-0">
              <Tabs orientation="vertical" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="flex flex-col h-auto p-0 bg-transparent">
                  <TabsTrigger
                    value="profile"
                    className="justify-start px-4 py-3 data-[state=active]:bg-moroccan-primary/10 data-[state=active]:text-moroccan-primary rounded-none border-l-2 border-transparent data-[state=active]:border-moroccan-primary"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profil
                  </TabsTrigger>
                  <TabsTrigger
                    value="account"
                    className="justify-start px-4 py-3 data-[state=active]:bg-moroccan-primary/10 data-[state=active]:text-moroccan-primary rounded-none border-l-2 border-transparent data-[state=active]:border-moroccan-primary"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Compte
                  </TabsTrigger>
                  <TabsTrigger
                    value="notifications"
                    className="justify-start px-4 py-3 data-[state=active]:bg-moroccan-primary/10 data-[state=active]:text-moroccan-primary rounded-none border-l-2 border-transparent data-[state=active]:border-moroccan-primary"
                  >
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger
                    value="privacy"
                    className="justify-start px-4 py-3 data-[state=active]:bg-moroccan-primary/10 data-[state=active]:text-moroccan-primary rounded-none border-l-2 border-transparent data-[state=active]:border-moroccan-primary"
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Confidentialité
                  </TabsTrigger>
                  <TabsTrigger
                    value="language"
                    className="justify-start px-4 py-3 data-[state=active]:bg-moroccan-primary/10 data-[state=active]:text-moroccan-primary rounded-none border-l-2 border-transparent data-[state=active]:border-moroccan-primary"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    Langue
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit}>
            {/* Profile Settings */}
            <TabsContent value="profile" className="mt-0">
              <Card className="border-moroccan-neutral/30 mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-['Amiri'] text-moroccan-dark">Informations du Profil</CardTitle>
                  <CardDescription>
                    Modifiez vos informations personnelles visibles par les autres utilisateurs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <Avatar className="h-20 w-20 border-2 border-moroccan-neutral/20">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
                      <AvatarFallback>{formData.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-moroccan-dark mb-1">Photo de profil</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Cette photo sera affichée sur votre profil et avec vos avis
                      </p>
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="text-moroccan-primary border-moroccan-primary"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Modifier
                        </Button>
                        <Button type="button" variant="outline" size="sm" className="text-muted-foreground">
                          Supprimer
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-moroccan-dark">
                        Nom Complet
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-moroccan-dark">
                        Localisation
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-moroccan-dark">
                      Biographie
                    </Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      rows={4}
                      className="border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
                    />
                    <p className="text-sm text-muted-foreground">
                      Partagez quelque chose sur vous, vos intérêts de voyage ou vos destinations préférées.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-moroccan-dark">
                      Site Web
                    </Label>
                    <Input
                      id="website"
                      name="website"
                      placeholder="https://votre-site-web.com"
                      value={formData.website}
                      onChange={handleChange}
                      className="border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="button" className="bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">
                    Enregistrer les modifications
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Account Settings */}
            <TabsContent value="account" className="mt-0">
              <Card className="border-moroccan-neutral/30 mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-['Amiri'] text-moroccan-dark">Informations du Compte</CardTitle>
                  <CardDescription>
                    Gérez les paramètres de votre compte et vos identifiants de connexion
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-moroccan-dark">
                      Adresse Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
                    />
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="font-medium text-moroccan-dark">Mot de passe</h3>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-moroccan-primary text-moroccan-primary hover:bg-moroccan-primary/10"
                    >
                      Changer le mot de passe
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex flex-col space-y-1">
                      <h3 className="font-medium text-moroccan-dark">Supprimer le compte</h3>
                      <p className="text-sm text-muted-foreground">
                        La suppression de votre compte est permanente et entraînera la perte de toutes vos données.
                      </p>
                    </div>
                    <Button type="button" variant="destructive">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Supprimer mon compte
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Settings */}
            <TabsContent value="notifications" className="mt-0">
              <Card className="border-moroccan-neutral/30">
                <CardHeader>
                  <CardTitle className="text-xl font-['Amiri'] text-moroccan-dark">
                    Préférences de Notifications
                  </CardTitle>
                  <CardDescription>Choisissez les notifications que vous souhaitez recevoir par email</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium text-moroccan-dark">Avis et réponses</h3>
                        <p className="text-sm text-muted-foreground">
                          Notifications quand quelqu'un réagit à vos avis ou y répond
                        </p>
                      </div>
                      <Switch
                        checked={formData.notifyReviews}
                        onCheckedChange={(checked) => handleSwitchChange("notifyReviews", checked)}
                        className="data-[state=checked]:bg-moroccan-primary"
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium text-moroccan-dark">Messages</h3>
                        <p className="text-sm text-muted-foreground">Notifications pour les nouveaux messages reçus</p>
                      </div>
                      <Switch
                        checked={formData.notifyMessages}
                        onCheckedChange={(checked) => handleSwitchChange("notifyMessages", checked)}
                        className="data-[state=checked]:bg-moroccan-primary"
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium text-moroccan-dark">Voyages</h3>
                        <p className="text-sm text-muted-foreground">
                          Rappels pour vos voyages planifiés et mises à jour
                        </p>
                      </div>
                      <Switch
                        checked={formData.notifyTrips}
                        onCheckedChange={(checked) => handleSwitchChange("notifyTrips", checked)}
                        className="data-[state=checked]:bg-moroccan-primary"
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium text-moroccan-dark">Marketing</h3>
                        <p className="text-sm text-muted-foreground">Offres, promotions et nouvelles fonctionnalités</p>
                      </div>
                      <Switch
                        checked={formData.notifyMarketing}
                        onCheckedChange={(checked) => handleSwitchChange("notifyMarketing", checked)}
                        className="data-[state=checked]:bg-moroccan-primary"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="button" className="bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">
                    Enregistrer les préférences
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Privacy Settings */}
            <TabsContent value="privacy" className="mt-0">
              <Card className="border-moroccan-neutral/30">
                <CardHeader>
                  <CardTitle className="text-xl font-['Amiri'] text-moroccan-dark">
                    Paramètres de Confidentialité
                  </CardTitle>
                  <CardDescription>Contrôlez qui peut voir votre profil et vos activités</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="profileVisibility" className="text-moroccan-dark">
                      Visibilité du profil
                    </Label>
                    <Select
                      value={formData.profileVisibility}
                      onValueChange={(value) => handleSelectChange("profileVisibility", value)}
                    >
                      <SelectTrigger className="border-moroccan-neutral/30 focus:ring-moroccan-primary">
                        <SelectValue placeholder="Choisir la visibilité" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public - Visible par tous</SelectItem>
                        <SelectItem value="followers">Abonnés uniquement</SelectItem>
                        <SelectItem value="private">Privé - Visible uniquement par vous</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground mt-1">
                      Détermine qui peut voir votre profil, vos avis et vos photos
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="font-medium text-moroccan-dark">Données personnelles</h3>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-moroccan-primary text-moroccan-primary hover:bg-moroccan-primary/10"
                    >
                      Télécharger mes données
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="button" className="bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">
                    Enregistrer les paramètres
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Language Settings */}
            <TabsContent value="language" className="mt-0">
              <Card className="border-moroccan-neutral/30">
                <CardHeader>
                  <CardTitle className="text-xl font-['Amiri'] text-moroccan-dark">Langue et Région</CardTitle>
                  <CardDescription>Définissez votre langue et vos préférences régionales</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="language" className="text-moroccan-dark">
                      Langue d'affichage
                    </Label>
                    <Select value={formData.language} onValueChange={(value) => handleSelectChange("language", value)}>
                      <SelectTrigger className="border-moroccan-neutral/30 focus:ring-moroccan-primary">
                        <SelectValue placeholder="Choisir une langue" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="ar">العربية</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="button" className="bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">
                    Appliquer les changements
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </form>
        </div>
      </div>
    </div>
  )
}

