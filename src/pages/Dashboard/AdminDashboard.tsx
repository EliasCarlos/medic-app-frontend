import React from 'react';
import { User, Users, Calendar, ShieldCheck } from 'lucide-react';
import type { User as UserType } from '../../types/auth';

interface AdminDashboardProps {
  user: UserType;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ user }) => {
  return (
    <>
      <section className="welcome-section">
        <h2>Olá, Administrador {user.name}!</h2>
        <p>Visão geral do sistema e controle de acesso.</p>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper doctor-icon">
            <Users size={24} />
          </div>
          <div className="stat-info">
            <h3>Médicos Ativos</h3>
            <p className="stat-number">15</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-wrapper patient-icon">
            <User size={24} />
          </div>
          <div className="stat-info">
            <h3>Pacientes Cadastrados</h3>
            <p className="stat-number">342</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-wrapper appointment-icon">
            <Calendar size={24} />
          </div>
          <div className="stat-info">
            <h3>Consultas Realizadas</h3>
            <p className="stat-number">890</p>
          </div>
        </div>
      </section>

      <div className="dashboard-content">
        <div className="admin-actions">
          <h3>Ações Administrativas</h3>
          <div className="actions-grid">
            <button className="action-button">
              <ShieldCheck size={20} />
              <span>Gerenciar Médicos</span>
            </button>
            <button className="action-button">
              <Users size={20} />
              <span>Gerenciar Pacientes</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
