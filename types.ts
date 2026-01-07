export enum Screen {
  Dashboard = 'dashboard',
  ProductDetail = 'product_detail',
  Tournaments = 'tournaments',
  Caddies = 'caddies',
  AICoach = 'ai_coach',
  Shop = 'shop',
  Events = 'events',
  Profile = 'profile'
}

export interface Caddie {
  id: string;
  name: string;
  role: string;
  rating: number;
  hcp: number;
  rounds?: number;
  price: number;
  image: string;
  featured?: boolean;
}

export interface Tournament {
  id: string;
  name: string;
  location: string;
  date: string;
  type: 'Pro' | 'Amateur' | 'Charity' | 'Club';
  entryFee: number;
  image: string;
  featured?: boolean;
}

export enum AIMode {
  Chat = 'chat',
  Voice = 'voice',
  Vision = 'vision',
  Veo = 'veo',
  Maps = 'maps'
}