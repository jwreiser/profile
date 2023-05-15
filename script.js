
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
 document.getElementById("content-area").innerHTML=aboutMe;
}
 

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollHeader() {
  if (window.pageYOffset > stickyLimit) {
    var location=window.scrollY + window.innerHeight;
   document.getElementById('navHeader').style.bottom=location;
   document.getElementById('navHeader').style.top='auto';
  } else {
    document.getElementById('navHeader').style.top=0;
   document.getElementById('navHeader').style.bottom='auto';
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
          <img src="https://res.cloudinary.com/da81thphx/image/upload/v1684174979/html5_c48lq0.png"/>
          <h6>HTML</h6>
          <p>1 year experience</p>
        </div>  
         <div class="skill">
          <img src="https://res.cloudinary.com/da81thphx/image/upload/v1684174979/CSS3_uk2yqi.png"/>
          <h6>CSS</h6>
          <p>1 year experience</p>
        </div>  
        <div class="skill">
          <img src="https://res.cloudinary.com/da81thphx/image/upload/v1684174979/js_ihzwv0.jpg"/>
          <h6>JavaScript</h6>
          <p>1 year experience</p>
        </div>  
      </div>
    </section>`
var certifications=`
  <section id="certifications">
        <h2>Certifications</h2>
        <div style="clear:both;"></div>
  
        <div class="all_certifications">
          <div class="certification">
            <a href="https://coursera.org/share/1246bc4d29ce578c75109ad8633417a1"> Cloud Technical Essentials</a>
            <ul>
                <li>Security</li> 
                <li>Compute</li>
                <li>Networking</li>
                <li>Storage</li>
                <li>Databases</li>
                <li>Monitoring</li> 
                <li>Optimization</li>
              </ul>
          </div>  
          <div class="certification">
            <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/FZLJKQ9FTS4N">Spring Framework Specialization 
                (4 courses)</a>
            <ul>
                <li>Spring AOP</li> 
                <li>Spring Cloud</li>
                <li>Spring Data</li>
                <li>Transactions</li>
                <li>Spring MVC</li>
                <li>Spring Boot</li> 
                <li>Spring Core</li>
              </ul>
          </div>  
          
        </div>
      </section>`;
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

var recommendations=`
<section id="recommendations">
      <h2>Recommendations</h2>
      <div style="clear:both;"></div>
      <div class="all_recommendations" id="all_recommendations">
        <div class="recommendation">
          <span>&#8220;</span>
          Justin and I worked together for a year and a half, and He is dedicated and hardworking. Justin has a good understanding of OOP principles and picks up new patterns, technologies and concepts quickly and well. Justin also dedicates himself to the success of those around him to become their personal best.
          <span>&#8221;</span>
        </div>
        <div class="recommendation">
          <span>&#8220;</span>
          I worked on the same project with Justin for about a year. Justin completed his tasks and did them well. He was also willing to help out other team members in times of need. Justin took initiative to research new tools, and continue learning for his own development. Justin was able to bring concerns to the team in a productive way. I feel that he would be an asset to any team.
          <span>&#8221;</span>
        </div>
        <div class="recommendation">
          <span>&#8220;</span>
          I had the pleasure of working with Justin for 5 years at the TCI, collaborating on several projects. Justin is a very detailed oriented Java developer and always thinks out of the box solutions to solve a problem. I find he can work either independently or as an integrated team member. Justin's knowledge about Credit Bureaus is incredible and he will be a great asset to any team.
          <span>&#8221;</span>
        </div>
        <div class="recommendation">
            <span>&#8220;</span>
            I worked with Justin for about six years at TCI, the last year and a half as his manager. During that time he was one of the main developers for critical components in the product that allowed customers to write business rules for loan applications based on credit report attributes. He also spear-headed two new projects: a new testing framework with UI to allow customers and QA to more efficiently perform UAT, and an analysis tool that would detect and report on customer configuration errors. He has strong technical proficiency and a thoughtful and inquisitive nature which was a large plus for my team and the product. Finally he was always helpful and never hesitated in aiding more junior engineers when needed.
            <span>&#8221;</span>
          </div>
          <div class="recommendation">
            <span>&#8220;</span>
            Justin is a great asset to the team, who have been working with in dev department for many years. He is very professional and always maintains a positive attitude. He responded to problems without getting angry or frustrated. His most outstanding “value” from what I have seen is the attitude towards continuous improvement.   <span>&#8221;</span>
          </div>
          <div class="recommendation">
            <span>&#8220;</span>
            I have closely worked with Justin at TCI, where we developed and maintained the company's flagship Loan Origination SaaS offering: DecisionLender. He is highly proficient in Java and software engineering best practices. In addition he is really good at understanding business requirements and can express them in a techie friendly way. He was my to go person when I needed to understand domain specific topics. In addition he is a friendly person and can go above and beyond his responsibilities to do the right thing. 
          </div>
  
      </div>
    </section>
`;
var social=`<section class="social" id="social">
    <h2>
        Social Responsibility
    </h2>
    <div style="clear:both;"></div>
   <div id="social-container" class="social-container">
    <div class="social-card">
      <h3>AmeriCorps/
        Student Conservation Association Estuary Steward</h3>
    </div>
    <div class="social-card">
      <h3> Boy Scouts (Eagle, Sr. Patrol Leader)</h3>
    </div>
    <div class="social-card">
      <h3>Community Emergency Response Team (CERT)</h3>
        </div>
    <div class="social-card">
      <h3>Red Cross Volunteer</h3>
    </div>
</div>
</section>
`;

function switchTabs(elementId) {
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
      case "certifications":
      document.getElementById("content-area").innerHTML=certifications;
      break;
      case "social":
  console.log('social');
      document.getElementById("content-area").innerHTML=social;
      break;    
      case "recommendations":
    console.log('recommendations');
      document.getElementById("content-area").innerHTML=recommendations;
      break;
  }//switch
}//function 
