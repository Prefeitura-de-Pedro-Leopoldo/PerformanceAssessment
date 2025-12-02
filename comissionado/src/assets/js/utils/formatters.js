/**
 * Utilitários de formatação de dados
 */

/**
 * Formata uma data no padrão brasileiro
 * @param {string} dataISO - Data no formato ISO
 * @returns {string} Data formatada dd/mm/aaaa
 */
export function formatarData(dataISO) {
  if (!dataISO) return "___/___/_____"

  const data = new Date(dataISO + "T12:00:00")
  return data.toLocaleDateString("pt-BR")
}

/**
 * Formata um número com casas decimais
 * @param {number} numero - Número a ser formatado
 * @param {number} decimais - Quantidade de casas decimais
 * @returns {string} Número formatado
 */
export function formatarNumero(numero, decimais = 1) {
  return numero.toFixed(decimais)
}

/**
 * Arredonda um número usando arredondamento matemático padrão
 * (0.5 ou mais arredonda para cima, menos de 0.5 arredonda para baixo)
 * @param {number} numero - Número a ser arredondado
 * @returns {number} Número arredondado
 */
export function arredondarNumero(numero) {
  return Math.round(numero)
}

/**
 * Formata percentual com arredondamento
 * @param {number} valor - Valor do percentual
 * @returns {string} Percentual formatado
 */
export function formatarPercentual(valor) {
  const valorArredondado = arredondarNumero(valor)
  return `${valorArredondado}.0%`
}

export default {
  formatarData,
  formatarNumero,
  formatarPercentual,
  arredondarNumero
}
