import { homePageLoader } from "./homePage.js";
import { menuLoader } from "./menu.js";
import { aboutLoader } from "./about.js";

homePageLoader();

const pageContent = document.getElementById("content");

const home = document.getElementById("home");

home.addEventListener("click", function(){
    pageContent.replaceChildren()
    homePageLoader()
});

const menu = document.getElementById("menu");

menu.addEventListener("click", function(){
    pageContent.replaceChildren()
    menuLoader()
});

const about = document.getElementById("about");

about.addEventListener("click", function(){
    pageContent.replaceChildren()
    aboutLoader()
})


