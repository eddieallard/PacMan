console.log("main.js hooked up");

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#eatform").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newEaten = $(this).data("neweaten");

    var newlyEaten = {
      eaten: newEaten
    };

    // Send the PUT request.
    $.ajax("/api/ghosts/" + id, {
      type: "PUT",
      data: newlyEaten
    }).then(
      function() {
        console.log("changed eaten to", newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newGhost = {
      name: $("#ca").val().trim(),
      eaten: $("[name=eaten]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/ghosts", {
      type: "POST",
      data: newGhost
    }).then(
      function() {
        console.log("created new ghost");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
    
    $(".delete-ghost").on("click", function (event){
    var id = $(this).data("id");
  
    //Send the DELETE request.
    $.ajax("/api/ghosts/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted ghost", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
})});