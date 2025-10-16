/**
 * Módulo de cálculos de pontuação
 */
import { CONFIG } from "../config/constants.js"
import { comportamentos } from "../config/comportamentos.js"
import { notaValida } from "../utils/validators.js"
import { obterElemento, atualizarTexto } from "../utils/dom.js"
import { formatarNumero, formatarPercentual } from "../utils/formatters.js"

/**
 * Obtém o índice de avaliação baseado no percentual
 * @param {number} percentual - Percentual alcançado
 * @returns {object} Objeto com valor e label da avaliação
 */
export function obterIndiceAvaliacao(percentual) {
  for (const faixa of CONFIG.FAIXAS_AVALIACAO) {
    if (percentual < faixa.limite) {
      return { valor: faixa.valor, label: faixa.label }
    }
  }
  return { valor: 1, label: "Excelente" }
}

/**
 * Calcula soma dos pesos de um comportamento
 * @param {object} comportamento - Objeto do comportamento
 * @returns {number} Soma total dos pesos
 */
export function calcularSomaPesos(comportamento) {
  return comportamento.criterios.reduce((soma, criterio) => soma + criterio.peso, 0)
}

/**
 * Calcula a pontuação de um comportamento individual
 * @param {number} compId - ID do comportamento
 */
export function calcularComportamento(compId) {
  const comportamento = comportamentos.find(c => c.id === compId)

  if (!comportamento) {
    console.error(`Comportamento ${compId} não encontrado`)
    return
  }

  let totalPontos = 0
  let todasNotasPreenchidas = true

  // Soma as notas ponderadas
  for (const criterio of comportamento.criterios) {
    const input = obterElemento(`nota_${compId}_${criterio.id}`)

    if (!input) continue

    const nota = parseInt(input.value)

    if (notaValida(nota)) {
      totalPontos += nota * criterio.peso
    } else {
      todasNotasPreenchidas = false
    }
  }

  // Calcula pontuação normalizada
  let pontuacaoNormalizada = 0

  if (todasNotasPreenchidas) {
    // Comportamentos 4 e 9 têm pontuação máxima de 15 pontos
    if (compId === 4 || compId === 9) {
      // Total máximo = 3 critérios × peso 1 × nota 5 = 15
      pontuacaoNormalizada = (totalPontos / 15) * 15
    } else {
      // Outros comportamentos normalizam para seus pontos máximos (10 pontos)
      const somaPesos = calcularSomaPesos(comportamento)
      pontuacaoNormalizada = (totalPontos / (somaPesos * 5)) * comportamento.max_pontos
    }
  }

  // Atualiza display
  atualizarTexto(`total_comp_${compId}`, formatarNumero(pontuacaoNormalizada))

  // Recalcula total geral
  calcularTotalGeral()
}

/**
 * Calcula e atualiza o total geral da avaliação
 */
export function calcularTotalGeral() {
  let totalGeral = 0

  // Soma todos os comportamentos
  for (const comportamento of comportamentos) {
    const elementoTotal = obterElemento(`total_comp_${comportamento.id}`)
    if (elementoTotal) {
      const valor = parseFloat(elementoTotal.textContent) || 0
      totalGeral += valor
    }
  }

  // Atualiza elementos do resultado
  atualizarTexto(CONFIG.ELEMENTOS.TOTAL_GERAL, formatarNumero(totalGeral))
  atualizarTexto(CONFIG.ELEMENTOS.PERCENTUAL, formatarPercentual(totalGeral))

  const avaliacao = obterIndiceAvaliacao(totalGeral)
  atualizarTexto(CONFIG.ELEMENTOS.INDICE, `${avaliacao.valor} — ${avaliacao.label}`)
}

// Expõe função globalmente para uso no HTML
window.calcularComportamento = calcularComportamento

export default {
  obterIndiceAvaliacao,
  calcularSomaPesos,
  calcularComportamento,
  calcularTotalGeral
}
