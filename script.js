$(document).ready(function() {
    // Example of adding interactivity, e.g., changing the background color
    $("header").hover(
      function() {
        $(this).css("background-color", "#555");
      }, 
      function() {
        $(this).css("background-color", "#333");
      }
    );
  });