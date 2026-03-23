/* ============================================
   MÓDULO: Menu Mobile
   Responsável por gerenciar o menu mobile e dropdown
   ============================================ */

export class MobileMenu {
  constructor() {
    this.mobileMenuToggle = document.getElementById('mobileMenuToggle')
    this.navMenu = document.getElementById('navMenu')
    this.dropdownItems = document.querySelectorAll('.nav-item.dropdown')

    this.init()
  }

  init() {
    this.setupToggle()
    this.setupLinkClose()
    this.setupDropdowns()
    this.setupClickOutside()
    this.setupEscapeKey()
    this.setupResize()
  }

  // Toggle do menu mobile
  setupToggle() {
    if (this.mobileMenuToggle) {
      this.mobileMenuToggle.addEventListener('click', () => {
        this.toggleMenu()
      })
    }
  }

  toggleMenu() {
    if (!this.navMenu || !this.mobileMenuToggle) {
      return
    }

    this.navMenu.classList.toggle('active')
    this.mobileMenuToggle.classList.toggle('active')
    this.mobileMenuToggle.setAttribute('aria-expanded', this.navMenu.classList.contains('active').toString())
    this.animateHamburger()
  }

  animateHamburger() {
    if (!this.mobileMenuToggle || !this.navMenu) {
      return
    }

    const spans = this.mobileMenuToggle.querySelectorAll('span')
    if (this.navMenu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translateY(8px)'
      spans[1].style.opacity = '0'
      spans[2].style.transform = 'rotate(-45deg) translateY(-8px)'
    } else {
      spans[0].style.transform = 'none'
      spans[1].style.opacity = '1'
      spans[2].style.transform = 'none'
    }
  }

  // Configurar dropdowns
  setupDropdowns() {
    this.dropdownItems.forEach(item => {
      const link = item.querySelector('.nav-link')

      link.addEventListener('click', e => {
        if (window.innerWidth <= 768) {
          e.preventDefault()

          // Fechar outros dropdowns
          this.dropdownItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active')
              otherItem.querySelector('.nav-link')?.setAttribute('aria-expanded', 'false')
            }
          })

          // Toggle atual
          const isActive = item.classList.toggle('active')
          link.setAttribute('aria-expanded', isActive.toString())
        }
      })
    })
  }

  setupLinkClose() {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (
          window.innerWidth <= 768 &&
          this.navMenu?.classList.contains('active') &&
          !link.classList.contains('nav-link--dropdown-toggle')
        ) {
          this.closeMenu()
        }
      })
    })
  }

  // Fechar menu ao clicar fora
  setupClickOutside() {
    document.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        if (!e.target.closest('.main-nav') && this.navMenu.classList.contains('active')) {
          this.closeMenu()
        }
      }
    })
  }

  // Fechar menu com tecla ESC
  setupEscapeKey() {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this.navMenu.classList.contains('active')) {
        this.closeMenu()
      }
    })
  }

  // Ajustar no resize
  setupResize() {
    let resizeTimer
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768) {
          this.closeMenu()
          this.closeAllDropdowns()
        }
      }, 250)
    })
  }

  closeMenu() {
    if (!this.navMenu || !this.mobileMenuToggle) {
      return
    }

    this.navMenu.classList.remove('active')
    this.mobileMenuToggle.classList.remove('active')
    this.mobileMenuToggle.setAttribute('aria-expanded', 'false')
    this.animateHamburger()
  }

  closeAllDropdowns() {
    this.dropdownItems.forEach(item => {
      item.classList.remove('active')
      item.querySelector('.nav-link')?.setAttribute('aria-expanded', 'false')
    })
  }
}
