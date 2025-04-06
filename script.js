// Restaurant data app using postcode search

const postcodeSearchForm = document.querySelector(".postcodeSearchForm");
const postcodeInput = document.querySelector("postcodeInput");
const restaurantCard = document.querySelector("restaurantCard");

postcodeSearchForm.addEventListener("submit", event => {preventDefault();

});

// Function to return postcode restaurant data from Just Eat API
async function fetchData(){
    try{

    //NOTE TO SELF: Need to add in validators so users can only enter valid postcodes
        const postcode = document.getElementById("postcode").value.toString().trim().toLowerCase(); //maybe do no spaces either side or in the middle or limit number of characters//
        
        // Fetch API data
        const response = await fetch("https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}");

            if(!response.ok){
                throw new Error("Could not fetch resource");
            }

            const data = await response.json();

            const restaurant = data.restaurant[0,10]; // Limit response to first 10 restaurants

// NOTE TO SELF: This section needs
            document.getElementById("restaurantName").textContent = restaurant.name;
            document.getElementById("cuisine").textContent = restaurant.cuisine;
            document.getElementById("rating").textContent = restaurant.rating;
            document.getElementById("address").textContent = restaurant.address.firstLine;
        }
        catch(error){
            console.error(error);
        }

}

// Call fetchData function 
fetchData();