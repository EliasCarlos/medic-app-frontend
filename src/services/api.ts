import type { AuthResponse, User } from '../types/auth';

const BASE_URL = import.meta.env.VITE_API_URL;

// Base interface for backend responses (using TransformInterceptor)
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const authService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result: ApiResponse<AuthResponse> = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Falha ao fazer login');
    }

    // Access result.data because the backend wraps the response
    const data = result.data;
    
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('user_role', data.role);
    
    return data;
  },

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_role');
    window.location.href = '/login';
  },

  getToken() {
    return localStorage.getItem('access_token');
  }
};

export const userService = {
  async getProfile(): Promise<User> {
    const token = authService.getToken();
    
    if (!token) {
      throw new Error('Não autenticado');
    }

    const response = await fetch(`${BASE_URL}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const result: ApiResponse<User> = await response.json();

    if (!response.ok) {
      if (response.status === 401) {
        authService.logout();
      }
      throw new Error(result.message || 'Falha ao carregar perfil');
    }

    return result.data;
  }
};

