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
    selectedFood = "Pizza";
    break;
  case "2":
    selectedFood = "Pasta";
    break;
  case "3":
    selectedFood = "Salad";
    break;
  default:
    alert('Invalid choice. Please choose a number between 1 and 3.');
    exit(1);
};

alert(`You've chosen ${selectedFood}!`);

// Step 3 - Subtype choice
// Your code goes here
let subMenu = "";
let selectedSubmenu = "";

switch(selectedFood) {
  case "Pizza":
    subMenu = prompt(
      `Select a ${selectedFood} type:
        Enter a number:
        1 - Margherita
        2 - Pepperoni
        3 - Vegetable`
    );
    selectedSubmenu = ["Margherita", "Pepperoni", "Vegetable"];
    break;

  case "Pasta":
    subMenu = prompt(
      `Select a ${selectedFood} type:
        Enter a number:
        1 - Bolognese
        2 - Seafood
        3 - Carbonara`
    );
    selectedSubmenu = ["Bolognese", "Seafood", "Carbonara"];
    break;

  case "Salad":
    subMenu = prompt(
      `Select a ${selectedFood} type:
        Enter a number:
        1 - Caesar
        2 - Greek
        3 - Cobb`
    );
    selectedSubmenu = ["Caesar", "Greek", "Cobb"];
    break;
      
  default:
    alert('Invalid choice. Please choose a number between 1 and 3.');
    exit(1);
};

alert(`You've chosen ${selectedSubmenu[subMenu-1]}!`);


// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
