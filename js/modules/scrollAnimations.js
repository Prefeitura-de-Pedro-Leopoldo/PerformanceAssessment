/* ============================================
   MÓDULO: Scroll Animations
   Responsável pelas animações de scroll
   ============================================ */

export class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
    this.init()
  }

  init() {
    this.setupIntersectionObserver()
    this.setupScrollIndicator()
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, this.observerOptions)

    // Observar elementos com classe .animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })
  }

  setupScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator')

    if (scrollIndicator) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
          scrollIndicator.style.opacity = '0'
          scrollIndicator.style.pointerEvents = 'none'
        } else {
          scrollIndicator.style.opacity = '1'
          scrollIndicator.style.pointerEvents = 'auto'
        }
      })
    }
  }
}
