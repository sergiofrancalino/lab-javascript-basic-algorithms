// Iteration 1: Names and Input

const hacker1 = "Sergio Francalino"; // first studant (The driver)

console.log(`I'm ${hacker1} = The driver´s and i'm ready!`); // Line put if there is a second worker, in pair
console.log(`The Driver's name is ->`, hacker1.toUpperCase()); // Method to UpperCases

const hacker2 = "Helron Franklin"; // segundo personagem (The Navigator)
console.log(`The navigator's name is ->`, hacker2.toLowerCase()); // Method to LowerCases

// Iteration 2: Conditionals

console.log(`The driver's name has = ${hacker1.length} characters long`) // The driver's characters long
console.log(`The navigator's name has = ${hacker2.length} characters long`) // The navigator's characters long

if (hacker1.length > hacker2.length) {
    console.log(`1. The driver has the longest name, it has ${hacker1.length} characters`); 
    // Case the driver's has a logest name that the navigator's.

   if (hacker1.length < hacker2.length) 
       console.log(`2. It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
       // Case the navigator's has a logest name that the driver's.

   if (hacker1.length === hacker2.length) 
      console.log(`3. Wow, you both have equally long names, both has names with ${hacker2.length} characters`);
      // Case the navigator's and driver's have equally  names.
}

// Iteration 3: Loops
