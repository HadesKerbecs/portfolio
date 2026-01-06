import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {

  projects: Project[] = [
    {
      title: 'SkyPulse — Plataforma Full Stack',
      description: 'Plataforma full stack para coleta, processamento e visualização de dados com IA.',
      longDescription: `
Aplicação full stack moderna voltada à integração de múltiplos serviços e tecnologias.

O sistema coleta dados climáticos em tempo real por meio de APIs públicas como Open-Meteo,
processa essas informações utilizando um backend em NestJS e as armazena em banco de dados.

O frontend foi desenvolvido em React com Vite, apresentando dashboards interativos para
visualização dos dados coletados. A aplicação também gera insights automatizados com uso
de Inteligência Artificial.

Toda a arquitetura é orquestrada via Docker Compose, incluindo autenticação JWT,
CRUD de usuários, integração com APIs externas (PokéAPI, SWAPI) e exportação de dados.
      `,
      image: 'assets/images/projects/SkyPulse.png',
      technologies: ['React', 'NestJS', 'Docker', 'JWT', 'APIs', 'IA'],
    },

    {
      title: 'PsicoSimula — Ferramenta Web para Psicopatologia (IAG)',
      description: 'Ferramenta educacional para geração de casos clínicos com IA generativa.',
      longDescription: `
Plataforma web desenvolvida para apoiar o ensino e estudo da psicopatologia por meio
do uso de Inteligência Artificial Generativa.

A aplicação permite a criação de casos clínicos personalizados a partir de parâmetros
definidos pelo usuário, como idade, sexo, histórico médico e nível de complexidade.
Os cenários são gerados com apoio da API do ChatGPT, promovendo uma experiência de
aprendizado dinâmica e imersiva.

O sistema foi desenvolvido com backend em Django, incluindo persistência de dados,
armazenamento de histórico de interações e feedback automatizado, facilitando a
prática diagnóstica e o desenvolvimento do raciocínio clínico.
      `,
      image: 'assets/images/projects/PsicoSimula.png',
      technologies: ['Angular', 'Django', 'OpenAI', 'IA Generativa'],
    },

    {
      title: 'GiveLife — Aplicativo Mobile Hospitalar',
      description: 'Aplicativo mobile voltado à doação de sangue e engajamento de doadores.',
      longDescription: `
O GiveLife é um aplicativo mobile desenvolvido com o objetivo de facilitar e incentivar
o processo de doação de sangue.

A aplicação conta com dois módulos: um módulo público, acessível sem login, que oferece
informações essenciais sobre doação, requisitos, campanhas, dúvidas frequentes e
localização de hemocentros; e um módulo autenticado, onde o usuário pode agendar doações,
consultar protocolos, acessar exames, acompanhar histórico de doações e visualizar
benefícios e bonificações.

O projeto foi desenvolvido com foco em usabilidade e experiência do usuário, utilizando
Flutter e FlutterFlow para prototipação e desenvolvimento ágil.
      `,
      image: 'assets/images/projects/GiveLife.png',
      technologies: ['Flutter', 'FlutterFlow', 'UX/UI'],
    },

    {
      title: 'Sistema Inteligente de Atendimento via WhatsApp',
      description: 'Plataforma de atendimento automatizado via WhatsApp com IA.',
      longDescription: `
Sistema completo de atendimento comercial automatizado via WhatsApp, desenvolvido
para suportar múltiplas empresas em um único ambiente.

A plataforma possui painel administrativo em Angular, backend em Node.js com autenticação
JWT e integração com a API da OpenAI para geração de respostas inteligentes. O envio e
recebimento de mensagens é realizado via API do WhatsApp (Twilio, de forma momentânea).

O sistema inclui gerenciamento de empresas, usuários, produtos, histórico de mensagens
com limpeza automática e isolamento de dados por empresa, garantindo segurança e
escalabilidade da solução.
      `,
      image: 'assets/images/projects/WhatsApp.png',
      technologies: ['Angular', 'Node.js', 'OpenAI', 'JWT', 'MongoDB', 'WhatsApp API'],
    }
  ];

  getProjects() {
    return this.projects;
  }
}
