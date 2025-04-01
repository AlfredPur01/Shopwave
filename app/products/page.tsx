import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, Grid, List, Filter, ChevronDown, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container py-2">
          <nav className="flex text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-foreground">All Products</span>
          </nav>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="sticky top-20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" className="h-8 text-sm">
                  Clear All
                </Button>
              </div>

              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="space-y-4">
                    <Slider defaultValue={[0, 1000]} min={0} max={1000} step={10} />
                    <div className="flex items-center justify-between">
                      <div className="border rounded-md px-3 py-1 w-20">
                        <span className="text-sm">$0</span>
                      </div>
                      <span className="text-sm text-muted-foreground">to</span>
                      <div className="border rounded-md px-3 py-1 w-20">
                        <span className="text-sm">$1000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <Accordion type="single" collapsible defaultValue="categories">
                  <AccordionItem value="categories">
                    <AccordionTrigger className="text-base font-medium">Categories</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        {categories.map((category) => (
                          <div key={category.id} className="flex items-center space-x-2">
                            <Checkbox id={`category-${category.id}`} />
                            <label
                              htmlFor={`category-${category.id}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {category.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Brands */}
                <Accordion type="single" collapsible defaultValue="brands">
                  <AccordionItem value="brands">
                    <AccordionTrigger className="text-base font-medium">Brands</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        {brands.map((brand) => (
                          <div key={brand.id} className="flex items-center space-x-2">
                            <Checkbox id={`brand-${brand.id}`} />
                            <label
                              htmlFor={`brand-${brand.id}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {brand.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Ratings */}
                <div>
                  <h3 className="font-medium mb-3">Ratings</h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <label
                          htmlFor={`rating-${rating}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                        >
                          <div className="flex mr-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill={i < rating ? "#FFB800" : "#D1D5DB"}
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
                          & Up
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search products..." className="pl-8 w-full" />
              </div>
              <div className="flex items-center gap-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="md:hidden">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                      <SheetDescription>Narrow down your product search with filters.</SheetDescription>
                    </SheetHeader>
                    <div className="space-y-6 py-4">
                      {/* Mobile Filters - Same as desktop but in a sheet */}
                      {/* Price Range */}
                      <div>
                        <h3 className="font-medium mb-3">Price Range</h3>
                        <div className="space-y-4">
                          <Slider defaultValue={[0, 1000]} min={0} max={1000} step={10} />
                          <div className="flex items-center justify-between">
                            <div className="border rounded-md px-3 py-1 w-20">
                              <span className="text-sm">$0</span>
                            </div>
                            <span className="text-sm text-muted-foreground">to</span>
                            <div className="border rounded-md px-3 py-1 w-20">
                              <span className="text-sm">$1000</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Categories */}
                      <Accordion type="single" collapsible defaultValue="categories">
                        <AccordionItem value="categories">
                          <AccordionTrigger className="text-base font-medium">Categories</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2 pt-1">
                              {categories.map((category) => (
                                <div key={category.id} className="flex items-center space-x-2">
                                  <Checkbox id={`mobile-category-${category.id}`} />
                                  <label
                                    htmlFor={`mobile-category-${category.id}`}
                                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {category.name}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      {/* Brands */}
                      <Accordion type="single" collapsible defaultValue="brands">
                        <AccordionItem value="brands">
                          <AccordionTrigger className="text-base font-medium">Brands</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2 pt-1">
                              {brands.map((brand) => (
                                <div key={brand.id} className="flex items-center space-x-2">
                                  <Checkbox id={`mobile-brand-${brand.id}`} />
                                  <label
                                    htmlFor={`mobile-brand-${brand.id}`}
                                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    {brand.name}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </SheetContent>
                </Sheet>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Grid className="h-4 w-4" />
                    <span className="sr-only">Grid view</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <List className="h-4 w-4" />
                    <span className="sr-only">List view</span>
                  </Button>
                </div>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest Arrivals</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">Showing 1-24 of 256 products</p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center gap-1">
                <Button variant="outline" size="icon" disabled>
                  <ChevronDown className="h-4 w-4 rotate-90" />
                  <span className="sr-only">Previous page</span>
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0 font-medium">
                  1
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  2
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  3
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  4
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  5
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronDown className="h-4 w-4 -rotate-90" />
                  <span className="sr-only">Next page</span>
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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

// Sample data
const categories = [
  { id: 1, name: "Electronics", count: 42 },
  { id: 2, name: "Fashion", count: 56 },
  { id: 3, name: "Home & Garden", count: 38 },
  { id: 4, name: "Beauty", count: 24 },
  { id: 5, name: "Sports", count: 31 },
  { id: 6, name: "Toys & Games", count: 19 },
]

const brands = [
  { id: 1, name: "Apple", count: 18 },
  { id: 2, name: "Samsung", count: 24 },
  { id: 3, name: "Nike", count: 36 },
  { id: 4, name: "Adidas", count: 28 },
  { id: 5, name: "Sony", count: 15 },
  { id: 6, name: "LG", count: 12 },
]

// Generate more products for the product listing page
const allProducts = Array.from({ length: 24 }, (_, i) => {
  const id = i + 1
  const discount = Math.random() > 0.7 ? Math.floor(Math.random() * 30) + 5 : 0
  const rating = (Math.random() * 2 + 3).toFixed(1)
  const price = Math.floor(Math.random() * 200) + 19.99

  return {
    id,
    name: `Product ${id}`,
    price,
    image: `/placeholder.svg?height=300&width=300`,
    discount,
    rating,
  }
})

