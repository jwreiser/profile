function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
//  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  /*} else {
    document.getElementById('popup').style.visibility = 'hidden'
  }*/
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollHeader()};

// Get the header
var header;
var stickyLimit;
var scrollSize;
var firstClick=true;

window.onload=function(){
 header= document.getElementById("navHeader");
 stickyLimit = header.offsetTop;
 scrollSize=header.offsetHeight;
}
 

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollHeader() {
  if (window.pageYOffset > stickyLimit) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var aboutMe='\<section id="about-me" class="about-container"\> \</section\>';
/*
      \<div id="about-image"\>
        \<img src="https://res.cloudinary.com/da81thphx/image/upload/v1683979645/profile_nn5wab.gif" class="profile_image"/\>
      </div>

      \<div id="about-text"\>
          \<h1\>
            Hi, I'm Justin Reiser 
          \</h1\>
          \<br/\>
          \<p\>
            I am a back-end centric java developer with experience in Spring, Spring Boot, Spring MVC, Spring Data and hibernate. I am looking to leverage my skills to help people.
          </p\>
      \</div\>
    */
var totalScroll=0;
function extraScroll(elementId) {
    document.getElementById("content-area").innerHTML=aboutMe;
}
