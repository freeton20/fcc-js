function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
    arr = collection.filter(function (obj) {
        for(let sourceProp in source) {
            if (!obj.hasOwnProperty(sourceProp) || source[sourceProp] !== obj[sourceProp]) {
                    return false;
               }            
        }
        return true;
    });

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });