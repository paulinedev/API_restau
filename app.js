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
var ham = document.getElementById('hamburger');
//ham.addEventListener("click", navi, false);
function navi(){
  var elem = document.getElementById('navigation');
  elem.style.visibility = 'visible';
};
//SORTIR DU MENU
var exit = document.getElementById('exit');
exit.addEventListener("click", outside, false);
function outside(){
  var elem2 = document.getElementById('navigation');
  elem2.style.visibility = 'hidden';
};
