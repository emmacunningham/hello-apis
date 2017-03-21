// Write all of your code inside this function
// Code executed in this function will run when the page is ready
function pageReady() {

  $.get( "http://www.omdbapi.com/?s=samurai", function( response ) {
    console.log(response);
  });


}


$(document).ready(pageReady);