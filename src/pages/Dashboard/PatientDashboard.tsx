import React from 'react';
import type { User } from '../../types/auth';

interface PatientDashboardProps {
  user: User;
}

export const PatientDashboard: React.FC<PatientDashboardProps> = ({ user }) => {
  return (
    <>
      <section className="welcome-section">
        <h2>Olá, {user?.name || 'Usuário'}!</h2>
        <p>Saúde em dia! Confira seus dados e próximos agendamentos.</p>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <h3>Próximas Consultas</h3>
          <p className="stat-number">2</p>
        </div>
        <div className="stat-card">
          <h3>Minhas Receitas</h3>
          <p className="stat-number">3</p>
        </div>
        <div className="stat-card">
          <h3>Últimos Exames</h3>
          <p className="stat-number">7</p>
        </div>
      </section>

      <div className="dashboard-content">
        <div className="empty-state">
          <p>Confira seu histórico completo de exames e medicamentos prescritos.</p>
        </div>
      </div>
    </>
  );
};
