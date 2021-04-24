const word1 = ['aprende', 'comparte', 'piensa', 'habla'];
const word2 = ['con', '', 'en', 'sobre'];
const word3 = ['profesor', 'dulc', 'pec', 'inter', 'calid'];
const domains = ['.es', '.net', '.ad'];


window.onload = () => {
    let arrayWebsite = [];
    let listElement;
    for (let index1 = 0; index1 < word1.length; index1++) {
        for (let index2 = 0; index2 < word2.length; index2++) {
            for (let index3 = 0; index3 < word3.length; index3++) {
                for (let index4 = 0; index4 < domains.length; index4++) {
                    let website = "";
                    let word3domain = word3[index3].concat(domains[index4]);
                    let word12 = word1[index1].concat(word2[index2]);
                    if (word3domain == 'profesor.es' || word3domain == 'dulc.es' || word3domain == 'pec.es' || word3domain == 'inter.net' || word3domain == 'calid.ad') {
                        if (word12 == 'aprendecon' || word12 == 'comparte' || word12 == 'piensaen' || word12 == 'hablasobre') {
                            console.log(website.concat(word1[index1], word2[index2], word3[index3], domains[index4]));
                            arrayWebsite.push(website.concat(word1[index1], word2[index2], word3[index3], domains[index4]));
                        }

                    }

                }
            }
        }
    }
    for (let element = 0; element < arrayWebsite.length; element++) {
        listElement = document.createElement('li');
        listElement.innerHTML = arrayWebsite[element];
        document.querySelector('ul').appendChild(listElement);
    }
} 