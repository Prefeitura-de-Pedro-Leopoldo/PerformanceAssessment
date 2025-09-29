import { CONFIG } from "../config/constants.js"
import { obterElemento, rolarParaTopo } from "../utils/dom.js"
import { formatarData } from "../utils/formatters.js"

/**
 * Mostra/esconde o overlay de loading
 * @param {boolean} mostrar - True para mostrar, false para esconder
 */
export function toggleLoading(mostrar) {
  const loading = obterElemento(CONFIG.ELEMENTOS.LOADING)
  if (loading) {
    if (mostrar) {
      loading.classList.add("show")
    } else {
      loading.classList.remove("show")
    }
  }
}

/**
 * Substitui inputs por spans com valores formatados
 * @param {HTMLElement} clone - Clone do container
 */
export function substituirInputsPorTexto(clone) {
  clone.querySelectorAll("input").forEach(input => {
    const span = document.createElement("span")
    span.style.display = "inline-block"

    if (input.type === "date") {
      // Formata datas
      span.textContent = formatarData(input.value)
      span.style.borderBottom = "1px solid #333"
      span.style.minWidth = "90px"
      span.style.textAlign = "center"
      span.style.paddingBottom = "2px"
    } else if (input.type === "number") {
      // Formata números
      span.textContent = input.value || "–"
      span.style.border = "1px solid #999"
      span.style.width = "40px"
      span.style.textAlign = "center"
      span.style.padding = "2px"
      span.style.fontWeight = "bold"
    } else {
      // Campos de texto
      if (input.value) {
        span.textContent = input.value
      } else {
        const largura = input.offsetWidth || 200
        span.innerHTML = "&nbsp;".repeat(Math.floor(largura / 8))
        span.style.borderBottom = "1px solid #333"
      }
      span.style.minWidth = (input.offsetWidth || 200) + "px"
      span.style.paddingBottom = "2px"
    }

    input.parentNode.replaceChild(span, input)
  })
}

/**
 * Prepara o clone para geração do PDF
 * @param {HTMLElement} elemento - Elemento original
 * @returns {HTMLElement} Clone preparado
 */
export function prepararCloneParaPDF(elemento) {
  const clone = elemento.cloneNode(true)

  // Remove botões de ação
  const botoes = clone.querySelector(".botoes-acao")
  if (botoes) {
    botoes.remove()
  }

  // Substitui inputs por texto
  substituirInputsPorTexto(clone)

  // Ajusta estilos para PDF
  clone.style.width = "190mm"
  clone.style.margin = "0 auto"
  clone.style.background = "white"
  clone.style.padding = "0"
  clone.style.boxShadow = "none"

  return clone
}

/**
 * Cria container temporário invisível para renderização
 * @param {HTMLElement} conteudo - Conteúdo a ser renderizado
 * @returns {HTMLElement} Container temporário
 */
export function criarContainerTemporario(conteudo) {
  const container = document.createElement("div")
  container.style.position = "fixed"
  container.style.top = "-9999px"
  container.style.left = "-9999px"
  container.style.width = "210mm"
  container.style.height = "297mm"
  container.style.overflow = "hidden"
  container.style.background = "white"
  container.style.opacity = "0"
  container.style.pointerEvents = "none"
  container.appendChild(conteudo)

  return container
}

/**
 * Configurações do html2pdf
 * @returns {object} Objeto de configuração
 */
export function obterConfigPDF() {
  return {
    margin: CONFIG.PDF.MARGIN,
    filename: CONFIG.PDF.FILENAME,
    image: { type: "jpeg", quality: CONFIG.PDF.IMAGE_QUALITY },
    html2canvas: {
      scale: CONFIG.PDF.SCALE,
      useCORS: true,
      letterRendering: true,
      logging: false,
      scrollX: 0,
      scrollY: 0,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight
    },
    jsPDF: {
      unit: "mm",
      format: CONFIG.PDF.FORMAT,
      orientation: CONFIG.PDF.ORIENTATION,
      compress: true
    },
    pagebreak: {
      mode: ["avoid-all", "css", "legacy"],
      avoid: [".comportamento", ".secao", ".resultado-final", ".assinaturas"]
    }
  }
}

/**
 * Gera e baixa o PDF da avaliação
 */
export function baixarPDF() {
  toggleLoading(true)

  setTimeout(() => {
    rolarParaTopo()

    const elemento = obterElemento(CONFIG.ELEMENTOS.FORMULARIO)

    if (!elemento) {
      console.error("Container do formulário não encontrado")
      toggleLoading(false)
      alert(CONFIG.MENSAGENS.ERRO_CONTAINER)
      return
    }

    const clone = prepararCloneParaPDF(elemento)
    const containerTemp = criarContainerTemporario(clone)

    document.body.appendChild(containerTemp)

    // Aguarda renderização completa
    setTimeout(() => {
      html2pdf()
        .from(clone)
        .set(obterConfigPDF())
        .save()
        .then(() => {
          document.body.removeChild(containerTemp)
          toggleLoading(false)
        })
        .catch(erro => {
          console.error("Erro ao gerar PDF:", erro)
          document.body.removeChild(containerTemp)
          toggleLoading(false)
          alert(CONFIG.MENSAGENS.ERRO_PDF)
        })
    }, CONFIG.PDF.DELAY_RENDER)
  }, CONFIG.PDF.DELAY_START)
}

// Expõe função globalmente para uso no HTML
window.baixarPDF = baixarPDF

export default {
  toggleLoading,
  substituirInputsPorTexto,
  prepararCloneParaPDF,
  criarContainerTemporario,
  obterConfigPDF,
  baixarPDF
}
