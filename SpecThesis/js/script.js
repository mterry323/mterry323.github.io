$(document).ready(function() {

  //get list of divs
  var div = $(".thumb").toArray();

  //randomly print them back out.
  while (div.length > 0) {
    var idx = Math.floor((Math.random() * (div.length - 1)));
    var element = div.splice(idx, 1);
    $('body').append(element[0]);
  }
});
