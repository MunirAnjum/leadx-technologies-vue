// Centralised API client for the .NET backend.
// Auto-attaches the Bearer token saved at login and exposes typed helpers.
export const API_BASE_URL = 'https://localhost:44375/api';

export interface LoginResponse {
  token: string;
  user: {
    email: string;
    name?: string;
  };
}

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';
export const auth = {
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },
  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
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
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
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
  phone?: string;
  subject?: string;
  message: string;
  createdAt?: string;
}
export const api = {
  // ---- Auth ----
  // NOTE: No real auth endpoint was provided. This uses a dummy check.
  // Replace the body of `login` with a fetch call to your real endpoint, e.g.
  //   return request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
  async login(email: string, password: string): Promise<LoginResponse> {
  return request<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
  });
  },
  
  // ---- Contacts ----
  listContacts(): Promise<Contact[]> {
    return request<Contact[]>('/contact');
  },
  deleteContact(id: Contact['id']): Promise<void> {
    return request<void>(`/contact/${id}`, { method: 'DELETE' });
  }
};
