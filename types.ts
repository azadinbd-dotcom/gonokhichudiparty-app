
export interface Leader {
  id: string;
  name: string;
  designation: string;
  promise: string;
  image: string;
  bio: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: 'Scandal' | 'Promise' | 'Election' | 'Bribe';
}

export interface VoteData {
  count: number;
  familyMembers: string[];
  constituency: string;
  phoneNumber: string;
  totalPrice: number;
}

export type AppState = 'splash' | 'onboarding' | 'home' | 'vote-dashboard' | 'manifesto' | 'leaders' | 'news' | 'success';
