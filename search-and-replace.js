function myReplace(str, before, after) {
    function replacer(match){
        //check if 1 letter in upper case
        if(before.charAt(0) === before.charAt(0).toUpperCase()){
            after = after.charAt(0).toUpperCase() + after.slice(1);
        }else{
            after = after.toLowerCase();
        }
        return after;
    }
    return str.replace(before,replacer);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");