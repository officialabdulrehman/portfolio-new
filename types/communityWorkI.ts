export interface CommunityWorkI {
  name: string;
  role: string;
  location: string;
  startDate: Date;
  endDate?: string;
  duration: string;
  links: Link[];
}

export interface Link {
  name: string
  url: string
}