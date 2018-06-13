// array, object, function
// function = statement and value

var f = function(){
  console.log(1+1);
  console.log(1+2);
}
console.log(f); // [Function: f]
f(); // 2, 3

var array = [f];
array[0](); // =f();

var object = {
  func:f
}
object.func(); // =f();
