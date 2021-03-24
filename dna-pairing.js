function pairElement(str) {
    let DNA = {
        G:"C",
        C:"G",
        A:"T",
        T:"A"
    }
    let dnaArray = str.split("");
    let dnaPairs = [];
    dnaArray.forEach(function (el){
        dnaPairs.push([el, DNA[el]]);
    });
    return dnaPairs;
}

pairElement("GCG");