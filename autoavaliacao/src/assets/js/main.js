// Importações
import { renderizarComportamentos } from "./modules/renderer.js"
import { configurarValidacaoInputs } from "./utils/validators.js"
import "./modules/calculator.js"
import "./modules/pdf-generator.js"
import "./modules/form-handler.js"

/**
 * Inicializa a aplicação
 */
function inicializar() {
  try {
    // Renderiza os comportamentos
    renderizarComportamentos()

    // Configura validação de inputs
    configurarValidacaoInputs()

    console.log("✅ Sistema de autoavaliação inicializado com sucesso")
  } catch (erro) {
    console.error("❌ Erro ao inicializar sistema:", erro)
    alert("Erro ao carregar o sistema. Por favor, recarregue a página.")
  }
}

/**
 * Executa quando o DOM estiver pronto
 */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicializar)
} else {
  inicializar()
}

export default inicializar
