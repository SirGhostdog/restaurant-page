import { newDiv } from "./class.js"

export function aboutLoader() {

    const body = new newDiv("body")
    
        body.addStyle("backgroundColor", "rgb(212, 217, 119)")

    const content = new newDiv('#content')

        content.addStyle("display", "flex")
        content.addStyle("flex-direction", "column")
        content.addStyle("align-items", "center")
        content.addStyle("font-size", "32px")
        content.addStyle("color","rgb(0, 0, 0)")

        content.addText("Ghostdog's Dumpster Diner")

        content.newElement('centerBox')

    const centerBox = new newDiv('#centerBox')

        centerBox.addStyle("display", "flex")
        centerBox.addStyle("align-items", "center")
        centerBox.addStyle("justify-content", "center")
        centerBox.addStyle("text-align", "center")
        centerBox.addStyle("border", "1px black solid")
        centerBox.addStyle("color","rgb(210, 214, 76)")
        centerBox.addStyle("backgroundColor", "rgb(5, 105, 22)")
        centerBox.addStyle("width", "40%")
        
        centerBox.addStyle("padding", "12px")
        centerBox.addStyle("font-size", "22px")
        
        centerBox.newElement('centerText')

    const centerText= new newDiv('#centerText')

        centerText.addText("I created this website to learn about webpack and utilizing classes and modules. I created this menu with he help of my good friend, Max.   Hopefully a chef will use this menu as inspiration for a new restaurant.")
 
};


