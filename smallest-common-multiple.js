function smallestCommons(arr) {
    arr = arr.sort(function (a,b){return a - b;})
    function checker(number){
        for(let i = arr[0]; i<=arr[1]; i++){
            if(number%i !== 0){
                return false;
            }
        }
        return true;
    }
    let number = 1;
    while(checker(number) === false){
        number++;
    }
    return number;
}


smallestCommons([1,5]);