/**
 * ========================================
 * LEGISLAÇÃO - JavaScript
 * Funcionalidades interativas da página de legislação
 * ========================================
 */

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function () {
  // ========================================
  // Inicialização de Elementos
  // ========================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('searchInput');
  const documentosGrid = document.getElementById('documentosGrid');
  const documentCards = document.querySelectorAll('.documento-card');
  const noResults = document.getElementById('noResults');
  const btnVisualizar = document.querySelectorAll('.btn-visualizar');
  const btnDownload = document.querySelectorAll('.btn-download');
  const pdfModal = document.getElementById('pdfModal');
  const closeModal = document.getElementById('closeModal');
  const pdfViewer = document.getElementById('pdfViewer');
  const modalTitle = document.getElementById('modalTitle');

  // ========================================
  // Filtros de Categoria
  // ========================================
  filterButtons.forEach((button) => {
    button.addEventListener('click', function () {
      // Remove classe active de todos os botões
      filterButtons.forEach((btn) => btn.classList.remove('active'));

      // Adiciona classe active no botão clicado
      this.classList.add('active');

      // Obtém a categoria do filtro
      const filter = this.getAttribute('data-filter');

      // Filtra os documentos
      filterDocuments(filter);
    });
  });

  /**
   * Filtra documentos por categoria
   * @param {string} category - Categoria para filtrar ('todos', 'leis', 'decretos', etc.)
   */
  function filterDocuments(category) {
    let visibleCount = 0;

    documentCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category');

      if (category === 'todos' || cardCategory === category) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Mostra mensagem se não houver resultados
    toggleNoResults(visibleCount === 0);
  }

  // ========================================
  // Pesquisa de Documentos
  // ========================================
  searchInput.addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    let visibleCount = 0;

    documentCards.forEach((card) => {
      const title = card.querySelector('.documento-titulo').textContent.toLowerCase();
      const ementa = card.querySelector('.documento-ementa').textContent.toLowerCase();
      const tags = Array.from(card.querySelectorAll('.tag')).map((tag) => tag.textContent.toLowerCase()).join(' ');

      const matchesSearch = title.includes(searchTerm) || ementa.includes(searchTerm) || tags.includes(searchTerm);

      // Verifica também o filtro ativo
      const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
      const cardCategory = card.getAttribute('data-category');
      const matchesFilter = activeFilter === 'todos' || cardCategory === activeFilter;

      if (matchesSearch && matchesFilter) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Mostra mensagem se não houver resultados
    toggleNoResults(visibleCount === 0);
  });

  /**
   * Mostra ou oculta a mensagem de "Sem Resultados"
   * @param {boolean} show - Se deve mostrar a mensagem
   */
  function toggleNoResults(show) {
    if (noResults) {
      noResults.style.display = show ? 'block' : 'none';
    }
  }

  // ========================================
  // Modal de Visualização de PDF
  // ========================================

  /**
   * Abre o modal de visualização de PDF
   * @param {string} pdfPath - Caminho do arquivo PDF
   * @param {string} title - Título do documento
   */
  function openPdfModal(pdfPath, title) {
    // Define o título do modal
    modalTitle.textContent = title || 'Visualizar Documento';

    // Define o caminho do PDF no iframe
    // Nota: Para funcionar, você precisa ter os arquivos PDF na pasta adequada
    pdfViewer.src = `./assets/legislacao/${pdfPath}`;

    // Mostra o modal
    pdfModal.classList.add('active');

    // Previne scroll do body
    document.body.style.overflow = 'hidden';
  }

  /**
   * Fecha o modal de visualização de PDF
   */
  function closePdfModal() {
    pdfModal.classList.remove('active');
    pdfViewer.src = '';
    document.body.style.overflow = 'auto';
  }

  // Event listeners para botões de visualizar
  btnVisualizar.forEach((btn) => {
    btn.addEventListener('click', function () {
      const pdfPath = this.getAttribute('data-pdf');
      const card = this.closest('.documento-card');
      const title = card.querySelector('.documento-titulo').textContent;

      openPdfModal(pdfPath, title);
    });
  });

  // Event listener para fechar modal
  if (closeModal) {
    closeModal.addEventListener('click', closePdfModal);
  }

  // Fecha modal ao clicar fora dele
  pdfModal.addEventListener('click', function (e) {
    if (e.target === pdfModal) {
      closePdfModal();
    }
  });

  // Fecha modal com tecla ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && pdfModal.classList.contains('active')) {
      closePdfModal();
    }
  });

  // ========================================
  // Download de Documentos
  // ========================================
  btnDownload.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();

      const pdfPath = this.getAttribute('data-pdf');
      const card = this.closest('.documento-card');
      const title = card.querySelector('.documento-titulo').textContent;

      // Aqui você pode implementar a lógica de download
      // Por enquanto, mostra um alerta
      console.log(`Baixando documento: ${title}`);
      console.log(`Arquivo: ${pdfPath}`);

      // Para implementar o download real, você precisaria:
      // 1. Ter os arquivos PDF no servidor
      // 2. Usar um link direto ou fazer fetch do arquivo
      // Exemplo:
      // window.location.href = `./assets/legislacao/${pdfPath}`;
    });
  });


  // ========================================
  // Animações de Scroll
  // ========================================

  /**
   * Observa elementos e adiciona animação quando entram na viewport
   */
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observa todos os cards de documentos
  documentCards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });

  // ========================================
  // Informações de Depuração (apenas desenvolvimento)
  // ========================================
  console.log('Página de Legislação carregada');
  console.log(`Total de documentos: ${documentCards.length}`);
  console.log(`Filtros disponíveis: ${filterButtons.length}`);
});

/**
 * ========================================
 * EXEMPLO: Adicionar Documentos Dinamicamente
 * ========================================
 *
 * Você pode usar esta função para adicionar novos documentos à página
 * dinamicamente, por exemplo, após carregar de uma API
 */

/**
 * Adiciona um novo documento ao grid
 * @param {Object} documento - Objeto com os dados do documento
 */
function adicionarDocumento(documento) {
  const grid = document.getElementById('documentosGrid');

  const card = `
    <div class="documento-card" data-category="${documento.categoria}">
      <div class="documento-header">
        <div class="documento-tipo ${documento.categoria}">
          <svg class="tipo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <span>${documento.tipo}</span>
        </div>
        <div class="documento-data">
          <svg class="data-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>${documento.data}</span>
        </div>
      </div>

      <div class="documento-content">
        <h3 class="documento-titulo">${documento.titulo}</h3>
        <p class="documento-ementa">${documento.ementa}</p>

        <div class="documento-tags">
          ${documento.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>

      <div class="documento-footer">
        <a href="#" class="btn-download" data-pdf="${documento.arquivo}">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Baixar PDF
        </a>
        <button class="btn-visualizar" data-pdf="${documento.arquivo}">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Visualizar
        </button>
      </div>
    </div>
  `;

  // Insere o card antes do elemento "no-results"
  const noResults = document.getElementById('noResults');
  grid.insertBefore(createElementFromHTML(card), noResults);
}

/**
 * Cria um elemento HTML a partir de uma string
 * @param {string} htmlString - String HTML
 * @returns {Element} Elemento criado
 */
function createElementFromHTML(htmlString) {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}

// Exemplo de uso:
// adicionarDocumento({
//   categoria: 'leis',
//   tipo: 'Lei',
//   data: '10/11/2024',
//   titulo: 'Lei Complementar nº 999/2024',
//   ementa: 'Estabelece novas diretrizes para avaliação...',
//   tags: ['Avaliação', 'Diretrizes', 'Gestão'],
//   arquivo: 'lei-999-2024.pdf'
// });
