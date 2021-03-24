var Person = function(firstAndLast) {
    // Only change code below this line  

    this.getFirstName = function(){
        if(this.FirstName){
          return this.FirstName;
        }
        let arr = firstAndLast.split(" ");
        return arr[0];            
    }
    this.getLastName = function(){
        if(this.LastName){
          return this.LastName;
        }
        let arr = firstAndLast.split(" ");
        return arr[1]; 
    }
    this.getFullName = function(){
      return this.getFirstName() + ' ' + this.getLastName();
    }
    this.setFirstName = function(FirstName){
      this.FirstName = FirstName;
    }
    this.setLastName = function(LastName){
      this.LastName = LastName;
    }
    this.setFullName = function(firstAndLast){
       let arr = firstAndLast.split(" ");
       this.FirstName = arr[0];
       this.LastName = arr[1];
    }
};

var bob = new Person('Bob Ross');
bob.setFullName("Haskell Curry")
console.log(bob.getFullName());