// Restaurant data app using postcode search

const postcodeSearchForm = document.querySelector(".postcodeSearchForm");
const postcodeInput = document.querySelector(".postcodeInput");
const restaurantCard = document.querySelector(".restaurantCard");

// Handle postcode search form submission:
// fetch and display restaurant data or display error message
postcodeSearchForm.addEventListener("submit", async event => {
  event.preventDefault(); // Prevents form refreshing page after hitting "submit"
  const postcode = postcodeInput.value;

    if (postcode){
        try{
            const restaurantData = await getRestaurantData(postcode);
            displayRestaurantData(restaurantData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
    displayError("Please enter a valid postcode");
  }
});

// Function to return postcode restaurant data from Just Eat API
async function getRestaurantData(postcode) {
    const proxyUrl = "http://localhost:4000/api"; // Assuming your proxy server runs on port 4000
    const apiUrl = `${proxyUrl}?postcode=${postcode}`;
    const response = await fetch(apiUrl);



    //const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Free public proxy (limited use) to test fetch
    //const apiUrl = `https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`;
    //const response = await fetch(proxyUrl + apiUrl, {
        //headers: {
            '//Origin': 'localhost'
        //}
    };
    
    if(!response.ok){
        console.error("Error fetching data:", response.statusText); // Debugging line
        throw new Error("Could not fetch restaurant data");
    }

    const data = await response.json(); //Converts response to a JSON format
    console.log("Fetched data:", data); // Debugging line
    return data; // Drill down into data returned
}

// Function to get only the restaurant data we want
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



// Function to display error message if postcode input is invalid
function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  restaurantCard.textContent = ""; // Resets form input to blank
  restaurantCard.style.display = "flex"; // Makes restaurantCard visible to user using flexbox
  restaurantCard.appendChild(errorDisplay); // Adds error message to restaurantCard
}
