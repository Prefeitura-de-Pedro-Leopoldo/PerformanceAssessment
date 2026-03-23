export const homeOrientationCards = [
  {
    icon: 'form',
    title: '1. Acesse o Formulário',
    description:
      'Escolha o tipo de avaliação apropriado: servidor efetivo ou servidor em exercício de cargo em comissão. Clique no botão correspondente na página inicial.',
  },
  {
    icon: 'edit',
    title: '2. Preencha o Cabeçalho do Formulário de Avaliação',
    description:
      'Insira as informações básicas do servidor avaliado, incluindo nome completo, matrícula, cargo ou função, setor de lotação e período de avaliação.',
  },
  {
    icon: 'assessment',
    title: '3. Avalie os Comportamentos',
    description:
      'Analise cada comportamento de acordo com os critérios estabelecidos no formulário de avaliação e atribua notas conforme o desempenho observado durante o período avaliado.',
  },
  {
    icon: 'results',
    title: '4. Resultados',
    description: 'A partir do resultado final, registre as evidências que justifiquem as notas atribuídas no período avaliado.',
  },
  {
    icon: 'blockers',
    title: '5. Dificultadores da Performance no Período Avaliado',
    description:
      'Assinale os dificultadores que precisam de atenção, destacando os pontos que necessitam de desenvolvimento. Seja claro e objetivo em seus comentários.',
  },
  {
    icon: 'feedback',
    title: '6. Forneça Feedback',
    description:
      'Apresente a nota ao servidor avaliado e forneça feedback construtivo sobre o desempenho observado. Discuta pontos fortes, oportunidades de melhoria e ações de desenvolvimento propostas.',
  },
  {
    icon: 'development',
    title: '7. Preencha o Plano de Desenvolvimento Individual',
    description:
      'Identifique as ações de capacitação e desenvolvimento necessárias para aprimorar o desempenho do servidor. Defina metas claras e prazos realistas para cada ação proposta.',
  },
  {
    icon: 'signature',
    title: '8. Colete as Assinaturas',
    descriptionHtml:
      'Baixe o PDF e assine eletronicamente usando o <a href="https://www.gov.br/governodigital/pt-br/identidade/assinatura-eletronica" target="_blank" rel="noopener noreferrer">gov.br</a>. Ambas as assinaturas são obrigatórias para validação do documento.',
  },
  {
    icon: 'send',
    title: '9. Envie à DIRGEP por E-mail',
    description: 'O documento assinado deverá ser enviado para a DIRGEP por e-mail, seguindo o tutorial, dentro do prazo estabelecido no cronograma.',
  },
]

export const homeOrientationAlert = {
  title: 'Importante',
  description:
    'A avaliação de desempenho é um processo fundamental para o desenvolvimento profissional e institucional. Seja justo, objetivo e construtivo em suas avaliações. Em caso de dúvidas, entre em contato com a DIRGEP.',
}

export const homeQuickAccessLinks = [
  {
    title: 'Servidor efetivo',
    description: 'Acesse o formulário oficial para avaliação de servidores efetivos.',
    href: '../efetivo/index.html',
    target: '_blank',
    icon: 'effective',
    badge: '01',
    keywords: ['efetivo', 'formulario', 'formulário', 'avaliacao', 'avaliação', 'servidor efetivo'],
  },
  {
    title: 'Cargo em comissão',
    description: 'Preencha a avaliação de desempenho para servidores em exercício de cargo em comissão.',
    href: '../comissionado/index.html',
    target: '_blank',
    icon: 'commissioned',
    badge: '02',
    keywords: ['comissionado', 'comissão', 'cargo em comissão', 'formulario', 'formulário'],
  },
  {
    title: 'Cronograma',
    description: 'Confira prazos, recursos e datas importantes do período avaliativo.',
    href: '#cronograma',
    icon: 'calendarLarge',
    badge: '03',
    keywords: ['cronograma', 'prazo', 'prazos', 'datas', 'periodo', 'período'],
  },
  {
    title: 'Orientações',
    description: 'Veja o passo a passo completo para preencher e validar a avaliação.',
    href: '#orientacao',
    icon: 'guide',
    badge: '04',
    keywords: ['orientacao', 'orientação', 'passo a passo', 'como preencher', 'guia'],
  },
  {
    title: 'Vídeo tutorial',
    description: 'Acesse o material audiovisual e a apresentação de apoio ao processo.',
    href: './tutorial.html',
    icon: 'tutorial',
    badge: '05',
    keywords: ['tutorial', 'video', 'vídeo', 'apresentacao', 'apresentação', 'instrucoes', 'instruções'],
  },
  {
    title: 'Legislação',
    description: 'Consulte o decreto, documentos oficiais e a base legal vigente.',
    href: './legislacao.html',
    icon: 'law',
    badge: '06',
    keywords: ['legislacao', 'legislação', 'decreto', 'lei', 'norma', 'base legal'],
  },
]

export const homeFaqItems = [
  {
    question: '1. O que é a avaliação de desempenho?',
    answers: [
      'A avaliação de desempenho é um instrumento de gestão de pessoas que visa analisar e acompanhar o desenvolvimento profissional dos servidores, identificando pontos fortes e oportunidades de melhoria.',
      'Ela subsidia o planejamento de capacitações, o desenvolvimento individual e a progressão na carreira.',
    ],
  },
  {
    question: '2. A quem se destina a avaliação de desempenho?',
    answers: ['A avaliação será aplicada aos servidores efetivos estáveis, aos servidores ocupantes de função pública e aos servidores ocupantes de cargo em comissão.'],
  },
  {
    question: '3. Quem deve realizar a avaliação?',
    answers: [
      'A avaliação deve ser realizada pela chefia imediata do servidor, responsável por preencher os instrumentos de avaliação e apresentar o feedback ao avaliado.',
      'A chefia também deve registrar as ações de capacitação e desenvolvimento identificadas durante a avaliação, tomando como referência as competências que precisam ser desenvolvidas em cada servidor.',
    ],
  },
  {
    question: '4. Quais são os critérios de avaliação?',
    answers: [
      'Os critérios incluem:',
      '• Assiduidade, pontualidade e disciplina;',
      '• Produtividade e eficácia;',
      '• Atitude proativa e autonomia;',
      '• Aperfeiçoamento contínuo;',
      '• Capacidade de trabalho em equipe;',
      '• Foco nas necessidades do usuário;',
      '• Flexibilidade;',
      '• Relações interpessoais;',
      '• Comportamento ético;',
      '• Visão estratégica;',
      '• Planejamento e organização;',
      '• Gestão de pessoas.',
    ],
  },
  {
    question: '5. Quando as avaliações de desempenho são aplicadas?',
    answers: ['As avaliações ocorrem anualmente, de acordo com o cronograma publicado pela DIRGEP.'],
  },
  {
    question: '6. Qual o desempenho considerado satisfatório na avaliação de desempenho?',
    answers: ['Será considerado desempenho satisfatório o servidor que alcançar o percentual mínimo de 70% da nota máxima, em cada avaliação.'],
  },
  {
    question: '7. O que acontece caso o servidor se recuse a assinar a avaliação de desempenho realizada?',
    answers: ['Caso o servidor se recuse a assinar a avaliação, prevalecerá a avaliação assinada pelo avaliador.'],
  },
  {
    question: '8. O servidor pode interpor recurso caso não concorde com o resultado?',
    answers: [
      'Sim. O servidor poderá solicitar pedido de reconsideração diretamente à chefia que o avaliou ou apresentar recurso interno à Comissão Recursal de Avaliação de Desempenho designada pelo Prefeito.',
    ],
  },
  {
    question: '9. Como o servidor deve encaminhar o recurso?',
    answers: ['O servidor deverá protocolar o recurso junto à DIRGEP, no prazo estabelecido no cronograma, conforme previsto na legislação vigente.'],
  },
  {
    question: '10. Qual o percentual de desempenho será considerado satisfatório em cada avaliação?',
    answers: ['Será considerado satisfatório o servidor que obtiver, em cada avaliação, no mínimo 70% da pontuação máxima estabelecida.'],
  },
  {
    question: '11. Como será classificado o desempenho de servidor com base na nota final obtida?',
    answers: [
      '• Excelente (90% a 100%): supera as expectativas, com alto nível de qualidade.',
      '• Muito bom (80% a 89%): atende bem às expectativas, com poucos ajustes necessários.',
      '• Satisfatório (70% a 79%): cumpre os requisitos básicos, mas pode ser aprimorado.',
      '• Regular (60% a 69%): atende parcialmente, mas com falhas ou limitações.',
      '• Insatisfatório (abaixo de 60%): muito abaixo do esperado, não atende aos requisitos.',
    ],
  },
  {
    question: '12. Como o servidor receberá o feedback da pontuação obtida?',
    answers: [
      'O feedback será realizado pela chefia imediata do servidor, no momento da devolutiva da avaliação, quando serão apresentados o resultado obtido e as ações de desenvolvimento propostas.',
    ],
  },
]

export const legislationDocuments = [
  {
    category: 'decretos',
    type: 'Decreto',
    date: '15/09/2025',
    title: 'Decreto Municipal Nº 2476/2025',
    ementa:
      'Dispõe sobre os critérios para a Avaliação de Desempenho Individual na Administração Pública do Poder Executivo Municipal e dá outras providências.',
    tags: ['Avaliação de Desempenho', 'Administração Pública', 'Poder Executivo'],
    driveFileId: '1sSGr5DztHDUE4MhgxuHE6XphVGoecSMU',
  },
]
