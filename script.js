const form = document.querySelector("form");

// Function to return postcode restaurant data from Just Eat API

async function getRestaurantData(postcode) {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Free public proxy (limited use) to test fetch
  const apiUrl = `https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`;
  const response = await fetch(proxyUrl + apiUrl, {
    headers: {
      Origin: "localhost",
    },
  });

  if (!response.ok) {
    console.error("Error fetching data:", response.statusText); // Debugging line
    throw new Error("Could not fetch restaurant data");
  }

  const data = await response.json(); //Converts response to a JSON format
  console.log("Fetched data:", data);

  return data.restaurants; // Drill down into data returned
}

// Function to display error message if postcode input is invalid

function displayError(message) {
  const errorDisplay = document.createElement("p");
  document.querySelector("body").appendChild(errorDisplay);
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  // restaurantCard.textContent = ""; // Resets form input to blank

  // restaurantCard.style.display = "flex"; // Makes restaurantCard visible to user using flexbox

  // restaurantCard.appendChild(errorDisplay); // Adds error message to restaurantCard
}

function displayRestaurantData(data) {
  if (document.querySelectorAll(".restaurantCard")) {
    for (
      let i = 0;
      i < document.querySelectorAll(".restaurantCard").length;
      i++
    ) {
      document.querySelectorAll(".restaurantCard")[i].remove();
    }
  }

  //Loop through only the first 10 results

  for (let i = 0; i < 10; i++) {
    //Create a restaurant card

    const card = document.createElement("div");
    document.querySelector("body").appendChild(card);
    card.classList.add("restaurantCard");

    // Extract specific data
    const logo = data[i].logoUrl;
    const restaurantName = data[i].name;
    const starRating = data[i].rating.starRating;
    const cuisines = data[i].cuisines; //returns array so will require looping through
    const address = data[i].address; //returns object with multiple key/value pairs

    // Display data
    // Logo
    const img = document.createElement("img");
    card.appendChild(img);
    img.src = logo;

    // Restaurant Name
    const restaurantNameHeading = document.createElement("h2");
    card.appendChild(restaurantNameHeading);
    restaurantNameHeading.textContent = restaurantName;

    // Cuisines
    const cuisineContainer = document.createElement("div");
    card.appendChild(cuisineContainer);

    const cuisineHeading = document.createElement("h3");
    cuisineContainer.appendChild(cuisineHeading);
    cuisineHeading.textContent = "Cuisines";

    const ol = document.createElement("ol");
    cuisineContainer.appendChild(ol);

    // Loop through cuisines
    let cuisineItem;

    for (let j = 0; j < cuisines.length; j++) {
      const listItem = document.createElement("li");
      cuisineItem = cuisines[j].name;
      listItem.textContent = cuisineItem;
      ol.appendChild(listItem);
    }

    //Rating
    const ratingHeading = document.createElement("h3");
    card.appendChild(ratingHeading);
    ratingHeading.textContent = `Rating: ${starRating}`;

    //Address

    const addressContainer = document.createElement("div");
    card.appendChild(addressContainer);

    const addressheading = document.createElement("h3");
    addressContainer.appendChild(addressheading);
    addressheading.textContent = "Address:";

    const city = document.createElement("p");
    city.textContent = address.city;
    addressContainer.appendChild(city);

    const street = document.createElement("p");
    street.textContent = address.firstLine;
    addressContainer.appendChild(street);

    const postalCode = document.createElement("p");
    postalCode.textContent = address.postalCode;
    addressContainer.appendChild(postalCode);
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const input = document.querySelector("input");
  const postcode = input.value;

  if (postcode) {
    try {
      const restaurantData = await getRestaurantData(postcode);
      console.log(restaurantData);

      displayRestaurantData(restaurantData);
    } catch (error) {
      console.error(error);

      displayError(error);
    }
  } else {
    displayError("Please enter a valid postcode");
  }
});
