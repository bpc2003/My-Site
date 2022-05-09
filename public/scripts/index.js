$(document).ready(function() {
  // animate plane
  $("#plane").animate({
    left: "90%"
  }, 3000).fadeOut(1);

  // fade in header, subheader, and clouds
  setTimeout(function() {
    $(".header, .subheader, .cloud").fadeIn(1000);
  }, 3000);
});


// offset the cloud images
let offset = Math.floor(Math.random() * 30) + 40;

$(".cloud-1").css("left", offset + "%");
$(".cloud-2").css("right", offset + "%");

// If the cursor hovers over the hand, rotate it
$(".hand-wave").hover(function() {
  $(".hand-wave").addClass("rotate");
}, function() {
  $(".hand-wave").removeClass("rotate");
});


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
