
import Palla from "./Palla.js";

export default class SetCanva{
    constructor(){
    //seleziono la cava dall'Html
    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // qui creo l'oggetto conesto che mi fa lavorare in due D
    const c = canvas.getContext("2d");
    const posy = canvas.height/2
    const posx = canvas.width/2
    const palla = new Palla(270, posx, posy)

}

mitosi(){}
    // console.log(palla);
}
