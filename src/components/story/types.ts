export interface Story {
  username: string
  avatar: string
  isLive?: boolean
  content?: {
    type: "image" | "video" | "text"
    url?: string
    text?: string
    timestamp: string
  }[]
}