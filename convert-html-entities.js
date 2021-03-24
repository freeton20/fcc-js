function replacer(match){
    let HTMLentities = {
        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        '"': "&quot;",
        "'": "&apos;"
    }
    return HTMLentities[match];
}
function convertHTML(str) {
    return str.replaceAll(/[&<>"']/g, replacer);
}

convertHTML("Dolce & Gabbana");