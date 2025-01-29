import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"
    
    for (const celebrity of celebrities) {
        html += `<li 
        data-id="${celebrity.id}" 
        data-name="${celebrity.name}"
        data-type="celebrity"
        data-sport="${celebrity.sport}"
        id="star--${celebrity.id}">
        ${celebrity.name}
        </li>`
    }
    
    html += "</ol>"
    return html
}

document.addEventListener(
    'click',
    (event) => {
        const {name,type,sport} = event.target.dataset

        if ( type === 'celebrity') { 
            window.alert(`${name} is a ${sport.toLowerCase()} star.`)
        }
    }
)