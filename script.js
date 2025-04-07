// Fetch restaurant data
import restaurantData from "./restaurants.json";

// Create a single restaurant card
function createRestaurantCard(restaurant) {
    const { 
        restaurantName,
        cuisines: [{ name: cuisineName }], // Cuisines are in an array
        rating: { starRating },
        address: { firstLine }, 
    } = restaurant;

    const card = document.createElement("div");
    card.classList.add("restaurantCard");

    const restaurantNameDisplay = document.createElement("h2");
    restaurantNameDisplay.textContent = `Name: ${restaurantName}`;

    const cuisineDisplay = document.createElement("p");
    cuisineDisplay.textContent = `Cuisine/s: ${cuisineName}`;

    const ratingDisplay = document.createElement("p");
    ratingDisplay.textContent = `Star Rating: ${starRating}`;

    const addressDisplay = document.createElement("p");
    addressDisplay.textContent = `Address: ${firstLine}`;

    // Add your CSS classes to data being returned
    restaurantNameDisplay.classList.add("restaurantNameDisplay");
    cuisineDisplay.classList.add("cuisinesDisplay");
    ratingDisplay.classList.add("ratingDisplay");
    addressDisplay.classList.add("addressDisplay");

    // Append all elements to the card
    card.appendChild(restaurantNameDisplay);
    card.appendChild(cuisineDisplay);
    card.appendChild(ratingDisplay);
    card.appendChild(addressDisplay);

    return card;
}

// Render only the first 10 restaurants as cards and append to container
const restaurantContainer = document.querySelector("#restaurantContainer"); 

restaurantData.restaurants.slice(0, 10).forEach(restaurant => {
    const card = createRestaurantCard(restaurant);
    restaurantContainer.appendChild(card);
});


