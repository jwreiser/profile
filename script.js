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

var aboutMe=`\<section id="about-me" class="about-container"\>
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
    \</section\>`;

var skills=`
    <section id="skills">
      <h2>Skills</h2>
      <div style="clear:both;"></div>

      <div class="all_skills">
        <div class="skill">
            <img src="https://res.cloudinary.com/da81thphx/image/upload/v1683980803/duke_Wave_w5turk.png"/>
            <h6>Java</h6>
            <p>16 years experience</p>
        </div>  
        <div class="skill">
            <img src="https://res.cloudinary.com/da81thphx/image/upload/v1683981591/sql_kzdxjx.png"/>
            <h6>SQL</h6>
            <p>16 years experience</p>
        </div>    
        <div class="skill">
            <img src="https://res.cloudinary.com/da81thphx/image/upload/v1683982657/hibernate_tecilw.svg"/>
            <h6>Hibernate</h6>
            <p>10 years experience</p>
        </div>         
        <div class="skill">
            <img src="https://res.cloudinary.com/da81thphx/image/upload/v1683982895/webservices_jug483.svg"/>
            <h6>RESTful web services</h6>
            <p>4 years experience</p>
        </div>  
        <div class="skill">
            <img src="https://res.cloudinary.com/da81thphx/image/upload/v1683983166/microservices_lyok2k.png"/>
            <h6>Microservices</h6>
            <p>2 years experience</p>
        </div>    
        <div class="skill">
            <img src="https://res.cloudinary.com/da81thphx/image/upload/v1683981296/spring_j1vinh.gif"/>
            <h6>Spring</h6>
            <p>5 years experience</p>
        </div>  
        <div class="skill">
            <img src="https://res.cloudinary.com/da81thphx/image/upload/v1683981296/spring_j1vinh.gif"/>
            <h6>Spring Boot</h6>
            <p>2 years experience</p>
        </div>  
        <div class="skill">
            <img src="https://res.cloudinary.com/da81thphx/image/upload/v1683981296/spring_j1vinh.gif"/>
            <h6>Spring MVC</h6>
            <p>2 years experience</p>
        </div>  
        <div class="skill">
            <img src="https://res.cloudinary.com/da81thphx/image/upload/v1683981296/spring_j1vinh.gif"/>
            <h6>Spring Data</h6>
            <p>2 years experience</p>
        </div>  
        <div class="skill">
          <img src="html_finalprojimages/html5.png"/>
          <h6>HTML</h6>
          <p>1 year experience</p>
        </div>  

        <div class="skill">
          <img src="html_finalprojimages/js.jpeg"/>
          <h6>JavaScript</h6>
          <p>1 year experience</p>
        </div>  
      </div>
    </section>`
var projects=`
 <section class="projects" id="projects">
      <h2>
        Projects
      </h2>
      <div style="clear:both;"></div>

        <div id="projects-container" class="projects-container">
          <div class="project-card">
            <h3>Neural Network Visualizer</h3>
            <ul>
              <li>Created pair of programs that use NEURON to simulate large neural networks. First program uses Java to generate a hoc program (NEURON's native language) using easy-to-understand input files that allow users not familiar with hoc to model neural networks. Second program uses C++/OpenGL to visualize how the neurons modeled in the previously mentioned program fire.</li>
            </ul>
          </div>
          <div class="project-card">
            <h3>Web Search Optimizer</h3>
            <ul>
              <li>Created program that allows users to simultaneously search several websites. Program concurrently visits individual websites and aggregates search results. Results are filtered and prioritized according to user input, allowing users to more efficiently parse search results.</li>
            </ul>
          </div>
          <div class="project-card">
            <h3>Scrapbook Builder</h3>
            <ul>
              <li>Created a tool to upload images to a website and then automatically display them</li>
            </ul>
          </div>
          <div class="project-card">
            <h3>Tetris Clone</h3>
            <ul>
              <li>Developed a Tetris Clone using C++</li>
            </ul>
          </div>
          <div class="project-card">
            <h3>Instant Messenger</h3>
            <ul>
              <li>Developed an application for message sending</li>
            </ul>
          </div>
    </div>
    </section>
`;
var totalScroll=0;
function extraScroll(elementId) {
  switch(elementId){
    case "about-me":
      document.getElementById("content-area").innerHTML=aboutMe;
      break;
    case "skills":
      document.getElementById("content-area").innerHTML=skills;
      break;
     case "projects":
      document.getElementById("content-area").innerHTML=projects;
      break;
  }//switch
}//function 
