class newDiv {

    constructor(selector) {
        this.element = document.querySelector(selector)
    }

    setText(text) {

        if (this.element) {
            this.element.textContent = text
        }

        return this;
    }

    newElement (id, parent) {
        const newDiv = document.createElement('div')

        newDiv.id = id
        if (this.element) {
            this.element.appendChild(newDiv)
            console.log("success `${id}`")
        }
        
        return this
    }

    // addStyle ()

    switchPage(eventType, callback){
        if (this.element) {
            this.element.addEventListener(eventType, callback)
        }
        return this;
    }
}

export { newDiv }