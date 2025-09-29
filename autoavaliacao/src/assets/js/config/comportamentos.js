export const comportamentos = [
  {
    id: 1,
    nome: "ASSIDUIDADE, PONTUALIDADE E DISCIPLINA",
    descricao: "refere-se ao compromisso com o cumprimento do horário de trabalho e com as normas vigentes na Prefeitura.",
    max_pontos: 10,
    criterios: [
      { id: 1, texto: "Chega ao trabalho no horário estabelecido.", peso: 1 },
      { id: 2, texto: "Comunica com antecedência à chefia e à equipe as ausências necessárias durante o horário de trabalho.", peso: 2 },
      { id: 3, texto: "Tem conhecimento e cumpre as normas da Prefeitura e as demandas da chefia.", peso: 2 }
    ]
  },
  {
    id: 2,
    nome: "PRODUTIVIDADE E EFICÁCIA",
    descricao:
      "refere-se ao rendimento do trabalho em termos de quantidade e qualidade dos resultados esperados, utilizando o tempo e outros recursos disponíveis para melhor desempenho.",
    max_pontos: 10,
    criterios: [
      { id: 1, texto: "Realiza suas atividades com exigência e rigor, estando atento aos critérios de qualidade.", peso: 1 },
      { id: 2, texto: "Gerencia os recursos disponíveis para a realização de suas atividades da melhor forma possível.", peso: 2 },
      {
        id: 3,
        texto:
          "Conclui, em tempo hábil, todas as atividades que se envolve, seja as específicas de seu cargo como as de comissões, grupos de trabalho e outros, com o mesmo empenho e foco na qualidade.",
        peso: 2
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
          "Age de forma preventiva e proativa em suas tarefas, de forma a evitar atrasos e agravamento de problemas e resgatando a experiência de seus colegas e superiores",
        peso: 2
      },
      { id: 2, texto: "Se comunica com seu superior imediato e propõe ideias para o melhor cumprimento dos objetivos da equipe.", peso: 1 },
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
    max_pontos: 15,
    criterios: [
      {
        id: 1,
        texto:
          "Demonstra interesse contínuo em desenvolver suas competências, buscando novos conhecimentos e aprimorando suas habilidades para melhorar seu desempenho.",
        peso: 1
      },
      {
        id: 2,
        texto: "Participa ativamente de capacitações, adapta-se a novas exigências da função e aplica boas práticas para agregar valor à organização.",
        peso: 1
      },
      { id: 3, texto: "Aplica novos conhecimentos adquiridos no trabalho, contribuindo para a inovação e a melhoria dos processos organizacionais.", peso: 1 }
    ]
  },
  {
    id: 5,
    nome: "CAPACIDADE DE TRABALHO EM EQUIPE",
    descricao:
      "relaciona-se com a capacidade de desenvolver as atividades e tarefas em equipe, valorizando o trabalho em conjunto na busca de resultados comuns.",
    max_pontos: 10,
    criterios: [
      {
        id: 1,
        texto: "Contribui ativamente para um ambiente de trabalho harmonioso, respeitando diferentes opiniões e promovendo a integração da equipe.",
        peso: 2
      },
      {
        id: 2,
        texto: "Busca soluções conjuntas para desafios e incentiva um espírito de cooperação, garantindo o cumprimento eficiente das demandas.",
        peso: 1
      },
      { id: 3, texto: "Atua de forma alinhada às metas coletivas, garantindo que suas atividades e decisões contribuam para os resultados esperados.", peso: 2 }
    ]
  },
  {
    id: 6,
    nome: "FOCO NAS NECESSIDADES DO USUÁRIO",
    descricao: "Capacidade de atuar de maneira eficiente frente às necessidades apresentadas pelo usuário.",
    max_pontos: 10,
    criterios: [
      { id: 1, texto: "Contribui significativamente para a imagem da qualidade dos serviços prestados pela Prefeitura.", peso: 2 },
      { id: 2, texto: "Responde as demandas do usuário de forma tempestiva e com qualidade, de acordo com as necessidades específicas apresentadas.", peso: 1 },
      { id: 3, texto: "Atende a todos com cordialidade, atenção e respeito, considerando as suas necessidades e/ou limitações.", peso: 2 }
    ]
  },
  {
    id: 7,
    nome: "FLEXIBILIDADE",
    descricao: "Capacidade para trabalhar de forma flexível adaptando-se às diferentes situações para melhorar o seu desempenho.",
    max_pontos: 10,
    criterios: [
      { id: 1, texto: "Compreende a necessidade de execução de novas demandas e diretrizes recebidas.", peso: 1 },
      { id: 2, texto: "Adapta a novos contextos, interagindo com facilidade e rapidez às diversas situações.", peso: 2 },
      { id: 3, texto: "Aceita as decisões tomadas pelos gestores frente a situações difíceis, colaborando com sugestões e alternativas.", peso: 2 }
    ]
  },
  {
    id: 8,
    nome: "RELAÇÕES INTERPESSOAIS",
    descricao:
      "refere-se ao estabelecimento e manutenção de relações cordiais, pautadas no respeito com as distintas pessoas do órgão, contribuindo para a criação de um bom ambiente global de trabalho.",
    max_pontos: 10,
    criterios: [
      {
        id: 1,
        texto: "Mantém um comportamento respeitoso e cordial no ambiente de trabalho, demonstrando empatia ao interagir com colegas, superiores e parceiros.",
        peso: 1
      },
      { id: 2, texto: "Demonstra maturidade ao lidar com conflitos, promovendo o respeito mútuo e a cooperação entre os colegas.", peso: 2 },
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
        peso: 1
      },
      {
        id: 2,
        texto: "Comporta-se de forma a respeitar o próximo, mantendo o sigilo devido às informações que possam de alguma forma expor o outro.",
        peso: 1
      },
      { id: 3, texto: "Cumpre suas funções com dedicação e seriedade, respeitando normas, regulamentos e os valores institucionais da Prefeitura.", peso: 1 }
    ]
  }
]

export default comportamentos
