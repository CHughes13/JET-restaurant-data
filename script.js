// Fetch Restaurant Data

import restaurantData from "./restaurants.json";

// Loop through the first 10 restaurant results only
restaurantData.restaurants.slice(0,10).forEach(restaurant => {

    // Generate restaurant cards
// Function to get only the specific restaurant data we want
function displayRestaurantData(data) {
    const {
        restauantName: name,
        address: {firstLine},
        rating: {starRating},
        cuisines: [{name}]} = data;

    restaurantCard.textContent ="";
    restaurantCard.style.display = "flex";

    // Create elements to add the restaurant card
    const restaurantNameDisplay = document.createElement("h2");
    const cuisinesDisplay = document.createElement("p");
    const ratingDisplay = document.createElement("p");
    const addressDisplay = document.createElement("p");

    // Populate each element in the restaurant with the following restaurant data
    restaurantNameDisplay.textContent = `Name: ${}`;
    cuisinesDisplay.textContent = `Cuisine/s: ${}`;
    ratingDisplay.textContent = `Star Rating: ${}`;
    addressDisplay.textContent = `Address: ${}`;

    // Style each seperate element     //Make sure these class stlyes are in the CSS
    restaurantNameDisplay.classList.add("restaurantNameDisplay");
    cuisinesDisplay.classList.add("cuisinesDisplay");
    ratingDisplay.classList.add("ratingDisplay");
    addressDisplay.classList.add("addressDisplay");

    // Add the data to the restaurant card
    restaurantCard.appendChild(restaurantNameDisplay);
    restaurantCard.appendChild(cuisinesDisplay);
    restaurantCard.appendChild(ratingDisplay);
    restaurantCard.appendChild(addressDisplay);
}

});