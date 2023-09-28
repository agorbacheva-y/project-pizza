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
let age = prompt('Is this food for a child or an adult? Please enter your age.');

let confirm = "";
if (age >= 18) {
  confirm = prompt(
    `One adult sized ${selectedSubmenu[subMenu-1]} ${selectedFood} will be prepared for you.
    That will be €15. Are you sure you want to proceed with the order?
    
    Enter a number to confirm:
    1 - Yes
    2 - No`);
} else {
  confirm = prompt(
    `One child sized ${selectedSubmenu[subMenu-1]} ${selectedFood} will be prepared for you.
    That will be €8. Are you sure you want to proceed with the order?
    
    Enter a number to confirm:
    1 - Yes
    2 - No`);
};


// Step 5 - Order confirmation
// Your code goes here
if (confirm === "1") {
  alert('Thank you for your order! Your meal will be prepared. See you soon!');
} else if (confirm === "2") {
  alert ('No problem, come back and order anytime you want.');
} else {
  alert('Invalid choice. Please choose number 1 or 2.');
};