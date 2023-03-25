console.log('Welcome to cyber security');

let firstName = "Suraj Rathour     ";
firstName = firstName.trim();
console.log(firstName.length);

let toUp = 'ProgrAmiNg';
console.log(toUp);
toUp = toUp.toLowerCase();   //strings are immutable thats means its does not change the previous string for save th new value we have to create a new string
console.log(toUp);
//slice method

let cr = "Normaltext";
console.log(cr);
cr = cr.slice(6);//if we pass the single argument then it gives all the value after the given number
console.log(cr);