# 🏛️ Sistema de Avaliação de Desempenho - Prefeitura de Pedro Leopoldo

Sistema web completo para gerenciamento de avaliações de desempenho dos servidores municipais de Pedro Leopoldo/MG.

## 📋 Funcionalidades

- ✅ Página inicial institucional moderna e responsiva
- ✅ Formulários de avaliação para servidores efetivos
- ✅ Formulários de avaliação para cargos em comissão
- ✅ Sistema de autoavaliação
- ✅ Upload múltiplo de PDFs (até 20 arquivos)
- ✅ Envio de avaliações por email com anexos
- ✅ Cronograma e prazos das avaliações
- ✅ Design institucional e profissional

## 🚀 Início Rápido

### 1. Instalar Node.js
Baixe e instale: https://nodejs.org/

### 2. Instalar Dependências
```bash
npm install
```

### 3. Configurar Email
Edite o arquivo `.env` com suas credenciais SMTP:
```env
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-de-app
EMAIL_TO=lucelho.silva@pedroleopoldo.mg.gov.br
```

### 4. Iniciar o Servidor
```bash
npm start
```

### 5. Acessar o Sistema
Abra no navegador: http://localhost:3000

## 📖 Documentação Completa

Consulte o arquivo [INSTALACAO-NODEJS.md](INSTALACAO-NODEJS.md) para:
- Instalação detalhada passo a passo
- Configuração de email Gmail/Outlook
- Solução de problemas
- Estrutura do projeto

## 📂 Estrutura do Projeto

```
PerformanceAssessment/
├── index.html              # Página principal
├── styles.css              # Estilos globais
├── script.js               # JavaScript frontend
├── server.js               # Servidor Node.js (backend)
├── package.json            # Dependências
├── .env                    # Configurações (não versionado)
├── autoavaliacao/          # Sistema de autoavaliação
├── efetivo/                # Formulário servidor efetivo
└── comissionado/           # Formulário cargo em comissão
```

## 🔧 Tecnologias

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express
- **Email:** Nodemailer
- **Upload:** Multer

## 📧 Email

Os emails enviados possuem:
- ✉️ Design profissional em HTML
- 📎 Anexos múltiplos em PDF
- 📋 Informações detalhadas do envio
- 🎨 Template institucional da prefeitura

## 🔒 Segurança

- Validação de tipo de arquivo (apenas PDF)
- Limite de tamanho (10MB por arquivo)
- Limite de quantidade (máximo 20 arquivos)
- Credenciais em arquivo .env (não versionado)
- Arquivos temporários deletados após envio

## 📞 Suporte

Para dúvidas ou problemas, consulte:
1. [INSTALACAO-NODEJS.md](INSTALACAO-NODEJS.md) - Guia completo
2. Seção "Solução de Problemas" no guia
3. Logs do servidor no terminal

## ✅ Checklist de Produção

Antes de colocar em produção:
- [ ] Node.js instalado
- [ ] Dependências instaladas (`npm install`)
- [ ] Arquivo `.env` configurado
- [ ] Senha de App gerada (Gmail)
- [ ] Teste de envio funcionando
- [ ] Email chega no destinatário

---

**Desenvolvido para a Prefeitura Municipal de Pedro Leopoldo/MG**
