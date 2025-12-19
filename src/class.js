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

    newElement (id) {
        const newDiv = document.createElement('div')

        newDiv.id = id
        if (this.element) {
            this.element.appendChild(newDiv)
        }
        
        return this
    }

    addStyle(styleName, attribute) {

        this.element.style[styleName] =  attribute
        
    }

    switchPage(eventType, callback){
        if (this.element) {
            this.element.addEventListener(eventType, callback)
        }
        return this;
    }
}

export { newDiv }