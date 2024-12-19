import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MoreHorizontal, Share2 } from "lucide-react"
import { ProfileSettingsMenu } from "@/components/ProfileSettingsMenu"
import { ProfilePicture } from "@/components/ProfilePicture"
import { ProfileStats } from "@/components/ProfileStats"
import { Link } from "react-router-dom"
import { useState } from "react"
import { EditProfileForm } from "@/components/EditProfileForm"

const profiles = [
  {
    username: "adhd",
    handle: "@mradh",
    status: "Available",
    bio: "Digital creator sharing moments and experiences",
    posts: 0,
    followers: 22,
    following: 0,
    coverImage: "/lovable-uploads/ae833bdb-ce17-4bea-aea1-a09dd4da10b6.png",
    avatar: "/lovable-uploads/ae833bdb-ce17-4bea-aea1-a09dd4da10b6.png"
  },
  {
    username: "photography_pro",
    handle: "@photo_master",
    status: "Professional Photographer",
    bio: "Capturing life's beautiful moments | Available for bookings",
    posts: 245,
    followers: 15300,
    following: 892,
    coverImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    username: "tech_enthusiast",
    handle: "@tech_guru",
    status: "Tech Blogger",
    bio: "Exploring the latest in technology | Reviews & Tips",
    posts: 178,
    followers: 8900,
    following: 456,
    coverImage: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
  },
  {
    username: "pet_lover",
    handle: "@cat_person",
    status: "Pet Influencer",
    bio: "Sharing adorable moments with my furry friends 🐱",
    posts: 567,
    followers: 25600,
    following: 1234,
    coverImage: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
  }
]

const Profile = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0)
  const [isEditing, setIsEditing] = useState(false)
  const profile = profiles[currentProfileIndex]

  const switchProfile = () => {
    setCurrentProfileIndex((prev) => (prev + 1) % profiles.length)
  }

  if (isEditing) {
    return (
      <EditProfileForm
        onClose={() => setIsEditing(false)}
        initialData={{
          username: profile.username,
          displayName: profile.handle.slice(1), // Remove @ from handle
          bio: profile.bio,
          location: "",
          websiteUrl: ""
        }}
      />
    )
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
          src={profile.coverImage}
          alt="Profile header" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Info */}
      <div className="px-4">
        <div className="relative -mt-16 mb-4 flex justify-between items-end">
          <div className="relative">
            <ProfilePicture 
              initialImage={profile.avatar}
              username={profile.username}
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
          </div>
          <div className="flex gap-2">
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </Button>
            <Button variant="outline" onClick={switchProfile}>
              Switch Profile
            </Button>
          </div>
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