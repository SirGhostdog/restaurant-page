import { newDiv } from "./class.js"

export function menuLoader() {

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
        centerBox.addStyle("flex-direction", "column")
        centerBox.addStyle("align-items", "center")
        centerBox.addStyle("justify-content", "center")
        centerBox.addStyle("border", "1px black solid")
        centerBox.addStyle("color","rgb(210, 214, 76)")
        centerBox.addStyle("backgroundColor", "rgb(5, 105, 22)")
        centerBox.addStyle("width", "40%")
    
        centerBox.addStyle("font-size", "22px")
        
        centerBox.newElement('centerText')

    const centerText = new newDiv('#centerText')

        centerText.addText("Menu")
        centerText.addStyle("text-decoration", "underline")
        centerText.addStyle("font-size", "32px")
        centerText.addStyle('margin', '12px')
        centerText.newSibling('firstItem')

    const firstItem = new newDiv('#firstItem')
        firstItem.addText("Collard Seaweed")
        firstItem.newSibling('secondItem')

    const secondItem = new newDiv('#secondItem')
        secondItem.addText("Tempura Goat Cheese Sticks w/ Ketchup")
        secondItem.newSibling('thirdItem')

    const thirdItem = new newDiv('#thirdItem')
        thirdItem.addText("BBQ Spaghetti w/ Swedish Meatballs")
        thirdItem.newSibling("fourthItem")

    const fourthItem = new newDiv('#fourthItem')
        fourthItem.addText("Curry Hotdog")
        fourthItem.newSibling("fifthItem")
    
    const fifthItem = new newDiv('#fifthItem')
        fifthItem.addText('Chimichanga w/ Choc Pudding, Gummy Bears, and Habanero Salsa')
        fifthItem.addStyle('margin-bottom', '12px')
 
}