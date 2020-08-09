
/* Global Variables */
const url = "https://api.openweathermap.org/data/2.5/weather?zip=";
const APIKey = "&APPID=0f524fc15d3939b94dd2c0422b4d809e&units=imperial";

const generateButton = document.getElementById('generate');


generateButton.addEventListener('click', action);
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

//add Event for button
function action() {
  const zip = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;
  getData(url, zip, APIKey)
    .then(function (data) {
      postData('/add', { date: newDate, temp: data.main.temp, content: feelings });
      updata();
    })
};


//Updata UI 
async function updata() {
  const req = await fetch('/all');
  try {
    const alldata = await req.json();
    document.getElementById('date').innerHTML = "Date: "+ alldata.date;
    document.getElementById('temp').innerHTML = "Temperatuer: "+ alldata.temp;
    document.getElementById('content').innerHTML = "My feel: "+ alldata.content;
  } catch (error) {
    console.log('error', error);
  };
};


//GET function 
async function getData(url, zip, APIKey) {
  const res = await fetch(url + zip + APIKey);
  try {
    const data = await res.json();
    return data;
  }
  catch (error) {
    console.log("error", error);
  };
};

//Post function
async function postData(url = '', data = {}) {
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await res.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  };
};
