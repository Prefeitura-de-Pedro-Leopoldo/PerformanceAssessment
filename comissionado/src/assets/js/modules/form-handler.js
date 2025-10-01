/**
 * Módulo de gerenciamento do formulário
 */
import { CONFIG } from "../config/constants.js"
import { comportamentos } from "../config/comportamentos.js"
import { limparInputs, limparTextareas, atualizarTexto, focarElemento, rolarParaTopo } from "../utils/dom.js"

/**
 * Reseta os totais dos comportamentos
 */
export function resetarTotaisComportamentos() {
  comportamentos.forEach(comportamento => {
    atualizarTexto(`total_comp_${comportamento.id}`, "0.0")
  })
}

/**
 * Reseta o resultado final
 */
export function resetarResultadoFinal() {
  atualizarTexto(CONFIG.ELEMENTOS.TOTAL_GERAL, "0.0")
  atualizarTexto(CONFIG.ELEMENTOS.PERCENTUAL, "0.0%")
  atualizarTexto(CONFIG.ELEMENTOS.INDICE, "—")
}

/**
 * Limpa todos os campos e recomeça uma nova avaliação
 */
export function novaAvaliacao() {
  const confirmacao = confirm(CONFIG.MENSAGENS.CONFIRMA_LIMPAR)

  if (!confirmacao) return

  // Limpa todos os inputs
  limparInputs()

  // Limpa todos os textareas
  limparTextareas()

  // Reseta totais dos comportamentos
  resetarTotaisComportamentos()

  // Reseta resultado final
  resetarResultadoFinal()

  // Volta ao topo e foca no primeiro campo
  rolarParaTopo()
  focarElemento(CONFIG.ELEMENTOS.PRIMEIRO_INPUT)
}

// Expõe função globalmente para uso no HTML
window.novaAvaliacao = novaAvaliacao

export default {
  resetarTotaisComportamentos,
  resetarResultadoFinal,
  novaAvaliacao
}
