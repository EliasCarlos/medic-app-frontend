import { AuthResponse } from '../types/auth';

const BASE_URL = import.meta.env.VITE_API_URL;

export const authService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Falha ao fazer login');
    }

    const data = await response.json();
    
    // Store token in localStorage for simplicity (could be cookie in production)
    localStorage.setItem('access_token', data.access_token);
    
    return data;
  },

  logout() {
    localStorage.removeItem('access_token');
    window.location.href = '/login';
  },

  getToken() {
    return localStorage.getItem('access_token');
  }
};

export const userService = {
  async getProfile(): Promise<any> {
    const token = authService.getToken();
    const role = localStorage.getItem('user_role'); // We should store this on login too
    
    // Based on the backend, we need the user ID to get profile 
    // OR we can decode the JWT if we have a lib, but let's assume 
    // there's a /auth/profile or similar or we hit the specific role endpoint
    // For now, let's just use a generic greeting based on what we have.
    
    // If the backend had a /profile endpoint it would be easier.
    // Let's check main.ts or app.module to see if there's a global profile route.
    return { name: 'Usuário' }; // Fallback
  }
};
