
//1)
let x = 5 , y = 8;
console.log(x===y);
//
x = 6 , y = "6";
console.log(x!==y);
//
x = "7", y = 7;
console.log(x==y);

//2)
let nome = "Fulano";
console.log("Boa noite, "+nome+"!");

//3
console.group();
     x=10,y=5;
console.log(x+=y);
console.groupEnd();
//
console.group();
x=10,y=5;
console.log(x*=y);
console.groupEnd();
//
console.group();
x=10,y=5;
console.log(x%=y);
console.groupEnd();
//
console.group();
x=10,y=5;
console.log(x/=y);
console.groupEnd();
//
console.group();
x=10,y=5;
console.log(x-=y);
console.groupEnd();




