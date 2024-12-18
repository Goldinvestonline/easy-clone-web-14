import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { PostCard } from "./PostCard"
import { Skeleton } from "./ui/skeleton"

interface Post {
  id: string
  author: {
    name: string
    avatar: string
    subscriptionType: 'free' | 'paid' | 'hybrid'
  }
  content: string
  image?: string
  timestamp: string
  likes: number
  comments: number
  isPremium: boolean
  premiumPrice?: number
}

interface PostsResponse {
  posts: Post[]
  nextPage: number
  hasMore: boolean
}

// Simulated posts data - in a real app this would come from an API
const getPosts = async ({ pageParam = 1 }): Promise<PostsResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const posts = Array.from({ length: 5 }, (_, i) => ({
    id: `${pageParam}-${i}`,
    author: {
      name: `User ${Math.floor(Math.random() * 100)}`,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}`,
      subscriptionType: 'free' as const
    },
    content: "This is a sample post content that demonstrates how the feed will look.",
    image: `https://picsum.photos/seed/${pageParam}-${i}/600/600`,
    timestamp: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString(),
    likes: Math.floor(Math.random() * 1000),
    comments: Math.floor(Math.random() * 100),
    isPremium: Math.random() > 0.8,
    premiumPrice: Math.floor(Math.random() * 10) + 1
  }))

  return {
    posts,
    nextPage: pageParam + 1,
    hasMore: pageParam < 5 // Limit to 25 posts for demo
  }
}

export const PostFeed = () => {
  const { ref, inView } = useInView()

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    getNextPageParam: (lastPage) => lastPage.hasMore ? lastPage.nextPage : undefined,
    initialData: undefined
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage])

  if (status === "pending") {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-4 p-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
            <Skeleton className="h-[300px] w-full" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {data?.pages.map((page) =>
        page.posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))
      )}
      
      <div ref={ref} className="h-10">
        {isFetchingNextPage && (
          <div className="space-y-4 p-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
            <Skeleton className="h-[300px] w-full" />
          </div>
        )}
      </div>
    </div>
  )
}