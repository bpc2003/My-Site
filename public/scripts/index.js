// Alter hello there text if it's clicked
let alterText = false;

$("#hello-there").click(function() {
  // set alterText state to opposite of itself
  alterText = !alterText;

  // if alterText state is true, change text to "General Kenobi"
  // else set it to "Hello There"
  if(alterText) {
    $("#hello-there").text("General Kenobi");
  } else {
    $("#hello-there").text("Hello There");
  }
});
