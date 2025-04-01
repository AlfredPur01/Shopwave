import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-full bg-orange-500 p-1">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">ShopWave</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/products" className="text-sm font-medium hover:underline underline-offset-4">
                All Products
              </Link>
              <Link href="/categories" className="text-sm font-medium hover:underline underline-offset-4">
                Categories
              </Link>
              <Link href="/deals" className="text-sm font-medium hover:underline underline-offset-4">
                Deals
              </Link>
              <Link href="/new" className="text-sm font-medium hover:underline underline-offset-4">
                What's New
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center gap-4 md:w-1/3">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search products..." className="w-full pl-8 rounded-full bg-muted" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/search" className="md:hidden">
              <Search className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Link>
            <Link href="/wishlist">
              <div className="relative">
                <Heart className="h-6 w-6" />
                <span className="sr-only">Wishlist</span>
                <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-orange-500 text-white">
                  3
                </Badge>
              </div>
            </Link>
            <Link href="/cart">
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="sr-only">Cart</span>
                <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-orange-500 text-white">
                  2
                </Badge>
              </div>
            </Link>
            <Link href="/profile">
              <User className="h-6 w-6" />
              <span className="sr-only">Profile</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden">
                  <Image src="/placeholder.svg?height=500&width=1200" alt="Hero image" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-10">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Summer Collection 2025</h1>
                    <p className="text-white text-lg md:text-xl mb-6 max-w-md">
                      Discover the latest trends and styles for the upcoming summer season.
                    </p>
                    <div className="flex gap-4">
                      <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                        Shop Now
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden">
                  <Image src="/placeholder.svg?height=500&width=1200" alt="Hero image" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-10">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Flash Sale - 50% Off</h1>
                    <p className="text-white text-lg md:text-xl mb-6 max-w-md">
                      Limited time offer on selected items. Don't miss out!
                    </p>
                    <div className="flex gap-4">
                      <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                        Shop Now
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                      >
                        View Deals
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>

        {/* Categories Section */}
        <section className="py-12 container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={`/category/${category.slug}`} className="group">
                <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Products</h2>
            <Tabs defaultValue="trending" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="bestsellers">Bestsellers</TabsTrigger>
                  <TabsTrigger value="new">New Arrivals</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="trending" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {products.slice(0, 8).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="bestsellers" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {products.slice(4, 12).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="new" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {products.slice(8, 16).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="py-12 container">
          <div className="relative h-[200px] md:h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=1200"
              alt="Promotional banner"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-orange-600/80 flex flex-col justify-center p-10">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Special Offer</h2>
              <p className="text-white text-lg mb-6 max-w-md">
                Get 20% off on your first purchase. Use code: WELCOME20
              </p>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 w-fit">
                Shop Now
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill={i < testimonial.rating ? "#FFB800" : "#D1D5DB"}
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 container">
          <div className="bg-orange-50 rounded-xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-6">
                Stay updated with the latest products, exclusive offers, and discounts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Deals & Promotions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Pinterest
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-full bg-orange-500 p-1">
                <ShoppingCart className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">ShopWave</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 ShopWave. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const categories = [
  { name: "Electronics", slug: "electronics", image: "/placeholder.svg?height=240&width=240" },
  { name: "Fashion", slug: "fashion", image: "/placeholder.svg?height=240&width=240" },
  { name: "Home & Garden", slug: "home-garden", image: "/placeholder.svg?height=240&width=240" },
  { name: "Beauty", slug: "beauty", image: "/placeholder.svg?height=240&width=240" },
]

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "/placeholder.svg?height=300&width=300",
    discount: 20,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    discount: 0,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
    discount: 10,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    discount: 15,
    rating: 4.7,
  },
  {
    id: 5,
    name: "Fitness Tracker",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    discount: 0,
    rating: 4.3,
  },
  {
    id: 6,
    name: "Smartphone Case",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300",
    discount: 0,
    rating: 4.0,
  },
  {
    id: 7,
    name: "Wireless Charger",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    discount: 5,
    rating: 4.6,
  },
  {
    id: 8,
    name: "Portable Power Bank",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    discount: 0,
    rating: 4.4,
  },
  { id: 9, name: "Desk Lamp", price: 49.99, image: "/placeholder.svg?height=300&width=300", discount: 10, rating: 4.2 },
  {
    id: 10,
    name: "Coffee Maker",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    discount: 0,
    rating: 4.7,
  },
  { id: 11, name: "Yoga Mat", price: 29.99, image: "/placeholder.svg?height=300&width=300", discount: 0, rating: 4.5 },
  {
    id: 12,
    name: "Water Bottle",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300",
    discount: 0,
    rating: 4.3,
  },
  {
    id: 13,
    name: "Sunglasses",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
    discount: 15,
    rating: 4.1,
  },
  {
    id: 14,
    name: "Wireless Mouse",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    discount: 0,
    rating: 4.4,
  },
  {
    id: 15,
    name: "Desk Organizer",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300",
    discount: 5,
    rating: 4.2,
  },
  { id: 16, name: "Plant Pot", price: 14.99, image: "/placeholder.svg?height=300&width=300", discount: 0, rating: 4.0 },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "I've been shopping with ShopWave for over a year now and I'm always impressed with the quality of products and fast shipping. Highly recommend!",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    text: "Great selection of products at competitive prices. The customer service is excellent and they resolved my issue quickly.",
    rating: 4,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Emma Wilson",
    location: "London, UK",
    text: "The website is easy to navigate and the checkout process is smooth. I received my order earlier than expected. Will shop again!",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="relative rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="relative h-48 md:h-64">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.discount > 0 && (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">-{product.discount}%</Badge>
          )}
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>
        <div className="p-4">
          <h3 className="font-medium mb-1 line-clamp-1">{product.name}</h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={i < Math.floor(product.rating) ? "#FFB800" : "#D1D5DB"}
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
            <span className="text-xs text-muted-foreground">{product.rating}</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              {product.discount > 0 ? (
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-orange-500">
                    ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="font-semibold text-orange-500">${product.price.toFixed(2)}</span>
              )}
            </div>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Add to cart</span>
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}

