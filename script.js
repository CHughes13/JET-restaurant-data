// Restaurant data app using postcode search

const postcodeSearchForm = document.querySelector(".postcodeSearchForm");
const postcodeInput = document.querySelector(".postcodeInput");
const restaurantCard = document.querySelector(".restaurantCard");

postcodeSearchForm.addEventListener("submit", event => {
  event.preventDefault(); // Prevents form refreshing page after hitting "submit"
  const postcode = postcodeInput.value;

  if (postcode) {
    try{

    }

  } else {
    displayError("Please enter a valid postcode");
  }
});

// Function to return postcode restaurant data from Just Eat API

async function getRestaurantData(postcode) {}

function displayRestaurantData(data) {}

// Display error message is postcode imput is invalid
function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  restaurantCard.textContent = ""; // Resets form input to blank
  restaurantCard.style.display = "flex"; // Makes restaurantCard visible to user
  restaurantCard.appendChild(errorDisplay); // Shows user an error message
}
