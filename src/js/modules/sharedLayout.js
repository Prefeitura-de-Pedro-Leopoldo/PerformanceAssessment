const FOOTER_COPY = '&copy; 2025 Prefeitura Municipal de Pedro Leopoldo. Todos os direitos reservados.'

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function getNavItems(page) {
  const homeAnchorPrefix = page === 'home' ? '' : './index.html'

  return [
    {
      label: 'Avaliação',
      dropdown: true,
      children: [
        {
          href: '../efetivo/index.html',
          label: 'Avaliação de servidor efetivo',
          target: '_blank',
        },
        {
          href: '../comissionado/index.html',
          label: 'Avaliação de servidor em exercício de cargo em comissão',
          target: '_blank',
        },
      ],
    },
    {
      href: `${homeAnchorPrefix}#orientacao`,
      label: 'Orientações',
    },
    {
      href: './tutorial.html',
      label: 'Tutorial',
      active: page === 'tutorial',
    },
    {
      href: `${homeAnchorPrefix}#faq`,
      label: 'FAQ',
    },
    {
      href: './legislacao.html',
      label: 'Legislação',
      active: page === 'legislacao',
    },
  ]
}

function buildNavLink(item, extraClass = '') {
  const target = item.target ? ` target="${item.target}" rel="noopener noreferrer"` : ''
  const activeClass = item.active ? ' active' : ''
  const ariaCurrent = item.active ? ' aria-current="page"' : ''

  return `
            <li class="nav-item">
              <a href="${item.href}" class="nav-link${activeClass}${extraClass}"${target}${ariaCurrent}>${escapeHtml(item.label)}</a>
            </li>`
}

function buildDropdownItem(item) {
  const childLinks = item.children
    .map(
      child => `
                <li>
                  <a href="${child.href}" class="dropdown-link" target="_blank" rel="noopener noreferrer">${escapeHtml(child.label)}</a>
                </li>`
    )
    .join('')

  return `
            <li class="nav-item dropdown">
              <button
                class="nav-link nav-link--button nav-link--dropdown-toggle"
                type="button"
                aria-expanded="false"
                aria-controls="navDropdownAvaliacao"
              >
                <span>${escapeHtml(item.label)}</span>
                <svg class="nav-link-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <ul class="dropdown-menu" id="navDropdownAvaliacao">
${childLinks}
              </ul>
            </li>`
}

function buildHeader(page) {
  const navItems = getNavItems(page)
  const navLinks = navItems
    .map(item => {
      if (item.dropdown) {
        return buildDropdownItem(item)
      }

      return buildNavLink(item)
    })
    .join('')

  return `
    <a class="skip-link" href="#main-content">Pular para o conteúdo principal</a>
    <header class="header-top">
      <div class="header-rail" aria-hidden="true">
        <span class="header-rail-segment rail-blue"></span>
        <span class="header-rail-segment rail-cyan"></span>
        <span class="header-rail-segment rail-green"></span>
        <span class="header-rail-segment rail-red"></span>
        <span class="header-rail-segment rail-yellow"></span>
      </div>

      <div class="header-primary">
        <div class="header-container">
          <a class="logo-wrapper" href="./index.html" aria-label="Página inicial da Prefeitura de Pedro Leopoldo">
            <img src="./assets/img/brasao.png" alt="Brasão da Prefeitura Municipal de Pedro Leopoldo" class="header-logo" />
            <div class="brand-copy">
              <strong class="brand-wordmark">
                <span class="brand-wordmark-blue">pl</span><span class="brand-wordmark-gold">.mg</span>
                <span class="brand-wordmark-suffix">.gov.br</span>
              </strong>
              <span class="brand-subtitle">Portal da avaliação de desempenho 2026</span>
            </div>
          </a>

          <nav class="main-nav" id="mainNav" aria-label="Navegação principal">
            <button class="mobile-menu-toggle" id="mobileMenuToggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="navMenu">
              <span></span>
              <span></span>
              <span></span>
              <strong class="mobile-menu-label">Menu</strong>
            </button>

            <ul class="nav-menu" id="navMenu">${navLinks}
            </ul>
          </nav>
        </div>
      </div>
    </header>`
}

function buildFooter() {
  return `
    <footer class="footer-section">
      <div class="footer-content">
        <div class="footer-copy">
          <p>${FOOTER_COPY}</p>
        </div>
      </div>
    </footer>`
}

export function renderSharedLayout() {
  const page = document.body.dataset.page || 'home'
  const headerTarget = document.getElementById('shared-header')
  const footerTarget = document.getElementById('shared-footer')

  if (headerTarget) {
    headerTarget.innerHTML = buildHeader(page)
  }

  if (footerTarget) {
    footerTarget.innerHTML = buildFooter()
  }
}
