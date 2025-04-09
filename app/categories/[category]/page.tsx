"use client"

// Mock data for categories
const categoryData = {
  monuments: {
    name: "Monuments",
    description: "Explorez les palais, mosquées, et sites historiques emblématiques du Maroc et du monde entier.",
    image: "/placeholder.svg?height=300&width=1200",
  },
  nature: {
    name: "Nature",
    description:
      "Découvrez des paysages à couper le souffle, des montagnes majestueuses aux déserts infinis et plages paradisiaques.",
    image: "/placeholder.svg?height=300&width=1200",
  },
  musees: {
    name: "Musées",
    description:
      "Plongez dans l'histoire, l'art et la culture à travers des collections fascinantes et des expositions uniques.",
    image: "/placeholder.svg?height=300&width=1200",
  },
  gastronomie: {
    name: "Gastronomie",
    description:
      "Savourez les délices culinaires locaux, des restaurants traditionnels aux cafés branchés et marchés colorés.",
    image: "/placeholder.svg?height=300&width=1200",
  },
  activites: {
    name: "Activités",
    description:
      "Vivez des expériences inoubliables, des excursions guidées aux aventures en plein air et ateliers culturels.",
    image: "/placeholder.svg?height=300&width=1200",
  },
  hebergements: {
    name: "Hébergements",
    description:
      "Trouvez le logement idéal pour votre séjour, des riads traditionnels aux hôtels de luxe et maisons d'hôtes.",
    image: "/placeholder.svg?height=300&width=1200",
  },
}

// Mock places for each category
const placesData = {
  monuments: [
    {
      id: 1,
      name: "Mosquée Hassan II",
      location: "Casablanca, Maroc",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      reviews: 12453,
      category: "Monument",
      price: "$$$",
    },
    {
      id: 2,
      name: "Koutoubia",
      location: "Marrakech, Maroc",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      reviews: 9876,
      category: "Monument",
      price: "$",
    },
    {
      id: 3,
      name: "Volubilis",
      location: "Meknès, Maroc",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.5,
      reviews: 5432,
      category: "Site Historique",
      price: "$",
    },
    {
      id: 4,
      name: "Mausolée Mohammed V",
      location: "Rabat, Maroc",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      reviews: 4567,
      category: "Monument",
      price: "$",
    },
    {
      id: 5,
      name: "Palais Bahia",
      location: "Marrakech, Maroc",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.4,
      reviews: 6789,
\

