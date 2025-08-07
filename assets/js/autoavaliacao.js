// Dados dos comportamentos
const comportamentos = [
  {
    id: 1,
    nome: "ASSIDUIDADE, PONTUALIDADE E DISCIPLINA",
    descricao: "refere-se ao compromisso com o cumprimento do horário de trabalho e com as normas vigentes na Prefeitura.",
    max_pontos: 10,
    criterios: [
      { id: 1, texto: "Chega ao trabalho no horário estabelecido.", peso: 1 },
      {
        id: 2,
        texto: "Comunica com antecedência à chefia e à equipe as ausências necessárias durante o horário de trabalho.",
        peso: 2
      },
      { id: 3, texto: "Tem conhecimento e cumpre as normas da Prefeitura e as demandas da chefia.", peso: 2 }
    ]
  },
  {
    id: 2,
    nome: "PRODUTIVIDADE E EFICÁCIA",
    descricao:
      "refere-se ao rendimento do trabalho em termos de quantidade e qualidade dos resultados esperados, utilizando o tempo e outros recursos disponíveis para melhor desempenho.",
    max_pontos: 10,
    criterios: [
      {
        id: 1,
        texto: "Realiza suas atividades com exigência e rigor, estando atento aos critérios de qualidade.",
        peso: 1
      },
      {
        id: 2,
        texto: "Gerencia os recursos disponíveis para a realização de suas atividades da melhor forma possível.",
        peso: 2
      },
      {
        id: 3,
        texto:
          "Conclui, em tempo hábil, todas as atividades que se envolve, seja as específicas de seu cargo como as de comissões, grupos de trabalho e outros, com o mesmo empenho e foco na qualidade.",
        peso: 2
      }
    ]
  },
  {
    id: 3,
    nome: "ATITUDE PROATIVA E AUTONOMIA",
    descricao:
      "refere-se a propostas de soluções e sugestões para situações ou problemas, por iniciativa própria, visando a melhoria efetiva do trabalho, desenvolvendo suas atividades de forma independente, mas articulada, sem a necessidade de orientação constante dos outros.",
    max_pontos: 10,
    criterios: [
      {
        id: 1,
        texto:
          "Age de forma preventiva e proativa em suas tarefas, de forma a evitar atrasos e agravamento de problemas e resgatando a experiência de seus colegas e superiores",
        peso: 2
      },
      {
        id: 2,
        texto: "Se comunica com seu superior imediato e propõe idéias para o melhor cumprimento dos objetivos da equipe.",
        peso: 1
      },
      {
        id: 3,
        texto: "Mostra-se disponível e atende a solicitações na participação em atividades/serviços, comissões de atividades administrativas e/ou pedagógica.",
        peso: 2
      }
    ]
  },
  {
    id: 4,
    nome: "APERFEIÇOAMENTO CONTÍNUO",
    descricao:
      "relaciona-se a aquisição de novos conhecimentos, atitudes e comportamentos necessários para o bom andamento das atividades e sua eficaz aplicação no ambiente laboral.",
    max_pontos: 15,
    criterios: [
      {
        id: 1,
        texto:
          "Demonstra interesse contínuo em desenvolver suas competências, buscando novos conhecimentos e aprimorando suas habilidades para melhorar seu desempenho.",
        peso: 1
      },
      {
        id: 2,
        texto: "Participa ativamente de capacitações, adapta-se a novas exigências da função e aplica boas práticas para agregar valor à organização.",
        peso: 1
      },
      {
        id: 3,
        texto: "Aplica novos conhecimentos adquiridos no trabalho, contribuindo para a inovação e a melhoria dos processos organizacionais.",
        peso: 1
      }
    ]
  },
  {
    id: 5,
    nome: "CAPACIDADE DE TRABALHO EM EQUIPE",
    descricao:
      "relaciona-se com a capacidade de desenvolver as atividades e tarefas em equipe, valorizando o trabalho em conjunto na busca de resultados comuns.",
    max_pontos: 10,
    criterios: [
      {
        id: 1,
        texto: "Contribui ativamente para um ambiente de trabalho harmonioso, respeitando diferentes opiniões e promovendo a integração da equipe.",
        peso: 2
      },
      {
        id: 2,
        texto: "Busca soluções conjuntas para desafios e incentiva um espírito de cooperação, garantindo o cumprimento eficiente das demandas.",
        peso: 1
      },
      {
        id: 3,
        texto: "Atua de forma alinhada às metas coletivas, garantindo que suas atividades e decisões contribuam para os resultados esperados.",
        peso: 2
      }
    ]
  },
  {
    id: 6,
    nome: "FOCO NAS NECESSIDADES DO USUÁRIO",
    descricao: "Capacidade de atuar de maneira eficiente frente às necessidades apresentadas pelo usuário.",
    max_pontos: 10,
    criterios: [
      {
        id: 1,
        texto: "Contribui significativamente para a imagem da qualidade dos serviços prestados pela Prefeitura.",
        peso: 2
      },
      {
        id: 2,
        texto: "Responde as demandas do usuário de forma tempestiva e com qualidade, de acordo com as necessidades específicas apresentadas.",
        peso: 1
      },
      {
        id: 3,
        texto: "Atende a todos com cordialidade, atenção e respeito, considerando as suas necessidades e/ou limitações.",
        peso: 2
      }
    ]
  },
  {
    id: 7,
    nome: "FLEXIBILIDADE",
    descricao: "Capacidade para trabalhar de forma flexível adaptando-se às diferentes situações para melhorar o seu desempenho.",
    max_pontos: 10,
    criterios: [
      { id: 1, texto: "Compreende a necessidade de execução de novas demandas e diretrizes recebidas.", peso: 1 },
      {
        id: 2,
        texto: "Adapta a novos contextos, interagindo com facilidade e rapidez às diversas situações.",
        peso: 2
      },
      {
        id: 3,
        texto: "Aceita as decisões tomadas pelos gestores frente a situações difíceis, colaborando com sugestões e alternativas.",
        peso: 2
      }
    ]
  },
  {
    id: 8,
    nome: "RELAÇÕES INTERPESSOAIS",
    descricao:
      "refere-se ao estabelecimento e manutenção de relações cordiais, pautadas no respeito com as distintas pessoas do órgão, contribuindo para a criação de um bom ambiente global de trabalho.",
    max_pontos: 10,
    criterios: [
      {
        id: 1,
        texto: "Mantém um comportamento respeitoso e cordial no ambiente de trabalho, demonstrando empatia ao interagir com colegas, superiores e parceiros.",
        peso: 1
      },
      {
        id: 2,
        texto: "Demonstra maturidade ao lidar com conflitos, promovendo o respeito mútuo e a cooperação entre os colegas.",
        peso: 2
      },
      { id: 3, texto: "Age de forma transparente contribuindo para um clima organizacional harmonioso.", peso: 2 }
    ]
  },
  {
    id: 9,
    nome: "COMPORTAMENTO ÉTICO",
    descricao:
      "refere-se a atitude pautada pelo respeito ao próximo, integridade, senso de justiça, impessoalidade nas ações e valorização do conceito de cidadania e do bem público.",
    max_pontos: 15,
    criterios: [
      {
        id: 1,
        texto:
          "Demonstra profissionalismo ao reconhecer e seguir a estrutura hierárquica da Prefeitura, acatando orientações e decisões de seus superiores de forma ética e respeitosa.",
        peso: 1
      },
      {
        id: 2,
        texto: "Comporta-se de forma a respeitar o próximo, mantendo o sigilo devido às informações que possam de alguma forma expor o outro.",
        peso: 1
      },
      {
        id: 3,
        texto: "Cumpre suas funções com dedicação e seriedade, respeitando normas, regulamentos e os valores institucionais da Prefeitura.",
        peso: 1
      }
    ]
  }
]

// Renderizar comportamentos
function renderizarComportamentos() {
  const container = document.getElementById("comportamentos-container")
  let html = ""

  comportamentos.forEach(comp => {
    html += `
                    <div class="comportamento">
                        <div class="comportamento-header">
                            <h4>${comp.id}. ${comp.nome}</h4>
                            <p>${comp.descricao}</p>
                        </div>
                `

    comp.criterios.forEach(crit => {
      html += `
                        <div class="criterio">
                            <span class="criterio-numero">${comp.id}.${crit.id}</span>
                            <span class="criterio-texto">${crit.texto}</span>
                            <input type="number" 
                                   class="criterio-nota" 
                                   id="nota_${comp.id}_${crit.id}"
                                   min="1" 
                                   max="5" 
                                   placeholder="1-5"
                                   onchange="calcularComportamento(${comp.id})"
                                   onkeyup="calcularComportamento(${comp.id})">
                        </div>
                    `
    })

    html += `
                        <div class="total-comportamento">
                            <span>Pontuação Máxima do Comportamento ${comp.max_pontos} pontos</span>
                            <span class="total-valor" id="total_comp_${comp.id}">0.0</span>
                        </div>
                    </div>
                `
  })

  container.innerHTML = html
}

function getIndice(p) {
  if (p < 60) return { valor: 5, label: "Insatisfatório" }
  if (p <= 69) return { valor: 4, label: "Regular" }
  if (p <= 79) return { valor: 3, label: "Satisfatório" }
  if (p <= 89) return { valor: 2, label: "Muito bom" }
  return { valor: 1, label: "Excelente" }
}

// Calcular comportamento individual
function calcularComportamento(compId) {
  const comp = comportamentos.find(c => c.id === compId)
  let total = 0
  let todasPreenchidas = true

  comp.criterios.forEach(crit => {
    const input = document.getElementById(`nota_${comp.id}_${crit.id}`)
    const nota = parseInt(input.value)

    if (nota >= 1 && nota <= 5) {
      total += nota * crit.peso
    } else {
      todasPreenchidas = false
    }
  })

  if (todasPreenchidas) {
    let totalNormalizado

    if (compId === 4 || compId === 9) {
      // Comportamentos 4 e 9: 3 critérios com peso 1 cada, escala 1-5
      totalNormalizado = (total / 15) * 15
    } else {
      // Outros comportamentos: normalizar para escala de 10 pontos
      const somaPesos = comp.criterios.reduce((sum, c) => sum + c.peso, 0)
      totalNormalizado = (total / (somaPesos * 5)) * comp.max_pontos
    }

    document.getElementById(`total_comp_${comp.id}`).textContent = totalNormalizado.toFixed(1)
  } else {
    document.getElementById(`total_comp_${comp.id}`).textContent = "0.0"
  }

  calcularTotalGeral()
}

// Calcular total geral
function calcularTotalGeral() {
  let totalGeral = 0
  comportamentos.forEach(comp => {
    const v = parseFloat(document.getElementById(`total_comp_${comp.id}`).textContent) || 0
    totalGeral += v
  })

  const perc = totalGeral
  document.getElementById("total-geral").textContent = totalGeral.toFixed(1)
  document.getElementById("percentual").textContent = perc.toFixed(1) + "%"

  const idx = getIndice(perc)
  document.getElementById("indice").textContent = `${idx.valor} – ${idx.label}`
}

// Validar entrada
document.addEventListener("input", function (e) {
  if (e.target.type === "number") {
    const value = parseInt(e.target.value)
    if (value < 1) e.target.value = 1
    if (value > 5) e.target.value = 5
  }
})

// Função para baixar PDF
function baixarPDF() {
  // Mostra loading
  document.getElementById("loading").classList.add("show")

  setTimeout(() => {
    // Scroll para o topo antes de gerar o PDF
    window.scrollTo(0, 0)

    // Pega o elemento para converter
    const element = document.getElementById("formulario-container")

    // Configurações otimizadas
    const opt = {
      margin: [10, 10, 10, 10], // margens em mm
      filename: "autoavaliacao_desempenho.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        logging: false,
        scrollX: 0,
        scrollY: 0,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        compress: true
      },
      pagebreak: {
        mode: ["avoid-all", "css", "legacy"],
        avoid: [".comportamento", ".secao", ".resultado-final", ".assinaturas"]
      }
    }

    // Cria um clone para manipulação
    const clone = element.cloneNode(true)

    // Remove botões
    const botoes = clone.querySelector(".botoes-acao")
    if (botoes) botoes.remove()

    // Processa todos os inputs
    clone.querySelectorAll("input").forEach(input => {
      const replacement = document.createElement("span")
      replacement.style.display = "inline-block"

      if (input.type === "date") {
        if (input.value) {
          const date = new Date(input.value + "T12:00:00")
          replacement.textContent = date.toLocaleDateString("pt-BR")
        } else {
          replacement.innerHTML = "___/___/_____"
        }
        replacement.style.borderBottom = "1px solid #333"
        replacement.style.minWidth = "90px"
        replacement.style.textAlign = "center"
        replacement.style.paddingBottom = "2px"
      } else if (input.type === "number") {
        replacement.textContent = input.value || "—"
        replacement.style.border = "1px solid #999"
        replacement.style.width = "40px"
        replacement.style.textAlign = "center"
        replacement.style.padding = "2px"
        replacement.style.fontWeight = "bold"
      } else {
        if (input.value) {
          replacement.textContent = input.value
        } else {
          // Cria linha para campos vazios
          const width = input.offsetWidth || 200
          replacement.innerHTML = "&nbsp;".repeat(Math.floor(width / 8))
          replacement.style.borderBottom = "1px solid #333"
        }
        replacement.style.minWidth = (input.offsetWidth || 200) + "px"
        replacement.style.paddingBottom = "2px"
      }

      input.parentNode.replaceChild(replacement, input)
    })

    // Ajusta largura para A4
    clone.style.width = "190mm"
    clone.style.margin = "0 auto"
    clone.style.background = "white"
    clone.style.padding = "0"
    clone.style.boxShadow = "none"

    // Adiciona o clone temporariamente ao body visível para garantir renderização completa
    const tempDiv = document.createElement("div")
    tempDiv.style.position = "fixed"
    tempDiv.style.top = "0"
    tempDiv.style.left = "0"
    tempDiv.style.width = "210mm"
    tempDiv.style.height = "297mm"
    tempDiv.style.overflow = "auto"
    tempDiv.style.background = "white"
    tempDiv.style.zIndex = "10000"
    tempDiv.appendChild(clone)
    document.body.appendChild(tempDiv)

    // Pequeno delay para garantir renderização completa
    setTimeout(() => {
      // Gera o PDF a partir do clone renderizado
      html2pdf()
        .from(clone)
        .set(opt)
        .save()
        .then(() => {
          // Remove o elemento temporário
          document.body.removeChild(tempDiv)
          // Esconde loading
          document.getElementById("loading").classList.remove("show")
        })
        .catch(error => {
          console.error("Erro ao gerar PDF:", error)
          document.body.removeChild(tempDiv)
          document.getElementById("loading").classList.remove("show")
          alert("Erro ao gerar o PDF. Por favor, tente novamente.")
        })
    }, 500)
  }, 100)
}

// Função para nova avaliação
function novaAvaliacao() {
  if (confirm("Deseja limpar todos os campos e começar uma nova avaliação?")) {
    // Limpar todos os inputs
    document.querySelectorAll("input").forEach(input => {
      input.value = ""
    })

    // Recalcular totais
    comportamentos.forEach(comp => {
      document.getElementById(`total_comp_${comp.id}`).textContent = "0.0"
    })

    // Zerar total geral
    document.getElementById("total-geral").textContent = "0.0"
    document.getElementById("percentual").textContent = "0.0%"
    document.getElementById("indice").textContent = "–"

    // Voltar ao topo
    window.scrollTo(0, 0)

    // Focar no primeiro campo
    document.getElementById("nome").focus()
  }
}

// Inicializar
renderizarComportamentos()
