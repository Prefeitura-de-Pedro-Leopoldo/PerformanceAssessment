# 📋 Guia de Comandos de Build

## 🔨 Comandos Principais

### **Desenvolvimento**
```bash
npm run dev
```
- Abre servidor em: `http://localhost:3000`
- Hot reload ativado
- Arquivos **NÃO** são minificados
- Perfeito para desenvolvimento

---

### **Build SEM Minificação** ⭐
```bash
npm run build
```

**Resultado em `dist/`:**
```
dist/
├── index.html              (formatado, legível)
├── assets/
│   ├── css/
│   │   └── main.css       (1 arquivo, NÃO minificado)
│   ├── js/
│   │   └── main.js        (1 arquivo, NÃO minificado)
│   └── img/
│       └── brasao.png
```

**Características:**
- ✅ **1 HTML** - limpo e legível
- ✅ **1 CSS** - todos os CSS combinados, formatado
- ✅ **1 JS** - todos os módulos combinados, formatado
- ✅ **Código legível** - fácil de debugar
- ✅ **Comentários preservados**
- ✅ **Indentação mantida**

---

### **Build COM Minificação** ⚡
```bash
npm run build:min
```

**Resultado em `dist/`:**
```
dist/
├── index.html              (minificado, 1 linha)
├── assets/
│   ├── css/
│   │   └── main.min.css   (1 arquivo, minificado)
│   ├── js/
│   │   └── main.min.js    (1 arquivo, minificado)
│   └── img/
│       └── brasao.png
```

**Características:**
- ✅ **1 HTML** - minificado
- ✅ **1 CSS** - todos os CSS combinados e minificados
- ✅ **1 JS** - todos os módulos combinados e minificados
- ✅ **Tamanho reduzido** - ~70% menor
- ✅ **Otimizado para produção**
- ⚠️ **Difícil de debugar** - código compactado

---

### **Preview (Testar Build)**
```bash
npm run preview
```
- Abre servidor em: `http://localhost:4173`
- Serve os arquivos da pasta `dist/`
- Use após `npm run build` ou `npm run build:min`

---

### **Limpar Tudo**
```bash
npm run clean
npm install
```
- Remove `dist/` e `node_modules/`
- Reinstala dependências

---

## 📊 Comparação de Tamanhos

### **Build SEM Minificação** (`npm run build`)
```
index.html    →  15 KB  (formatado)
main.css      →  12 KB  (formatado)
main.js       →  45 KB  (formatado)
─────────────────────────
Total         →  72 KB
```

### **Build COM Minificação** (`npm run build:min`)
```
index.html    →   8 KB  (minificado)
main.min.css  →   5 KB  (minificado)
main.min.js   →  18 KB  (minificado)
─────────────────────────
Total         →  31 KB  (57% menor!)
```

---

## 🎯 Quando Usar Cada Comando?

| Situação | Comando | Por quê? |
|----------|---------|----------|
| **Desenvolvimento** | `npm run dev` | Hot reload, fácil debug |
| **Testar build local** | `npm run build` + `npm run preview` | Ver resultado final legível |
| **Deploy para homologação** | `npm run build` | Código legível para debug |
| **Deploy para produção** | `npm run build:min` | Menor tamanho, mais rápido |
| **Debug de produção** | `npm run build` | Código legível mesmo em prod |

---

## 🔍 Como Verificar o Resultado

### **1. Ver tamanhos dos arquivos**
```bash
npm run build
ls -lh dist/assets/css/
ls -lh dist/assets/js/
```

### **2. Ver conteúdo do HTML**
```bash
# Sem minificação (legível)
cat dist/index.html

# Com minificação (1 linha)
cat dist/index.html
```

### **3. Testar no navegador**
```bash
npm run preview
# Abre http://localhost:4173
```

---

## ✅ Garantias

Ambos os builds (`build` e `build:min`) geram:
- ✅ **1 arquivo HTML**
- ✅ **1 arquivo CSS** (todos os @imports combinados)
- ✅ **1 arquivo JS** (todos os módulos combinados)
- ✅ **Funcionalidade idêntica**
- ✅ **Visual idêntico**

A única diferença é o **tamanho** e **legibilidade** do código!