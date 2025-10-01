/**
 * Utilitários de validação de dados
 */
import { CONFIG } from "../config/constants.js"

/**
 * Verifica se uma nota é válida
 * @param {number} nota - Nota a ser validada
 * @returns {boolean} True se válida
 */
export function notaValida(nota) {
  return nota >= CONFIG.NOTA_MIN && nota <= CONFIG.NOTA_MAX
}

/**
 * Valida e limita valores dos inputs numéricos
 * @param {HTMLInputElement} input - Input a ser validado
 */
export function validarInputNumerico(input) {
  const valor = parseInt(input.value)

  if (valor < CONFIG.NOTA_MIN) {
    input.value = CONFIG.NOTA_MIN
  } else if (valor > CONFIG.NOTA_MAX) {
    input.value = CONFIG.NOTA_MAX
  }
}

/**
 * Configura validação automática em todos os inputs numéricos
 */
export function configurarValidacaoInputs() {
  document.addEventListener("input", function (evento) {
    if (evento.target.type === "number") {
      validarInputNumerico(evento.target)
    }
  })
}

export default {
  notaValida,
  validarInputNumerico,
  configurarValidacaoInputs
}
