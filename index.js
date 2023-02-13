//Importing the dotenv module
require("dotenv").config();

//Importing the express module
const express = require("express");

//Importing the DB and scrap data
const db = require("./db/connect");
const scrapData = require("./db/scrap");

//Importing the cors
const cors = require("cors");

//Initializing the express
const app = express();

// Calling the express.json() method for parsing and call cors for allow different domain request
app.use(express.json());
app.use(cors());

// To connect DB
let dataReset = async () => {
    await db();
    await scrapData();

    setInterval( async () => {
        await scrapData();
        console.log("Data Reset Successfully");
    }, 43200*1000);

    app.use((req, res, next) => {
        console.log("Logging Middleware");
        next();
    });
};




// Importing the routes
const productRoutes = require("./routes/products.routes");

//Adding the custom middleware
app.use("/api/product", productRoutes);

//Testing
app.get("/", (req, res) => {
    res.send("Welcome to Webscraping-Ecommerce Application");
})

//Initializing the port number
const PORT = process.env.PORT || 8085;

// Listening to the port
app.listen(PORT, ()=>{
    console.log(`Application is running on PORT ${PORT}`);
});

dataReset();