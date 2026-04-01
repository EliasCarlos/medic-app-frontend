import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/api';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import './styles.css';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: () => authService.login(email, password),
    onSuccess: (data) => {
      localStorage.setItem('user_role', data.role);
      navigate('/dashboard', { replace: true });
    },
    onError: (error: any) => {
      setErrorMessage(error.message || 'Credenciais inválidas');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    mutation.mutate();
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <header className="login-header">
          <h1>Bem-vindo ao MedicApp</h1>
          <p>Entre com suas credenciais para continuar</p>
        </header>

        <form onSubmit={handleSubmit} className="login-form">
          {errorMessage && (
            <div className="alert-error">
              {errorMessage}
            </div>
          )}

          <Input
            id="email"
            label="E-mail"
            type="email"
            placeholder="exemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={mutation.isPending}
          />

          <Input
            id="password"
            label="Senha"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={mutation.isPending}
          />

          <Button 
            type="submit" 
            fullWidth 
            disabled={mutation.isPending}
          >
            {mutation.isPending ? 'Entrando...' : 'Acessar'}
          </Button>
        </form>

        <footer className="login-footer">
          <p>Não tem uma conta? <a href="#">Solicite acesso</a></p>
        </footer>
      </div>
    </div>
  );
};
