import { newDiv } from "./homePage.js"

const homePage = new newDiv('#content')
homePage.setText("This is the homepage")
homePage.newElement('child')

const newPar = new newDiv('#child')
newPar.setText("Help me")

