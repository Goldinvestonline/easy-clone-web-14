import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function CreatorOnboardingForm() {
  const [bio, setBio] = useState("")
  const { toast } = useToast()
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here we would handle the form submission
    toast({
      title: "Profile updated",
      description: "Your creator profile has been updated successfully.",
    })
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
          <div className="h-32 w-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors">
            <span className="text-sm text-gray-500">Upload photo</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Cover Photo</label>
          <div className="h-48 w-full rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors">
            <span className="text-sm text-gray-500">Upload cover photo</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Bio</label>
          <div className="relative">
            <Textarea
              placeholder="Bio"
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