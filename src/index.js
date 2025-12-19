import { homePageLoader } from "./homePage.js";
import { newDiv } from "./class.js";
import { menuLoader } from "./menu.js";

homePageLoader();

const body = new newDiv('body')
    body.switchPage("click", homePageLoader)
    body.switchPage("click", menuLoader)

