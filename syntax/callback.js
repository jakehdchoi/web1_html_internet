function a(){
    console.log('A');
}

var b = function(){
    console.log('A');
}

a();
b();

function slowfunc(callback){
    callback();
}

slowfunc(b); // A
