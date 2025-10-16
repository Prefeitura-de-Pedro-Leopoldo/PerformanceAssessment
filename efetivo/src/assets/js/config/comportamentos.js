/**
 * Dados dos comportamentos para avaliação de servidor efetivo
 */
export const comportamentos = [
  {
    id: 1,
    nome: "ASSIDUIDADE, PONTUALIDADE E DISCIPLINA",
    descricao: "refere-se ao compromisso com o cumprimento do horário de trabalho e com as normas vigentes na Prefeitura.",
    max_pontos: 10,
    criterios: [
      { id: 1, texto: "Chega ao trabalho no horário estabelecido.", peso: 1 },
      {
        id: 2,
        texto: "Comunica com antecedência à chefia e à equipe as ausências necessárias durante o horário de trabalho.",
        peso: 2
      },
      { id: 3, texto: "Tem conhecimento e cumpre as normas da Prefeitura e as demandas da chefia.", peso: 2 }
    ]
  },
  {
    id: 2,
    nome: "PRODUTIVIDADE E EFICÁCIA",
    descricao: "refere-se ao rendimento do trabalho em termos de quantidade e qualidade dos resultados esperados.",
    max_pontos: 10,
    criterios: [
      {
        id: 1,
        texto: "Realiza suas atividades com exigência e rigor, estando atento aos critérios de qualidade.",
        peso: 1
      },
      {
        id: 2,
        texto: "Gerencia os recursos disponíveis para a realização de suas atividades da melhor forma possível.",
        peso: 2
      },
      { id: 3, texto: "Conclui, em tempo hábil, todas as atividades que se envolve.", peso: 2 }
    ]
  },
  {
    id: 3,
    nome: "ATITUDE PROATIVA E AUTONOMIA",
    descricao: "refere-se a propostas de soluções e sugestões para situações ou problemas, por iniciativa própria.",
    max_pontos: 10,
    criterios: [
      { id: 1, texto: "Age de forma preventiva e proativa em suas tarefas.", peso: 2 },
      { id: 2, texto: "Se comunica com seu superior imediato e propõe ideias.", peso: 1 },
      { id: 3, texto: "Mostra-se disponível e atende a solicitações.", peso: 2 }
    ]
  },
  {
    id: 4,
    nome: "APERFEIÇOAMENTO CONTÍNUO",
    descricao: "relaciona-se a aquisição de novos conhecimentos e sua aplicação no ambiente laboral.",
    max_pontos: 15,
    criterios: [
      { id: 1, texto: "Demonstra interesse contínuo em desenvolver suas competências.", peso: 1 },
      { id: 2, texto: "Participa ativamente de capacitações e adapta-se a novas exigências.", peso: 1 },
      { id: 3, texto: "Aplica novos conhecimentos adquiridos no trabalho.", peso: 1 }
    ]
  },
  {
    id: 5,
    nome: "CAPACIDADE DE TRABALHO EM EQUIPE",
    descricao: "relaciona-se com a capacidade de desenvolver as atividades em equipe.",
    max_pontos: 10,
    criterios: [
      { id: 1, texto: "Contribui ativamente para um ambiente de trabalho harmonioso.", peso: 2 },
      { id: 2, texto: "Busca soluções conjuntas para desafios.", peso: 1 },
      { id: 3, texto: "Atua de forma alinhada às metas coletivas.", peso: 2 }
    ]
  },
  {
    id: 6,
    nome: "FOCO NAS NECESSIDADES DO USUÁRIO",
    descricao: "Capacidade de atuar de maneira eficiente frente às necessidades do usuário.",
    max_pontos: 10,
    criterios: [
      { id: 1, texto: "Contribui para a imagem da qualidade dos serviços prestados.", peso: 2 },
      { id: 2, texto: "Responde as demandas do usuário de forma tempestiva.", peso: 1 },
      { id: 3, texto: "Atende a todos com cordialidade e respeito.", peso: 2 }
    ]
  },
  {
    id: 7,
    nome: "FLEXIBILIDADE",
    descricao: "Capacidade para trabalhar adaptando-se às diferentes situações.",
    max_pontos: 10,
    criterios: [
      { id: 1, texto: "Compreende a necessidade de execução de novas demandas.", peso: 1 },
      { id: 2, texto: "Adapta a novos contextos com facilidade.", peso: 2 },
      { id: 3, texto: "Aceita as decisões tomadas pelos gestores.", peso: 2 }
    ]
  },
  {
    id: 8,
    nome: "RELAÇÕES INTERPESSOAIS",
    descricao: "refere-se ao estabelecimento de relações cordiais e respeitosas.",
    max_pontos: 10,
    criterios: [
      { id: 1, texto: "Mantém comportamento respeitoso e cordial.", peso: 1 },
      { id: 2, texto: "Demonstra maturidade ao lidar com conflitos.", peso: 2 },
      { id: 3, texto: "Age de forma transparente.", peso: 2 }
    ]
  },
  {
    id: 9,
    nome: "COMPORTAMENTO ÉTICO",
    descricao: "refere-se a atitude pautada pelo respeito, integridade e senso de justiça.",
    max_pontos: 15,
    criterios: [
      { id: 1, texto: "Demonstra profissionalismo e respeita hierarquia.", peso: 1 },
      { id: 2, texto: "Mantém sigilo das informações.", peso: 1 },
      { id: 3, texto: "Cumpre suas funções com dedicação.", peso: 1 }
    ]
  }
]

export default comportamentos
