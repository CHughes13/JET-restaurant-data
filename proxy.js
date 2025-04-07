// proxy.js (Proxy server for Just Eat API)
const express = require('express');
const cors = require('cors');
const url = require('url');
const needle = require('needle');

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS
app.use(cors());

// Just Eat API URL
const API_URL = 'https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode';

// Create the route to handle requests from the front-end
app.get("/api", async (req, res) => {
    try {
        const params = new URLSearchParams({
            ...url.parse(req.url, true).query // Query parameters from the client
        });

        // Make the API request to Just Eat using needle
        const apiResponse = await needle('get', `${API_URL}?${params}`);

        if (!apiResponse.body) {
            throw new Error('No data returned from API');
        }

        const data = apiResponse.body;
        res.status(200).json(data); // Send data to the front-end
    } catch (ex) {
        console.error('Error:', ex); // Log the error for debugging
        res.status(500).json({ error: ex.message || 'Internal server error' });
    }
});

app.listen(PORT, () => console.log(`Proxy server listening at port ${PORT}`));
