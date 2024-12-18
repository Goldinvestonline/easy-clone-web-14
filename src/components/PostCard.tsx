import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, Bookmark, Lock } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

interface PostCardProps {
  author: {
    name: string
    avatar: string
    subscriptionType: 'free' | 'paid' | 'hybrid'
  }
  content: string
  image?: string
  timestamp: string
  likes: number
  comments: number
  isPremium?: boolean
  premiumPrice?: number
  isBlurred?: boolean
}

export function PostCard({ 
  author, 
  content, 
  image, 
  timestamp, 
  likes: initialLikes, 
  comments,
  isPremium,
  premiumPrice,
  isBlurred 
}: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(initialLikes)
  const [saved, setSaved] = useState(false)
  const { toast } = useToast()

  const handleLike = () => {
    if (isBlurred) {
      toast({
        title: "Premium Content",
        description: `Subscribe to ${author.name} or purchase this post to interact with it.`,
      })
      return
    }

    if (liked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setLiked(!liked)
  }

  return (
    <Card className="mb-6 max-w-xl mx-auto relative">
      {isPremium && (
        <div className="absolute top-2 right-2 z-10 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <Lock className="w-3 h-3" />
          Premium
          {premiumPrice && ` • $${premiumPrice}`}
        </div>
      )}
      
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <Avatar className="h-10 w-10">
          <img src={author.avatar} alt={author.name} className="object-cover" />
        </Avatar>
        <div className="flex-1">
          <h3 className="font-semibold">{author.name}</h3>
          <p className="text-sm text-muted-foreground">{timestamp}</p>
        </div>
      </CardHeader>

      {image && (
        <div className={`relative aspect-square ${isBlurred ? 'blur-lg' : ''}`}>
          <img src={image} alt="Post" className="object-cover w-full h-full" />
          {isBlurred && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                variant="secondary"
                className="bg-black/50 text-white hover:bg-black/60"
                onClick={() => {
                  toast({
                    title: "Premium Content",
                    description: premiumPrice 
                      ? `Purchase this post for $${premiumPrice} to view it.`
                      : `Subscribe to ${author.name} to view their content.`,
                  })
                }}
              >
                <Lock className="w-4 h-4 mr-2" />
                {premiumPrice ? `Unlock for $${premiumPrice}` : 'Subscribe to View'}
              </Button>
            </div>
          )}
        </div>
      )}

      <CardContent className={`p-4 ${isBlurred ? 'blur-lg' : ''}`}>
        <p className="text-sm">{content}</p>
      </CardContent>

      <CardFooter className="flex justify-between p-4 pt-0">
        <div className="flex gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-2"
            onClick={handleLike}
          >
            <Heart className={`h-5 w-5 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
            {likes}
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <MessageCircle className="h-5 w-5" /> {comments}
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => {
            if (isBlurred) {
              toast({
                title: "Premium Content",
                description: `Subscribe to ${author.name} or purchase this post to save it.`,
              })
              return
            }
            setSaved(!saved)
          }}
        >
          <Bookmark className={`h-5 w-5 ${saved ? 'fill-current' : ''}`} />
        </Button>
      </CardFooter>
    </Card>
  )
}