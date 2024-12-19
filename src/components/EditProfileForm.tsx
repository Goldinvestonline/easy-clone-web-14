import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { ProfilePicture } from "./ProfilePicture"

interface EditProfileFormProps {
  onClose: () => void
  initialData: {
    username: string
    displayName: string
    bio: string
    location?: string
    websiteUrl?: string
  }
}

export const EditProfileForm = ({ onClose, initialData }: EditProfileFormProps) => {
  const [formData, setFormData] = useState(initialData)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the data to your backend
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    })
    onClose()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="text-foreground">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-semibold">Edit profile</h1>
          </div>
          <Button onClick={handleSubmit} variant="secondary" className="rounded-full px-6">
            Save
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div className="flex justify-center">
          <ProfilePicture 
            initialImage={initialData.username ? undefined : undefined} 
            username={initialData.username} 
          />
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">Username</label>
              <Input
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                maxLength={40}
                className="mt-1"
              />
              <div className="text-right text-sm text-muted-foreground mt-1">
                {formData.username.length}/40
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground">Display name</label>
              <Input
                value={formData.displayName}
                onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground">Bio</label>
              <Textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                maxLength={1000}
                className="mt-1"
              />
              <div className="text-right text-sm text-muted-foreground mt-1">
                {formData.bio.length}/1000
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground">Location</label>
              <Input
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                maxLength={64}
                className="mt-1"
              />
              <div className="text-right text-sm text-muted-foreground mt-1">
                {(formData.location?.length || 0)}/64
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground">Website URL</label>
              <Input
                value={formData.websiteUrl}
                onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                maxLength={100}
                className="mt-1"
              />
              <div className="text-right text-sm text-muted-foreground mt-1">
                {(formData.websiteUrl?.length || 0)}/100
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}