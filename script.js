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
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
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
  
  alert(document.getElementById("content-area").innerHTML);
  alert(document.getElementById("certifications").innerHTML);
  alert(document.getElementById("about-me").innerHTML);
  var mainArea=document.getElementById("content-area");
  mainArea.innerHTML=document.getElementById("about-me").innerHTML;
      alert(document.getElementById("certifications").innerHTML);
  alert(document.getElementById("about-me").innerHTML);

}
// Get the offset position of the navbar
 

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollHeader() {
  if (window.pageYOffset > stickyLimit) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var totalScroll=0;
function extraScroll(elementId) {
      alert(document.getElementById("certifications").innerHTML);
  alert(document.getElementById("about-me").innerHTML);
  
    var targetElement=document.getElementById(elementId);
    //targetElement.style.top=targetElement.style.top+scrollSize;
    var contentArea=document.getElementById("content-area");  
    var element = document.createElement("div");
    element.innerHTML=targetElement.innerHTML;
    element.id='currentContent';
 console.log('t ' + targetElement.innerHTML);
    console.log('c '+contentArea.innerHTML);
   contentArea.appendChild(element);
   
//    contentArea.innerHTML=targetElement.innerHTML;
  }
