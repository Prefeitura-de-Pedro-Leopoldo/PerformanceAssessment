# Pasta de Instruções

Esta pasta contém o arquivo PPTX com as instruções em apresentação sobre o processo de avaliação de desempenho.

## 📁 Arquivo Atual

**Nome:** `CAPACITAÇÃO AVALIAÇÃO DE DESEMPENHO SERVIDORES EFETIVOS 16-07.pptx`

Este arquivo está sendo exibido na página através do Google Slides.

## 🎯 Como Funciona a Exibição

Atualmente, a apresentação está configurada para usar **Google Slides** e é exibida de duas formas:

### 1. **Visualizador Embutido** (Exibição direta na página)
   - A apresentação aparece automaticamente na seção "Instruções Complementares"
   - Visitantes podem navegar pelos slides diretamente no site
   - Não precisa clicar em nenhum botão

### 2. **Botões de Ação**
   - **Visualizar Online:** Abre o Google Slides em tela cheia em nova aba
   - **Baixar Apresentação:** Faz download direto do arquivo PPTX

## 🔗 Links Configurados

### Google Slides (Método Atual)
```
Visualizador Embutido: https://docs.google.com/presentation/d/e/2PACX-1vTwEJ1LWDrUkNbz4WihSv280ly1ANQTTz_SzA-/embed?start=false&loop=false&delayms=3000

Visualizar Online: https://docs.google.com/presentation/d/1LWDrUkNbz4WihSv280ly1ANQTTz_SzA-/edit?usp=sharing

Download PPTX: https://docs.google.com/presentation/d/1LWDrUkNbz4WihSv280ly1ANQTTz_SzA-/export/pptx
```

## 📝 Arquivo Local vs Google Slides

### **Opção 1: Google Slides (Configurado Atualmente)**

**Vantagens:**
- ✅ Funciona perfeitamente online
- ✅ Pode ser editado facilmente no Google
- ✅ Atualização automática quando modificar no Google
- ✅ Não ocupa espaço no servidor
- ✅ Visualização rápida e responsiva

**Desvantagens:**
- ❌ Precisa de conexão com internet
- ❌ Depende do Google Drive

### **Opção 2: Arquivo Local (PPTX na pasta)**

**Vantagens:**
- ✅ Funciona offline (após primeira carga)
- ✅ Total controle sobre o arquivo
- ✅ Backup local garantido

**Desvantagens:**
- ❌ Requer servidor web para visualização embutida
- ❌ Ocupa espaço no servidor
- ❌ Precisa recarregar página após atualização

## 🔄 Como Alternar Entre as Opções

### Para Usar Arquivo Local (PPTX da pasta):

1. **Renomeie o arquivo local para:**
   ```
   instrucoes-avaliacao-desempenho.pptx
   ```

2. **Edite o `index.html` (linha ~584):**
   ```html
   <!-- Visualizador Embutido - Use ARQUIVO LOCAL -->
   <iframe
     src="https://view.officeapps.live.com/op/embed.aspx?src=https://SEUDOMINIO.com/assets/instrucoes/instrucoes-avaliacao-desempenho.pptx"
     frameborder="0"
     allowfullscreen>
   </iframe>
   ```

3. **Atualize o botão de download (linha ~527):**
   ```html
   <a href="./assets/instrucoes/instrucoes-avaliacao-desempenho.pptx" download>
   ```

⚠️ **IMPORTANTE:** Para visualizar PPTX local embutido, você precisa:
- Hospedar o site em um servidor web público (http/https)
- O Microsoft Office Online Viewer não funciona com `file://`

### Para Continuar Usando Google Slides:

**Nenhuma ação necessária!** Já está configurado e funcionando.

## 🆕 Atualização do Conteúdo

### Se estiver usando Google Slides:
1. Edite a apresentação no Google Slides
2. As alterações aparecem automaticamente no site
3. Não precisa fazer upload ou modificar código

### Se estiver usando arquivo local:
1. Substitua o arquivo PPTX na pasta `assets/instrucoes/`
2. Mantenha o mesmo nome do arquivo
3. Recarregue a página (Ctrl+F5) para ver as mudanças

## 📊 Estrutura da Pasta

```
assets/
└── instrucoes/
    ├── README.md (este arquivo)
    └── CAPACITAÇÃO AVALIAÇÃO DE DESEMPENHO SERVIDORES EFETIVOS 16-07.pptx
```

## 💡 Recomendação

**Recomendamos continuar usando Google Slides** porque:
- ✅ Já está funcionando perfeitamente
- ✅ Mais fácil de atualizar
- ✅ Melhor experiência para os usuários
- ✅ Não requer configuração de servidor

Mantenha o arquivo PPTX local como **backup**.

## 🔒 Permissões do Google Slides

Para que a apresentação funcione, ela deve estar configurada como:
- "Qualquer pessoa com o link pode visualizar"
- Link de compartilhamento ativo

## 📞 Suporte

Consulte os arquivos de documentação:
- `COMO_EXIBIR_PPTX.md` - Instruções detalhadas sobre visualização
- `INSTRUÇÕES_CANVA.md` - Documentação completa da seção

---

**Desenvolvido para a Prefeitura Municipal de Pedro Leopoldo**
