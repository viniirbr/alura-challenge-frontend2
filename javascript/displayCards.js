import { Card } from "./Card.js";

export const displayCards = () => {
    const cards = JSON.parse(localStorage.getItem('cards')) || []
    const projects = document.querySelector('.projetos')
    
    cards.forEach((card, id) => {
        projects.appendChild(Card(card, id))
        console.log(id)
    });
}

displayCards()