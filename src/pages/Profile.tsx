import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MoreHorizontal, Share2, Home, Bell, PlusSquare, MessageSquare } from "lucide-react"
import { BottomNav } from "@/components/BottomNav"
import { MainSidebar } from "@/components/MainSidebar"
import { ProfileSettingsMenu } from "@/components/ProfileSettingsMenu"
import { ProfilePicture } from "@/components/ProfilePicture"
import { ProfileStats } from "@/components/ProfileStats"
import { PostFeed } from "@/components/PostFeed"
import { Link } from "react-router-dom"

const Profile = () => {
  const profile = {
    username: "adhd",
    handle: "@mradh",
    status: "Available",
    bio: "Hfhfjfjfkfkfjfjruhr8ru48rrkfkfororirorororkrkri",
    posts: 0,
    followers: 22,
    following: 0,
  }

  return (
    <div className="md:flex min-h-screen bg-background">
      <MainSidebar />
      <main className="flex-1 pb-16 md:pb-0">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-background">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-foreground">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <div>
                <h1 className="text-xl font-semibold">{profile.username}</h1>
                <span className="text-sm text-muted-foreground">{profile.posts} posts</span>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Profile Header Image */}
        <div className="relative h-48 bg-gradient-to-r from-green-400 to-blue-500">
          <img 
            src="/lovable-uploads/ae833bdb-ce17-4bea-aea1-a09dd4da10b6.png" 
            alt="Profile header" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="px-4">
          <div className="relative -mt-16 mb-4">
            <ProfilePicture 
              initialImage="/lovable-uploads/ae833bdb-ce17-4bea-aea1-a09dd4da10b6.png"
              username={profile.username}
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-bold">{profile.username}</h2>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>{profile.handle}</span>
              <span>•</span>
              <span>{profile.status}</span>
            </div>
            <p className="mt-2">{profile.bio}</p>
          </div>

          <div className="flex gap-2 mb-6">
            <Button className="flex-1 bg-background hover:bg-accent">
              Edit Profile
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Spotify Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">SPOTIFY</h3>
            <Button 
              variant="outline" 
              className="w-full bg-[#1DB954] hover:bg-[#1DB954]/90 text-white border-0"
            >
              Sign in with Spotify
            </Button>
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
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t md:hidden">
        <div className="flex justify-around items-center h-16">
          <Link to="/" className="text-muted-foreground">
            <Home className="h-6 w-6" />
          </Link>
          <Link to="/notifications" className="text-muted-foreground">
            <Bell className="h-6 w-6" />
          </Link>
          <Link to="/create" className="text-muted-foreground">
            <PlusSquare className="h-6 w-6" />
          </Link>
          <Link to="/messages" className="text-muted-foreground relative">
            <MessageSquare className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              41
            </span>
          </Link>
          <Link to="/profile" className="relative">
            <ProfilePicture 
              initialImage="/lovable-uploads/ae833bdb-ce17-4bea-aea1-a09dd4da10b6.png"
              username={profile.username}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile