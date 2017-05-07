var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="white-text role">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="colored-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="colored-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="colored-text">email</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="colored-text">github</span><a href="#" target="_blank" class="white-text inline-link">%data%</a></li>';
var HTMLlinkedin = '<li class="flex-item"><span class="colored-text">linkedIn</span><a href="#" target="_blank" class="white-text inline-link">%data%</a></li>';
var HTMLtwitter = '<li class="flex-item"><span class="colored-text">twitter</span><a href="#" target="_blank" class="white-text inline-link">%data%</a></li>';
var HTMLlocation = '<li class="flex-item"><span class="colored-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#" target="_blank">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#" target="_blank">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#" target="_blank">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#" target="_blank">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<a href="#" target="_blank" class="certificate">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

var HTMLiconSkype = '<a><i class="fa fa-skype fa-2x" title="#" aria-hidden="true"></i></a>';
var HTMLiconLinkedin = '<a href="#" target="_blank"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>';
var HTMLiconGithub = '<a href="#" target="_blank"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>';

var data = "%data%";

window.bio = {
  name: "Wolfgang Becker",
  role: "Web Developer",
  contacts: {
    mobile: "+52 1 222 765 4633",
    email: "juan.becker2@gmail.com",
    github: "donboli",
    linkedin: "https://mx.linkedin.com/in/juan-wolfgang-a-becker-1b41991b",
    twitter: null,
    skype: "wolfgangbecker2",
    location: "Puebla, Mexico"
  },
  welcomeMessage: "Hi, I'm a web developer with 2 years of experience using the Ruby on Rails framework. I've recently become more interested in front-end development frameworks, such as React. Overall, I'm always keen on learning new technologies.",
  skills: [
    "HTML", "CSS", "Javascript", "Ruby on Rails", "React", "Bootstrap", "Java", "SQL", "Git"
  ],
  biopic: require("../images/me.jpg"),

  display: function() {
    var template = require('../templates/bio.hbs');
    var bioHTML = template(this);

    $('#header').prepend(bioHTML);

    bio.displayFooter();
  },

  displayFooter: function() {
    var template = require('../templates/footer.hbs');
    var footerHTML = template(this);

    $("#lets-connect").append(footerHTML);
  }
};

window.education = {
  schools: [{
    name: "Universidad de Belgrano",
    location: "Buenos Aires",
    degree: "Diploma",
    major: "Computer Engineering",
    dates: "March 2008 - December 2015",
    url: "http://www.ub.edu.ar/"
  }],
  onlineCourses: [{
    title: "HTML5 Part 1: HTML5 Coding Essentials and Best Practices",
    school: "edX",
    dates: "October 2015 - December 2015",
    url: "https://www.edx.org/course/html5-part-1-html5-coding-essentials-w3cx-html5-1x-1",
    certificate: "https://courses.edx.org/certificates/4f142509922c4cc4a9d3a5ee1f331f50"
  }, {
    title: "HTML5 Part 2: Advanced Techniques for Designing HTML5 Apps",
    school: "edX",
    dates: "December 2015 - January 2016",
    url: "https://www.edx.org/course/html5-part-2-advanced-techniques-w3cx-html5-2x-1",
    certificate: "https://courses.edx.org/certificates/9eafdeb1e4e740fa9c325a5359032c10"
  }],

  display: function() {
    var template = require('../templates/education.hbs');
    var educationHTML = template(this);

    $("#education").append(educationHTML);
  }
};

window.work = {
  jobs: [{
    employer: "EnvíaYa!",
    title: "Ruby on Rails Developer",
    location: "Remote (from Puebla)",
    dates: "May 2015 - May 2016",
    description: "Development, maintenance and rework of the overall company's web application. Customization and further development of APIs towards logistics carriers (e. g. DHL, UPS, FedEx and Redpack). Integration of payment gateways: PayPal, Stripe, Conekta and PayU.",
    url: "https://enviaya.com.mx"
  }, {
    employer: "Redmint",
    title: "Ruby on Rails Developer",
    location: "Buenos Aires",
    dates: "June 2014 - December 2014",
    description: "Maintenance and development of web applications built with Ruby on Rails.",
    url: "http://redmintlabs.com/"
  }],

  display: function() {
    var template = require('../templates/work.hbs');
    var workHTML = template(this);

    $("#workExperience").append(workHTML);
  }
};


window.projects = {
  projects: [{
    title: "Portfolio",
    dates: "October 2016",
    description: "A fully responsive portfolio page",
    images: [require("../images/portfolio.png")],
    repository: "https://github.com/donboli/portfolio"
  }],

  display: function() {
    var template = require('../templates/projects.hbs');
    var projectsHTML = template(this);

    $("#projects").append(projectsHTML);
  }
};

bio.display();
projects.display();
work.display();
education.display();

$("#mapDiv").append(googleMap);

// Avoid flashes of unstyled content during page load
$(window).load(function() {
  $("body").css("visibility", "visible");
});