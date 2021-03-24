function truthCheck(collection, pre) {
    return collection.every(function(el){
        return el[pre] && el[pre] !== 0;
    });    
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");