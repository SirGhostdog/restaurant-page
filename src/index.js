import { homePageLoader } from "./homePage.js";
import { newDiv } from "./class.js";
import { menuLoader } from "./menu.js";

homePageLoader();

const pageContent = document.getElementById("content")

const home = document.getElementById("home");

home.addEventListener("click", function(){
    pageContent.replaceChildren()
    homePageLoader()
})

const menu = document.getElementById("menu");

menu.addEventListener("click", function(){
    pageContent.replaceChildren()
    menuLoader()
})

