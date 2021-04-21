let pronoun = ['the', 'our', 'under',''];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let doms = ['.com','.es','.pl','.org','.net'];
for (let index1 = 0; index1 < pronoun.length; index1++) {
    for (let index2 = 0; index2 < adj.length; index2++) {
        for (let index3 = 0; index3 < noun.length; index3++) {
            for (let index4 = 0; index4 < doms.length; index4++) {
               console.log(pronoun[index1].concat(adj[index2].concat(noun[index3].concat(doms[index4]))));           
            }           
        }
    }
}

