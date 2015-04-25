var map = L.map('map').setView([40.7840468, -73.9570915], 13);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
  maxZoom: 17,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'examples.map-i875mjb7'
}).addTo(map);


var shelters = TAFFY([{lat:"",long:"",name:"",disp:""},{lat:"",long:"",name:"",disp:""},{lat:"",long:"",name:"",disp:""}]);

function make_marker(lat,long,name,disp){
  L.marker([lat, long]).addTo(map)
    .bindPopup("<b>" + name + "</b><br />" + disp).openPopup();
  }


    L.marker([40.7840468, -73.9570915]).addTo(map)
            .bindPopup("<b>current location</b><br />you are here.").openPopup();

    L.marker([40.77947229999999, -73.95479219999999]).addTo(map)
            .bindPopup("<b>Neighborhood Coalition-Shelter</b><br />157 E 86th St<br> (212) 249-3595").openPopup();


    L.marker([40.7653925, -73.98903860000001]).addTo(map)
            .bindPopup("<b>Covenant House</b><br />*what they need* <br> (212) 247-5670").openPopup();

    L.marker([40.7629981, -73.99221299999999]).addTo(map)
            .bindPopup("<b> Safe Haven</b> <br>*What they need* <br> (212) 246-8321").openPopup();

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
