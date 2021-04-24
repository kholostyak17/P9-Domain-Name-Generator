const word1 = ['aprende', 'comparte'];
const word2 = ['con', ''];
const word3 = ['profesor', 'dulc', 'pec', 'inter', 'calid'];
const domains = ['.es', '.net', '.ad'];
let arrayWebsite = [];

window.onload = () => {
    for (let index1 = 0; index1 < word1.length; index1++) {
        for (let index2 = 0; index2 < word2.length; index2++) {
            for (let index3 = 0; index3 < word3.length; index3++) {
                for (let index4 = 0; index4 < domains.length; index4++) {
                    let dominioCompleto = "";
                    let finalword = word3[index3].concat(domains[index4]);
                    let verb = word1[index1].concat(word2[index2]);
                    if (finalword == 'profesor.es' || finalword == 'dulc.es' || finalword == 'pec.es' || finalword == 'inter.net' || finalword == 'calid.ad') {
                        if (verb == 'aprendecon' || verb == 'comparte') {
                            console.log(dominioCompleto.concat(word1[index1], word2[index2], word3[index3], domains[index4]));
                            arrayWebsite.push(dominioCompleto.concat(word1[index1], word2[index2], word3[index3], domains[index4]));
                        }

                    }

                }
            }
        }
    }
    console.log('este es el array completo', arrayWebsite);
    for (let elementos = 0; elementos < arrayWebsite.length; elementos++) {
        let stringparrafo = ""
        document.querySelector("#body").innerHTML += stringparrafo.concat('<p id="', elementos, '">', arrayWebsite[elementos], '</p>');
    }

} 