var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return firstAndLast;
  };
  this.getFirstName = function() {
    return firstAndLast.split(' ')[0];
  };
  this.setFirstName = function(value) {
    firstAndLast = `${value} ${this.getLastName()}`;
  };
  this.getLastName = function() {
    return firstAndLast.split(' ')[1];
  };
  this.setLastName = function(value) {
    firstAndLast = `${this.getFirstName()} ${value}`;
  };
  this.setFullName = function(value) {
    firstAndLast = value;
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
