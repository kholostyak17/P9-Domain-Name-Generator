const verb = ['aprende', 'comparte', 'piensa', 'habla'];
const preposition = ['con', '', 'en', 'sobre'];
const substantive = ['profesor', 'dulc', 'pec', 'inter', 'calid'];
const domains = ['.es', '.net', '.ad'];


window.onload = () => {
    let arrayWebsite = [];
    let listElement;
    for (let index1 = 0; index1 < verb.length; index1++) {
        for (let index2 = 0; index2 < preposition.length; index2++) {
            for (let index3 = 0; index3 < substantive.length; index3++) {
                for (let index4 = 0; index4 < domains.length; index4++) {
                    let website = "";
                    let substDomain = substantive[index3].concat(domains[index4]);
                    let verbPrep = verb[index1].concat(preposition[index2]);
                    if (substDomain == 'profesor.es' || substDomain == 'dulc.es' || substDomain == 'pec.es' || substDomain == 'inter.net' || substDomain == 'calid.ad') {
                        if (verbPrep == 'aprendecon' || verbPrep == 'comparte' || verbPrep == 'piensaen' || verbPrep == 'hablasobre') {
                            console.log(website.concat(verb[index1], preposition[index2], substantive[index3], domains[index4]));
                            arrayWebsite.push(website.concat(verb[index1], preposition[index2], substantive[index3], domains[index4]));
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