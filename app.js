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
//
//  var map = L.map('map');
//
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//      maxZoom: 19,
//      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//    maxZoom: 18
//  }).addTo(map);
//
//    map.locate({setView: true, maxZoom: 16});
//    function onLocationFound(e) {
//    var radius = e.accuracy / 2;
//
//    L.marker(e.latlng).addTo(map)
//        .bindPopup("Vous êtes à au moins " + radius + " mètres de ce point").openPopup();
//
//    L.circle(e.latlng, radius).addTo(map);
// }
//
// map.on('locationfound', onLocationFound);
// function onLocationError(e) {
//    alert(e.message);
// }
//
// map.on('locationerror', onLocationError);

//MAP



//    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//  attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
//  maxZoom: 18,
//  id: 'mapbox.streets',
//  accessToken: 'your.mapbox.access.token'
//}).addTo(mymap);


//UserLocation

function success(position) {
  // var crd = position.coords;
  // map.setView([position.coords.latitude, position.coords.longitude], 13);
  var userLat = position.coords.latitude;
  var userLng = position.coords.longitude;
  var map = L.map('map').setView([userLat, userLng], 15);
  console.log(position);
  L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
    console.log('test');

  L.marker([userLat, userLng]).addTo(map)
      .bindPopup('Yo !')
      .openPopup();
      console.log('pr');
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error);
//api
var url =  "https://api.foursquare.com/v2/venues/explore?ll=" + userLat + "," + userlng + "&section=food&radius=500&venuePhotos=1&client_id=ZREIDKU0KAD1QO41XZRNBK30ZZTNJRZXCTDEBAUWQLI0JKVA&client_secret=C2RVJ5KNN2P1L0PF4HAMVYGPPWMVQ4M5JO4QXBKNY0G5QZE4&v=20180101";
$.getJSON(url, function(data) {
  console.log(data.response.groups[0].items[2]);
  console.log(data.response.groups[0].items[2].venue.location.coords.lat);
  console.log(data.response.groups[0].items[2].venue.location.coords.lng);
  $.each(data, function (key, val) {
    // selon ce que vous récupérez de l'API, le code ci-dessous pourrait être à adapter

    // je récupère le bloc venue
    venue = val.venue;

    // je peux accéder aux infos qui m'intéressent, comme la latitude
    // regardez bien la documentation de Foursquare pour plus d'infos
    latitude = venue.location.lat;
    console.log(latitude);
    longitude = venue.location.lng;
    name = venue.name;

    // et j'affiche les marqueurs sur la carte avec les infos de la venue
    L.marker([latitude, longitude]).addTo(map)
        .bindPopup(restoName)
        .openPopup();
  });
  // //Le Petit Cler
  // L.marker([48.857483149509896, 2.3060342848592015]).addTo(map)
  // .bindPopup('Le Petit Cler')
  // .openPopup();
  // //Boucle pour
  // for (var i = 0; i < items[i].length; i++) {
  //   var restoName = data.response.groups[0].items[i].venue.name;
  //   var restoLat = data.response.groups[0].items[i].venue.location.lat;
  //   var restoLng = data.response.groups[0].items[i].venue.location.lng;
  //   L.marker([restoLat, restoLng]).addTo(map)
  //   .bindPopup(restoName)
  //   .openPopup();
  // };
});
