import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {

  projects: Project[] = [
    {
      title: 'SkyPulse — Plataforma Full‑Stack com Autenticação JWT, CRUD de Usuários e Integrações',
      description: 'Plataforma full stack para coleta, processamento e visualização de dados com uso de IA.',
      longDescription: `
📌 Visão Geral
Aplicação full stack moderna voltada à integração de múltiplos serviços, coleta de dados
reais e geração de insights inteligentes a partir de informações climáticas.

🌦️ Coleta e Processamento de Dados
• Coleta periódica de dados climáticos via APIs públicas (Open-Meteo / OpenWeather)  
• Processamento assíncrono por meio de workers  
• Armazenamento estruturado em backend  

📊 Dashboard e Visualização
• Dashboard interativo para visualização dos dados coletados  
• Apresentação clara de métricas e históricos climáticos  
• Interface moderna e responsiva  

🧠 Inteligência Artificial
• Geração de insights automatizados a partir dos dados climáticos  
• Análises sob demanda ou periódicas  

🧱 Arquitetura e Tecnologias
• Backend em NestJS com autenticação JWT  
• Frontend em React + Vite  
• Integração com APIs externas (Open-Meteo, PokéAPI, SWAPI)  
• CRUD de usuários  
• Exportação de dados  
• Orquestração completa via Docker Compose  
      `,
      image: 'assets/images/projects/SkyPulse.png',
      technologies: ['React',
        'Vite',
        'NestJS',
        'JWT',
        'APIs REST',
        'Docker',
        'Docker Compose',
        'Inteligência Artificial'],
      demo: 'https://skypulse-frontend.onrender.com',
      github: 'https://github.com/HadesKerbecs/SkyPulse'
    },

    {
      title: 'PsicoSimula — Ferramenta Web para Psicopatologia (IAG)',
      description: 'Ferramenta educacional para geração de casos clínicos com Inteligência Artificial Generativa.',
      longDescription: `
📌 Visão Geral
Plataforma web desenvolvida para apoiar o ensino e estudo da psicopatologia por meio
da utilização de Inteligência Artificial Generativa.

🧠 Geração de Casos Clínicos
• Criação de casos clínicos hipotéticos personalizados  
• Parâmetros configuráveis (idade, sexo, histórico médico, complexidade)  
• Apoio ao raciocínio clínico e diagnóstico  

🤖 Inteligência Artificial Generativa
• Integração com a API do ChatGPT  
• Geração dinâmica e contextualizada de cenários clínicos  
• Experiência de aprendizado imersiva  

🗂️ Persistência e Histórico
• Armazenamento de interações  
• Histórico de casos gerados  
• Feedback automatizado  

🧱 Arquitetura e Tecnologias
• Backend em Django  
• API REST  
• Organização modular  
• Foco em usabilidade e experiência do usuário  📌 Visão Geral
Plataforma web desenvolvida para apoiar o ensino e estudo da psicopatologia por meio
da utilização de Inteligência Artificial Generativa.

🧠 Geração de Casos Clínicos
• Criação de casos clínicos hipotéticos personalizados  
• Parâmetros configuráveis (idade, sexo, histórico médico, complexidade)  
• Apoio ao raciocínio clínico e diagnóstico  

🤖 Inteligência Artificial Generativa
• Integração com a API do ChatGPT  
• Geração dinâmica e contextualizada de cenários clínicos  
• Experiência de aprendizado imersiva  

🗂️ Persistência e Histórico
• Armazenamento de interações  
• Histórico de casos gerados  
• Feedback automatizado  

🧱 Arquitetura e Tecnologias
• Backend em Django  
• API REST  
• Organização modular  
• Foco em usabilidade e experiência do usuário  📌 Visão Geral
Plataforma web desenvolvida para apoiar o ensino e estudo da psicopatologia por meio
da utilização de Inteligência Artificial Generativa.

🧠 Geração de Casos Clínicos
• Criação de casos clínicos hipotéticos personalizados  
• Parâmetros configuráveis (idade, sexo, histórico médico, complexidade)  
• Apoio ao raciocínio clínico e diagnóstico  

🤖 Inteligência Artificial Generativa
• Integração com a API do ChatGPT  
• Geração dinâmica e contextualizada de cenários clínicos  
• Experiência de aprendizado imersiva  

🗂️ Persistência e Histórico
• Armazenamento de interações  
• Histórico de casos gerados  
• Feedback automatizado  

🧱 Arquitetura e Tecnologias
• Backend em Django  
• API REST  
• Organização modular  
• Foco em usabilidade e experiência do usuário  
      `,
      image: 'assets/images/projects/PsicoSimula.png',
      technologies: ['Angular',
        'TypeScript',
        'Django',
        'Django REST Framework',
        'OpenAI',
        'IA Generativa'],
        demo: 'https://psicosimula.onrender.com',
        github: 'https://github.com/HadesKerbecs/PsicoSimula'
    },

    {
      title: 'ControleFinanceiro — Aplicativo Mobile de Finanças Pessoais',
      description: 'Sistema web de controle financeiro pessoal com dashboard interativo, regras de negócio e arquitetura Full Stack.',
      longDescription: `
📌 Visão Geral
Sistema web de controle financeiro pessoal desenvolvido para organizar despesas,
compromissos futuros e oferecer uma visão clara do impacto financeiro real no dia a dia.

📊 Funcionalidades Principais
• Cadastro de despesas à vista ou parceladas  
• Categorias e subcategorias personalizadas  
• Múltiplas formas de pagamento (Cartão, Pix, Dinheiro e Fiado)  
• Geração automática e controle de parcelas  
• Reversão de pagamentos realizados  

💳 Gestão Financeira
• Cadastro e gerenciamento de cartões de crédito  
• Cálculo automático de limite disponível  
• Controle de compromissos fixos recorrentes  
• Separação entre gastos próprios e despesas de terceiros  

📈 Dashboard Financeiro
• Distribuição de gastos por categoria e subcategoria  
• Evolução mensal de despesas  
• Comparativos entre períodos  
• Parcelas a vencer  
• Indicadores de gasto real para apoio à tomada de decisão  

🧠 Arquitetura e Conceitos
Aplicação desenvolvida com foco em arquitetura Full Stack, regras de negócio bem
definidas, organização de código e experiência do usuário. Todo o ambiente é
padronizado com Docker para garantir consistência no desenvolvimento.
      `,
      image: 'assets/images/projects/ControleFinanceiro.png',
      technologies: ['Angular',
        'TypeScript',
        'Django',
        'Django REST Framework',
        'PostgreSQL',
        'Docker',
        'Docker Compose',
        'ApexCharts'],
        demo: 'https://controlefinanceiro-1-7l04.onrender.com',
        github: 'https://github.com/HadesKerbecs/ControleFinanceiro',

    },

    {
      title: 'Sistema Inteligente de Atendimento via WhatsApp',
      description: 'Plataforma de atendimento automatizado via WhatsApp com uso de Inteligência Artificial.',
      longDescription: `
📌 Visão Geral
Sistema de atendimento comercial automatizado via WhatsApp, desenvolvido para
atender múltiplas empresas em um único ambiente.

💬 Atendimento Automatizado
• Envio e recebimento de mensagens via WhatsApp  
• Respostas inteligentes geradas por IA  
• Atendimento simultâneo para múltiplos clientes  

🧠 Inteligência Artificial
• Integração com a API da OpenAI  
• Geração automática de respostas contextualizadas  

🧱 Painel Administrativo
• Painel web para gerenciamento de empresas e usuários  
• Histórico de mensagens  
• Isolamento de dados por empresa  

🔐 Arquitetura e Segurança
• Backend em Node.js  
• Autenticação JWT  
• Integração com API do WhatsApp (Twilio – momentâneo)  
• Arquitetura escalável e segura  
      `,
      image: 'assets/images/projects/WhatsApp.png',
      technologies: ['Angular',
        'TypeScript',
        'Node.js',
        'OpenAI',
        'JWT',
        'MongoDB',
        'WhatsApp API'],
        github: 'https://github.com/HadesKerbecs/Projeto_WhatsApp.git'
    }
  ];

  getProjects() {
    return this.projects;
  }
}
