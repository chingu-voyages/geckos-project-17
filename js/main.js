$(document).ready(function() {
  // variables
  let currentChallenge = 0;
  let challengePane = ``;
  let editorCode = ``;
  let test = true;
  let alert = "test failed";
  let timer;
  let delay = 1000;

  //functions
  const challengeComplete = function() {
    $(".modal").css("display", "block");
  }

  const pageUpdate = function() {
    challengePane = `<h2>${euler[currentChallenge].title}</h2><p>${euler[currentChallenge].description}</p>`;
    editorCode = `<code class="prettyprint">${euler[currentChallenge].seed}
console.log(hello);</code>`; //think the reason prettyprint doesn't work is because css checks it too early or prettier script loads too late
    $('#challenge').empty();
    $(challengePane).appendTo('#challenge');
    $('#editor').empty();
    $(editorCode).appendTo('#editor');
    $(".modal").css("display", "none");
    // also updates source for tests and editor seed
  }

  function printLog() {
    let output = document.createElement("code");
    output.innerHTML = "it worked!" + "<br>";
    $("#console").append(output);
  }

  // //repurposing console.log:
  // (function () {
  //   console.old = console.log;
  //   console.log = function() {
  //     for (let i = 0; i < arguments.length; i++;) {
  //       let arg = arguments[i];
  //       $("#console").innerHTML +="<code class=prettyprint">;
  //       if (
  //         typeof arg === "object" &&
  //         typeof JSON === "object" &&
  //         typeof JSON.stringify === "function"
  //       ) {
  //         $("#console").innerHTML += JSON.stringify(arg);
  //       } else {
  //         $("#console").innerHTML += arg;
  //       };
  //     }
  //     $("#console").innerHTML += "</code><br>";
  //   }
  // }); //end of logger function
  
  //run on load
  pageUpdate();

  //keyup events
  $("#editor").keyup(function() {
    if (typeof timer != "undefined") {
      clearTimeout(timer);
      timer = 0;
    };
    timer = setTimeout(printLog, delay);
  });

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