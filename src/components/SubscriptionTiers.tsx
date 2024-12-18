import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface SubscriptionTier {
  name: string
  price: number
  description: string
  features: string[]
  isPopular?: boolean
}

const tiers: SubscriptionTier[] = [
  {
    name: "Free",
    price: 0,
    description: "Basic access to creator content",
    features: [
      "Access to free content",
      "Like and comment on posts",
      "Follow creators",
    ],
  },
  {
    name: "Standard",
    price: 4.99,
    description: "Full access to regular content",
    features: [
      "All Free features",
      "Exclusive photos and videos",
      "Priority comment visibility",
      "Direct message with creator",
    ],
    isPopular: true,
  },
  {
    name: "Premium",
    price: 9.99,
    description: "VIP access with exclusive perks",
    features: [
      "All Standard features",
      "Behind-the-scenes content",
      "Custom content requests",
      "Live stream access",
      "Early access to new content",
    ],
  },
]

export function SubscriptionTiers() {
  const { toast } = useToast()

  const handleSubscribe = (tier: SubscriptionTier) => {
    toast({
      title: "Coming Soon",
      description: `Payment integration for ${tier.name} subscription will be available soon!`,
    })
  }

  return (
    <div className="grid gap-6 md:grid-cols-3 lg:gap-8 mx-auto max-w-6xl px-4">
      {tiers.map((tier) => (
        <Card 
          key={tier.name}
          className={`relative flex flex-col ${
            tier.isPopular ? 'border-primary shadow-lg scale-105' : ''
          }`}
        >
          {tier.isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>
          )}
          <CardHeader>
            <CardTitle>{tier.name}</CardTitle>
            <CardDescription>{tier.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="text-3xl font-bold mb-6">
              ${tier.price}
              <span className="text-sm font-normal text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full" 
              variant={tier.isPopular ? "default" : "outline"}
              onClick={() => handleSubscribe(tier)}
            >
              {tier.price === 0 ? "Get Started" : "Subscribe"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}