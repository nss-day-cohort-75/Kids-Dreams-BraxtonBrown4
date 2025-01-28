import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"
    
    for (const child of children) {
        html += `<li data-name="${child.name}" data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }
    
    html += "</ol>"
    return html
}

document.addEventListener(
    'click',
    (onClick) => {
        const clickedData = onClick.target.dataset
        if (clickedData.type === 'child') {
            window.alert(`${clickedData.name} wish is ${clickedData.wish}`)
        }
    }
)

