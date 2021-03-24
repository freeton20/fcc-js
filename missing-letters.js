function fearNotLetter(str) {
    let abc = "abcdefghijklmnopqrstuvwxyz";
    let index = abc.indexOf(str.charAt(0));
    abc = abc.slice(index);
    for(let i = 0; i < str.length; i++){
        if(str[i] !== abc[i]){
            return abc[i];
        }
    }
    return undefined;
}

fearNotLetter("abce");