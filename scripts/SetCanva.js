
import Palla from "./Palla.js";

export default class SetCanva{
    constructor(){
    //seleziono la cava dall'Html
    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // qui creo l'oggetto conesto che mi fa lavorare in due D
    const c = canvas.getContext("2d");
    
}

divisione(){
    let palla = new Palla(270)
    palla.divisione("spostaTO SOTTO")
    // palla.  
    }

}





