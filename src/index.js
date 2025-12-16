import { newDiv } from "./homePage.js"
const body = new newDiv("body")
body.addStyle("backgroundColor", "rgb(212, 217, 119)")




const homePage = new newDiv('#content')
homePage.addStyle("display", "flex")
homePage.addStyle("flex-direction", "column")
homePage.addStyle("align-items", "center")
homePage.addText("This is the homepage")
homePage.newElement('child')
body.newElement('centerBox')
homePage.addStyle("color","blue")

// const centerBox = new ('#centerBox')
// // centerBox.addStyle("display", "flex")
// centerBox.addText("This is the middle") 

const newPar = new newDiv('#child')
newPar.addText("Help me")
newPar.addStyle("align-items", "center")

