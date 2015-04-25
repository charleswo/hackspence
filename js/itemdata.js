// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://homelessspence.firebaseio.com/");
