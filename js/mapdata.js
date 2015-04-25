var map = L.map('map').setView([40.7840468, -73.9570915], 13);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
  maxZoom: 17,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'examples.map-i875mjb7'
}).addTo(map);




function make_marker(lat,long,name,disp){
  L.marker([lat, long]).addTo(map)
    .bindPopup("<b>" + name + "</b><br />" + disp).openPopup();
  }

  var lat = ["40.77947229999999","40.7653925"];
  var long = ["-73.95479219999999","-73.98903860000001"];
  var name = ["Neighborhood Coalition-Shelter","Covenant House"];
  var disp = ["157 E 86th St, (212) 249-3595","427 W 52nd St (212) 247-5670"];

make_marker(40.77947229999999, -73.95479219999999, "Neighborhood Coalition-Shelter", "157 E 86th St, (212) 249-3595");

    L.marker([40.7840468, -73.9570915]).addTo(map)
            .bindPopup("<b>current location</b><br />you are here.").openPopup();




    L.marker([40.7629981, -73.99221299999999]).addTo(map)
            .bindPopup("<b> Safe Haven</b><br >448 W 48th St<br> (212) 246-8321").openPopup();

    L.marker([40.723658, -73.984127]).addTo(map)
                    .bindPopup("<b> Nazareth Housing</b><br >206 E 4th St<br> (212) 477-7017").openPopup();

    L.marker([40.7175359, -74.00162109999997]).addTo(map)
                            .bindPopup("<b> New York City Rescue Mission</b><br >90 Lafayette St<br> (212) 226-6214").openPopup();

    L.marker([40.7483775, -73.9897302]).addTo(map)
                                                    .bindPopup("<b> Women In Need Inc</b><br >115 W 31st St<br> (212) 695-4758").openPopup();

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
