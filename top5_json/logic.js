// Create a map object
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

var initLayer = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);
// #################################################################

// pulling Country data for 2015
var countries2015 = (function () {
  var testData = null;
  $.ajax({
      'async': false,
      'global': false,
      'url': 'data_2015.json',
      'dataType': "json",
      'success': function (data) {
          testData = data;
      }
  });
  return testData;
  })(); 

// Test index into happiness rank 
// console.log(countries2015);
console.log(countries2015[0]["happiness_rank"]);

// ##############################################################

// pulling Country data for 2016
var countries2016 = (function () {
  var testData = null;
  $.ajax({
      'async': false,
      'global': false,
      'url': 'data_2016.json',
      'dataType': "json",
      'success': function (data) {
          testData = data;
      }
  });
  return testData;
  })(); 

// Test index into happiness rank 
// console.log(countries2016);
console.log(countries2016[0]["happiness_rank"]);

// ##################################################################


// pulling Country data for 2017
var countries2017 = (function () {
  var testData = null;
  $.ajax({
      'async': false,
      'global': false,
      'url': 'data_2017.json',
      'dataType': "json",
      'success': function (data) {
          testData = data;
      }
  });
  return testData;
  })(); 

// Test index into happiness rank 
// console.log(countries2017);
console.log(countries2017[0]["happiness_rank"]);

// ###################################################################


// pulling Country data for 2018
var countries2018 = (function () {
  var testData = null;
  $.ajax({
      'async': false,
      'global': false,
      'url': 'data_2018.json',
      'dataType': "json",
      'success': function (data) {
          testData = data;
      }
  });
  return testData;
  })(); 

// Test index into happiness rank 
// console.log(countries2018);
console.log(countries2018[0]["happiness_rank"]);

// #####################################################################


// pulling Country data for 2019
var countries2019 = (function () {
  var testData = null;
  $.ajax({
      'async': false,
      'global': false,
      'url': 'data_2019.json',
      'dataType': "json",
      'success': function (data) {
          testData = data;
      }
  });
  return testData;
  })(); 

// Test index into happiness rank 
// console.log(countries2019);
console.log(countries2019[0]["happiness_rank"]);

// #################################################################################

// sorting 2015 data and pulling top 5 and bottom 5

// reformatting object to be list of arrarys
var sorted2015 = Object.values(countries2015);

// sorting by happiness_rank
sorted2015.sort((a, b) => (a.happiness_rank > b.happiness_rank) ? 1 : -1);

// getting top 5 and bottom 5
var bottom5_2015 = sorted2015.reverse().slice(0,5);
var top5_2015 = sorted2015.slice(-5).reverse();

// checking values
console.log(top5_2015);
console.log(bottom5_2015);

// #####################################################################################


// sorting 2016 data and pulling top 5 and bottom 5

// reformatting object to be list of arrarys
var sorted2016 = Object.values(countries2016);

// sorting by happiness_rank
sorted2016.sort((a, b) => (a.happiness_rank > b.happiness_rank) ? 1 : -1);

// getting top 5 and bottom 5
var bottom5_2016 = sorted2016.reverse().slice(0,5);
var top5_2016 = sorted2016.slice(-5).reverse();

// checking values
console.log(top5_2016);
console.log(bottom5_2016);

// #####################################################################################


// sorting 2017 data and pulling top 5 and bottom 5

// reformatting object to be list of arrarys
var sorted2017 = Object.values(countries2017);

// sorting by happiness_rank
sorted2017.sort((a, b) => (a.happiness_rank > b.happiness_rank) ? 1 : -1);

// getting top 5 and bottom 5
var bottom5_2017 = sorted2017.reverse().slice(0,5);
var top5_2017 = sorted2017.slice(-5).reverse();

// checking values
console.log(top5_2017);
console.log(bottom5_2017);

// #####################################################################################


// sorting 2018 data and pulling top 5 and bottom 5

// reformatting object to be list of arrarys
var sorted2018 = Object.values(countries2018);

// sorting by happiness_rank
sorted2018.sort((a, b) => (a.happiness_rank > b.happiness_rank) ? 1 : -1);

// getting top 5 and bottom 5
var bottom5_2018 = sorted2018.reverse().slice(0,5);
var top5_2018 = sorted2018.slice(-5).reverse();

// checking values
console.log(top5_2018);
console.log(bottom5_2018);

// #####################################################################################


// sorting 2019 data and pulling top 5 and bottom 5

// reformatting object to be list of arrarys
var sorted2019 = Object.values(countries2019);

// sorting by happiness_rank
sorted2019.sort((a, b) => (a.happiness_rank > b.happiness_rank) ? 1 : -1);

// getting top 5 and bottom 5
var bottom5_2019 = sorted2019.reverse().slice(0,5);
var top5_2019 = sorted2019.slice(-5).reverse();

// checking values
console.log(top5_2019);
console.log(bottom5_2019);

// #####################################################################################

// object for red marker for bottom 5 
var redMarker = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// adding markers for top 5 2015


  var switz15 = L.marker([top5_2015[0]["lat"], 
  top5_2015[0]["lng"]]).bindPopup("<h1>" + top5_2015[0]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2015[0]["happiness_rank"] + "</h3>")

  var ice15 = L.marker([top5_2015[1]["lat"], 
  top5_2015[1]["lng"]]).bindPopup("<h1>" + top5_2015[1]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2015[1]["happiness_rank"] + "</h3>")

  var den15 = L.marker([top5_2015[2]["lat"], 
  top5_2015[2]["lng"]]).bindPopup("<h1>" + top5_2015[2]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2015[2]["happiness_rank"] + "</h3>")

  var nor15 = L.marker([top5_2015[3]["lat"], 
  top5_2015[3]["lng"]]).bindPopup("<h1>" + top5_2015[3]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2015[3]["happiness_rank"] + "</h3>")

  var can15 = L.marker([top5_2015[4]["lat"], 
  top5_2015[4]["lng"]]).bindPopup("<h1>" + top5_2015[4]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2015[4]["happiness_rank"] + "</h3>")



// #####################################################################################

// adding markers for bottom 5 2015

  var togo15 = L.marker([bottom5_2015[0]["lat"], 
  bottom5_2015[0]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2015[0]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2015[0]["happiness_rank"] + "</h3>")

  var Buru15 = L.marker([bottom5_2015[1]["lat"], 
  bottom5_2015[1]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2015[1]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2015[1]["happiness_rank"] + "</h3>")

  var syr15 = L.marker([bottom5_2015[2]["lat"], 
  bottom5_2015[2]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2015[2]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2015[2]["happiness_rank"] + "</h3>")

  var ben15 = L.marker([bottom5_2015[3]["lat"], 
  bottom5_2015[3]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2015[3]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2015[3]["happiness_rank"] + "</h3>")

  var rwa15 = L.marker([bottom5_2015[4]["lat"], 
  bottom5_2015[4]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2015[4]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2015[4]["happiness_rank"] + "</h3>")

  var c15 = L.layerGroup([switz15, ice15, den15, nor15, can15, togo15, Buru15, ben15, syr15, rwa15]);
  

// #####################################################################################

  // adding markers for top 5 2016


  var den16 = L.marker([top5_2016[0]["lat"], 
  top5_2016[0]["lng"]]).bindPopup("<h1>" + top5_2016[0]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2016[0]["happiness_rank"] + "</h3>")

  var switz16 = L.marker([top5_2016[1]["lat"], 
  top5_2016[1]["lng"]]).bindPopup("<h1>" + top5_2016[1]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2016[1]["happiness_rank"] + "</h3>")

  var ice16 = L.marker([top5_2016[2]["lat"], 
  top5_2016[2]["lng"]]).bindPopup("<h1>" + top5_2016[2]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2016[2]["happiness_rank"] + "</h3>")

  var nor16 = L.marker([top5_2016[3]["lat"], 
  top5_2016[3]["lng"]]).bindPopup("<h1>" + top5_2016[3]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2016[3]["happiness_rank"] + "</h3>")

  var fin16 = L.marker([top5_2016[4]["lat"], 
  top5_2016[4]["lng"]]).bindPopup("<h1>" + top5_2016[4]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2016[4]["happiness_rank"] + "</h3>")



// #####################################################################################

// adding markers for bottom 5 2016

  var togo16 = L.marker([bottom5_2016[0]["lat"], 
  bottom5_2016[0]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2016[0]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2016[0]["happiness_rank"] + "</h3>")

  var Buru16 = L.marker([bottom5_2015[1]["lat"], 
  bottom5_2016[1]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2016[1]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2016[1]["happiness_rank"] + "</h3>")

  var syr16 = L.marker([bottom5_2016[2]["lat"], 
  bottom5_2016[2]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2016[2]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2016[2]["happiness_rank"] + "</h3>")

  var benin16 = L.marker([bottom5_2016[3]["lat"], 
  bottom5_2016[3]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2016[3]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2016[3]["happiness_rank"] + "</h3>")

  var afg16 = L.marker([bottom5_2016[4]["lat"], 
  bottom5_2016[4]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2016[4]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2016[4]["happiness_rank"] + "</h3>")

  var c16 = L.layerGroup([switz16, ice16, den16, nor16, fin16, benin16, togo16, Buru16, syr16, afg16]);

  // #####################################################################################

  // adding markers for top 5 2017


  var nor17 = L.marker([top5_2017[0]["lat"], 
  top5_2017[0]["lng"]]).bindPopup("<h1>" + top5_2017[0]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2017[0]["happiness_rank"] + "</h3>")

  var den17 = L.marker([top5_2017[1]["lat"], 
  top5_2017[1]["lng"]]).bindPopup("<h1>" + top5_2017[1]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2017[1]["happiness_rank"] + "</h3>")

  var ice17 = L.marker([top5_2017[2]["lat"], 
  top5_2017[2]["lng"]]).bindPopup("<h1>" + top5_2017[2]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2017[2]["happiness_rank"] + "</h3>")

  var switz17 = L.marker([top5_2017[3]["lat"], 
  top5_2017[3]["lng"]]).bindPopup("<h1>" + top5_2017[3]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2017[3]["happiness_rank"] + "</h3>")

  var fin17 = L.marker([top5_2017[4]["lat"], 
  top5_2017[4]["lng"]]).bindPopup("<h1>" + top5_2017[4]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2017[4]["happiness_rank"] + "</h3>")



// #####################################################################################

// adding markers for bottom 5 2017

  var buru17 = L.marker([bottom5_2017[0]["lat"], 
  bottom5_2017[0]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2017[0]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2017[0]["happiness_rank"] + "</h3>")

  var tan17 = L.marker([bottom5_2017[1]["lat"], 
  bottom5_2017[1]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2017[1]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2017[1]["happiness_rank"] + "</h3>")

  var syra17 = L.marker([bottom5_2017[2]["lat"], 
  bottom5_2017[2]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2017[2]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2017[2]["happiness_rank"] + "</h3>")

  var rwa17 = L.marker([bottom5_2017[3]["lat"], 
  bottom5_2017[3]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2017[3]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2017[3]["happiness_rank"] + "</h3>")

  var togo17 = L.marker([bottom5_2017[4]["lat"], 
  bottom5_2017[4]["lng"]],{icon: redMarker}).bindPopup("<h1>" + bottom5_2017[4]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2017[4]["happiness_rank"] + "</h3>")

  var c17 = L.layerGroup([switz17, ice17, den17, nor17, fin17, tan17, rwa17, buru17, togo17, syra17, togo17]);

    // #####################################################################################

  // adding markers for top 5 2018


  var fin18 = L.marker([top5_2018[0]["lat"], 
  top5_2018[0]["lng"]]).bindPopup("<h1>" + top5_2018[0]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2018[0]["happiness_rank"] + "</h3>")

  var nor18 = L.marker([top5_2018[1]["lat"], 
  top5_2018[1]["lng"]]).bindPopup("<h1>" + top5_2018[1]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2018[1]["happiness_rank"] + "</h3>")

  var den18 = L.marker([top5_2018[2]["lat"], 
  top5_2018[2]["lng"]]).bindPopup("<h1>" + top5_2018[2]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2018[2]["happiness_rank"] + "</h3>")

  var ice18 = L.marker([top5_2018[3]["lat"], 
  top5_2018[3]["lng"]]).bindPopup("<h1>" + top5_2018[3]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2018[3]["happiness_rank"] + "</h3>")

  var switz18 = L.marker([top5_2018[4]["lat"], 
  top5_2018[4]["lng"]]).bindPopup("<h1>" + top5_2018[4]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2018[4]["happiness_rank"] + "</h3>")



// #####################################################################################

// adding markers for bottom 5 2018

  var buru18 = L.marker([bottom5_2018[0]["lat"], 
  bottom5_2018[0]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2018[0]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2018[0]["happiness_rank"] + "</h3>")

  var tan18 = L.marker([bottom5_2018[1]["lat"], 
  bottom5_2018[1]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2018[1]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2018[1]["happiness_rank"] + "</h3>")

  var yem18 = L.marker([bottom5_2018[2]["lat"], 
  bottom5_2018[2]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2018[2]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2018[2]["happiness_rank"] + "</h3>")

  var rwa18 = L.marker([bottom5_2018[3]["lat"], 
  bottom5_2018[3]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2018[3]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2018[3]["happiness_rank"] + "</h3>")

  var syr18 = L.marker([bottom5_2018[4]["lat"], 
  bottom5_2018[4]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2018[4]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2018[4]["happiness_rank"] + "</h3>")

  var c18 = L.layerGroup([switz18, ice18, den18, nor18, fin18, buru18, tan18, yem18, rwa18, syr18]);

    // #####################################################################################

  // adding markers for top 5 2019


  var den19 = L.marker([top5_2019[0]["lat"], 
  top5_2019[0]["lng"]]).bindPopup("<h1>" + top5_2019[0]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2019[0]["happiness_rank"] + "</h3>")

  var neth19 = L.marker([top5_2019[1]["lat"], 
  top5_2019[1]["lng"]]).bindPopup("<h1>" + top5_2019[1]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2019[1]["happiness_rank"] + "</h3>")

  var ice19 = L.marker([top5_2019[2]["lat"], 
  top5_2019[2]["lng"]]).bindPopup("<h1>" + top5_2019[2]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2019[2]["happiness_rank"] + "</h3>")

  var nor19 = L.marker([top5_2019[3]["lat"], 
  top5_2019[3]["lng"]]).bindPopup("<h1>" + top5_2019[3]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2019[3]["happiness_rank"] + "</h3>")

  var fin19 = L.marker([top5_2019[4]["lat"], 
  top5_2019[4]["lng"]]).bindPopup("<h1>" + top5_2019[4]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2019[4]["happiness_rank"] + "</h3>")



// #####################################################################################

// adding markers for bottom 5 2019

  var tan19 = L.marker([bottom5_2019[0]["lat"], 
  bottom5_2019[0]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2019[0]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2019[0]["happiness_rank"] + "</h3>")

  var rwa19 = L.marker([bottom5_2019[1]["lat"], 
  bottom5_2019[1]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2019[1]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2019[1]["happiness_rank"] + "</h3>")

  var yem19 = L.marker([bottom5_2019[2]["lat"], 
  bottom5_2019[2]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2019[2]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2019[2]["happiness_rank"] + "</h3>")

  var mal19 = L.marker([bottom5_2019[3]["lat"], 
  bottom5_2019[3]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2019[3]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2019[3]["happiness_rank"] + "</h3>")

  var afg19 = L.marker([bottom5_2019[4]["lat"], 
  bottom5_2019[4]["lng"]], {icon: redMarker}).bindPopup("<h1>" + bottom5_2019[4]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2019[4]["happiness_rank"] + "</h3>")

  var c19 = L.layerGroup([neth19, ice19, den19, nor19, fin19, tan19, rwa19, yem19, mal19, afg19]);

  


// object for base map 
var baseMaps = {
  "initLayer": initLayer
}

// tilelayer for country markers 
var overlayMaps = {
  "c15": c15,
  "c16": c16,
  "c17": c17,
  "c18": c18,
  "c19": c19
}

L.control.layers(baseMaps, overlayMaps).addTo(myMap);



