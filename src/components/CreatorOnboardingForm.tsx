import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useNavigate } from "react-router-dom"

export function CreatorOnboardingForm() {
  const [bio, setBio] = useState("")
  const [profilePicture, setProfilePicture] = useState<File | null>(null)
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null)
  const { toast } = useToast()
  const navigate = useNavigate()
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'cover') => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast({
        title: "Error",
        description: "Image size should be less than 5MB",
        variant: "destructive"
      })
      return
    }

    if (type === 'profile') {
      setProfilePicture(file)
    } else {
      setCoverPhoto(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!bio || !profilePicture || !coverPhoto) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      })
      return
    }

    // Here we would handle the actual form submission to update the profile
    // For now, we'll simulate a successful update
    toast({
      title: "Success",
      description: "Your creator profile has been set up successfully!",
    })

    // Redirect to the profile page after successful submission
    navigate("/profile")
  }

  return (
    <div className="space-y-6 p-4">
      <Alert variant="destructive" className="bg-red-50 border-red-200">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          Please complete filling out the following fields:
          <br />- about me information
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Profile Picture</label>
          <label 
            className="h-32 w-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors"
            htmlFor="profile-upload"
          >
            {profilePicture ? (
              <img 
                src={URL.createObjectURL(profilePicture)} 
                alt="Profile preview" 
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <span className="text-sm text-gray-500">Upload photo</span>
            )}
          </label>
          <input
            id="profile-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleImageUpload(e, 'profile')}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Cover Photo</label>
          <label 
            className="h-48 w-full rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors"
            htmlFor="cover-upload"
          >
            {coverPhoto ? (
              <img 
                src={URL.createObjectURL(coverPhoto)} 
                alt="Cover preview" 
                className="h-full w-full rounded-lg object-cover"
              />
            ) : (
              <span className="text-sm text-gray-500">Upload cover photo</span>
            )}
          </label>
          <input
            id="cover-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleImageUpload(e, 'cover')}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Bio</label>
          <div className="relative">
            <Textarea
              placeholder="Tell your followers about yourself..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              maxLength={1000}
              className="resize-none"
            />
            <span className="absolute bottom-2 right-2 text-sm text-gray-500">
              {bio.length}/1000
            </span>
          </div>
        </div>
      </div>

      <Button 
        className="w-full md:w-auto"
        onClick={handleSubmit}
      >
        SAVE CHANGES
      </Button>
    </div>
  )
}