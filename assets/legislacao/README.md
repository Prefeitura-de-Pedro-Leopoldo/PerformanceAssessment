# Pasta de Legislação

Esta pasta é destinada aos arquivos PDF de legislação (leis, decretos, portarias, etc.) que serão disponibilizados na página de Legislação.

## Como Adicionar Documentos

### 1. Adicionar o arquivo PDF

Coloque o arquivo PDF nesta pasta (`assets/legislacao/`).

**Exemplo:**
- `lei-123-2024.pdf`
- `decreto-456-2024.pdf`
- `portaria-789-2024.pdf`

### 2. Atualizar o HTML

Edite o arquivo `legislacao.html` e adicione um novo card de documento seguindo o modelo:

```html
<div class="documento-card" data-category="leis">
  <div class="documento-header">
    <div class="documento-tipo lei">
      <svg class="tipo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
      </svg>
      <span>Lei</span>
    </div>
    <div class="documento-data">
      <svg class="data-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      <span>01/01/2024</span>
    </div>
  </div>

  <div class="documento-content">
    <h3 class="documento-titulo">Título do Documento</h3>
    <p class="documento-ementa">
      Descrição resumida do documento...
    </p>

    <div class="documento-tags">
      <span class="tag">Tag 1</span>
      <span class="tag">Tag 2</span>
    </div>
  </div>

  <div class="documento-footer">
    <a href="#" class="btn-download" data-pdf="nome-do-arquivo.pdf">
      <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      Baixar PDF
    </a>
    <button class="btn-visualizar" data-pdf="nome-do-arquivo.pdf">
      <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
      Visualizar
    </button>
  </div>
</div>
```

### 3. Categorias Disponíveis

Use o atributo `data-category` com um dos seguintes valores:

- **`leis`** - Para leis e leis complementares
- **`decretos`** - Para decretos municipais
- **`portarias`** - Para portarias
- **`outros`** - Para outros tipos de documentos

E use a classe correspondente no tipo:

- **`lei`** - Cor azul
- **`decreto`** - Cor roxa
- **`portaria`** - Cor verde
- **`outros`** - Cor laranja

### 4. Importante

- O nome do arquivo no atributo `data-pdf` deve corresponder ao nome real do arquivo na pasta
- Certifique-se de que os PDFs não sejam muito grandes (recomendado: máximo 10MB por arquivo)
- Use nomes de arquivo sem espaços e caracteres especiais (use hífens em vez de espaços)

## Estrutura de Pastas

```
assets/
└── legislacao/
    ├── README.md (este arquivo)
    ├── lei-123-2024.pdf
    ├── decreto-456-2024.pdf
    └── portaria-789-2024.pdf
```

## Exemplo de Adição Dinâmica via JavaScript

Você também pode adicionar documentos dinamicamente usando JavaScript:

```javascript
adicionarDocumento({
  categoria: 'leis',
  tipo: 'Lei',
  data: '10/11/2024',
  titulo: 'Lei Complementar nº 999/2024',
  ementa: 'Estabelece novas diretrizes para avaliação...',
  tags: ['Avaliação', 'Diretrizes', 'Gestão'],
  arquivo: 'lei-999-2024.pdf'
});
```

A função `adicionarDocumento()` está disponível em `js/legislacao.js`.
