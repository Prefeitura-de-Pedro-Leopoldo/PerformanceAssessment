/* ============================================
   MÓDULO: FAQ Accordion
   Responsável pela funcionalidade do accordion FAQ
   ============================================ */

export class FAQAccordion {
  constructor() {
    this.faqItems = document.querySelectorAll('.faq-item')
    this.init()
  }

  init() {
    this.faqItems.forEach(item => {
      const question = item.querySelector('.faq-question')

      question.addEventListener('click', () => {
        this.toggleItem(item, question)
      })

      // Acessibilidade - Enter ou Espaço para ativar
      question.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          question.click()
        }
      })
    })
  }

  toggleItem(item, question) {
    // Fechar outros itens
    this.faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active')
        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false')
      }
    })

    // Toggle item atual
    const isActive = item.classList.toggle('active')
    question.setAttribute('aria-expanded', isActive.toString())
  }
}
