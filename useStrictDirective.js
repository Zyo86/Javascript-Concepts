x = 10;
console.log(x);
delete x;
//variables can be deleted in normal mode
console.log(this.x); // this given undefined

(function(){
"use strict";
var xx = 11;
console.log(x);
// delete xx;
//variables can not be deleted in strict mode
//this given error
console.log(xx);  
})();

// in normal mode any variable can be created without declaring it
//It creates a variable in global scope
y = 3.14;

console.log(y);
console.log(this.y);

(function () {
  'use strict';
  var pi = 3.14;
  console.log(pi, 'pi');
  // this is throwing error as we have not declared the pi variable
})();


//eval function in normal and strict mode

//normal mode

var x = 10;

eval("var x = 100;")

console.log(x)

//Here it gives x value 100

function evalTest(){
  "use strict";
  var y = 11;
  eval("var y = 110;console.log(y + ' = y inside eval')"); //inside eval gives value 110
  console.log(y);//Here it gives y value 11
}

evalTest();


// In strict mode function parameter names must be unique, normal mode does not need that

function sumInNormalMode(a,a,b){
  console.log(a+a+b); // still works
}

sumInNormalMode(1,2,3)


function sumInStrictMode(a,a,b){
  "use strict";
  console.log(a+a+b); // does not work, throws syntax error "SyntaxError: Duplicate parameter name not allowed in this context
}

sumInStrictMode(1,2,3)