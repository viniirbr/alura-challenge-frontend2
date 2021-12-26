const cabecalhoMenuBotao = document.querySelector(".cabecalho__menu-botao")
const sidebar = document.querySelector(".sidebar")

cabecalhoMenuBotao.addEventListener('click', ()=> {
    sidebar.classList.toggle('active')
    cabecalhoMenuBotao.classList.toggle('close')
})

const pesquisaBotao = document.querySelector(".cabecalho__pesquisar-botao")
const pesquisaInput = document.querySelector(".cabecalho__pesquisa-input")

pesquisaBotao.addEventListener('click', ()=> {
    pesquisaBotao.style.display = 'none'
    pesquisaInput.style.display = 'block'
})



