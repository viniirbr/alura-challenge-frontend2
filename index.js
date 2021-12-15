const border = document.querySelector('.fundo-editor')
const input = document.querySelector('.input-color')

setColor()
input.addEventListener('input', setColor)

function setColor() {
  border.style.background = input.value
}