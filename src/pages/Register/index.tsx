import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, Link } from 'react-router-dom';
import { patientService } from '../../services/api';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ThemeToggle } from '../../components/ThemeToggle';
import './styles.css';

export const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    birthDate: '',
    phone: '',
  });
  
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: () => patientService.register(formData),
    onSuccess: () => {
      // After success, redirect to login so they can authenticate
      navigate('/login', { 
        state: { message: 'Cadastro realizado com sucesso! Faça login para continuar.' },
        replace: true 
      });
    },
    onError: (error: any) => {
      setErrorMessage(error.message || 'Erro ao realizar cadastro');
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    mutation.mutate();
  };

  return (
    <div className="register-page">
      <div className="theme-toggle-wrapper">
        <ThemeToggle />
      </div>
      <div className="register-card">
        <header className="register-header">
          <h1>Crie sua conta</h1>
          <p>Preencha os dados abaixo para se cadastrar como paciente</p>
        </header>

        <form onSubmit={handleSubmit} className="register-form">
          {errorMessage && (
            <div className="alert-error">
              {errorMessage}
            </div>
          )}

          <Input
            id="name"
            label="Nome Completo"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={mutation.isPending}
          />

          <div className="form-row">
            <Input
              id="email"
              label="E-mail"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={mutation.isPending}
            />

            <Input
              id="phone"
              label="Telefone"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={mutation.isPending}
            />
          </div>

          <div className="form-row">
            <Input
              id="birthDate"
              label="Data de Nascimento"
              type="date"
              value={formData.birthDate}
              onChange={handleChange}
              required
              disabled={mutation.isPending}
            />

            <Input
              id="password"
              label="Senha"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              disabled={mutation.isPending}
            />
          </div>

          <Button 
            type="submit" 
            fullWidth 
            disabled={mutation.isPending}
          >
            {mutation.isPending ? 'Cadastrando...' : 'Criar Conta'}
          </Button>
        </form>

        <footer className="register-footer">
          <p>Já tem uma conta? <Link to="/login">Acessar</Link></p>
        </footer>
      </div>
    </div>
  );
};
