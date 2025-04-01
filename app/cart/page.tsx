import Link from "next/link"
import Image from "next/image"
import { Trash2, ChevronRight, ShoppingBag, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CartPage() {
  // Sample cart data
  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "/placeholder.svg?height=100&width=100",
      quantity: 1,
      color: "Black",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image: "/placeholder.svg?height=100&width=100",
      quantity: 2,
      color: "Silver",
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 4.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

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
            <span className="font-medium text-foreground">Shopping Cart</span>
          </nav>
        </div>
      </div>

      <div className="container py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Your Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="rounded-lg border shadow-sm">
                <div className="p-4 md:p-6">
                  <div className="hidden md:grid grid-cols-12 gap-4 pb-4 text-sm font-medium text-muted-foreground">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>
                  <Separator className="hidden md:block" />
                  <div className="divide-y">
                    {cartItems.map((item) => (
                      <div key={item.id} className="py-6">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                          {/* Mobile: Product + Price */}
                          <div className="col-span-1 md:col-span-6 flex gap-4">
                            <div className="relative h-20 w-20 rounded-md overflow-hidden bg-muted">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">Color: {item.color}</p>
                              <div className="md:hidden mt-2">
                                <span className="font-medium">${item.price.toFixed(2)}</span>
                              </div>
                              <div className="flex items-center gap-4 mt-2 md:hidden">
                                <div className="flex items-center border rounded-md">
                                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-r-none">
                                    -
                                  </Button>
                                  <div className="w-10 text-center">{item.quantity}</div>
                                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-l-none">
                                    +
                                  </Button>
                                </div>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Remove</span>
                                </Button>
                              </div>
                              <div className="md:hidden mt-2">
                                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                            </div>
                          </div>

                          {/* Desktop: Price */}
                          <div className="hidden md:flex md:col-span-2 items-center justify-center">
                            <span className="font-medium">${item.price.toFixed(2)}</span>
                          </div>

                          {/* Desktop: Quantity */}
                          <div className="hidden md:flex md:col-span-2 items-center justify-center">
                            <div className="flex items-center border rounded-md">
                              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-r-none">
                                -
                              </Button>
                              <div className="w-10 text-center">{item.quantity}</div>
                              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-l-none">
                                +
                              </Button>
                            </div>
                          </div>

                          {/* Desktop: Total + Remove */}
                          <div className="hidden md:flex md:col-span-2 items-center justify-end gap-2">
                            <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Remove</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-muted/50 p-4 md:p-6 rounded-b-lg">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <div className="flex gap-2">
                        <Input placeholder="Coupon code" className="flex-1" />
                        <Button>Apply</Button>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" asChild>
                        <Link href="/products">Continue Shopping</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Badge className="bg-green-500 hover:bg-green-600">Free</Badge>
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline">Secure</Badge>
                  <span>Secure checkout with SSL encryption</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline">Returns</Badge>
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-muted p-6 mb-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button asChild>
              <Link href="/products">Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

