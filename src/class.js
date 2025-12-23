class newDiv {

    constructor(selector) {
        this.element = document.querySelector(selector)
    }

    addText(text) {

        if (this.element) {
            this.element.textContent = text
        }

        return this;
    }

    newElement(id) {
        const newDiv = document.createElement('div')

        newDiv.id = id
        if (this.element) {
            this.element.appendChild(newDiv)
        }
        
        return this
    }

    newSibling(id) {
        const newSibling = document.createElement('div')

        newSibling.id = id
        if (this.element) {
            this.element.insertAdjacentElement('afterend', newSibling)
        }
    }

    addStyle(styleName, attribute) {

        if(this.element){
            this.element.style[styleName] =  attribute
        }
        
        return this
        
    }

}

export { newDiv }