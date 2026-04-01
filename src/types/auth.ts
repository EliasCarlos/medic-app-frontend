export interface User {
  id: string;
  name: string;
  email: string;
  role: 'doctor' | 'patient';
}

export interface AuthResponse {
  access_token: string;
  role: 'doctor' | 'patient';
}
