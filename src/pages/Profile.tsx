import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Grid3X3, BookMarked, Settings, Share2, UserPlus } from "lucide-react"
import { BottomNav } from "@/components/BottomNav"
import { MainSidebar } from "@/components/MainSidebar"

const Profile = () => {
  // This would come from auth/database in a real app
  const profile = {
    username: "city_guy32",
    name: "City_guy",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    bio: "Man city fan from 🇪🇸\nI want man city mutuals",
    posts: 8,
    followers: 41,
    following: 223,
  }

  // Sample suggested users
  const suggestedUsers = [
    {
      id: 1,
      username: "Magma_Son Mu...",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Magma",
      subtitle: "Suggested for you"
    },
    {
      id: 2,
      username: "Bwogi Julius",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bwogi",
      subtitle: "Following yaket950"
    },
    {
      id: 3,
      username: "Hannibal",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hannibal",
      subtitle: "Suggested for you"
    }
  ]

  // Sample posts data
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
      likes: 124,
      comments: 8,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop",
      likes: 89,
      comments: 5,
    },
  ]

  return (
    <div className="md:flex min-h-screen bg-background">
      <MainSidebar />
      <main className="flex-1 pb-16 md:pb-0">
        <div className="container max-w-2xl mx-auto">
          {/* Profile Header - Mobile Friendly */}
          <div className="flex items-center justify-between p-4">
            <h1 className="text-lg font-semibold">{profile.username}</h1>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>

          {/* Profile Info - Responsive Layout */}
          <div className="px-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <Avatar className="w-20 h-20 md:w-32 md:h-32">
                <img src={profile.avatar} alt={profile.name} className="object-cover" />
              </Avatar>
              
              <div className="flex-1">
                {/* Stats - Mobile Grid */}
                <div className="grid grid-cols-3 gap-4 text-center py-3 border-y md:border-none">
                  <div>
                    <div className="font-semibold">{profile.posts}</div>
                    <div className="text-sm text-muted-foreground">posts</div>
                  </div>
                  <div>
                    <div className="font-semibold">{profile.followers}</div>
                    <div className="text-sm text-muted-foreground">followers</div>
                  </div>
                  <div>
                    <div className="font-semibold">{profile.following}</div>
                    <div className="text-sm text-muted-foreground">following</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio - Better Spacing */}
          <div className="px-4 mb-4">
            <div className="font-semibold mb-1">{profile.name}</div>
            <p className="text-sm whitespace-pre-line">{profile.bio}</p>
          </div>

          {/* Action Buttons - Stack on Mobile */}
          <div className="flex flex-col md:flex-row gap-2 px-4 mb-6">
            <Button className="flex-1" variant="outline">Edit profile</Button>
            <Button className="flex-1" variant="outline">Share profile</Button>
            <Button size="icon" variant="outline" className="hidden md:flex">
              <UserPlus className="h-4 w-4" />
            </Button>
          </div>

          {/* Discover People - Horizontal Scroll */}
          <div className="mb-6">
            <div className="px-4 flex justify-between items-center mb-4">
              <h2 className="font-semibold">Discover people</h2>
              <Button variant="link" className="text-blue-500">See all</Button>
            </div>
            <div className="flex gap-4 overflow-x-auto px-4 pb-2 no-scrollbar">
              {suggestedUsers.map((user) => (
                <Card key={user.id} className="flex-none w-[150px] p-4">
                  <div className="flex flex-col items-center text-center gap-2">
                    <Avatar className="w-16 h-16">
                      <img src={user.avatar} alt={user.username} className="object-cover" />
                    </Avatar>
                    <div className="font-semibold text-sm">{user.username}</div>
                    <div className="text-xs text-muted-foreground">{user.subtitle}</div>
                    <Button className="w-full" variant="default">Follow</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Posts Grid - Responsive */}
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="w-full justify-center border-t">
              <TabsTrigger value="posts" className="flex-1">
                <Grid3X3 className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="reels" className="flex-1">
                <BookMarked className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="tagged" className="flex-1">
                <Share2 className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
            <TabsContent value="posts">
              <div className="grid grid-cols-3 gap-[2px]">
                {posts.map((post) => (
                  <Card key={post.id} className="aspect-square relative group overflow-hidden">
                    <img 
                      src={post.image} 
                      alt="Post" 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-4">
                      <div className="flex items-center gap-1">
                        <span>❤️</span> {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <span>💬</span> {post.comments}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reels">
              <div className="text-center py-8 text-muted-foreground">
                No reels yet
              </div>
            </TabsContent>
            <TabsContent value="tagged">
              <div className="text-center py-8 text-muted-foreground">
                No tagged posts
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <BottomNav />
    </div>
  )
}

export default Profile