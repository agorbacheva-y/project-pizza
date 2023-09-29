// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const username = prompt('Please enter your name.');
if (username) {
  alert(`Hi ${username}!`);
} else {
  alert(`Please enter your name.`);
  exit(1);
}


// Step 2 - Food choice
let foodMenu = prompt(
  `What type of food would you like to order?
  1 - Pizza
  2 - Pasta
  3 - Salad`
);

// assign value to selectedFood depending on what nr user picked for foodMenu
let selectedFood = "";
  if (foodMenu === "1") {
    selectedFood = "Pizza";
  } else if (foodMenu === "2") {
    selectedFood = "Pasta";
  } else if (foodMenu === "3") {
    selectedFood = "Salad";
  } else {
    alert('Invalid choice. Please choose a number between 1 and 3.');
    exit(1);
  }


alert(`You've chosen ${selectedFood}!`);
//console.log(selectedFood);


// // Step 3 - Subtype choice
let subMenu = "";
let selectedSubmenu = [];

// show prompt of submenu items depending on what selectedFood is
// and save array of corresponding submenu items
if (selectedFood === "Pizza") {
  subMenu = prompt(
    `Select a ${selectedFood} type:
      Enter a number:
      1 - Margherita
      2 - Pepperoni
      3 - Vegetable`
  );
  selectedSubmenu = ["Margherita", "Pepperoni", "Vegetable"];
} else if (selectedFood === "Pasta") {
  subMenu = prompt(
    `Select a ${selectedFood} type:
      Enter a number:
      1 - Bolognese
      2 - Seafood
      3 - Carbonara`
  );
  selectedSubmenu = ["Bolognese", "Seafood", "Carbonara"];
} else if (selectedFood === "Salad") {
  subMenu = prompt(
    `Select a ${selectedFood} type:
      Enter a number:
      1 - Caesar
      2 - Greek
      3 - Cobb`
  );
  selectedSubmenu = ["Caesar", "Greek", "Cobb"];
} 

// alert with selected submenu item
if (subMenu === "1" || subMenu === "2" || subMenu === "3" ) {
  alert(`You've chosen ${selectedSubmenu[subMenu-1]}!`);
} else {
  alert('Invalid choice. Please choose a number between 1 and 3.');
  exit(1);
}


// // Step 4 - Age
let age = parseInt(prompt('Is this food for a child or an adult? Please enter your age.'));

// confirm menu choice and price depending on user's age
let confirm = "";
if (age >= 18) {
  confirm = prompt(
    `One adult sized ${selectedSubmenu[subMenu-1]} ${selectedFood} will be prepared for you. 
    Your total is €15. Are you sure you want to proceed with the order?
    
    Enter a number to confirm:
    1 - Yes
    2 - No`);
} else if (age > 0) {
  confirm = prompt(
    `One child sized ${selectedSubmenu[subMenu-1]} ${selectedFood} will be prepared for you. 
    Your total is €8. Are you sure you want to proceed with the order?
    
    Enter a number to confirm:
    1 - Yes
    2 - No`);
} else {
  alert('Invalid entry. Please enter a valid number.');
  exit(1);
};


// // Step 5 - Order confirmation
if (confirm === "1") {
  alert('Thank you for your order! Your meal will be prepared. See you soon!');
} else if (confirm === "2") {
  alert ('No problem, come back and order anytime you want.');
} else {
  alert('Invalid choice. Please choose number 1 or 2.');
  exit(1);
};