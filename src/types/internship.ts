export interface Internship {
  role: string;
  company: string;
  location: string;
  stipend: string;
  apply_by: string;
  link: string;
  logo: string;
  skills?: string[];
}

export interface ScrapingResult {
  success: boolean;
  data?: Internship[];
  error?: string;
} 