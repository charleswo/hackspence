var map = L.map('map').setView([40.7840468, -73.9570915], 13);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
  maxZoom: 17,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'examples.map-i875mjb7'
}).addTo(map);


function make_marker(lat,long,name,disp1,disp2){
  L.marker([lat, long]).addTo(map)
    .bindPopup("<b>" + name + "</b><br />" + disp1 + "<br>" + disp2 + "</br>").openPopup();
  }

    make_marker(40.7840468, -73.9570915, "current location", "you are", "here");
    make_marker(40.77947229999999, -73.95479219999999, "Neighborhood Coalition-Shelter", "157 E 86th St", "(212) 249-3595");
    make_marker(40.7653925, -73.98903860000001, "Covenant House", "427 W 52nd St","(212) 247-5670");
    make_marker(40.7629981, -73.99221299999999, "Safe Haven", "448 W 48th St","(212) 246-8321");
    make_marker(40.723658, -73.984127, "Nazareth Housing", "206 E 4th St","(212) 477-7017");
    make_marker(40.7175359, -74.00162109999997, "New York City Rescue Mission", "90 Lafayette St","(212) 226-6214");
    make_marker(40.7483775, -73.9897302, "Women In Need Inc", "115 W 31st St","(212) 695-4758");

L.circle([40.7840468, -73.9570915], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map).bindPopup("I am a circle.");

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);
