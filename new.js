var a = 1;
var b = 2;
var c = 3;

var firstFunction = function(){

  console.log(a,b,c);
  
  var secondScope = function(){
    var a = 7;
    var b = 8;
    var c = 9;

    console.log(a,b,c);
  }

  secondScope()

}

firstFunction()