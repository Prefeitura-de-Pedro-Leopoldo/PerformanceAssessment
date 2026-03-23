export class LegislationPage {
  constructor() {
    this.filterButtons = Array.from(document.querySelectorAll('.filter-btn'))
    this.searchInput = document.getElementById('searchInput')
    this.documentosGrid = document.getElementById('documentosGrid')
    this.noResults = document.getElementById('noResults')
    this.pdfModal = document.getElementById('pdfModal')
    this.closeModalButton = document.getElementById('closeModal')
    this.pdfViewer = document.getElementById('pdfViewer')
    this.modalTitle = document.getElementById('modalTitle')

    if (!this.documentosGrid) {
      return
    }

    this.init()
  }

  init() {
    this.setupFilters()
    this.setupSearch()
    this.setupGridActions()
    this.setupModal()
    this.applyFilters()
  }

  getDocumentCards() {
    return Array.from(this.documentosGrid.querySelectorAll('.documento-card'))
  }

  getActiveFilter() {
    return this.filterButtons.find(button => button.classList.contains('active'))?.dataset.filter || 'todos'
  }

  setupFilters() {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.filterButtons.forEach(filterButton => {
          filterButton.classList.remove('active')
          filterButton.setAttribute('aria-pressed', 'false')
        })

        button.classList.add('active')
        button.setAttribute('aria-pressed', 'true')
        this.applyFilters()
      })
    })
  }

  setupSearch() {
    if (!this.searchInput) {
      return
    }

    this.searchInput.addEventListener('input', () => {
      this.applyFilters()
    })
  }

  applyFilters() {
    const activeFilter = this.getActiveFilter()
    const searchTerm = this.searchInput?.value.trim().toLowerCase() || ''
    let visibleCount = 0

    this.getDocumentCards().forEach(card => {
      const matchesFilter = activeFilter === 'todos' || card.dataset.category === activeFilter
      const matchesSearch = !searchTerm || card.dataset.search?.includes(searchTerm)
      const isVisible = matchesFilter && matchesSearch

      card.hidden = !isVisible

      if (isVisible) {
        visibleCount += 1
      }
    })

    if (this.noResults) {
      this.noResults.hidden = visibleCount !== 0
    }
  }

  setupGridActions() {
    this.documentosGrid.addEventListener('click', event => {
      const viewButton = event.target.closest('.btn-visualizar')
      const downloadButton = event.target.closest('.btn-download')

      if (viewButton) {
        const card = viewButton.closest('.documento-card')
        const title = card?.querySelector('.documento-titulo')?.textContent || 'Visualizar documento'
        this.openPdfModal(viewButton.dataset.pdfId || viewButton.dataset.pdf, title)
      }

      if (downloadButton) {
        const card = downloadButton.closest('.documento-card')
        const title = card?.querySelector('.documento-titulo')?.textContent || 'Documento'
        this.downloadDocument(downloadButton.dataset.pdfId, downloadButton.dataset.pdf, title)
      }
    })
  }

  setupModal() {
    if (!this.pdfModal) {
      return
    }

    this.closeModalButton?.addEventListener('click', () => this.closePdfModal())

    this.pdfModal.addEventListener('click', event => {
      if (event.target === this.pdfModal) {
        this.closePdfModal()
      }
    })

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && this.pdfModal.classList.contains('active')) {
        this.closePdfModal()
      }
    })
  }

  openPdfModal(pdfIdentifier, title) {
    if (!pdfIdentifier || !this.pdfModal || !this.pdfViewer || !this.modalTitle) {
      return
    }

    this.modalTitle.textContent = title
    this.pdfViewer.src = pdfIdentifier.includes('.pdf')
      ? `./assets/legislacao/${pdfIdentifier}`
      : `https://drive.google.com/file/d/${pdfIdentifier}/preview`

    this.pdfModal.classList.add('active')
    document.body.style.overflow = 'hidden'
  }

  closePdfModal() {
    if (!this.pdfModal || !this.pdfViewer) {
      return
    }

    this.pdfModal.classList.remove('active')
    this.pdfViewer.src = ''
    document.body.style.overflow = ''
  }

  downloadDocument(pdfId, pdfPath, title) {
    const fileName = title.replace(/\s+/g, '-').toLowerCase()

    if (pdfId && !pdfId.includes('.pdf')) {
      const downloadWindow = window.open(`https://drive.google.com/file/d/${pdfId}/view?usp=sharing`, '_blank', 'noopener')
      if (downloadWindow) {
        downloadWindow.opener = null
      }
      return
    }

    if (!pdfPath) {
      return
    }

    const link = document.createElement('a')
    link.href = `./assets/legislacao/${pdfPath}`
    link.download = fileName.endsWith('.pdf') ? fileName : `${fileName}.pdf`
    link.click()
  }
}
