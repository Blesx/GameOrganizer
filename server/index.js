const express = require("express");
const path = require("path");
const axios = require('axios');
const env = require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api/:query", (req, res) => {
    const apiKey = process.env.RAWG_API_KEY;
    const query = req.params.query;
    const resultSize = 10;
    const urlRequest = [`https://api.rawg.io/api/games`,
        `?key=${apiKey}`,
        `&search=${query}`,
        `&page_size=${resultSize}`].join('');


    console.log(urlRequest);
    
    axios.get(urlRequest)
        .then(success => {
            console.log("success " + success.data.results);
            res.json(success.data.results);

        })
        .catch(error => {
            console.log("error " + error.status);
            res.json(error.status);

        }); 
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
})

app.listen(PORT, () => {
    console.log(__dirname);
    console.log(`Server listening on ${PORT}`);
});