/**
 * Configurações globais do sistema
 */
export const CONFIG = {
  // Pontuação
  PONTUACAO_MAXIMA: 100,
  NOTA_MIN: 1,
  NOTA_MAX: 5,

  // Faixas de avaliação
  FAIXAS_AVALIACAO: [
    { limite: 60, valor: 5, label: "Insatisfatório" },
    { limite: 69, valor: 4, label: "Regular" },
    { limite: 79, valor: 3, label: "Satisfatório" },
    { limite: 89, valor: 2, label: "Muito bom" },
    { limite: 100, valor: 1, label: "Excelente" }
  ],

  // IDs dos elementos DOM
  ELEMENTOS: {
    CONTAINER_COMPORTAMENTOS: "comportamentos-container",
    LOADING: "loading",
    FORMULARIO: "formulario-container",
    TOTAL_GERAL: "total-geral",
    PERCENTUAL: "percentual",
    INDICE: "indice",
    PRIMEIRO_INPUT: "nome"
  },

  // Configurações de PDF
  PDF: {
    FILENAME: "avaliacao_desempenho(Comissionado).pdf",
    MARGIN: [10, 10, 10, 10],
    IMAGE_QUALITY: 1,
    SCALE: 2,
    FORMAT: "a4",
    ORIENTATION: "portrait",
    DELAY_RENDER: 500,
    DELAY_START: 100
  },

  // Mensagens
  MENSAGENS: {
    ERRO_PDF: "Erro ao gerar o PDF. Por favor, tente novamente.",
    ERRO_CONTAINER: "Erro ao localizar o formulário. Por favor, recarregue a página.",
    CONFIRMA_LIMPAR: "Deseja limpar todos os campos e começar uma nova avaliação?"
  }
}

export default CONFIG
