function dropElements(arr, func) {
    let trigger = false;
    arr = arr.filter(function(n){
        if(trigger){
            return true;
        }
      if(func(n)){
          trigger = true;
          return true;
      }
    });
    return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });