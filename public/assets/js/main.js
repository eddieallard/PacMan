console.log("main.js hooked up");

// Make sure we wait to attach our handlers until the DOM is fully loaded.
  $(".chomp").on("click", function(event) {
    event.preventDefault();
    console.log("button click");
    var id = $(this).attr("data-id");

    // Send the PUT request.
    $.ajax( {
      method: "PUT",
      url: "/ghosts/" + id
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    ).catch(error) {
      console.log(error);
    };
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
