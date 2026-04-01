import React from 'react';

interface DoctorDashboardProps {
  user: any;
}

export const DoctorDashboard: React.FC<DoctorDashboardProps> = ({ user }) => {
  return (
    <>
      <section className="welcome-section">
        <h2>Olá, Dr. {user?.name || 'Médico'}!</h2>
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
          <p>Seja bem-vindo ao seu painel médico administrativo.</p>
        </div>
      </div>
    </>
  );
};
