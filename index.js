const verbo = ['compra', 'regala', 'comparte'];
const pronombre = ['tus', 'mis'];
const sustantivo = ['cancion', 'pec', 'video'];
const dominios = ['.es', '.os'];
let arrayDominios = [];

window.onload = () => {
    for (let index1 = 0; index1 < verbo.length; index1++) {
        for (let index2 = 0; index2 < pronombre.length; index2++) {
            for (let index3 = 0; index3 < sustantivo.length; index3++) {
                for (let index4 = 0; index4 < dominios.length; index4++) {
                    let dominioCompleto = "";
                    console.log(dominioCompleto.concat(verbo[index1], pronombre[index2], sustantivo[index3], dominios[index4]));
                    arrayDominios.push(dominioCompleto.concat(verbo[index1], pronombre[index2], sustantivo[index3], dominios[index4]));
                }
            }
        }
    }
    console.log('este es el array completo', arrayDominios);
    for (let elementos = 0; elementos < arrayDominios.length; elementos++) {
        let stringparrafo = ""
        document.querySelector("#body").innerHTML += stringparrafo.concat('<p id="', elementos, '">', arrayDominios[elementos], '</p>');
    }

} 