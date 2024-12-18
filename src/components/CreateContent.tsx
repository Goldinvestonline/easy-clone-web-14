import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/components/ui/use-toast"
import { ImagePlus, VideoIcon, Lock } from "lucide-react"

export function CreateContent() {
  const [contentType, setContentType] = useState("free")
  const [price, setPrice] = useState([4.99])
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Coming Soon",
      description: "Content creation with payment integration will be available soon!",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Create New Content</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Content Type</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Button
                type="button"
                variant="outline"
                className="h-24 flex flex-col items-center justify-center gap-2"
              >
                <ImagePlus className="h-8 w-8" />
                <span>Photo</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-24 flex flex-col items-center justify-center gap-2"
              >
                <VideoIcon className="h-8 w-8" />
                <span>Video</span>
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea 
              placeholder="Write a description for your content..." 
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-4">
            <Label>Access Type</Label>
            <RadioGroup
              defaultValue={contentType}
              onValueChange={setContentType}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="free" id="free" />
                <Label htmlFor="free">Free Content</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="premium" id="premium" />
                <Label htmlFor="premium" className="flex items-center gap-2">
                  Premium Content
                  <Lock className="h-4 w-4" />
                </Label>
              </div>
            </RadioGroup>
          </div>

          {contentType === "premium" && (
            <div className="space-y-4">
              <Label>Price (USD)</Label>
              <div className="space-y-4">
                <Slider
                  value={[price[0]]}
                  onValueChange={setPrice}
                  min={0.99}
                  max={99.99}
                  step={0.5}
                />
                <div className="text-right font-medium">
                  ${price[0].toFixed(2)}
                </div>
              </div>
            </div>
          )}

          <Button type="submit" className="w-full">
            Create Post
          </Button>
        </CardContent>
      </Card>
    </form>
  )
}