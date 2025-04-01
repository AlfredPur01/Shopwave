import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, Share2, Star, Truck, Shield, RotateCcw, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export default function ProductPage({ params }) {
  // In a real app, you would fetch the product data based on the ID
  const product = {
    id: params.id,
    name: "Premium Wireless Headphones",
    price: 199.99,
    discount: 15,
    rating: 4.8,
    reviewCount: 256,
    description:
      "Experience premium sound quality with these wireless headphones. Featuring active noise cancellation, long battery life, and comfortable ear cushions for extended listening sessions.",
    features: [
      "Active Noise Cancellation",
      "40-hour Battery Life",
      "Bluetooth 5.0",
      "Built-in Microphone",
      "Foldable Design",
      "Premium Sound Quality",
    ],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "White", value: "#FFFFFF" },
      { name: "Blue", value: "#0066CC" },
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    specifications: {
      Brand: "AudioTech",
      Model: "AT-WH200",
      Type: "Over-ear",
      Connectivity: "Wireless",
      "Battery Life": "40 hours",
      "Charging Time": "2 hours",
      Weight: "250g",
      Dimensions: "18 x 15 x 8 cm",
      Warranty: "2 years",
    },
    stock: 15,
    sku: "AT-WH200-BLK",
  }

  const discountedPrice =
    product.discount > 0 ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price.toFixed(2)

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
            <Link href="/products" className="hover:text-foreground">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/category/electronics" className="hover:text-foreground">
              Electronics
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="font-medium text-foreground truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div>
            <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-muted">
              <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              {product.discount > 0 && (
                <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">-{product.discount}% OFF</Badge>
              )}
            </div>
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-24 w-24 shrink-0 cursor-pointer overflow-hidden rounded-md border-2 border-primary"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium">{product.rating}</span>
              </div>
              <div className="text-sm text-muted-foreground">{product.reviewCount} reviews</div>
              <div className="text-sm text-muted-foreground">SKU: {product.sku}</div>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              {product.discount > 0 ? (
                <>
                  <span className="text-3xl font-bold text-orange-500">${discountedPrice}</span>
                  <span className="text-lg text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                  <Badge className="ml-2 bg-red-500 hover:bg-red-600">
                    Save ${(product.price - Number.parseFloat(discountedPrice)).toFixed(2)}
                  </Badge>
                </>
              ) : (
                <span className="text-3xl font-bold text-orange-500">${product.price.toFixed(2)}</span>
              )}
            </div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Color</h3>
              <RadioGroup defaultValue={product.colors[0].name} className="flex gap-3">
                {product.colors.map((color) => (
                  <div key={color.name} className="flex items-center gap-2">
                    <RadioGroupItem id={`color-${color.name}`} value={color.name} className="peer sr-only" />
                    <Label
                      htmlFor={`color-${color.name}`}
                      className="flex items-center gap-2 rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                    >
                      <div
                        className="h-5 w-5 rounded-full border"
                        style={{
                          backgroundColor: color.value,
                          borderColor: color.value === "#FFFFFF" ? "#e5e7eb" : color.value,
                        }}
                      />
                      {color.name}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center w-32">
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-r-none">
                  -
                </Button>
                <Input
                  type="number"
                  min="1"
                  max={product.stock}
                  defaultValue="1"
                  className="h-10 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-l-none">
                  +
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {product.stock > 10 ? (
                  <span className="text-green-600">In Stock</span>
                ) : product.stock > 0 ? (
                  <span className="text-orange-500">Only {product.stock} left in stock</span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="mr-2 h-5 w-5" />
                Add to Wishlist
              </Button>
              <Button size="lg" variant="ghost">
                <Share2 className="mr-2 h-5 w-5" />
                Share
              </Button>
            </div>

            {/* Shipping & Returns */}
            <div className="space-y-4 border rounded-lg p-4 bg-muted/30">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 mt-0.5 text-orange-500" />
                <div>
                  <h4 className="font-medium">Free Shipping</h4>
                  <p className="text-sm text-muted-foreground">Free standard shipping on orders over $50</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 mt-0.5 text-orange-500" />
                <div>
                  <h4 className="font-medium">2-Year Warranty</h4>
                  <p className="text-sm text-muted-foreground">Full coverage for manufacturing defects</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="h-5 w-5 mt-0.5 text-orange-500" />
                <div>
                  <h4 className="font-medium">30-Day Returns</h4>
                  <p className="text-sm text-muted-foreground">Return or exchange within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="details">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
              <TabsTrigger
                value="details"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
              >
                Details
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary py-3"
              >
                Reviews ({product.reviewCount})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <p className="text-muted-foreground mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio vitae justo vestibulum
                    bibendum. Donec eu quam nec mi pretium faucibus. Duis vitae mi convallis, molestie quam et, aliquam
                    nisi. Suspendisse blandit venenatis diam, non aliquet magna rutrum sed.
                  </p>
                  <p className="text-muted-foreground">
                    Morbi eget congue risus. Praesent quis mollis nisl. Donec consectetur cursus magna a efficitur.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Vivamus consectetur ipsum a arcu commodo, sed placerat nunc tempus.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                          <ChevronRight className="h-4 w-4" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="pt-6">
              <div className="max-w-3xl">
                <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                <div className="border rounded-lg overflow-hidden">
                  {Object.entries(product.specifications).map(([key, value], index, arr) => (
                    <div
                      key={key}
                      className={`flex ${index % 2 === 0 ? "bg-muted/50" : ""} ${index === arr.length - 1 ? "" : "border-b"}`}
                    >
                      <div className="w-1/3 px-4 py-3 font-medium">{key}</div>
                      <div className="w-2/3 px-4 py-3">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{product.rating} out of 5</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">Based on {product.reviewCount} reviews</p>

                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => {
                      // Calculate percentage for each star rating (mock data)
                      const percentage = star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : star === 2 ? 2 : 1
                      return (
                        <div key={star} className="flex items-center gap-2">
                          <div className="flex items-center w-12">
                            <span className="text-sm">{star}</span>
                            <Star className="h-4 w-4 ml-1 fill-yellow-400 text-yellow-400" />
                          </div>
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-400" style={{ width: `${percentage}%` }} />
                          </div>
                          <div className="w-12 text-sm text-right">{percentage}%</div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Recent Reviews</h3>
                    <Button>Write a Review</Button>
                  </div>

                  <div className="space-y-6">
                    {/* Sample reviews */}
                    {[
                      {
                        name: "John D.",
                        date: "2 weeks ago",
                        rating: 5,
                        title: "Excellent sound quality",
                        comment:
                          "These headphones exceeded my expectations. The sound quality is crystal clear and the noise cancellation works perfectly. Battery life is impressive too!",
                      },
                      {
                        name: "Sarah M.",
                        date: "1 month ago",
                        rating: 4,
                        title: "Great headphones, but a bit heavy",
                        comment:
                          "The sound quality is amazing and I love the features. My only complaint is that they get a bit uncomfortable after wearing them for several hours. Otherwise, they're perfect!",
                      },
                      {
                        name: "Michael T.",
                        date: "2 months ago",
                        rating: 5,
                        title: "Best purchase this year",
                        comment:
                          "I've tried many headphones over the years and these are by far the best. The noise cancellation is incredible and they're very comfortable. Highly recommend!",
                      },
                    ].map((review, index) => (
                      <div key={index} className="border-b pb-6 last:border-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">{review.name}</h4>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <h5 className="font-medium mb-2">{review.title}</h5>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full mt-6">
                    Load More Reviews
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <ProductCard
                      product={{
                        id: 100 + index,
                        name: `Related Product ${index + 1}`,
                        price: 49.99 + index * 10,
                        image: "/placeholder.svg?height=300&width=300",
                        discount: index % 3 === 0 ? 10 : 0,
                        rating: 4 + (index % 2) * 0.5,
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
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

