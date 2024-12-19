import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MoreHorizontal, Share2 } from "lucide-react"
import { ProfileSettingsMenu } from "@/components/ProfileSettingsMenu"
import { ProfilePicture } from "@/components/ProfilePicture"
import { ProfileStats } from "@/components/ProfileStats"
import { Link } from "react-router-dom"

const Profile = () => {
  const profile = {
    username: "adhd",
    handle: "@mradh",
    status: "Available",
    bio: "Digital creator sharing moments and experiences",
    posts: 0,
    followers: 22,
    following: 0,
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
              <h1 className="text-xl font-semibold">{profile.username}</h1>
              <span className="text-sm text-muted-foreground">{profile.posts} posts</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
            <ProfileSettingsMenu />
          </div>
        </div>
      </div>

      {/* Profile Header Image */}
      <div className="relative h-48 bg-gradient-to-r from-blue-400 to-blue-600">
        <img 
          src="/lovable-uploads/ae833bdb-ce17-4bea-aea1-a09dd4da10b6.png" 
          alt="Profile header" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Info */}
      <div className="px-4">
        <div className="relative -mt-16 mb-4 flex justify-between items-end">
          <div className="relative">
            <ProfilePicture 
              initialImage="/lovable-uploads/ae833bdb-ce17-4bea-aea1-a09dd4da10b6.png"
              username={profile.username}
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Edit Profile
          </Button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold">{profile.username}</h2>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>{profile.handle}</span>
            <span>•</span>
            <span>{profile.status}</span>
          </div>
          <p className="mt-2 text-foreground/90">{profile.bio}</p>
          
          <div className="mt-4">
            <ProfileStats 
              posts={profile.posts}
              followers={profile.followers}
              following={profile.following}
            />
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