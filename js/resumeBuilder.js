
var bio = {
  "name" : "Marius",
  "age" : 30,
  "role" : "CodeNewbie",
  "contacts" : {
    "email" : "marius@kildedal.no",
    "mobile" : "555-1010-1010",
    "github" : "Drivez",
    "twitter" : "@MariusKildedal",
    "location" : "Kristiansand"
  },
  "bioPic" : "images/me.png",
  "welcomeMsg" : "Hello and welcome",
  "skills" : ["awsomness", "wireless", "network" ]
};

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMsg = bio.welcomeMsg;
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", welcomeMsg);
$("#header").append(formattedWelcomeMsg);

var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

$("#workExperience").append(HTMLworkStart);

var work = {
  "job_position" : "Consultant",
  "employer" : "Atea",
  "years" : 6,
  "city" : "Kristiansand"
};

var position = work.job_position;
var formattedPostion = HTMLworkTitle.replace("%data%", position);
$("#workExperience").append(formattedPostion);

var employer = work.employer;
var formattedEmployer = HTMLworkEmployer.replace("%data%", employer);
$("#workExperience").append(formattedEmployer);

var years = work.years;
var formattedYears = HTMLworkDates.replace("%data%", years);
$("#workExperience").append(formattedYears);
