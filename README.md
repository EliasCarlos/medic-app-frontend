# 🩺 Medi-App Frontend

<p align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white" alt="React Query">
</p>

Este repositório contém o frontend do **Medi-App**, uma interface moderna, segura e responsiva para gerenciamento de consultórios médicos. O projeto foi desenvolvido com foco em experiência do usuário (UX), performance e uma arquitetura escalável baseada em componentes.

---

## 📑 Sumário

- [Tecnologias](#-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Configuração](#-configuração)
- [Como Executar](#-como-executar)
- [Licença](#-licença)

---

## 🚀 Tecnologias

O projeto foi construído utilizando as seguintes ferramentas:

| Categoria | Tecnologia |
| :--- | :--- |
| **Framework** | [React](https://react.dev/) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) |
| **Estado/Query** | [React Query (TanStack)](https://tanstack.com/query/latest) |
| **Roteamento** | [React Router 7](https://reactrouter.com/) |
| **Estilização** | CSS Puro (CSS Variables & Design Tokens) |

---

## ✨ Funcionalidades

- 🔐 **Autenticação Segura**: Fluxo de login com proteção de rotas (`PrivateRoute` / `PublicRoute`) e gestão de tokens JWT.
- 👨‍⚕️ **Dashboard do Médico**: Visão focada em produtividade com KPIs de consultas, prescrições e pacientes ativos.
- 🤕 **Dashboard do Paciente**: Visão focada no cuidado individual, histórico de exames e receitas.
- 📱 **Responsividade Total**: Layout adaptado para Desktop, Tablets e Smartphones.
- 🎨 **Design Premium**: Interface moderna com animações suaves, micro-interações e Clean UI.
- 🏗️ **Arquitetura Modular**: Organização baseada em componentes com isolamento de estilos.

---

## 📂 Estrutura do Projeto

```bash
src/
├── components/          # Componentes Reutilizáveis
│   ├── Button/          # index.tsx + styles.css
│   └── Input/           # index.tsx + styles.css
├── pages/               # Páginas da Aplicação
│   ├── Login/           # Tela de acesso
│   └── Dashboard/       # Dashboard unificado (Dispatcher)
│       ├── DoctorDashboard.tsx
│       └── PatientDashboard.tsx
├── services/            # Integração com API (Fetch)
├── types/               # Definições de tipos TypeScript
├── styles/              # Variáveis globais e resets
└── App.tsx              # Configuração de rotas e provedores
```

---

## 📂 Configuração

Antes de iniciar, certifique-se de configurar as variáveis de ambiente baseadas no `.env.example`:

```bash
cp .env.example .env
```

| Variável | Descrição |
| :--- | :--- |
| `VITE_API_URL` | URL base da API do Backend (ex: http://localhost:5000) |

---

## ⚙️ Como Executar

1. Instale as dependências:
```bash
npm install # ou yarn install
```

2. Certifique-se de que o **Backend** está em execução.

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
👉 **[http://localhost:5173](http://localhost:5173)** (ou a porta indicada pelo Vite)

---

## 📜 Referência ao Projeto Original

Este projeto faz parte do ecossistema **Medi-App**, reimplementando a proposta da disciplina de **Programação II** da **Faculdade Descomplica** com tecnologias modernas de frontend.

---

## 📫 Contribuindo

1. Faça um Fork do projeto.
2. Crie uma Branch para sua feature (`git checkout -b feature/nova-feature`).
3. Faça o Commit de suas alterações (`git commit -m 'feat: add awesome feature'`).
4. Envie para a Branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---

## 📝 Licença

Este projeto é destinado a fins educacionais e acadêmicos. Distribuído sob a licença **UNLICENSED**.

---
<p align="center">Desenvolvido por Elias Carlos</p>
