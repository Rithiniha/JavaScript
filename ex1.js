function A(callback) {
    setTimeout(() => { console.log("1");
        callback();
  }, 3000);}
function B(callback){
    setTimeout(() => {console.log("2");
        callback();
  }, 2000);}
function C() {
    setTimeout(() => { console.log("3");
  }, 1000);}
function final(A1,B1,C1) {
  if ( typeof A1==="function" && typeof B1==="function" && typeof C1=== "function"){
   A1(() => {
        B1(() => {
            C1();
    });
})}
else {
    console.log("The passed parameters are not functions")
}
}
final(5,B,C)
