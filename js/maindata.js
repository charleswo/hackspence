var ref = new Firebase("https://homelessspence.firebaseio.com/");

var places = ref.child("places");
ref.update({
  one: {
    food: false,
    water: false,
    clothing: false,
    toiletries: false
  }
});

ref.once("value", function(data) {
  var name = "John Smith";
  $("#name").text(name);
});
