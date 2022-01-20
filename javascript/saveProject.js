export const saveProject = () => {
    console.log('funcao ativada')
    const savedCards = JSON.parse(localStorage.getItem('cards')) || []
    const projectNameInput  = document.querySelector('.seuProjeto__nome')
    const projectDescriptionInput  = document.querySelector('.seuProjeto__descricao')
    const projectLanguageInput  = document.querySelector('.personalizacao__select')
    const projectColorInput  = document.querySelector('.input-color')
    const projectCodeInput  = document.querySelector('.editor__codigo')

    const projectName = projectNameInput.value
    const projectDescription = projectDescriptionInput.value
    const projectLanguage = projectLanguageInput.value
    const projectColor = projectColorInput.value
    const projectCode = projectCodeInput.innerText
    const likeCount = 0
    const commentCount = 0

    const cardData = {
        projectName,
        projectDescription,
        projectLanguage,
        projectColor,
        projectCode,
        likeCount,
        commentCount
    }

    const updatedCards = [...savedCards, cardData]

    localStorage.setItem('cards', JSON.stringify(updatedCards))

}