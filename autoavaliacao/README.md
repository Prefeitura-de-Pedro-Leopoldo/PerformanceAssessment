# 📋 Sistema de Autoavaliação de Desempenho

Sistema de autoavaliação para servidores da Prefeitura Municipal de Pedro Leopoldo.

## 🏗️ Arquitetura do Projeto

### Estrutura de Pastas

```
projeto/
├── assets/
│   ├── css/
│   │   ├── base/
│   │   │   ├── variables.css      # Variáveis CSS
│   │   │   ├── reset.css          # Reset de estilos
│   │   │   ├── fonts.css          # Configuração de fontes
│   │   │   └── typography.css     # Tipografia
│   │   ├── components/
│   │   │   ├── buttons.css        # Estilos de botões
│   │   │   ├── forms.css          # Formulários
│   │   │   ├── loading.css        # Loading overlay
│   │   │   ├── comportamento.css  # Cards de comportamento
│   │   │   └── resultado.css      # Resultado final
│   │   ├── layout/
│   │   │   ├── container.css      # Container principal
│   │   │   ├── header.css         # Cabeçalho
│   │   │   └── sections.css       # Seções
│   │   └── main.css               # Arquivo principal CSS
│   ├── js/
│   │   ├── config/
│   │   │   ├── constants.js       # Constantes globais
│   │   │   └── comportamentos.js  # Dados dos comportamentos
│   │   ├── utils/
│   │   │   ├── validators.js      # Validações
│   │   │   ├── formatters.js      # Formatação de dados
│   │   │   └── dom.js             # Utilitários DOM
│   │   ├── modules/
│   │   │   ├── calculator.js      # Cálculos
│   │   │   ├── renderer.js        # Renderização
│   │   │   ├── pdf-generator.js   # Geração de PDF
│   │   │   └── form-handler.js    # Gestão do formulário
│   │   └── main.js                # Inicialização
│   └── img/
│       └── brasao.png             # Brasão da prefeitura
└── autoavaliacao.html             # Página principal

```

## 🎯 Conceitos Aplicados

### **CSS**
- **Atomic Design**: Separação em base, components e layout
- **CSS Variables**: Centralização de tokens de design
- **BEM-like Naming**: Nomenclatura consistente
- **Mobile First**: Responsividade progressiva
- **Print Styles**: Otimização para impressão

### **JavaScript**
- **ES6 Modules**: Importação/exportação modular
- **Separation of Concerns**: Separação de responsabilidades
- **Single Responsibility**: Uma função, uma responsabilidade
- **DRY Principle**: Don't Repeat Yourself
- **Pure Functions**: Funções sem efeitos colaterais
- **Dependency Injection**: Injeção de dependências

## 🚀 Como Usar

### Instalação

1. Clone ou baixe o projeto
2. Mantenha a estrutura de pastas
3. Abra `autoavaliacao.html` em um navegador moderno

### Navegadores Suportados

- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)

**Nota**: O projeto usa ES6 Modules, que requerem navegadores modernos.

## 📦 Dependências

- **html2pdf.js** (v0.10.1) - Geração de PDF via CDN

## 🔧 Configuração

### Modificar Comportamentos

Edite `assets/js/config/comportamentos.js`:

```javascript
{
  id: 10,
  nome: "NOVO COMPORTAMENTO",
  descricao: "Descrição do comportamento",
  max_pontos: 10,
  criterios: [
    { id: 1, texto: "Critério 1", peso: 2 },
    { id: 2, texto: "Critério 2", peso: 1 }
  ]
}
```

### Modificar Estilos

Edite as variáveis em `assets/css/base/variables.css`:

```css
:root {
  --cor-primaria: #333;
  --espacamento-normal: 10px;
  /* ... */
}
```

### Modificar Configurações

Edite `assets/js/config/constants.js`:

```javascript
export const CONFIG = {
  PONTUACAO_MAXIMA: 100,
  NOTA_MIN: 1,
  NOTA_MAX: 5,
  /* ... */
};
```

## 📖 Módulos JavaScript

### **config/**
- `constants.js`: Configurações globais do sistema
- `comportamentos.js`: Dados dos 9 comportamentos avaliados

### **utils/**
- `validators.js`: Validação de inputs
- `formatters.js`: Formatação de datas e números
- `dom.js`: Manipulação do DOM

### **modules/**
- `calculator.js`: Cálculos de pontuação
- `renderer.js`: Renderização de HTML
- `pdf-generator.js`: Geração de PDF
- `form-handler.js`: Gerenciamento do formulário

## 🎨 Customização de Temas

Para criar um tema personalizado:

1. Duplique `variables.css`
2. Modifique as cores
3. Importe no `main.css`

```css
/* Tema Escuro */
:root {
  --cor-primaria: #fff;
  --cor-fundo: #1a1a1a;
  --cor-texto: #fff;
}
```

## 🐛 Debug

Ative logs no console:

```javascript
// Em main.js
console.log('Sistema inicializado');
```

## 📄 Licença

Projeto desenvolvido para a Prefeitura Municipal de Pedro Leopoldo.

## 👥 Contribuindo

1. Mantenha a estrutura modular
2. Documente novas funções
3. Teste em múltiplos navegadores
4. Siga os padrões de nomenclatura

## 📞 Suporte

Para dúvidas ou problemas, consulte a documentação técnica interna.