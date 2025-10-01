/**
 * Utilitários para manipulação do DOM
 */

/**
 * Obtém elemento pelo ID de forma segura
 * @param {string} id - ID do elemento
 * @returns {HTMLElement|null} Elemento ou null
 */
export function obterElemento(id) {
  return document.getElementById(id)
}

/**
 * Obtém múltiplos elementos por seletor
 * @param {string} seletor - Seletor CSS
 * @returns {NodeList} Lista de elementos
 */
export function obterElementos(seletor) {
  return document.querySelectorAll(seletor)
}

/**
 * Atualiza texto de um elemento
 * @param {string} id - ID do elemento
 * @param {string} texto - Texto a ser definido
 * @returns {boolean} True se atualizado com sucesso
 */
export function atualizarTexto(id, texto) {
  const elemento = obterElemento(id)
  if (elemento) {
    elemento.textContent = texto
    return true
  }
  return false
}

/**
 * Limpa valor de todos os inputs
 */
export function limparInputs() {
  obterElementos("input").forEach(input => {
    if (input.type === "checkbox") {
      input.checked = false
    } else {
      input.value = ""
    }
  })
}

/**
 * Limpa todos os textareas
 */
export function limparTextareas() {
  obterElementos("textarea").forEach(textarea => {
    textarea.value = ""
  })
}

/**
 * Foca em um elemento específico
 * @param {string} id - ID do elemento
 */
export function focarElemento(id) {
  const elemento = obterElemento(id)
  if (elemento) {
    elemento.focus()
  }
}

/**
 * Rola a página para o topo
 */
export function rolarParaTopo() {
  window.scrollTo(0, 0)
}

export default {
  obterElemento,
  obterElementos,
  atualizarTexto,
  limparInputs,
  limparTextareas,
  focarElemento,
  rolarParaTopo
}
