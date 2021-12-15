const border = document.querySelector('.fundo-editor')
const inputColor = document.querySelector('.input-color')

setColor()
inputColor.addEventListener('input', setColor)

function setColor() {
  border.style.background = inputColor.value
}

const linguagem = document.querySelector('.personalizacao-select')
const areaCodigo = document.querySelector('.codigo-wrapper')
const botao = document.querySelector('.botao-visualizarMarcacao')

function aplicarHighlight() {
	const codigo = areaCodigo.innerText
	areaCodigo.innerHTML = `<code class="editor-codigo hljs ${linguagem.value}" contenteditable="true"></code>`
	areaCodigo.querySelector('code').textContent = codigo
	hljs.highlightElement(areaCodigo.querySelector('code'))
	console.log("clicou")
}

botao.addEventListener('click', ()=> {
	aplicarHighlight()
})