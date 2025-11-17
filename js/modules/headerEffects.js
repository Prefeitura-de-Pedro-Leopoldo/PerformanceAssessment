/* ============================================
   MÓDULO: Header Effects
   Responsável pelos efeitos visuais do header
   ============================================ */

export class HeaderEffects {
  constructor() {
    this.lastScroll = 0
    this.header = document.querySelector('.header-top')
    this.init()
  }

  init() {
    window.addEventListener('scroll', () => {
      this.handleScroll()
    })
  }

  handleScroll() {
    const currentScroll = window.pageYOffset

    // Adicionar sombra ao header ao rolar
    if (currentScroll > 10) {
      this.header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
    } else {
      this.header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
    }

    this.lastScroll = currentScroll
  }
}
