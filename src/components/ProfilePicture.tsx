import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { ChangeEvent, useState } from "react"

interface ProfilePictureProps {
  initialImage?: string
  username: string
}

export const ProfilePicture = ({ initialImage, username }: ProfilePictureProps) => {
  const [avatar, setAvatar] = useState(initialImage)
  const { toast } = useToast()

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast({
        title: "Error",
        description: "Image size should be less than 5MB",
        variant: "destructive"
      })
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      setAvatar(reader.result as string)
      toast({
        title: "Success",
        description: "Profile picture updated successfully"
      })
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="relative group">
      <Avatar className="h-20 w-20">
        <img 
          src={avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=" + username} 
          alt={username} 
          className="object-cover"
        />
      </Avatar>
      <label 
        htmlFor="avatar-upload" 
        className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity"
      >
        <span className="text-xs text-white font-medium">Change</span>
      </label>
      <input
        id="avatar-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
      />
    </div>
  )
}