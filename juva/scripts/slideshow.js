//  a variable to slideNumber, launch it to 1
var slideNumber = 1;
showSlide(slideNumber);

// if prev but is placed , then n = -1
// if Next but is placed, then n = 1
function switchSlide(n) {
  showSlide(slideNumber += n);
}

// slide with N number
function showSlide(n) {
  var slides = document.getElementsByClassName("slide");  // the slides are found and place them in specific order variable
  var dots = document.getElementsByClassName("dot");      // // the dots are found and place them in specific order variable
  
  // if  the N is greater than the slides numbers, then slideNumber is 1
  if (n > slides.length) {slideNumber = 1;}
  
  // else, if the N is less than slide number, then set slideNumber to the number of the last slide
  else if (n < 1) {slideNumber = slides.length;}

  // if none of conditions are true, then slideNumber is equal to number as N
  else {slideNumber = n;}

  //Loop which appears all the slides and adds inline styling to each of them:
  //The following style attribute will be included to each .slide: style="display: none;"
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  //Another loop, which goes through all the dots and deletes .active class from all of them by replacing it with empty string
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // all slides and dots stored inside arrays can be estimated using index, which is based-zero
  // slides(0) is the first slide; slide(1) is the second slide; slide(3) is the third slide
// the same things for dots – the index equals to dot/slide number - 1
  slides[slideNumber-1].style.display = "block";  // the current slide is displaying other is faded
  dots[slideNumber-1].className += " active";     // dot is active due to the active class
}
