import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { userService, authService } from '../services/api';
import { Button } from '../components/Button';
import './Dashboard.css';

export const Dashboard: React.FC = () => {
  const role = localStorage.getItem('user_role') || 'usuário';
  const { data: user, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: userService.getProfile
  });

  const handleLogout = () => {
    authService.logout();
  };

  if (isLoading) {
    return <div className="loading">Carregando painel...</div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="container header-content">
          <h1 className="logo">MedicApp</h1>
          <div className="user-info">
            <span className="user-role">{role}</span>
            <Button variant="outline" onClick={handleLogout}>Sair</Button>
          </div>
        </div>
      </header>

      <main className="container dashboard-main">
        <section className="welcome-section">
          <h2>Olá, {user?.role === 'doctor' ? 'Dr.' : ''} {user?.name || 'Usuário'}!</h2>
          <p>Temos um dia produtivo pela frente. Aqui estão suas atualizações.</p>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <h3>Consultas de Hoje</h3>
            <p className="stat-number">12</p>
          </div>
          <div className="stat-card">
            <h3>Novas Prescrições</h3>
            <p className="stat-number">5</p>
          </div>
          <div className="stat-card">
            <h3>Pacientes Ativos</h3>
            <p className="stat-number">48</p>
          </div>
        </section>

        <div className="dashboard-content">
          <div className="empty-state">
            <img src="/placeholder-dashboard.svg" alt="Sem atividades" className="empty-img" />
            <p>Seja bem-vindo ao seu novo painel administrativo.</p>
          </div>
        </div>
      </main>
    </div>
  );
};
