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
      const answer = item.querySelector('.faq-answer')

      if (!question || !answer) {
        return
      }

      answer.setAttribute('aria-hidden', 'true')

      question.addEventListener('click', () => {
        this.toggleItem(item, question, answer)
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

  toggleItem(item, question, answer) {
    // Fechar outros itens
    this.faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        const otherQuestion = otherItem.querySelector('.faq-question')
        const otherAnswer = otherItem.querySelector('.faq-answer')

        otherItem.classList.remove('active')
        otherQuestion?.setAttribute('aria-expanded', 'false')
        otherAnswer?.setAttribute('aria-hidden', 'true')
      }
    })

    // Toggle item atual
    const isActive = item.classList.toggle('active')
    question.setAttribute('aria-expanded', isActive.toString())
    answer.setAttribute('aria-hidden', (!isActive).toString())
  }
}
