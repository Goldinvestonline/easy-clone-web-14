export type SubscriptionType = 'free' | 'paid' | 'hybrid';

export interface Profile {
  id: string;
  username: string;
  name: string;
  bio?: string;
  avatar?: string;
  subscriptionType: SubscriptionType;
  monthlySubscriptionPrice?: number; // in USD
}

export interface Post {
  id: string;
  authorId: string;
  content: string;
  image?: string;
  timestamp: string;
  isPremium: boolean;
  premiumPrice?: number; // individual post price in USD
  likes: number;
  comments: number;
}