import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { userService, authService } from '../../services/api';
import { Button } from '../../components/Button';
import { DoctorDashboard } from './DoctorDashboard';
import { PatientDashboard } from './PatientDashboard';
import { ThemeToggle } from '../../components/ThemeToggle';
import './styles.css';

export const Dashboard: React.FC = () => {
  const role = localStorage.getItem('user_role') || 'usuario';
  
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

  if (!user) {
    return (
      <div className="loading">
        Erro ao carregar perfil. <Button onClick={handleLogout}>Sair</Button>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="container header-content">
          <h1 className="logo">MedicApp</h1>
          <div className="user-info">
            <ThemeToggle />
            <span className="user-role">{role}</span>
            <Button variant="outline" onClick={handleLogout}>Sair</Button>
          </div>
        </div>
      </header>

      <main className="container dashboard-main">
        {user.role === 'doctor' ? (
          <DoctorDashboard user={user} />
        ) : (
          <PatientDashboard user={user} />
        )}
      </main>
    </div>
  );
};

