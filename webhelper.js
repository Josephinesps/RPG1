window.onload = start;
var options=[];
var buttonElement = document.getElementById("button1");
var currentstory = document.getElementById("currentStory");
var storytext = document.getElementById("storyText");
storyText.innerHTML="<h1>Testing</h1>";
var dropdown = document.getElementById("choices");
var messages = [];
var choices;
var answer;
var hasImage = false;

function start() {
  setup();
  scene1();
}

function setup() {
  story("Game Loading");
  options=["test 1", "test 2", "test3"];
  setOptions(options); 
  buttonElement.innerHTML = "What will you do?"; 
  buttonElement.setAttribute("onclick", "checkAnswers(dropdown.value)");
}

function setOptions(options) {
  while (dropdown.options.length) {
    dropdown.remove(0);
  }
  for (var i = 0; i < options.length; i++) {
    var option = new Option(options[i]);
    dropdown.options.add(option);
  }
}

function story(text) {
  storytext.innerHTML = text;
}

function delayText(text, delay) {
  var index = 0;
  story("");
  var callback = function (text) {
    story(storytext.innerHTML  + text[index]+ "<br />"+ "<br />");
    index += 1;
    if (index >text.length-1){
      clearInterval(timer);
    }
  }
  var timer = setInterval(function () {
    callback(text);
  }, delay);
}

function addImage(imageURL){
  let image = document.createElement("img");
  image.src = imageURL;
  image.setAttribute("width", "400px");
  var storyBox = document.getElementById("storybox");
  if (hasImage == true) {
      storyBox.innerHTML="";
  }
  storyBox.appendChild(image);
  hasImage = true;
}