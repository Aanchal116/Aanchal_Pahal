window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

    document.getElementById("navbar").style.backgroundColor = "black";
    var element = document.getElementById("about-div");
    element.classList.add("slide-right");
  } 
  else{
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }


}


