/**
 * Dados dos comportamentos para avaliação de servidor comissionado
 */
export const comportamentos = [
  {
    id: 1,
    nome: "PLANEJAMENTO E ORGANIZAÇÃO",
    descricao:
      "Capacidade de planejar e organizar o trabalho para execução de suas atividades utilizando os recursos disponíveis de forma eficiente para atingir os objetivos propostos.",
    max_pontos: 10,
    criterios: [
      { id: 1, texto: "Atua com foco em resultados, utilizando os recursos disponíveis.", peso: 1 },
      {
        id: 2,
        texto: "Estabelece mecanismos de controle e monitoramento para avaliar o andamento das tarefas e ações.",
        peso: 2
      },
      {
        id: 3,
        texto: "Prioriza as ações em função dos resultados, de acordo com as estratégias da organização.",
        peso: 2
      }
    ]
  },
  {
    id: 2,
    nome: "VISÃO ESTRATÉGICA",
    descricao:
      "Capacidade para compreender e antecipar as mudanças do contexto e estabelecer seu impacto, visualizar e conduzir as ações institucionais como um sistema integrado para alcançar objetivos e metas, associados às estratégias.",
    max_pontos: 15,
    criterios: [
      {
        id: 1,
        texto: "Demonstra capacidade de alinhar as ações e recursos aos objetivos institucionais, promovendo inovação e eficiência.",
        peso: 1
      },
      {
        id: 2,
        texto:
          "Habilidade de entender a Prefeitura de forma ampla, antecipando desafios e oportunidades, e tomando decisões que integrem os setores para alcançar os objetivos estratégicos.",
        peso: 1
      },
      {
        id: 3,
        texto: "Atua de forma sistêmica, integrando processos, recursos e equipes para garantir a eficiência na  execução das atividades.",
        peso: 1
      }
    ]
  },
  {
    id: 3,
    nome: "ATITUDE PROATIVA E AUTONOMIA",
    descricao:
      "refere-se a propostas de soluções e sugestões para situações ou problemas, por iniciativa própria, visando a melhoria efetiva do trabalho, desenvolvendo suas atividades de forma independente, mas articulada, sem a necessidade de orientação constante dos outros.",
    max_pontos: 10,
    criterios: [
      {
        id: 1,
        texto:
          "Age de forma preventiva e proativa em suas tarefas, de forma a evitar atrasos e agravamento de problemas e resgatando a experiência de seus colegas e superiores.",
        peso: 2
      },
      {
        id: 2,
        texto: "Se comunica com seu superior imediato e propõe idéias para o melhor cumprimento dos objetivos da equipe.",
        peso: 1
      },
      {
        id: 3,
        texto: "Mostra-se disponível e atende a solicitações na participação em atividades/serviços, comissões de atividades administrativas e/ou pedagógica.",
        peso: 2
      }
    ]
  },
  {
    id: 4,
    nome: "APERFEIÇOAMENTO CONTÍNUO",
    descricao:
      "relaciona-se a aquisição de novos conhecimentos, atitudes e comportamentos necessários para o bom andamento das atividades e sua eficaz aplicação no ambiente laboral.",
    max_pontos: 10,
    criterios: [
      {
        id: 1,
        texto:
          "Demonstra interesse contínuo em desenvolver suas competências, buscando novos conhecimentos e aprimorando suas habilidades para melhorar seu desempenho.",
        peso: 2
      },
      {
        id: 2,
        texto: "Participa ativamente de capacitações, adapta-se a novas exigências da função e aplica boas práticas para agregar valor à organização.",
        peso: 2
      },
      {
        id: 3,
        texto: "Aplica novos conhecimentos adquiridos  no trabalho, contribuindo para a inovação e a melhoria dos processos organizacionais.",
        peso: 1
      }
    ]
  },
  {
    id: 5,
    nome: "GESTÃO DE PESSOAS",
    descricao:
      "Capacidade de conduzir a equipe para o cumprimento efetivo das tarefas, metas e prazos, viabilizando o alcance de resultados de acordo com as estratégias organizacionais.",
    max_pontos: 10,
    criterios: [
      {
        id: 1,
        texto: "Transmite com clareza as tarefas necessárias a realizar, assegurando a adequada condução das pessoas envolvidas.",
        peso: 1
      },
      {
        id: 2,
        texto: "Proporciona capacitação e desenvolvimento buscando manter pessoas talentosas no exercício das atividades.",
        peso: 1
      },
      {
        id: 3,
        texto:
          "Capacidade de planejar e implementar ações que promovam um ambiente de trabalho saudável, seguro e motivador, contribuindo para o bem-estar físico, mental e emocional dos servidores.",
        peso: 1
      }
    ]
  },
  {
    id: 6,
    nome: "FOCO NAS NECESSIDADES DO USUÁRIO",
    descricao: "Capacidade de atuar de maneira eficiente frente às necessidades apresentadas pelo usuário.",
    max_pontos: 10,
    criterios: [
      {
        id: 1,
        texto: "Contribui significativamente para a imagem da qualidade dos serviços prestados pela Prefeitura.",
        peso: 2
      },
      {
        id: 2,
        texto: "Responde as demandas do usuário de forma tempestiva e com qualidade, de acordo com as necessidades específicas apresentadas.",
        peso: 1
      },
      {
        id: 3,
        texto: "Atende a todos com cordialidade, atenção e respeito, considerando as suas necessidades e/ou limitações.",
        peso: 2
      }
    ]
  },
  {
    id: 7,
    nome: "FLEXIBILIDADE",
    descricao: "Capacidade para trabalhar de forma flexível adaptando-se às diferentes situações para melhorar o seu desempenho.",
    max_pontos: 10,
    criterios: [
      { id: 1, texto: "Compreende a necessidade de execução de novas demandas e diretrizes recebidas.", peso: 1 },
      {
        id: 2,
        texto: "Adapta a novos contextos, interagindo com facilidade e rapidez às diversas situações.",
        peso: 2
      },
      {
        id: 3,
        texto: "Aceita as decisões tomadas pelos gestores frente a situações difíceis, colaborando com sugestões e alternativas.",
        peso: 2
      }
    ]
  },
  {
    id: 8,
    nome: "RELAÇÕES INTERPESSOAIS",
    descricao:
      "refere-se ao estabelecimento e manutenção de relações cordiais, pautadas no respeito com as distintas pessoas do Instituto, contribuindo para a criação de um bom ambiente global de trabalho.",
    max_pontos: 10,
    criterios: [
      {
        id: 1,
        texto: "Mantém um comportamento respeitoso e cordial no ambiente de trabalho, demonstrando empatia ao interagir com colegas, superiores e parceiros.",
        peso: 1
      },
      {
        id: 2,
        texto: "Demonstra maturidade ao lidar com conflitos, promovendo o respeito mútuo e a cooperação entre os colegas.",
        peso: 2
      },
      { id: 3, texto: "Age de forma transparente contribuindo para um clima organizacional harmonioso.", peso: 2 }
    ]
  },
  {
    id: 9,
    nome: "COMPORTAMENTO ÉTICO",
    descricao:
      "refere-se a atitude pautada pelo respeito ao próximo, integridade, senso de justiça, impessoalidade nas ações e valorização do conceito de cidadania e do bem público.",
    max_pontos: 15,
    criterios: [
      {
        id: 1,
        texto:
          "Demonstra profissionalismo ao reconhecer e seguir a estrutura hierárquica da Prefeitura, acatando orientações e decisões de seus superiores de forma ética e respeitosa.",
        peso: 2
      },
      {
        id: 2,
        texto: "Comporta-se de forma a respeitar o próximo, mantendo o sigilo devido às informações que possam de alguma forma expor o outro.",
        peso: 1
      },
      {
        id: 3,
        texto: "Cumpre suas funções com dedicação e seriedade, respeitando normas, regulamentos e os valores institucionais da Prefeitura.",
        peso: 2
      }
    ]
  }
]

export default comportamentos
