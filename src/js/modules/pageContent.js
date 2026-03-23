import { homeFaqItems, homeOrientationAlert, homeOrientationCards, homeQuickAccessLinks, legislationDocuments } from '../data/siteContent.js'

const ICONS = {
  form: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M9 11l3 3L22 4"></path>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
    </svg>`,
  edit: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>`,
  assessment: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
    </svg>`,
  results: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M9 11H3v2h6m-6 8h18v-2h-6m-2-8l4-4l-4-4"></path>
      <rect x="2" y="3" width="6" height="18" rx="1"></rect>
      <rect x="16" y="3" width="6" height="18" rx="1"></rect>
      <path d="M10 8h4"></path>
      <path d="M10 12h4"></path>
      <path d="M10 16h4"></path>
    </svg>`,
  blockers: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="15" y1="9" x2="9" y2="15"></line>
      <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>`,
  feedback: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      <line x1="9" y1="10" x2="15" y2="10"></line>
      <line x1="9" y1="14" x2="13" y2="14"></line>
    </svg>`,
  development: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c0 1.5 4 3 6 3s6-1.5 6-3v-5"></path>
    </svg>`,
  signature: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M3 17a3 3 0 0 0 3-3V7a2 2 0 1 1 4 0v10"></path>
      <path d="M12 8.5a2 2 0 1 1 4 0V14"></path>
      <path d="M16 8.5a2 2 0 1 1 4 0V11"></path>
      <path d="M20 11v2a2 2 0 0 1-2 2h-1"></path>
    </svg>`,
  send: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M22 2L11 13"></path>
      <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
    </svg>`,
  info: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>`,
  faqChevron: `
    <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>`,
  document: `
    <svg class="tipo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>`,
  decree: `
    <svg class="tipo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
    </svg>`,
  ordinance: `
    <svg class="tipo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <circle cx="12" cy="13" r="2"></circle>
    </svg>`,
  other: `
    <svg class="tipo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="9" y1="15" x2="15" y2="15"></line>
    </svg>`,
  calendar: `
    <svg class="data-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>`,
  download: `
    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>`,
  view: `
    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>`,
  search: `
    <svg class="no-results-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>`,
  effective: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>`,
  commissioned: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>`,
  calendarLarge: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2"></rect>
      <path d="M16 2v4"></path>
      <path d="M8 2v4"></path>
      <path d="M3 10h18"></path>
      <path d="M8 14h3"></path>
      <path d="M13 14h3"></path>
      <path d="M8 18h3"></path>
    </svg>`,
  guide: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      <path d="M9 7h6"></path>
      <path d="M9 11h6"></path>
    </svg>`,
  tutorial: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <polygon points="6 3 20 12 6 21 6 3"></polygon>
    </svg>`,
  law: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M12 3v18"></path>
      <path d="M5 7h14"></path>
      <path d="M7 7c0 3-2 4-2 6a3 3 0 0 0 6 0c0-2-2-3-2-6"></path>
      <path d="M17 7c0 3-2 4-2 6a3 3 0 0 0 6 0c0-2-2-3-2-6"></path>
      <path d="M4 21h16"></path>
    </svg>`,
  arrow: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M5 12h14"></path>
      <path d="m13 5 7 7-7 7"></path>
    </svg>`,
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function renderOrientationCards() {
  const target = document.getElementById('orientacaoGrid')

  if (!target) {
    return
  }

  target.innerHTML = homeOrientationCards
    .map(
      card => `
        <article class="orientacao-card animate-on-scroll">
          <div class="orientacao-icon">
            ${ICONS[card.icon]}
          </div>
          <h3 class="orientacao-title">${escapeHtml(card.title)}</h3>
          <p class="orientacao-description">${card.descriptionHtml || escapeHtml(card.description)}</p>
        </article>`
    )
    .join('')
}

function renderQuickAccessLinks() {
  const target = document.getElementById('quickAccessGrid')

  if (!target) {
    return
  }

  target.innerHTML = homeQuickAccessLinks
    .map(link => {
      const targetAttr = link.target ? ` target="${escapeHtml(link.target)}" rel="noopener noreferrer"` : ''

      return `
        <a class="quick-access-card animate-on-scroll" href="${escapeHtml(link.href)}"${targetAttr}>
          <div class="quick-access-card-header">
            <span class="quick-access-icon">
              ${ICONS[link.icon]}
            </span>
            <span class="quick-access-badge">${escapeHtml(link.badge)}</span>
          </div>

          <div class="quick-access-body">
            <h3 class="quick-access-title">${escapeHtml(link.title)}</h3>
            <p class="quick-access-description">${escapeHtml(link.description)}</p>
          </div>

          <span class="quick-access-link">
            Acessar
            ${ICONS.arrow}
          </span>
        </a>`
    })
    .join('')
}

function renderOrientationAlert() {
  const target = document.getElementById('orientacaoImportante')

  if (!target) {
    return
  }

  target.classList.add('animate-on-scroll')
  target.innerHTML = `
    <div class="importante-icon">
      ${ICONS.info}
    </div>
    <div class="importante-content">
      <h4 class="importante-title">${escapeHtml(homeOrientationAlert.title)}</h4>
      <p class="importante-description">${escapeHtml(homeOrientationAlert.description)}</p>
    </div>`
}

function renderFaqItems() {
  const target = document.getElementById('faqList')

  if (!target) {
    return
  }

  target.innerHTML = homeFaqItems
    .map((item, index) => {
      const questionId = `faq-question-${index + 1}`
      const answerId = `faq-answer-${index + 1}`
      const answers = item.answers.map(answer => `<p>${escapeHtml(answer)}</p>`).join('')

      return `
        <div class="faq-item">
          <button
            class="faq-question"
            id="${questionId}"
            type="button"
            aria-expanded="false"
            aria-controls="${answerId}"
          >
            <span>${escapeHtml(item.question)}</span>
            ${ICONS.faqChevron}
          </button>
          <div class="faq-answer" id="${answerId}" role="region" aria-labelledby="${questionId}" aria-hidden="true">
            ${answers}
          </div>
        </div>`
    })
    .join('')
}

function getDocumentTypeIcon(category) {
  switch (category) {
    case 'leis':
      return ICONS.document
    case 'decretos':
      return ICONS.decree
    case 'portarias':
      return ICONS.ordinance
    default:
      return ICONS.other
  }
}

function getDocumentTypeClass(category) {
  switch (category) {
    case 'leis':
      return 'lei'
    case 'decretos':
      return 'decreto'
    case 'portarias':
      return 'portaria'
    default:
      return 'outros'
  }
}

function renderLegislationDocuments() {
  const target = document.getElementById('documentosGrid')

  if (!target) {
    return
  }

  const cards = legislationDocuments
    .map(documento => {
      const searchIndex = [documento.type, documento.date, documento.title, documento.ementa, ...documento.tags].join(' ').toLowerCase()
      const pdfSource = documento.driveFileId ? `data-pdf-id="${escapeHtml(documento.driveFileId)}"` : `data-pdf="${escapeHtml(documento.filePath)}"`
      const tags = documento.tags.length
        ? `
            <div class="documento-tags">
              ${documento.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
            </div>`
        : ''

      return `
        <article
          class="documento-card animate-on-scroll"
          data-category="${escapeHtml(documento.category)}"
          data-search="${escapeHtml(searchIndex)}"
        >
          <div class="documento-header">
            <div class="documento-tipo ${getDocumentTypeClass(documento.category)}">
              ${getDocumentTypeIcon(documento.category)}
              <span>${escapeHtml(documento.type)}</span>
            </div>
            <div class="documento-data">
              ${ICONS.calendar}
              <span>${escapeHtml(documento.date)}</span>
            </div>
          </div>

          <div class="documento-content">
            <h3 class="documento-titulo">${escapeHtml(documento.title)}</h3>
            <p class="documento-ementa">${escapeHtml(documento.ementa)}</p>
            ${tags}
          </div>

          <div class="documento-footer">
            <button class="btn-download" type="button" ${pdfSource}>
              ${ICONS.download}
              Baixar PDF
            </button>
            <button class="btn-visualizar" type="button" ${pdfSource}>
              ${ICONS.view}
              Visualizar
            </button>
          </div>
        </article>`
    })
    .join('')

  target.innerHTML = `
    ${cards}
    <div class="no-results" id="noResults" hidden role="status" aria-live="polite">
      ${ICONS.search}
      <h3>Nenhum documento encontrado</h3>
      <p>Tente ajustar seus filtros ou termos de pesquisa.</p>
    </div>`
}

export function renderPageContent() {
  renderQuickAccessLinks()
  renderOrientationCards()
  renderOrientationAlert()
  renderFaqItems()
  renderLegislationDocuments()
}
