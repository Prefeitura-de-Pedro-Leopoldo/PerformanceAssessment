/**
 * Módulo de renderização de HTML
 */
import { CONFIG } from "../config/constants.js"
import { comportamentos } from "../config/comportamentos.js"
import { obterElemento } from "../utils/dom.js"

/**
 * Renderiza um critério individual
 * @param {object} criterio - Dados do critério
 * @param {number} compId - ID do comportamento pai
 * @returns {string} HTML do critério
 */
export function renderizarCriterio(criterio, compId) {
  return `
    <div class="criterio">
      <span class="criterio-numero">${compId}.${criterio.id}</span>
      <span class="criterio-texto">${criterio.texto}</span>
      <input 
        type="number" 
        class="criterio-nota" 
        id="nota_${compId}_${criterio.id}"
        min="${CONFIG.NOTA_MIN}" 
        max="${CONFIG.NOTA_MAX}" 
        placeholder="1-5"
        onchange="calcularComportamento(${compId})"
        onkeyup="calcularComportamento(${compId})"
        aria-label="Nota para critério ${compId}.${criterio.id}"
      >
    </div>
  `
}

/**
 * Renderiza um comportamento completo
 * @param {object} comportamento - Dados do comportamento
 * @returns {string} HTML do comportamento
 */
export function renderizarComportamento(comportamento) {
  const criteriosHTML = comportamento.criterios.map(criterio => renderizarCriterio(criterio, comportamento.id)).join("")

  return `
    <div class="comportamento">
      <div class="comportamento-header">
        <h4>${comportamento.id}. ${comportamento.nome}</h4>
        <p>${comportamento.descricao}</p>
      </div>
      ${criteriosHTML}
      <div class="total-comportamento">
        <span>Total do Comportamento (Máximo: ${comportamento.max_pontos} pontos)</span>
        <span class="total-valor" id="total_comp_${comportamento.id}">0.0</span>
      </div>
    </div>
  `
}

/**
 * Renderiza todos os comportamentos na página
 */
export function renderizarComportamentos() {
  const container = obterElemento(CONFIG.ELEMENTOS.CONTAINER_COMPORTAMENTOS)

  if (!container) {
    console.error("Container de comportamentos não encontrado")
    return
  }

  const html = comportamentos.map(comp => renderizarComportamento(comp)).join("")

  container.innerHTML = html
}

export default {
  renderizarCriterio,
  renderizarComportamento,
  renderizarComportamentos
}
