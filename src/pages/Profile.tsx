import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Grid3X3, BookMarked, Settings } from "lucide-react"
import { BottomNav } from "@/components/BottomNav"
import { MainSidebar } from "@/components/MainSidebar"

const Profile = () => {
  // This would come from auth/database in a real app
  const profile = {
    username: "johndoe",
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    bio: "Digital creator & photographer 📸",
    website: "https://johndoe.com",
    posts: 42,
    followers: 1234,
    following: 567,
    isVerified: true,
  }

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
    // Add more sample posts as needed
  ]

  return (
    <div className="md:flex">
      <MainSidebar />
      <main className="flex-1 pb-16 md:pb-0">
        <div className="container max-w-4xl mx-auto py-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <Avatar className="w-32 h-32">
              <img src={profile.avatar} alt={profile.name} className="object-cover" />
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <h1 className="text-2xl font-bold">{profile.username}</h1>
                <div className="flex gap-2">
                  <Button>Edit Profile</Button>
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-start gap-8 mb-4">
                <div className="text-center">
                  <div className="font-bold">{profile.posts}</div>
                  <div className="text-sm text-muted-foreground">Posts</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">{profile.followers}</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">{profile.following}</div>
                  <div className="text-sm text-muted-foreground">Following</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h2 className="font-bold">{profile.name}</h2>
                <p className="text-sm">{profile.bio}</p>
                <a href={profile.website} className="text-sm text-blue-500 hover:underline">
                  {profile.website}
                </a>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="posts" className="flex items-center gap-2">
                <Grid3X3 className="h-4 w-4" />
                <span>Posts</span>
              </TabsTrigger>
              <TabsTrigger value="saved" className="flex items-center gap-2">
                <BookMarked className="h-4 w-4" />
                <span>Saved</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="posts">
              <div className="grid grid-cols-3 gap-1">
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
            <TabsContent value="saved">
              <div className="text-center py-8 text-muted-foreground">
                No saved posts yet
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