function sumFibs(num) {
    let a = 0;
    let b = 1;
    let c;
    let sum = 0;
    while(b <= num){
        if(b%2 !== 0){
            sum +=b;
        }
        c = b;
        b = a + b;
        a = c
    }
    return sum;
}
sumFibs(4);