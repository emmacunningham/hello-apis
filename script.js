// Write all of your code inside this function
// Code executed in this function will run when the page is ready
function pageReady() {

  // This code makes an HTTP GET REQUEST to the OMDb API
  // the RESPONSE represents the data from OMDb
  $.get( "http://www.omdbapi.com/?s=" + searchInput, function( response ) {
    console.log(response);
  });

  // This code sets up our search button so that when we click it,
  // we get whatever the user typed in the input box
  $('.search-button').click(function() {
    var searchInput = $('.search-input').val();
    console.log(searchInput);
  });

}

// This code will make an HTTP GET REQUEST to the Giphy API searching the cats tag
// We're not doing anything with the response right now, but try using console.log!
$.get( "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats", function(response) {

});

$(document).ready(pageReady);