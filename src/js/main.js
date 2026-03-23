/* ============================================
   SISTEMA DE AVALIAÇÃO DE DESEMPENHO
   Prefeitura Municipal de Pedro Leopoldo

   Arquivo Principal - Inicializa todos os módulos
   ============================================ */

import { MobileMenu } from './modules/mobileMenu.js'
import { SmoothScroll } from './modules/smoothScroll.js'
import { HeaderEffects } from './modules/headerEffects.js'
import { ScrollAnimations } from './modules/scrollAnimations.js'
import { FAQAccordion } from './modules/faqAccordion.js'
import { renderSharedLayout } from './modules/sharedLayout.js'
import { renderPageContent } from './modules/pageContent.js'
import { HeroSearch } from './modules/heroSearch.js'
import { LegislationPage } from './legislacao.js'

/* ============================================
   INICIALIZAÇÃO DA APLICAÇÃO
   ============================================ */

class App {
  constructor() {
    this.init()
  }

  init() {
    // Aguardar carregamento do DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initModules())
    } else {
      this.initModules()
    }

    // Inicializar após carregamento completo
    window.addEventListener('load', () => {
      this.onLoad()
    })
  }

  initModules() {
    renderSharedLayout()
    renderPageContent()

    // Inicializar todos os módulos
    new MobileMenu()
    new SmoothScroll()
    new HeaderEffects()
    new ScrollAnimations()
    new FAQAccordion()
    new HeroSearch()
    new LegislationPage()

    // Log de desenvolvimento
    this.logInfo()
  }

  onLoad() {
    // Remover classe de loading se houver
    document.body.classList.add('loaded')
  }

  logInfo() {
    console.log('%c🏛️ Prefeitura de Pedro Leopoldo', 'font-size: 20px; font-weight: bold; color: #003d82;')
    console.log('%cSistema de Avaliação de Desempenho', 'font-size: 14px; color: #6c757d;')
    console.log('%cArquitetura Modular - ES6 Modules', 'font-size: 12px; color: #0056b3;')
  }
}

// Inicializar aplicação
new App()
