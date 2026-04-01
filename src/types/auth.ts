export interface User {
  id: string;
  name: string;
  email: string;
  role: 'doctor' | 'patient';
}

export interface Patient extends User {
  birthDate: string;
  phone: string;
}

export interface AuthResponse {
  access_token: string;
  role: 'doctor' | 'patient';
}

export interface CreatePatientData {
  name: string;
  email: string;
  password: string;
  birthDate: string;
  phone: string;
}
