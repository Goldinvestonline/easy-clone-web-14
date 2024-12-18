import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react"
import { useState } from "react"

interface PostCardProps {
  author: {
    name: string
    avatar: string
  }
  content: string
  image?: string
  timestamp: string
  likes: number
  comments: number
}

export function PostCard({ author, content, image, timestamp, likes: initialLikes, comments }: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(initialLikes)
  const [saved, setSaved] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setLiked(!liked)
  }

  return (
    <Card className="mb-6 max-w-xl mx-auto">
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
        <div className="relative aspect-square">
          <img src={image} alt="Post" className="object-cover w-full h-full" />
        </div>
      )}
      <CardContent className="p-4">
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
          onClick={() => setSaved(!saved)}
        >
          <Bookmark className={`h-5 w-5 ${saved ? 'fill-current' : ''}`} />
        </Button>
      </CardFooter>
    </Card>
  )
}