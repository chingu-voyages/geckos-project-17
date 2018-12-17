$(document).ready(function() {
  // variables
  let currentChallenge = 0;
  let challengePane = ``;
  let test = true;
  let alert = "test failed";

  //functions
  const challengeComplete = function() {
    $(".modal").css("display", "block");
  }

  const pageUpdate = function() {
    challengePane = `<h2>${euler[currentChallenge].title}</h2><p>${euler[currentChallenge].description}</p>`;
    $('#challenge').empty();
    $(challengePane).appendTo('#challenge');
    $(".modal").css("display", "none");
    // also updates source for tests and editor seed
  }
  
  //run on load
  pageUpdate();

  //click events
  $("#test").click(function() {
    $("#alerts").empty();
    if (test === true) {
      challengeComplete();
    } else {
      $(alert).appendTo('#alerts');
    }
  }); 

  $("#reset").click(function() {
    confirm("are you sure you want to reset the challenge?");
    //will reset the code editor
  });

  $("#next").click(function() {
    currentChallenge += 1;
    pageUpdate();
  });

  $("#return").click(function() {
    $(".modal").css("display", "none");
  });

}); //end document ready