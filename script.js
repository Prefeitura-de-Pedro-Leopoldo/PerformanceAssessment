/* ============================================
   SISTEMA DE AVALIAÇÃO DE DESEMPENHO
   Prefeitura Municipal de Pedro Leopoldo

   ÍNDICE:
   1. Menu Mobile - Toggle e Navegação
   2. Dropdown Menu Mobile
   3. Fechar Menu ao Clicar Fora
   4. Scroll Suave para Âncoras
   5. Header - Efeito de Scroll
   6. Animação de Entrada de Elementos
   7. Preload de Imagens
   8. Responsive Menu - Ajuste no Resize
   9. Scroll Indicator
   10. Acessibilidade - ESC para Fechar Menu
   11. FAQ Accordion
   12. Logs de Desenvolvimento
   ============================================ */

// ============================================
// 1. MENU MOBILE - TOGGLE E NAVEGAÇÃO
// ============================================

const mobileMenuToggle = document.getElementById("mobileMenuToggle")
const navMenu = document.getElementById("navMenu")
const dropdownItems = document.querySelectorAll(".nav-item.dropdown")

// Toggle menu mobile
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    mobileMenuToggle.classList.toggle("active")

    // Animar ícone hambúrguer
    const spans = mobileMenuToggle.querySelectorAll("span")
    if (navMenu.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translateY(8px)"
      spans[1].style.opacity = "0"
      spans[2].style.transform = "rotate(-45deg) translateY(-8px)"
    } else {
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  })
}

// ============================================
// 2. DROPDOWN MENU MOBILE
// ============================================

dropdownItems.forEach(item => {
  const link = item.querySelector(".nav-link")

  // Para mobile: toggle dropdown ao clicar
  link.addEventListener("click", e => {
    if (window.innerWidth <= 768) {
      e.preventDefault()

      // Fechar outros dropdowns
      dropdownItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active")
        }
      })

      // Toggle atual
      item.classList.toggle("active")
    }
  })
})

// ============================================
// 3. FECHAR MENU AO CLICAR FORA
// ============================================

document.addEventListener("click", e => {
  if (window.innerWidth <= 768) {
    if (!e.target.closest(".main-nav") && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active")
      mobileMenuToggle.classList.remove("active")

      const spans = mobileMenuToggle.querySelectorAll("span")
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  }
})

// ============================================
// 4. SCROLL SUAVE PARA ÂNCORAS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault()
      const target = document.querySelector(href)
      const headerHeight = document.querySelector(".header-top").offsetHeight

      window.scrollTo({
        top: target.offsetTop - headerHeight,
        behavior: "smooth"
      })
    }
  })
})

// ============================================
// 5. HEADER - EFEITO DE SCROLL
// ============================================

let lastScroll = 0
const header = document.querySelector(".header-top")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  // Adicionar sombra ao header ao rolar
  if (currentScroll > 10) {
    header.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)"
  } else {
    header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
  }

  lastScroll = currentScroll
})

// ============================================
// 6. ANIMAÇÃO DE ENTRADA DE ELEMENTOS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observar elementos com classe .animate-on-scroll
document.querySelectorAll(".animate-on-scroll").forEach(el => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// ============================================
// 7. PRELOAD DE IMAGENS
// ============================================

window.addEventListener("load", () => {
  // Remover classe de loading se houver
  document.body.classList.add("loaded")
})

// ============================================
// 8. RESPONSIVE MENU - AJUSTE NO RESIZE
// ============================================

let resizeTimer
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active")
      mobileMenuToggle.classList.remove("active")

      // Resetar ícone hambúrguer
      const spans = mobileMenuToggle.querySelectorAll("span")
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"

      // Fechar todos os dropdowns
      dropdownItems.forEach(item => {
        item.classList.remove("active")
      })
    }
  }, 250)
})

// ============================================
// 9. SCROLL INDICATOR
// ============================================

const scrollIndicator = document.querySelector(".scroll-indicator")

if (scrollIndicator) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      scrollIndicator.style.opacity = "0"
      scrollIndicator.style.pointerEvents = "none"
    } else {
      scrollIndicator.style.opacity = "1"
      scrollIndicator.style.pointerEvents = "auto"
    }
  })
}

// ============================================
// 10. ACESSIBILIDADE - ESC PARA FECHAR MENU
// ============================================

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active")
    mobileMenuToggle.classList.remove("active")

    const spans = mobileMenuToggle.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
})

// ============================================
// 11. FAQ ACCORDION
// ============================================

const faqItems = document.querySelectorAll(".faq-item")

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question")

  question.addEventListener("click", () => {
    // Fechar outros itens
    faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active")
        otherItem.querySelector(".faq-question").setAttribute("aria-expanded", "false")
      }
    })

    // Toggle item atual
    const isActive = item.classList.toggle("active")
    question.setAttribute("aria-expanded", isActive.toString())
  })

  // Acessibilidade - Enter ou Espaço para ativar
  question.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      question.click()
    }
  })
})

// ============================================
// 12. INICIALIZAÇÃO E LOGS
// ============================================

// Log de desenvolvimento - Sistema carregado com sucesso
console.log('%c🏛️ Prefeitura de Pedro Leopoldo', 'font-size: 20px; font-weight: bold; color: #003d82;')
console.log('%cSistema de Avaliação de Desempenho', 'font-size: 14px; color: #6c757d;')
console.log('%cDesenvolvido com HTML, CSS e JavaScript puro', 'font-size: 12px; color: #0056b3;')
