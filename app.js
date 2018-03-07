// on vérifie que notre navigateur supporte les service workers
if('serviceWorker' in navigator) {
  // si oui, on essaie d'enregistrer notre service worker
  try {
    navigator.serviceWorker.register('service-worker.js');
  }
  catch (error) {
    // si ça échoue, on écrit un message d'erreur
    console.log('Error while registering the service worker.');
    console.log(error);
  }
}
//MENU HAMBURGER
// var ham = document.getElementById('hamburger');
// //ham.addEventListener("click", navi, false);
// function navi(){
//   var elem = document.getElementById('navigation');
//   elem.style.visibility = 'visible';
// };
$('#hamburger').click(function(){
    $('#navigation').fadeIn();
});
//SORTIR DU MENU
// var exit = document.getElementById('exit');
// exit.addEventListener("click", outside, false);
// function outside(){
//   var elem2 = document.getElementById('navigation');
//   elem2.style.visibility = 'hidden';
// };
$('#exit').click(function(){
    $('#navigation').fadeOut(400);
});

var menu = {
  plat1:"burger",
  plat2:"bobun",
  dessert:{
    dessert1:"tarte_fraise",
  },
};
console.log(menu.dessert.dessert1);

//MAP Geolocalisé

 var map = L.map('map');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
   maxZoom: 18
 }).addTo(map);

   map.locate({setView: true, maxZoom: 16});
   function onLocationFound(e) {
   var radius = e.accuracy / 2;

   L.marker(e.latlng).addTo(map)
       .bindPopup("Vous êtes à au moins " + radius + " mètres de ce point").openPopup();

   L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);
function onLocationError(e) {
   alert(e.message);
}

map.on('locationerror', onLocationError);

// var map = L.map('map').setView([48.866667, 2.333333], 13);
//
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);
//
// L.marker([48.866667, 2.333333]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();
//
//     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//   maxZoom: 18,
//   id: 'mapbox.streets',
//   accessToken: 'your.mapbox.access.token'
// }).addTo(mymap);
