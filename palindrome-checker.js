function palindrome(str) {
    str = str.replaceAll(/[^A-Za-z0-9]/g,'');
    str = str.toLowerCase();
    let reversedStr = str.split("").reverse().join("");
    
    return str === reversedStr;
}



palindrome("A man, a plan, a canal. Panama");