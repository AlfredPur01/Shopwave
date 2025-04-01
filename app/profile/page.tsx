import Link from "next/link"
import Image from "next/image"
import { ChevronRight, User, Package, Heart, CreditCard, Settings, LogOut, Upload, Edit2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container py-2">
          <nav className="flex text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="font-medium text-foreground">My Account</span>
          </nav>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                      <Upload className="h-4 w-4" />
                      <span className="sr-only">Upload avatar</span>
                    </Button>
                  </div>
                  <CardTitle>John Doe</CardTitle>
                  <CardDescription>john.doe@example.com</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="px-0">
                <nav className="flex flex-col space-y-1">
                  <Button variant="ghost" className="justify-start rounded-none h-12 px-6">
                    <User className="mr-2 h-5 w-5" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="justify-start rounded-none h-12 px-6">
                    <Package className="mr-2 h-5 w-5" />
                    Orders
                  </Button>
                  <Button variant="ghost" className="justify-start rounded-none h-12 px-6">
                    <Heart className="mr-2 h-5 w-5" />
                    Wishlist
                  </Button>
                  <Button variant="ghost" className="justify-start rounded-none h-12 px-6">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Payment Methods
                  </Button>
                  <Button variant="ghost" className="justify-start rounded-none h-12 px-6">
                    <Settings className="mr-2 h-5 w-5" />
                    Settings
                  </Button>
                  <Separator />
                  <Button
                    variant="ghost"
                    className="justify-start rounded-none h-12 px-6 text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="mr-2 h-5 w-5" />
                    Logout
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <Tabs defaultValue="profile">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 mb-6">
                <TabsTrigger
                  value="profile"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="orders"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
                >
                  Orders
                </TabsTrigger>
                <TabsTrigger
                  value="wishlist"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
                >
                  Wishlist
                </TabsTrigger>
                <TabsTrigger
                  value="addresses"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
                >
                  Addresses
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details here.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" defaultValue="Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell us about yourself"
                        className="min-h-[100px]"
                        defaultValue="I'm a tech enthusiast who loves shopping for the latest gadgets and electronics."
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">Save Changes</Button>
                  </CardFooter>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Change your password here.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">Update Password</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                    <CardDescription>View your recent orders and their status.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <div key={order.id} className="border rounded-lg overflow-hidden">
                          <div className="bg-muted/50 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Order #{order.id}</span>
                                <Badge
                                  className={
                                    order.status === "Delivered"
                                      ? "bg-green-500"
                                      : order.status === "Processing"
                                        ? "bg-blue-500"
                                        : order.status === "Shipped"
                                          ? "bg-orange-500"
                                          : "bg-gray-500"
                                  }
                                >
                                  {order.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Track Order
                              </Button>
                              <Button variant="ghost" size="sm">
                                View Details
                              </Button>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="space-y-4">
                              {order.items.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                  <div className="relative h-16 w-16 rounded-md overflow-hidden bg-muted shrink-0">
                                    <Image
                                      src={item.image || "/placeholder.svg"}
                                      alt={item.name}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-medium">{item.name}</h4>
                                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-medium">${item.price.toFixed(2)}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-muted/50 p-4 flex justify-between">
                            <span className="font-medium">Total</span>
                            <span className="font-medium">${order.total.toFixed(2)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline">Load More Orders</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="wishlist">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Wishlist</CardTitle>
                    <CardDescription>Items you've saved for later.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {wishlistItems.map((item) => (
                        <div key={item.id} className="relative rounded-lg overflow-hidden bg-white shadow-sm border">
                          <div className="absolute top-2 right-2 z-10">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-full bg-white/80 hover:bg-white text-red-500"
                            >
                              <Heart className="h-4 w-4 fill-current" />
                              <span className="sr-only">Remove from wishlist</span>
                            </Button>
                          </div>
                          <div className="relative h-48">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium mb-1">{item.name}</h3>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill={i < Math.floor(item.rating) ? "#FFB800" : "#D1D5DB"}
                                    className="w-4 h-4"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-xs text-muted-foreground">{item.rating}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-orange-500">${item.price.toFixed(2)}</span>
                              <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="addresses">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Your Addresses</CardTitle>
                        <CardDescription>Manage your shipping and billing addresses.</CardDescription>
                      </div>
                      <Button>Add New Address</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {addresses.map((address) => (
                        <div key={address.id} className="border rounded-lg p-4 relative">
                          {address.default && <Badge className="absolute top-4 right-4 bg-green-500">Default</Badge>}
                          <h3 className="font-medium mb-2">{address.name}</h3>
                          <p className="text-sm text-muted-foreground mb-1">{address.street}</p>
                          <p className="text-sm text-muted-foreground mb-1">
                            {address.city}, {address.state} {address.zip}
                          </p>
                          <p className="text-sm text-muted-foreground mb-4">{address.country}</p>
                          <p className="text-sm text-muted-foreground mb-4">Phone: {address.phone}</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Edit2 className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                            {!address.default && (
                              <Button variant="ghost" size="sm">
                                Set as Default
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample data
const orders = [
  {
    id: "ORD-12345",
    date: "March 15, 2025",
    status: "Delivered",
    total: 299.97,
    items: [
      {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        quantity: 1,
        image: "/placeholder.svg?height=64&width=64",
      },
      {
        id: 2,
        name: "Smart Watch",
        price: 199.98,
        quantity: 1,
        image: "/placeholder.svg?height=64&width=64",
      },
    ],
  },
  {
    id: "ORD-12344",
    date: "March 10, 2025",
    status: "Shipped",
    total: 59.99,
    items: [
      {
        id: 3,
        name: "Bluetooth Speaker",
        price: 59.99,
        quantity: 1,
        image: "/placeholder.svg?height=64&width=64",
      },
    ],
  },
  {
    id: "ORD-12343",
    date: "February 28, 2025",
    status: "Processing",
    total: 149.99,
    items: [
      {
        id: 4,
        name: "Fitness Tracker",
        price: 49.99,
        quantity: 1,
        image: "/placeholder.svg?height=64&width=64",
      },
      {
        id: 5,
        name: "Wireless Earbuds",
        price: 100.0,
        quantity: 1,
        image: "/placeholder.svg?height=64&width=64",
      },
    ],
  },
]

const wishlistItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 79.99,
    rating: 4.3,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 59.99,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=200",
  },
]

const addresses = [
  {
    id: 1,
    name: "John Doe",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "United States",
    phone: "+1 (555) 123-4567",
    default: true,
  },
  {
    id: 2,
    name: "John Doe",
    street: "456 Park Ave",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    country: "United States",
    phone: "+1 (555) 987-6543",
    default: false,
  },
]

