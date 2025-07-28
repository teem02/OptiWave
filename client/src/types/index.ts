export interface User {
  id: number;
  email: string;
  name: string;
}

export interface Video {
  id: number;
  title: string;
  description: string;
  filename: string;
  original_name: string;
  category: string;
  tags: string;
  views: number;
  uploader_name: string;
  created_at: string;
  featured?: boolean;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}