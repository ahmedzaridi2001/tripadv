"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    reason: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, reason: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Contact form data:", formData)
    // Reset form or show success message
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative mb-16 rounded-lg overflow-hidden">
        <div className="relative h-[300px] w-full">
          <Image src="/placeholder.svg?height=300&width=1200" alt="Contact" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-moroccan-primary/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Amiri']">Contactez-Nous</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Nous sommes là pour répondre à vos questions et vous aider à planifier votre prochain voyage
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-2xl font-bold text-moroccan-dark font-['Amiri'] mb-6">Informations de Contact</h2>

          <Card className="border-moroccan-neutral/30">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-moroccan-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-moroccan-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-moroccan-dark mb-1">Adresse</h3>
                  <p className="text-muted-foreground">
                    123 Avenue Mohammed V<br />
                    Rabat, 10000
                    <br />
                    Maroc
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-moroccan-neutral/30">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-moroccan-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-moroccan-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-moroccan-dark mb-1">Téléphone</h3>
                  <p className="text-muted-foreground">
                    +212 5 37 12 34 56
                    <br />
                    +212 6 61 23 45 67
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-moroccan-neutral/30">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-moroccan-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-moroccan-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-moroccan-dark mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    info@maghrebvoyage.com
                    <br />
                    support@maghrebvoyage.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-moroccan-neutral/30">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-moroccan-primary/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-moroccan-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-moroccan-dark mb-1">Heures d'ouverture</h3>
                  <p className="text-muted-foreground">
                    Lundi - Vendredi: 9h00 - 18h00
                    <br />
                    Samedi: 10h00 - 15h00
                    <br />
                    Dimanche: Fermé
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="border-moroccan-neutral/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-moroccan-dark font-['Amiri'] mb-6">Envoyez-nous un Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-moroccan-dark">
                      Nom Complet
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Mohammed Alami"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-moroccan-dark">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="mohammed.alami@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="reason" className="text-moroccan-dark">
                      Raison du Contact
                    </Label>
                    <Select value={formData.reason} onValueChange={handleSelectChange}>
                      <SelectTrigger className="border-moroccan-neutral/30 focus:ring-moroccan-primary">
                        <SelectValue placeholder="Sélectionnez une raison" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Question Générale</SelectItem>
                        <SelectItem value="support">Support Technique</SelectItem>
                        <SelectItem value="booking">Réservation</SelectItem>
                        <SelectItem value="feedback">Commentaires</SelectItem>
                        <SelectItem value="partnership">Partenariat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-moroccan-dark">
                      Sujet
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Sujet de votre message"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-moroccan-dark">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Votre message..."
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
                  />
                </div>

                <Button type="submit" className="bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer le Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-moroccan-dark font-['Amiri'] mb-6">Notre Emplacement</h2>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden border border-moroccan-neutral/30">
          <Image src="/placeholder.svg?height=400&width=1200" alt="Map" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-md">
              <h3 className="font-medium text-moroccan-dark mb-2">MaghrebVoyage</h3>
              <p className="text-sm text-muted-foreground">123 Avenue Mohammed V, Rabat, 10000, Maroc</p>
              <Button className="mt-3 bg-moroccan-primary hover:bg-moroccan-primary/90 text-white text-sm" size="sm">
                Obtenir l'itinéraire
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16 py-12 px-6 bg-moroccan-primary/5 rounded-lg zellige-pattern">
        <h2 className="text-2xl font-bold text-center text-moroccan-dark font-['Amiri'] mb-8">
          Questions Fréquemment Posées
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="border-moroccan-neutral/30 bg-white/90">
            <CardContent className="p-6">
              <h3 className="font-medium text-moroccan-dark mb-2">Comment puis-je créer un compte?</h3>
              <p className="text-muted-foreground">
                Vous pouvez créer un compte en cliquant sur "S'inscrire" dans le menu en haut à droite. Remplissez le
                formulaire avec vos informations et vous serez prêt à explorer.
              </p>
            </CardContent>
          </Card>

          <Card className="border-moroccan-neutral/30 bg-white/90">
            <CardContent className="p-6">
              <h3 className="font-medium text-moroccan-dark mb-2">Comment puis-je laisser un avis?</h3>
              <p className="text-muted-foreground">
                Pour laisser un avis, vous devez être connecté à votre compte. Ensuite, naviguez vers la page du lieu
                que vous souhaitez évaluer et cliquez sur "Écrire un avis".
              </p>
            </CardContent>
          </Card>

          <Card className="border-moroccan-neutral/30 bg-white/90">
            <CardContent className="p-6">
              <h3 className="font-medium text-moroccan-dark mb-2">
                Comment fonctionnent les recommandations personnalisées?
              </h3>
              <p className="text-muted-foreground">
                Nos recommandations sont basées sur vos préférences, votre historique de navigation, vos avis précédents
                et d'autres facteurs comme votre âge et votre nationalité.
              </p>
            </CardContent>
          </Card>

          <Card className="border-moroccan-neutral/30 bg-white/90">
            <CardContent className="p-6">
              <h3 className="font-medium text-moroccan-dark mb-2">
                Puis-je planifier un itinéraire complet sur votre plateforme?
              </h3>
              <p className="text-muted-foreground">
                Oui, notre fonctionnalité "Planifier un Voyage" vous permet de créer des itinéraires personnalisés en
                ajoutant des lieux à visiter, des hébergements et des activités.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold text-moroccan-dark font-['Amiri'] mb-4">Restez Informé</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Abonnez-vous à notre newsletter pour recevoir les dernières nouvelles, conseils de voyage et offres spéciales.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            placeholder="Votre adresse email"
            type="email"
            className="border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
          />
          <Button className="bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">S'abonner</Button>
        </div>
      </section>
    </div>
  )
}

