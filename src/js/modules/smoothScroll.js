/* ============================================
   MÓDULO: Smooth Scroll
   Responsável pelo scroll suave para âncoras
   ============================================ */

export class SmoothScroll {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        this.handleClick(e, anchor)
      })
    })
  }

  handleClick(e, anchor) {
    const href = anchor.getAttribute('href')
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault()
      const target = document.querySelector(href)
      const headerHeight = document.querySelector('.header-top')?.offsetHeight || 0
      const alreadyFocusable = target.hasAttribute('tabindex')

      window.scrollTo({
        top: target.offsetTop - headerHeight,
        behavior: 'smooth'
      })

      if (!alreadyFocusable) {
        target.setAttribute('tabindex', '-1')
      }

      target.focus({ preventScroll: true })
    }
  }
}
