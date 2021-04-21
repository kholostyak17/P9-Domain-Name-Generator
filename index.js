const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const doms = ['.ces', '.org', '.net'];
let arrayDominios = [];

window.onload = () => {
    for (let index1 = 0; index1 < pronoun.length; index1++) {
        for (let index2 = 0; index2 < adj.length; index2++) {
            for (let index3 = 0; index3 < noun.length; index3++) {
                for (let index4 = 0; index4 < doms.length; index4++) {
                    let dominioCompleto = "";
                    console.log(dominioCompleto.concat(pronoun[index1], adj[index2], noun[index3], doms[index4]));
                    arrayDominios.push(dominioCompleto.concat(pronoun[index1], adj[index2], noun[index3], doms[index4]));
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