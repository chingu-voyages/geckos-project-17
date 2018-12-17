

(function() {

  var timer,
      js = document.getElementById('js'),
      delay = 2000;

  js.onkeyup = function(event) {

    if (typeof timer != "undefined") {

      clearTimeout(timer);
      timer = 0;
    }

    timer = setTimeout(executeCode, delay);
  };

 function executeCode() {
    var script = document.createElement("script");
    script.innerHTML = js.innerHTML;
    js.parentNode.insertBefore(script, js);
 }

})();