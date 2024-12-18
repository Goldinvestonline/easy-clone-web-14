import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2 } from "lucide-react"

interface PostCardProps {
  author: {
    name: string
    avatar: string
  }
  content: string
  timestamp: string
  likes: number
  comments: number
}

export function PostCard({ author, content, timestamp, likes, comments }: PostCardProps) {
  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-10 w-10">
          <img src={author.avatar} alt={author.name} className="object-cover" />
        </Avatar>
        <div>
          <h3 className="font-semibold">{author.name}</h3>
          <p className="text-sm text-muted-foreground">{timestamp}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm" className="gap-2">
          <Heart className="h-4 w-4" /> {likes}
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <MessageCircle className="h-4 w-4" /> {comments}
        </Button>
        <Button variant="ghost" size="sm">
          <Share2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}