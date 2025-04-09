"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "@/components/ui/chart"
import { Users, MapPin, Star, TrendingUp, MoreHorizontal, Edit, Trash2, Eye, Search } from "lucide-react"

// Mock data for dashboard
const overviewData = [
  {
    title: "Total Users",
    value: "12,345",
    change: "+12%",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Total Places",
    value: "8,765",
    change: "+8%",
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    title: "Total Reviews",
    value: "45,678",
    change: "+15%",
    icon: <Star className="h-5 w-5" />,
  },
  {
    title: "Monthly Visits",
    value: "1.2M",
    change: "+23%",
    icon: <TrendingUp className="h-5 w-5" />,
  },
]

// Mock data for users
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    nationality: "USA",
    age: 32,
    status: "Active",
    joinDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    nationality: "UK",
    age: 28,
    status: "Active",
    joinDate: "2023-02-20",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.j@example.com",
    nationality: "Canada",
    age: 35,
    status: "Inactive",
    joinDate: "2023-01-05",
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma.w@example.com",
    nationality: "Australia",
    age: 26,
    status: "Active",
    joinDate: "2023-03-10",
  },
  {
    id: 5,
    name: "Luis Garcia",
    email: "luis.g@example.com",
    nationality: "Spain",
    age: 30,
    status: "Active",
    joinDate: "2023-02-28",
  },
]

// Mock data for places
const places = [
  {
    id: 1,
    name: "Eiffel Tower",
    location: "Paris, France",
    category: "Landmark",
    rating: 4.7,
    reviews: 12453,
    status: "Approved",
  },
  {
    id: 2,
    name: "Colosseum",
    location: "Rome, Italy",
    category: "Historic Site",
    rating: 4.8,
    reviews: 10982,
    status: "Approved",
  },
  {
    id: 3,
    name: "Sagrada Familia",
    location: "Barcelona, Spain",
    category: "Architecture",
    rating: 4.9,
    reviews: 9876,
    status: "Pending",
  },
  {
    id: 4,
    name: "Grand Canyon",
    location: "Arizona, USA",
    category: "Natural Wonder",
    rating: 4.9,
    reviews: 15678,
    status: "Approved",
  },
  {
    id: 5,
    name: "Louvre Museum",
    location: "Paris, France",
    category: "Museum",
    rating: 4.6,
    reviews: 11234,
    status: "Approved",
  },
]

// Mock data for charts
const usersByCountry = [
  { name: "USA", value: 35 },
  { name: "UK", value: 20 },
  { name: "Canada", value: 15 },
  { name: "Australia", value: 10 },
  { name: "Other", value: 20 },
]

const monthlyUsers = [
  { name: "Jan", users: 1200 },
  { name: "Feb", users: 1900 },
  { name: "Mar", users: 2100 },
  { name: "Apr", users: 2400 },
  { name: "May", users: 2800 },
  { name: "Jun", users: 3200 },
]

const placesByCategory = [
  { name: "Landmark", places: 1200 },
  { name: "Historic Site", places: 980 },
  { name: "Museum", places: 850 },
  { name: "Natural Wonder", places: 620 },
  { name: "Architecture", places: 540 },
  { name: "Beach", places: 480 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {overviewData.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{item.title}</p>
                  <div className="flex items-end gap-2">
                    <h3 className="text-2xl font-bold">{item.value}</h3>
                    <span className="text-xs font-medium text-green-600 mb-1">{item.change}</span>
                  </div>
                </div>
                <div className="bg-primary/10 p-2 rounded-full">{item.icon}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>Monthly new user registrations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyUsers}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Users by Country</CardTitle>
            <CardDescription>Distribution of users by nationality</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={usersByCountry}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {usersByCountry.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Places by Category</CardTitle>
            <CardDescription>Number of places in each category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={placesByCategory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="places" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for Users and Places */}
      <Tabs defaultValue="users" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="places">Places</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage registered users</CardDescription>
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Nationality</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users
                    .filter(
                      (user) =>
                        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        user.email.toLowerCase().includes(searchQuery.toLowerCase()),
                    )
                    .map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.nationality}</TableCell>
                        <TableCell>{user.age}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                          >
                            {user.status}
                          </span>
                        </TableCell>
                        <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="places">
          <Card>
            <CardHeader>
              <CardTitle>Place Management</CardTitle>
              <CardDescription>Manage places and attractions</CardDescription>
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search places..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Reviews</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {places
                    .filter(
                      (place) =>
                        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        place.location.toLowerCase().includes(searchQuery.toLowerCase()),
                    )
                    .map((place) => (
                      <TableRow key={place.id}>
                        <TableCell className="font-medium">{place.name}</TableCell>
                        <TableCell>{place.location}</TableCell>
                        <TableCell>{place.category}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 mr-1" />
                            <span>{place.rating}</span>
                          </div>
                        </TableCell>
                        <TableCell>{place.reviews.toLocaleString()}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              place.status === "Approved"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {place.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

