import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Grid3X3, BookMarked, Share2, UserPlus } from "lucide-react"
import { BottomNav } from "@/components/BottomNav"
import { MainSidebar } from "@/components/MainSidebar"
import { ProfileSettingsMenu } from "@/components/ProfileSettingsMenu"
import { ReelsView } from "@/components/ReelsView"
import { ProfilePicture } from "@/components/ProfilePicture"
import { ProfileStats } from "@/components/ProfileStats"
import { SuggestedUsers } from "@/components/SuggestedUsers"
import { PostFeed } from "@/components/PostFeed"

const Profile = () => {
  const profile = {
    username: "city_guy32",
    name: "City_guy",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    bio: "Man city fan from 🇪🇸\nI want man city mutuals",
    posts: 8,
    followers: 41,
    following: 223,
  }

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

  const reels = [
    {
      id: "1",
      videoUrl: "https://example.com/reel1.mp4",
      caption: "Send this to the girl who doesn't need make up to look beautiful. #beauty #confidence",
      author: "daily_quotes.211",
      likes: 65700,
      comments: 858,
      audioTitle: "Original audio",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=daily_quotes"
    }
  ]

  return (
    <div className="md:flex min-h-screen bg-background">
      <MainSidebar />
      <main className="flex-1 pb-16 md:pb-0">
        <div className="sticky top-0 z-50 bg-background border-b">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold">{profile.username}</h1>
            </div>
            <div className="flex items-center gap-4">
              <ProfileSettingsMenu />
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="flex items-center gap-8 py-4">
            <ProfilePicture 
              initialImage={profile.avatar} 
              username={profile.username}
            />
            <ProfileStats 
              posts={profile.posts}
              followers={profile.followers}
              following={profile.following}
            />
          </div>

          {/* Bio */}
          <div className="py-2">
            <div className="font-semibold">{profile.name}</div>
            <p className="text-sm whitespace-pre-line">{profile.bio}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 py-3">
            <Button variant="outline" className="flex-1 bg-background">
              Edit profile
            </Button>
            <Button variant="outline" className="flex-1 bg-background">
              Share profile
            </Button>
            <Button variant="outline" size="icon" className="bg-background">
              <UserPlus className="h-4 w-4" />
            </Button>
          </div>

          <SuggestedUsers users={suggestedUsers} />

          {/* Posts Tabs */}
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="w-full justify-around border-y rounded-none bg-transparent h-12">
              <TabsTrigger value="posts" className="flex-1 data-[state=active]:bg-transparent">
                <Grid3X3 className="h-6 w-6" />
              </TabsTrigger>
              <TabsTrigger value="reels" className="flex-1 data-[state=active]:bg-transparent">
                <BookMarked className="h-6 w-6" />
              </TabsTrigger>
              <TabsTrigger value="tagged" className="flex-1 data-[state=active]:bg-transparent">
                <Share2 className="h-6 w-6" />
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="posts">
              <PostFeed />
            </TabsContent>
            <TabsContent value="reels">
              <ReelsView reels={reels} />
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
