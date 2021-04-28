# Static Node and Express Site Unit 6
 
A project to showcase other projects. The static website uses Pug, Express, and Node to display an image and link for each project. Each project has a dedicated page with pictures and description.

Changes that aren't in css:
    Added a home button to sidebar
    '/Project' (with no project number) redirects back to root rather than throw an error


From the provided script.css, the following changed:

body
    background: rgb(5, 69,2) //black to green

.sidebar
    background: rgb(5,69,2) //black to green

.sidebar a
    color: #fefefe //gray to white

@keyframes shimmy {
  0%{ transform: rotate(0deg);}
  25%{ transform: rotate(5deg);}
  75%{ transform: rotate(-5deg);}
  100%{ transform: rotate(0deg);}
}                                    //shake animation

.portfolio-intro h1
    text-shadow: 4px 2px 10px #333; //text shadow behind header text on homepage
    rgb(5, 69, 2) //black to green

.cell img
    box-shadow: 8px 8px 5px 1px rgba(10, 10, 10, 0.2); //box shadow for project images

.cell img:hover {  
    box-shadow: 8px 8px 0px 1px rgba(10, 10, 10, 0.2);
    animation: shimmy .2s;
    animation-iteration-count: 1;
}  //images shake once when hovered over
