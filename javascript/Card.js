export const Card = ({ projectName, projectDescription, projectLanguage, projectColor, projectCode, likeCount, commentCount }, id) => {
    const card = document.createElement('li')
    card.classList.add('projeto__item')
    const content = `
    <div class="codigo-container" style="background-color: ${projectColor};"}>
        <div class="projeto__editor">
            <div class="mac">
            <img class="mac-img" src="img/mac_buttons.svg" alt="Botões do Mac">
            </div>
            <div class="editor__wrapper">
                <pre><code class="editor__codigo hljs ${projectLanguage}">
                ${projectCode}
            </code></pre>	
            </div>
        </div>		
        </div>
    </div>
    <div class="info-projeto">
        <h2 class="titulo-projeto"> ${projectName}</h2>
        <p class="descricao-projeto">${projectDescription}</p>
    </div>
    <div class="social-projeto">
        <div class="comment-like">
            <div class="comment">
                <i class="fas fa-comment"></i>
                <p class="comment-count">${commentCount}</p>
            </div>	
            <div class="like">
                <img class="like__icone" src="img/favorito-icone.svg">
                <p class="like__contagem">${likeCount}</p>
            </div>	
            <div class="exportar">	
                <i class="fas fa-download"></i>
                <p class="exportar-title">Exportar</p>
            </div>						
        </div>	
        <div class="usuario">	
            <img class="foto-perfil-mini" src="img/foto-perfil-mini.svg">
            <p class="id-usuario">@Harry</p>
        </div>	
    </div>
    </div>
`
card.innerHTML = content
return card
}