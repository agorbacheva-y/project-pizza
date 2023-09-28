// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const username = prompt('Please enter your name.');

alert(`Hi ${username}!`);

// Step 2 - Food choice
// Your code goes here
const foodMenu = prompt(
  `What type of food would you like to order?
  1 - Pizza
  2 - Pasta
  3 - Salad`
);

let selectedFood = "";
switch(foodMenu) {
  case "1":
    selectedFood = "pizza";
    break;
  case "2":
    selectedFood = "pasta";
    break;
  case "3":
    selectedFood = "salad";
    break;
  default:
    alert('Invalid choice. Please choose a number between 1 and 3.');
    exit(1);
};

alert(`You've chosen ${selectedFood}!`);

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
