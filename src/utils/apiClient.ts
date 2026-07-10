// import type { promises } from "dns";
// import { blob } from "stream/consumers";
import { ref } from 'vue'

//export const API_BASE_URL = 'https://localhost:44375/api';
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
if (!API_BASE_URL) {
  throw new Error('VITE_API_BASE_URL is not defined');
}

export interface LoginResponse {
  token: string;
  user: {
    email: string;
    name?: string;
  };
}

export const authState = ref(!!localStorage.getItem('auth_token'))

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';
export const auth = {
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },

  getUser(): { email: string; name?: string } | null {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  },

  setUser(user: { email: string; name?: string }) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  },

  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token)
    authState.value = true
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    authState.value = false
  }
};
async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = auth.getToken();
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init.headers || {})
    }
  });
  if (res.status === 401) {
    auth.logout();
    throw new Error('Unauthorized');
  }
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed (${res.status})`);
  }
  if (res.status === 204) return undefined as T;
  const ct = res.headers.get('content-type') || '';
  return (ct.includes('application/json') ? await res.json() : (await res.text() as unknown)) as T;
}
export interface Contact {
  id: number | string;
  name: string;
  email: string;
  message: string;
  createdAt?: string;
  company?: string;
  consent: boolean;
}
export interface CreateContactDto {
  name: string;
  email: string;
  company?: string;
  message: string;
  consent: boolean;
}
export interface Blog {
  id: number | string;
  title: string;
  summary: string;
  content: string;
  author: string;
  category: string;
  createdAt: string;
  readTime?: string;
  date?: string;
}
export interface CreateBlogDto {
  title: string
  slug: string
  summary: string
  content: string
  author: string
  category: string
}
export const api = {
  // ---- Auth ----
  async login(email: string, password: string): Promise<LoginResponse> {
  return request<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
  });
  },
  
  // ---- Contacts ----
  sendContact(contact: CreateContactDto): Promise<{ message: string }> {
    return request<{ message: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify(contact)
    });
  },

  listContacts(): Promise<Contact[]> {
    return request<Contact[]>('/contact');
  },
  deleteContact(id: Contact['id']): Promise<void> {
    return request<void>(`/contact/${id}`, { method: 'DELETE' });
  },

  // ---- Blogs ----
  listBlogs(): Promise<Blog[]> {
    return request<Blog[]>('/blog');
  },

  createBlog(blog: CreateBlogDto): Promise<void> {
    return request<void>('/blog', {
      method: 'POST',
      body: JSON.stringify(blog)
    });  
  },

  deleteBlog(id: Blog['id']): Promise<void> {
    return request<void>(`/blog/${id}`, { method: 'DELETE' });
  },

  getBlog(id: number | string): Promise<Blog>{
    return request<Blog>(`/blog/${id}`);
  },

  updateBlog(id: number | string, blog: CreateBlogDto): Promise<Blog> {
    return request<Blog>(`/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify(blog)
    });
  },
};
