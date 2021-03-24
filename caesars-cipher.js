function rot13(str) {
    return str.split("").reduce(function(sum, el){
        let code = el.charCodeAt(0);
        switch (true) {
            case (code > 77 && code < 91):
                sum +=String.fromCharCode(code - 13);
                break;
            case (code > 64 && code < 78):
                sum += String.fromCharCode(90 + code - 13 - 64);
                break;
            default:
                sum +=el;
        }
        return sum;
    },"");
}

rot13("SERR PBQR PNZC");