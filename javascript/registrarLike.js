const like = document.querySelectorAll('.like')

like.forEach(function (elem) {
  let foiCurtido = false

  elem.addEventListener('click', function () {
    const contagem = elem.querySelector('.like__contagem')
    const icone = elem.querySelector('.like__icone')

    let contador = Number(contagem.innerText)

    if (foiCurtido) {
      contagem.innerText = contador - 1
      icone.src = 'img/favorite_icon.svg'
      foiCurtido = false
    } else {
      contagem.innerText = contador + 1
      icone.src = 'img/favorite_icon_toggle.svg'
      foiCurtido = true
    }
  })
})