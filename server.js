// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
app.listen(port,listening);

function listening (){
    console.log(`server is running on port: ${port}`);
}

//GET
app.get('/all', sendData);

function sendData(req , res){
res.send(projectData);
}

//POST
app.post('/add',addData);

function addData(req,res){
    let data = req.body;
    console.log('server side data ', data);
    projectData['date'] = data.date;
    projectData['temp'] = data.temp;
    projectData['content'] = data.content;
    res.send(projectData);
}