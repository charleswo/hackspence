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
    make_marker(40.745874, -73.97099800000001, "Bideawee", "410 E 38th St","(866) 262-8133");
    make_marker(40.74057699999999, -73.97477099999998, "HRA Men's Shelter", "400 E 30th St","(718) 557-1399");
    make_marker(40.7424195, -73.97808359999999, "Antonio Olivieri Center", "257 W 30th St","(212) 947-3211");
    make_marker(40.7376667, -73.99816440000001, "The Salvation Army", "120 W 14th St","(212) 337-7200");
    make_marker(40.787934, -73.97409270000003, "Capitol Hall Residence", "166 W 87th St","(212) 724-1000");
    make_marker(40.78451039999999, -73.97742189999997, "NCS Residence", "211 E 81st St","(917) 677-4504");
    make_marker(40.81054270000001, -73.94561720000002, "Create Inc", "133 W 128th St","(212) 662-2000");
    make_marker(40.802448, -73.96701329999996, "The Bridge NY", "248 W 108th St","(212) 663-3000");
    make_marker(40.812086, -73.94280300000003, "Aguila, Inc.", "433 Malcolm X Blvd","(212) 234-2402");
    make_marker(40.8095323, -73.94220419999999, "Convent Family Living Center", "34 W 129th St","(212) 866-7816");
    make_marker(40.786508, -73.97072400000002, "Dorot", "44 W 87th St","(212) 580-0001");
    make_marker(40.802995, -73.93665299999998, "Palladia, Inc - Home Base", "2276 3rd Ave","(917) 492-1019");


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
