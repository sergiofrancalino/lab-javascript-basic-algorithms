// Iteration 1: Names and Input

const hacker1 = "Sergio Francalino"; // first studant (The driver)

console.log(`I'm ${hacker1} = The driver and i'm ready!`); // Line put if there is a second worker, in pair
console.log(`The driver's name is ->`, hacker1.toUpperCase()); // Method to UpperCases

const hacker2 = "Helron Franklin"; // segundo personagem (The Navigator)
console.log(`The navigator's name is ->`, hacker2.toLowerCase()); // Method to LowerCases


// Iteration 2: Conditionals

console.log(`The driver's name has = ${hacker1.length} characters long`) // The driver's characters long
console.log(`The navigator's name has = ${hacker2.length} characters long`) // The navigator's characters long

if (hacker1.length > hacker2.length) {
    console.log(`1. The driver has the longest name, it has ${hacker1.length} characters`); 
    // Case the driver's has a logest name that the navigator's.
} 

else if (hacker1.length < hacker2.length) {
    console.log(`2. It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
    // Case the navigator's has a logest name that the driver's.
}  

if (hacker1.length === hacker2.length) { 

    console.log(`3. Wow, you both have equally long names, both has names with ${hacker2.length} characters`);
    // Case the navigator's and driver's have equally  names.
}



// Iteration 3: Loops

console.log(`The driver's name is ->`, hacker1.toUpperCase()); // Method to LowerCases

// 3.1 - All the characters of the driver's name will show separated by a space and in capitals. 

const drivers = [];

for (let y = 0; y < hacker1.length; y++) {
  drivers[y] = hacker1[y].toUpperCase();
}
console.log(`The driver's name, showed separated by a space: `,drivers.join(" "));

//3.2 - All the characters of the navigator's name, will show in reverse order.

const navigator = [];

for (let i = hacker2.length - 1; i >= 0; i--) {
  navigator[i] = hacker2[i];
} 

let reverse = navigator.reverse();
console.log(`The navigator's name, showed in reverse order: `, reverse.join(""));

//3.3 - Depending on the lexicoghapic order of the strings.

const names = []
names.push (hacker1);
names.push (hacker2);
names.sort();

// console.log(`Ordered names in array 'nomes':`, names.sort());

let a = (names.slice(0,1));
let b = (names.slice(1,2));


if (hacker1 == hacker2) {
    console.log(`What!? You both (driver and navigator) have the same names.`);
}
else if (a == hacker1) {
    console.log(`The driver's name (${hacker1}) goes first.`);    
}
else if (a == hacker2) {
        console.log(`Yo, the navigator (${hacker2}) goes first definitely.`);
}      

// SAFR, finally finished slowlest guy ;(. Lets learn better!


// Bonus 1

console.log ("BONUS 1 - Ocorrencias da palavra 'et'")

const palavra = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi";

const ocorrencias = (palavra. match(/et/g) || []). length;
console. log(`Foram encontradas: ${ocorrencias} ocorrencias da palavra "et" no texto`); // variable palavra.

// BONUS 2

console.log ("BONUS 2 - Palidromo")
let phraseToCheck = "race car";

let re = /[^A-Za-z0-9]/g;

phraseToCheck = phraseToCheck.toLowerCase().replace(re, '');
    
let len = phraseToCheck.length;

for (let i = 0; i < len/2; i++) {
     
    if (phraseToCheck[i] !== phraseToCheck[len - 1 - i]) {
        
        console.log("The value assigned is not a Palidrome");
      }
    else if (phraseToCheck[i] == phraseToCheck[len - 1 - i]){
        
        console.log ("The value assigned is a Palidrome");
    }
        
}

// Faltou resolver o loop doido. kkk


    

  
   

