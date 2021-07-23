// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
//new variables
const assignButton = document.querySelector(".assign");

const assignedItems = document.querySelector(".assigned-items");

//clear the input box
const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (item) {
  const listItem = document.createElement("li");
  listItem.innerText = item;
  guestList.append(listItem);
};

//add event listener for addGuestButton
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest); ->test out if guest variable working or not
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

//Limit the guest list to 8 people
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

//assign potluck items
const assignItems = function () {
  const potluckItems = [
    "Salad",
    "Soup",
    "Grilled Shrimp",
    "Nachos",
    "Salsa",
    "Chips",
    "Chocolate",
    "Barbeque Chicken",
    "Corn",
    "Jelly",
    "Wine",
    "Cheese"
  ];
  const allGuests = document.querySelectorAll(".guest-list li"); 

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}`;
    //guest.innerText is used to access the name inside the li element.
    assignedItems.append(listItem);
    
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

//add an event listener and update potluckitems array
assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
