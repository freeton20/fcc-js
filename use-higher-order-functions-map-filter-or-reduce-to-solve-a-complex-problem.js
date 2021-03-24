const squareList = arr => {
  // Only change code below this line
  
  var arr = arr.filter((elem) => {
     return elem > 0 && elem%1 === 0;
  });
  
  arr = arr.map((elem)=>{
    return Math.pow(elem,2);
  })
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);