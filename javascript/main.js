import { saveProject } from "./saveProject.js"

const border = document.querySelector('.editor__fundo')
const inputColor = document.querySelector('.input-color')
const saveButton = document.querySelector('.botao-salvar')

setColor()
inputColor.addEventListener('input', setColor)

function setColor() {
  border.style.background = inputColor.value
}

const linguagem = document.querySelector('.personalizacao__select')
const areaCodigo = document.querySelector('.editor__wrapper')
const botao = document.querySelector('.botao-visualizarMarcacao')

function aplicarHighlight() {
	const codigo = areaCodigo.innerText
	areaCodigo.innerHTML = `<code class="editor__codigo hljs ${linguagem.value}" contenteditable="true"></code>`
	areaCodigo.querySelector('code').textContent = codigo
	hljs.highlightElement(areaCodigo.querySelector('code'))
	console.log(linguagem.value)
}

botao.addEventListener('click', ()=> {
	aplicarHighlight()
})

saveButton.addEventListener('click', saveProject)

