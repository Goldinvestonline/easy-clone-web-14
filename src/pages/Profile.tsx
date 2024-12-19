import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Crown, MessageSquare, Share2, Star, DollarSign } from "lucide-react"
import { ProfileSettingsMenu } from "@/components/ProfileSettingsMenu"
import { ProfilePicture } from "@/components/ProfilePicture"
import { ProfileStats } from "@/components/ProfileStats"
import { Link } from "react-router-dom"

const Profile = () => {
  const profile = {
    username: "Amara Queendom",
    handle: "@fitebonyamara",
    status: "Available now",
    bio: "You already found an EBONY QUEEN with MAJESTY and an insatiable desire to use your face as my throne",
    posts: 1100,
    media: 755,
    likes: 6500,
    isCreator: true,
    isVerified: true,
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-foreground">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-semibold">{profile.username}</h1>
                {profile.isVerified && (
                  <Crown className="h-5 w-5 text-yellow-500" />
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{profile.handle}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
            <ProfileSettingsMenu />
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative h-64 bg-gradient-to-r from-blue-400 to-blue-600">
        <img 
          src="/lovable-uploads/49f3b154-0b41-4a79-a72b-fdd4eb0bafd3.png" 
          alt="Profile header" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Info */}
      <div className="px-4">
        <div className="relative -mt-16 mb-4">
          <ProfilePicture 
            initialImage="/lovable-uploads/49f3b154-0b41-4a79-a72b-fdd4eb0bafd3.png"
            username={profile.username}
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold">{profile.username}</h2>
            {profile.isVerified && <Crown className="h-5 w-5 text-yellow-500" />}
          </div>
          <div className="text-muted-foreground">
            <span>{profile.handle}</span>
            <span className="mx-2">•</span>
            <span className="text-green-500">{profile.status}</span>
          </div>
          <p className="mt-2 text-foreground/90">{profile.bio}</p>
          
          <div className="mt-4">
            <ProfileStats 
              posts={profile.posts}
              followers={profile.likes}
              following={profile.media}
            />
          </div>

          <div className="mt-4 flex gap-2">
            <Button className="flex-1 gap-2">
              <DollarSign className="h-4 w-4" />
              Subscribe
            </Button>
            <Button variant="outline" className="flex-1 gap-2">
              <MessageSquare className="h-4 w-4" />
              Message
            </Button>
            <Button variant="outline" size="icon">
              <Star className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="w-full justify-around h-12 bg-transparent border-y rounded-none">
            <TabsTrigger value="posts" className="flex-1">Posts</TabsTrigger>
            <TabsTrigger value="media" className="flex-1">Media</TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts" className="mt-6">
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No posts yet</h3>
              <p className="text-muted-foreground">Share your first post with your followers.</p>
            </div>
          </TabsContent>
          <TabsContent value="media" className="mt-6">
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No media</h3>
              <p className="text-muted-foreground">Share photos and videos with your followers.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Profile