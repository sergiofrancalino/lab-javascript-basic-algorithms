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
console.log(`Ordered names:`, names.sort());

let a = (names.slice(0,1));
let b = (names.slice(1,2));

if (a = hacker1) {
    console.log(`The driver's name (${hacker1}) goes first.`);

} else if (a = hacker2) {
    console.log(`Yo, the navigator (${hacker2}) goes first definitely.`);
}
else if (a === b) {
    console.log(`What!? You both (driver and navigator) have the same names.`);  
}

// SAFR, finally finished slowlest guy ;(. Lets learn better! 