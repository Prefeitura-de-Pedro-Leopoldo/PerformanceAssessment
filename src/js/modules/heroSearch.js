import { homeQuickAccessLinks } from '../data/siteContent.js'

const EXTRA_SEARCH_ROUTES = [
  { href: '#faq', keywords: ['faq', 'perguntas', 'duvidas', 'dúvidas'] },
  { href: './tutorial.html', keywords: ['instrucoes', 'instruções', 'apresentacao', 'apresentação'] },
]

function normalizeText(value = '') {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()
}

export class HeroSearch {
  constructor() {
    this.form = document.getElementById('heroSearchForm')
    this.input = document.getElementById('heroSearchInput')

    if (!this.form || !this.input) {
      return
    }

    this.routes = [...homeQuickAccessLinks, ...EXTRA_SEARCH_ROUTES]
    this.init()
  }

  init() {
    this.form.addEventListener('submit', event => {
      event.preventDefault()
      this.handleSearch()
    })
  }

  handleSearch() {
    const query = normalizeText(this.input.value)

    if (!query) {
      this.scrollToTarget('#quick-access')
      return
    }

    const route = this.routes.find(item =>
      item.keywords?.some(keyword => {
        const normalizedKeyword = normalizeText(keyword)
        return normalizedKeyword.includes(query) || query.includes(normalizedKeyword)
      })
    )

    if (!route) {
      this.scrollToTarget('#quick-access')
      return
    }

    if (route.target === '_blank') {
      window.open(route.href, '_blank', 'noopener')
      return
    }

    if (route.href.startsWith('#')) {
      this.scrollToTarget(route.href)
      return
    }

    window.location.href = route.href
  }

  scrollToTarget(selector) {
    const target = document.querySelector(selector)

    if (!target) {
      return
    }

    const headerHeight = document.querySelector('.header-top')?.offsetHeight || 0
    const alreadyFocusable = target.hasAttribute('tabindex')

    if (!alreadyFocusable) {
      target.setAttribute('tabindex', '-1')
    }

    target.focus({ preventScroll: true })

    window.scrollTo({
      top: target.offsetTop - headerHeight,
      behavior: 'smooth',
    })
  }
}
