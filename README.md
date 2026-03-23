# Sistema de Avaliação de Desempenho

Projeto web da Prefeitura de Pedro Leopoldo para apoio ao processo de avaliação de desempenho dos servidores.

## Estrutura principal

O front institucional está centralizado em `src/`.

```text
PerformanceAssessment/
├── src/
│   ├── index.html
│   ├── tutorial.html
│   ├── legislacao.html
│   ├── css/
│   └── js/
├── efetivo/
├── comissionado/
└── autoavaliacao/
```

## Arquitetura do front institucional

- `src/js/modules/sharedLayout.js`: renderiza elementos compartilhados, como cabeçalho e rodapé.
- `src/js/data/siteContent.js`: concentra conteúdo editorial da home e da legislação.
- `src/js/modules/pageContent.js`: renderiza seções orientadas a dados.
- `src/js/main.js`: inicializa layout, conteúdo e módulos interativos.
- `src/js/legislacao.js`: controla filtros, pesquisa, modal e download da página de legislação.

## Boas práticas adotadas

- layout compartilhado entre páginas
- conteúdo centralizado em módulos de dados
- inicialização modular em JavaScript
- melhoria de acessibilidade com skip link, `main`, `aria-*` e foco visível
- menor duplicação de HTML e manutenção mais previsível

## Como abrir

Abra `src/index.html` em um navegador ou sirva a pasta `src/` com um servidor estático.

## Observação

As aplicações `efetivo/`, `comissionado/` e `autoavaliacao/` seguem fluxos próprios e permanecem separadas do front institucional.
