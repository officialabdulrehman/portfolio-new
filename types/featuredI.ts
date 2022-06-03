export interface FeaturedI {
  name: string;
  role: string;
  category: string;
  company: string;
  startedAt: Date;
  endedAt?: Date;
  featured: boolean;
  image?: string;
  url?: string;
}
