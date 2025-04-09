"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, MessageSquare, Search } from "lucide-react"

// Mock data for Q&A
const questions = [
  {
    id: 1,
    title: "Quels documents sont nécessaires pour voyager entre le Maroc et l'Espagne pendant la Coupe du Monde 2030?",
    content:
      "Je prévois d'assister à des matchs au Maroc et en Espagne. Quels documents dois-je préparer pour voyager facilement entre ces deux pays?",
    author: {
      name: "Thomas D.",
      avatar: "/placeholder.svg?height=40&width=40",
      nationality: "France",
    },
    date: "2023-11-15",
    category: "Visa et Documents",
    answers: 3,
    likes: 12,
    isWorldCupRelated: true,
  },
  {
    id: 2,
    title: "Quel est le meilleur moyen de transport entre Casablanca et Marrakech?",
    content:
      "Je serai au Maroc pour la Coupe du Monde et je voudrais savoir quelle est la meilleure option pour voyager entre Casablanca et Marrakech?",
    author: {
      name: "Sarah J.",
      avatar: "/placeholder.svg?height=40&width=40",
      nationality: "Canada",
    },
    date: "2023-10-28",
    category: "Transport",
    answers: 5,
    likes: 8,
    isWorldCupRelated: true,
  },
  {
    id: 3,
    title: "Recommandations d'hébergement à Rabat pour une famille?",
    content:
      "Nous sommes une famille de 4 personnes et nous cherchons un hébergement confortable à Rabat. Avez-vous des recommandations?",
    author: {
      name: "Miguel A.",
      avatar: "/placeholder.svg?height=40&width=40",
      nationality: "Mexique",
    },
    date: "2023-11-02",
    category: "Hébergement",
    answers: 2,
    likes: 5,
    isWorldCupRelated: false,
  },
  {
    id: 4,
    title: "Comment acheter des billets pour les matchs de la Coupe du Monde 2030?",
    content:
      "Je voudrais savoir quand et comment je pourrai acheter des billets pour les matchs de la Coupe du Monde 2030 au Maroc, en Espagne et au Portugal?",
    author: {
      name: "Yuki T.",
      avatar: "/placeholder.svg?height=40&width=40",
      nationality: "Japon",
    },
    date: "2023-11-10",
    category: "Billets et Événements",
    answers: 4,
    likes: 15,
    isWorldCupRelated: true,
  },
  {
    id: 5,
    title: "Quels plats marocains faut-il absolument goûter?",
    content:
      "Je vais visiter le Maroc pour la première fois et je suis très intéressé par la cuisine locale. Quels sont les plats traditionnels que je devrais essayer?",
    author: {
      name: "Emma L.",
      avatar: "/placeholder.svg?height=40&width=40",
      nationality: "Royaume-Uni",
    },
    date: "2023-10-15",
    category: "Gastronomie",
    answers: 7,
    likes: 20,
    isWorldCupRelated: false,
  },
  {
    id: 6,
    title: "Sécurité dans les stades pendant la Coupe du Monde 2030",
    content:
      "Quelles mesures de sécurité sont prévues dans les stades marocains, espagnols et portugais pour la Coupe du Monde 2030?",
    author: {
      name: "Carlos R.",
      avatar: "/placeholder.svg?height=40&width=40",
      nationality: "Brésil",
    },
    date: "2023-11-05",
    category: "Sécurité",
    answers: 2,
    likes: 9,
    isWorldCupRelated: true,
  },
  {
    id: 7,
    title: "Meilleure période pour visiter Chefchaouen?",
    content:
      "Je voudrais visiter la ville bleue de Chefchaouen. Quelle est la meilleure période de l'année pour y aller?",
    author: {
      name: "Sophia K.",
      avatar: "/placeholder.svg?height=40&width=40",
      nationality: "Allemagne",
    },
    date: "2023-09-20",
    category: "Destinations",
    answers: 4,
    likes: 11,
    isWorldCupRelated: false,
  },
  {
    id: 8,
    title: "Transport entre le Portugal et l'Espagne pendant la Coupe du Monde",
    content:
      "Quelles seront les options de transport entre Lisbonne et Madrid pendant la Coupe du Monde 2030? Y aura-t-il des services spéciaux?",
    author: {
      name: "Ahmed M.",
      avatar: "/placeholder.svg?height=40&width=40",
      nationality: "Égypte",
    },
    date: "2023-11-12",
    category: "Transport",
    answers: 3,
    likes: 7,
    isWorldCupRelated: true,
  },
]

// Categories for filtering
const categories = [
  "Toutes les catégories",
  "Visa et Documents",
  "Transport",
  "Hébergement",
  "Billets et Événements",
  "Gastronomie",
  "Sécurité",
  "Destinations",
]

export default function QuestionsReponsesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Toutes les catégories")
  const [showWorldCupOnly, setShowWorldCupOnly] = useState(false)
  const [activeTab, setActiveTab] = useState("populaires")

  // Filter questions based on search query, category, and World Cup related
  const filteredQuestions = questions.filter((question) => {
    const matchesSearch =
      question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      question.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "Toutes les catégories" || question.category === selectedCategory
    const matchesWorldCup = !showWorldCupOnly || question.isWorldCupRelated

    return matchesSearch && matchesCategory && matchesWorldCup
  })

  // Sort questions based on active tab
  const sortedQuestions = [...filteredQuestions].sort((a, b) => {
    if (activeTab === "populaires") {
      return b.likes - a.likes
    } else if (activeTab === "recentes") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (activeTab === "sans-reponse") {
      return a.answers - b.answers
    }
    return 0
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative mb-8 rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=200&width=1200')",
            filter: "brightness(0.7)",
          }}
        ></div>
        <div className="absolute inset-0 bg-moroccan-primary/20 mix-blend-multiply"></div>
        <div className="relative z-10 p-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Amiri']">Questions & Réponses</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Posez vos questions et obtenez des réponses de la communauté et des experts locaux
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Rechercher des questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-moroccan-neutral/30 focus-visible:ring-moroccan-primary"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="world-cup-only"
            checked={showWorldCupOnly}
            onChange={(e) => setShowWorldCupOnly(e.target.checked)}
            className="rounded border-moroccan-neutral/30 text-moroccan-primary focus:ring-moroccan-primary"
          />
          <label
            htmlFor="world-cup-only"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Coupe du Monde 2030 uniquement
          </label>
        </div>
        <Button className="bg-moroccan-primary hover:bg-moroccan-primary/90 text-white">Poser une Question</Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="populaires" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger
            value="populaires"
            className="data-[state=active]:bg-moroccan-primary data-[state=active]:text-white"
          >
            Populaires
          </TabsTrigger>
          <TabsTrigger
            value="recentes"
            className="data-[state=active]:bg-moroccan-primary data-[state=active]:text-white"
          >
            Récentes
          </TabsTrigger>
          <TabsTrigger
            value="sans-reponse"
            className="data-[state=active]:bg-moroccan-primary data-[state=active]:text-white"
          >
            Sans Réponse
          </TabsTrigger>
        </TabsList>

        <TabsContent value="populaires" className="space-y-4">
          {renderQuestionsList(sortedQuestions)}
        </TabsContent>

        <TabsContent value="recentes" className="space-y-4">
          {renderQuestionsList(sortedQuestions)}
        </TabsContent>

        <TabsContent value="sans-reponse" className="space-y-4">
          {renderQuestionsList(sortedQuestions)}
        </TabsContent>
      </Tabs>
    </div>
  )

  function renderQuestionsList(questions: typeof sortedQuestions) {
    if (questions.length === 0) {
      return (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2 text-moroccan-dark">Aucune question trouvée</h3>
          <p className="text-muted-foreground">Essayez d'ajuster vos filtres ou votre recherche</p>
        </div>
      )
    }

    return questions.map((question) => (
      <Link href={`/questions-reponses/${question.id}`} key={question.id}>
        <Card className="hover:shadow-md transition-shadow border-moroccan-neutral/30">
          <CardContent className="p-6">
            <div className="flex justify-between mb-2">
              <Badge variant="secondary" className="text-xs">
                {question.category}
              </Badge>
              {question.isWorldCupRelated && (
                <Badge className="bg-moroccan-accent hover:bg-moroccan-accent text-white border-none text-xs">
                  Coupe du Monde 2030
                </Badge>
              )}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-moroccan-dark">{question.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{question.content}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={question.author.avatar} alt={question.author.name} />
                  <AvatarFallback>{question.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">{question.author.name}</span>
                    <Badge variant="outline" className="ml-2 text-xs">
                      {question.author.nationality}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{new Date(question.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-muted-foreground text-sm">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  <span>{question.likes}</span>
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span>{question.answers}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    ))
  }
}

