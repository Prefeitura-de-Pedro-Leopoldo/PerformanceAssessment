// ============================================
// MENU MOBILE TOGGLE
// ============================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

// Toggle menu mobile
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');

        // Animar ícone hambúrguer
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// ============================================
// DROPDOWN MENU MOBILE
// ============================================

dropdownItems.forEach(item => {
    const link = item.querySelector('.nav-link');

    // Para mobile: toggle dropdown ao clicar
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();

            // Fechar outros dropdowns
            dropdownItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle atual
            item.classList.toggle('active');
        }
    });
});

// ============================================
// FECHAR MENU AO CLICAR FORA
// ============================================

document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!e.target.closest('.main-nav') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');

            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
});

// ============================================
// SCROLL SUAVE PARA ÂNCORAS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const headerHeight = document.querySelector('.header-top').offsetHeight;

            window.scrollTo({
                top: target.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// HEADER SCROLL EFFECT
// ============================================

let lastScroll = 0;
const header = document.querySelector('.header-top');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Adicionar sombra ao header ao rolar
    if (currentScroll > 10) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ============================================
// ANIMAÇÃO DE ENTRADA DOS ELEMENTOS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos com classe .animate-on-scroll
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// PRELOAD DE IMAGENS
// ============================================

window.addEventListener('load', () => {
    // Remover classe de loading se houver
    document.body.classList.add('loaded');
});

// ============================================
// RESPONSIVE MENU - AJUSTE NO RESIZE
// ============================================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');

            // Resetar ícone hambúrguer
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';

            // Fechar todos os dropdowns
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    }, 250);
});

// ============================================
// SCROLL INDICATOR - OCULTAR APÓS SCROLL
// ============================================

const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });
}

// ============================================
// PREVENÇÃO DE FLASH DE CONTEÚDO NÃO ESTILIZADO
// ============================================

document.documentElement.style.setProperty('--initial-load', 'false');

// ============================================
// ACESSIBILIDADE - ESC PARA FECHAR MENU
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');

        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// ============================================
// FILE UPLOAD - EXIBIR MÚLTIPLOS ARQUIVOS
// ============================================

const fileInput = document.getElementById('pdf-file');
const fileCount = document.getElementById('fileCount');
const fileList = document.getElementById('fileList');
let selectedFiles = [];

if (fileInput) {
    fileInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);

        if (files.length > 0) {
            // Limitar a 20 arquivos
            if (files.length > 20) {
                showStatus('Você pode enviar no máximo 20 arquivos por vez.', 'error');
                fileInput.value = '';
                return;
            }

            selectedFiles = files;
            updateFileDisplay();
        } else {
            selectedFiles = [];
            fileCount.textContent = 'Nenhum arquivo selecionado';
            fileList.innerHTML = '';
            fileList.classList.remove('active');
        }
    });
}

function updateFileDisplay() {
    const totalFiles = selectedFiles.length;
    const totalSize = selectedFiles.reduce((sum, file) => sum + file.size, 0);
    const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);

    fileCount.textContent = `${totalFiles} arquivo${totalFiles > 1 ? 's' : ''} selecionado${totalFiles > 1 ? 's' : ''} (${totalSizeMB} MB)`;

    // Exibir lista de arquivos
    fileList.innerHTML = '';
    selectedFiles.forEach((file, index) => {
        const fileItem = createFileItem(file, index);
        fileList.appendChild(fileItem);
    });

    fileList.classList.add('active');
}

function createFileItem(file, index) {
    const div = document.createElement('div');
    div.className = 'file-item';

    const sizeMB = (file.size / 1024).toFixed(2);

    div.innerHTML = `
        <div class="file-item-info">
            <svg class="file-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <div class="file-item-details">
                <div class="file-item-name">${file.name}</div>
                <div class="file-item-size">${sizeMB} KB</div>
            </div>
        </div>
        <button type="button" class="file-item-remove" data-index="${index}" aria-label="Remover arquivo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    `;

    // Adicionar evento de remover
    const removeBtn = div.querySelector('.file-item-remove');
    removeBtn.addEventListener('click', () => {
        removeFile(index);
    });

    return div;
}

function removeFile(index) {
    selectedFiles.splice(index, 1);

    if (selectedFiles.length > 0) {
        updateFileDisplay();
        updateFileInput();
    } else {
        fileCount.textContent = 'Nenhum arquivo selecionado';
        fileList.innerHTML = '';
        fileList.classList.remove('active');
        fileInput.value = '';
    }
}

function updateFileInput() {
    // Criar um novo FileList com os arquivos restantes
    const dt = new DataTransfer();
    selectedFiles.forEach(file => dt.items.add(file));
    fileInput.files = dt.files;
}

// ============================================
// FORMULÁRIO DE UPLOAD
// ============================================

const uploadForm = document.getElementById('uploadForm');
const uploadStatus = document.getElementById('uploadStatus');

if (uploadForm) {
    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Coletar dados do formulário
        const emailRemetente = document.getElementById('email-remetente').value;
        const departamento = document.getElementById('departamento').value;
        const observacoes = document.getElementById('observacoes').value;

        // Validações
        if (selectedFiles.length === 0) {
            showStatus('Por favor, selecione pelo menos um arquivo PDF.', 'error');
            return;
        }

        // Validar cada arquivo
        let hasError = false;
        let errorMessage = '';

        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];

            if (file.type !== 'application/pdf') {
                hasError = true;
                errorMessage = `O arquivo "${file.name}" não é um PDF válido.`;
                break;
            }

            if (file.size > 10 * 1024 * 1024) { // 10MB
                hasError = true;
                errorMessage = `O arquivo "${file.name}" excede o limite de 10MB.`;
                break;
            }
        }

        if (hasError) {
            showStatus(errorMessage, 'error');
            return;
        }

        // Enviar para o servidor PHP
        const totalFiles = selectedFiles.length;
        showStatus(`Enviando ${totalFiles} arquivo${totalFiles > 1 ? 's' : ''}...`, 'info');

        try {
            // Criar FormData para enviar os arquivos
            const formData = new FormData();
            formData.append('emailRemetente', emailRemetente);
            formData.append('departamento', departamento);
            formData.append('observacoes', observacoes);

            // Adicionar todos os arquivos
            selectedFiles.forEach((file, index) => {
                formData.append('files[]', file);
            });

            // Fazer requisição para o servidor Node.js
            const response = await fetch('http://localhost:3000/api/upload', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                showStatus(
                    `✅ ${result.data.totalFiles} avaliação${result.data.totalFiles > 1 ? 'ões' : ''} enviada${result.data.totalFiles > 1 ? 's' : ''} com sucesso! Os arquivos foram enviados para o Departamento de RH. Você receberá uma confirmação em ${emailRemetente}.`,
                    'success'
                );

                // Limpar formulário após 5 segundos
                setTimeout(() => {
                    uploadForm.reset();
                    selectedFiles = [];
                    fileCount.textContent = 'Nenhum arquivo selecionado';
                    fileList.innerHTML = '';
                    fileList.classList.remove('active');
                    uploadStatus.style.display = 'none';
                }, 5000);
            } else {
                throw new Error(result.message || 'Erro ao enviar arquivos');
            }

        } catch (error) {
            console.error('Erro no envio:', error);
            showStatus(
                `❌ Erro ao enviar arquivos: ${error.message}. Por favor, tente novamente.`,
                'error'
            );
        }
    });
}

function showStatus(message, type) {
    uploadStatus.textContent = message;
    uploadStatus.className = `upload-status ${type}`;
    uploadStatus.style.display = 'block';

    // Rolar até o status
    uploadStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================
// SMOOTH SCROLL PARA SEÇÕES
// ============================================

// Atualizar links do menu para incluir scroll suave para as novas seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const headerHeight = document.querySelector('.header-top').offsetHeight;

            window.scrollTo({
                top: target.offsetTop - headerHeight - 20,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// LOGS DE DESENVOLVIMENTO (REMOVER EM PRODUÇÃO)
// ============================================

console.log('%c🏛️ Prefeitura de Pedro Leopoldo', 'font-size: 20px; font-weight: bold; color: #003d82;');
console.log('%cSistema de Avaliação de Desempenho', 'font-size: 14px; color: #6c757d;');
console.log('%cDesenvolvido com HTML, CSS e JavaScript puro', 'font-size: 12px; color: #0056b3;');
