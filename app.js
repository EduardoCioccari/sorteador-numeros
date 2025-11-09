function sortear() {
  // Buscando o valor do input no HTML e armazenando em uma variável.
  let quantidade = parseInt(document.getElementById("quantidade").value)
  let de = parseInt(document.getElementById("de").value)
  let ate = parseInt(document.getElementById("ate").value)

  // Erro se o número da variável 'de' for maior ou igual a variável 'ate'
  if (de >= ate) {
    alert("Erro: número inicial maior do que o final")

    return
  }

  // Erro caso o intervalo não tiver números suficientes para gerar a quantidade definida
  let diferencaNumerosEscolhidos = ate - de + 1

  if (quantidade >= diferencaNumerosEscolhidos) {
    alert("Erro: sem números suficientes para gerar a quantidade definida")

    return
  }

  // Utilizando loop for para gerar a quantidade de números aleatórios que o usuário quiser.
  let numero
  let sorteados = []

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate)

    // Evitando que tenham números repetidos. Enquanto um numero gerado for igual a um que já está no array, será gerado outro número.
    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate)
    }

    sorteados.push(numero)
  }
  // Imprimindo os números na tela do usuário.
  let resultado = document.getElementById("resultado")
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`

  // Depois de finalizado o jogo é liberado o uso do botão reiniciar.
  alterarStatusBotao()
}

// Função para gerar um número aleatório entre os parâmetros min e max.
function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function alterarStatusBotao() {
  let botao = document.getElementById("btn-reiniciar")

  // Se neste botao tivermos esta class, vamos remove-la e substituiremos por outra.
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado")
    botao.classList.add("container__botao")
  } else {
    botao.classList.remove("container__botao")
    botao.classList.add("container__botao-desabilitado")
  }
}

// Botão reinicio
function reiniciar() {
  // Limpa todos os campos (inputs) preenchidos quando clicamos no botão reiniciar.
  document.getElementById("quantidade").value = ""
  document.getElementById("de").value = ""
  document.getElementById("ate").value = ""
  // Devolve o valor original desta label, sem nenhum número retornado.
  document.getElementById("resultado").innerHTML =
    '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label></div>'
  // Função que neste contexto de reinicio vai inativar o botão reiniciar.
  alterarStatusBotao()
}
