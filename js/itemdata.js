// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});


var ref = new Firebase("https://homelessspence.firebaseio.com/");

ref.set({
  title: "Hello World!",
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});
var places = ref.child("places");
places.set({
  one: {
    place_name: "Neighborhood Coalition-Shelter",
    food: true,
    water: true,
    clothing: true,
    toiletries: true
  },
  two: {
    place_name: "Covenant House",
    food: true,
    water: true,
    clothing: true,
    toiletries: true
  },
  three: {
    place_name: "Safe Haven",
    food: true,
    water: true,
    clothing: true,
    toiletries: true
  },
  four: {
    place_name: "Nazareth Housing",
    food: true,
    water: true,
    clothing: true,
    toiletries: true
  },
  five: {
    place_name: "New York City Rescue Mission",
    food: true,
    water: true,
    clothing: true,
    toiletries: true
  },
  six: {
    place_name: "Women In Need Inc",
    food: true,
    water: true,
    clothing: true,
    toiletries: true
  }
});
