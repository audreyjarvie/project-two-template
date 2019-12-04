// your script file for adding your own jquery
$(function() {


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};

 $("#follow-button").click(function(){
    if ($("#follow-button").text() == "+ Follow"){
      // *** State Change: To Following ***      
      // We want the button to squish (or shrink) by 10px as a reaction to the click and for it to last 100ms    
      $("#follow-button").animate({ width: '-=10px' }, 100, 'easeInCubic', function () {});
      
      // then now we want the button to expand out to it's full state
      // The left translation is to keep the button centred with it's longer width
      $("#follow-button").animate({ width: '+=45px', left: '-=15px' }, 600, 'easeInOutBack', function () { 
        $("#follow-button").css("color", "#fff");
        $("#follow-button").text("Following");

        // Animate the background transition from white to green. Using JQuery Color
        $("#follow-button").animate({
          backgroundColor: "#2EB82E",
          borderColor: "#2EB82E"
        }, 1000 );
      });
    }else{
      
      // *** State Change: Unfollow ***     
      // Change the button back to it's original state
      $("#follow-button").animate({ width: '-=25px', left: '+=15px' }, 600, 'easeInOutBack', function () { 
        $("#follow-button").text("+ Follow");
        $("#follow-button").css("color", "#3399FF");
        $("#follow-button").css("background-color", "#ffffff");
        $("#follow-button").css("border-color", "#3399FF");
      });
    }
  }); 
 



