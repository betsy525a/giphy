// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  var user_input = $("#search-term").val();
  var rand_num = Math.floor(Math.random() * 20);
  
  $.ajax({
      url: "https://api.giphy.com/v1/gifs/search?q=" + user_input + "&rating=pg&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
          $("#images").empty();
          $("#images").append("<img src='" + response.data[rand_num].images.original.url + "'>");
      }
  });
});

$("#rand-bun").click(function(){
  var rand_num1 = Math.floor(Math.random() * 20);
  var rand_num2 = Math.floor(Math.random() * 1000);
  
  $.ajax({
      url: "https://api.giphy.com/v1/gifs/search?q=" + rand_num2 + "&rating=pg&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
          $("#images").empty();
          $("#images").append("<img src='" + response.data[rand_num1].images.original.url + "'>");
      }
  });
});

