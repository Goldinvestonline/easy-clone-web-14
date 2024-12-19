import { ArrowLeft, Crown, DollarSign, MessageSquare, MoreHorizontal, Share2, Star } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { ProfileStats } from "@/components/ProfileStats"
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const Profile = () => {
  const profile = {
    username: "Amara Queendom",
    handle: "@fitebonyamara",
    status: "Available now",
    bio: "You already found an EBONY QUEEN with MAJESTY and an insatiable desire to use your face as my throne 😈🍑",
    posts: 1100,
    videos: 755,
    likes: 6500,
    avatar: "/lovable-uploads/fb7f2ff1-c1f8-4eb0-92bb-5b6768973640.png",
    coverImage: "/lovable-uploads/fb7f2ff1-c1f8-4eb0-92bb-5b6768973640.png",
    isVerified: true,
    isPremium: true
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="text-foreground">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative h-48">
        <img 
          src={profile.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
          <div className="p-4 text-white">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              {profile.username}
              {profile.isVerified && <Crown className="h-5 w-5 text-yellow-400" />}
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <img src="/placeholder.svg" alt="Posts" className="w-4 h-4" /> {profile.posts}
              </span>
              <span className="flex items-center gap-1">
                <img src="/placeholder.svg" alt="Videos" className="w-4 h-4" /> {profile.videos}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4" /> {profile.likes}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-4 -mt-14 relative z-10">
        <div className="flex justify-between items-end mb-4">
          <div className="relative">
            <Avatar className="h-24 w-24 border-4 border-background">
              <img src={profile.avatar} alt={profile.username} className="object-cover" />
            </Avatar>
            <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              {profile.username}
              {profile.isVerified && <Crown className="h-4 w-4 text-yellow-400" />}
            </div>
            <div className="text-muted-foreground">
              {profile.handle} • {profile.status}
            </div>
            <p className="mt-2">{profile.bio}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-around py-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <DollarSign className="h-6 w-6 text-blue-500" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MessageSquare className="h-6 w-6 text-blue-500" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Star className="h-6 w-6 text-blue-500" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Share2 className="h-6 w-6 text-blue-500" />
            </Button>
          </div>

          {/* Friends Section */}
          <Collapsible>
            <CollapsibleTrigger className="flex justify-between w-full py-2 text-lg font-semibold">
              FRIENDS
              <span className="text-blue-500">▼</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2">
              {/* Add friends content here */}
            </CollapsibleContent>
          </Collapsible>

          {/* Subscription Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">SUBSCRIPTION</h3>
            <div className="flex justify-between items-center p-4 rounded-full border">
              <span>SUBSCRIBED</span>
              <span className="text-blue-500">FOR FREE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile