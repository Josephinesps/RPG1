/* Uses Case Statements */

// variables
// var name = "";
var scene1=sceneTest;

function checkAnswers(answer) {
  switch(answer) {
    case "Sleep in":
      missSchool();
      break;
    case "Start over":
      sceneTest();
      break;
    case "Cancel alarm":
      offAlarm();
      break;
    case "Get dressed":
      getDressed();
      break;
    case "Ignore":
      ignoreDressed();
      break;
    }
}

function sceneTest(){
  story("You're in your bed, struggling to wake up. You've been dreaming of fighting off monsters as if you are a pirate. Although it was cut short when a ringing noise came bearing in!<br>You sat up, still asleep as you scramble to find that horrendous sound... it was your alarm clock.<br>It was a lousy Monday morning, what should you do?");
  choices = ["Sleep in","Cancel alarm"];
  answer = setOptions(choices);
}

function missSchool(){
  story("You snooze your alarm and let it ring before it gives up. You fall back asleep, Hm it seems though you should’ve been awake.<br>You slept in and missed school.");
  choices = ["Start over"];
  answer = setOptions(choices);
}

function offAlarm(){
  story("You forced yourself up as if it was a chore. You turn off your annoying alarm and flick on your lamp and rub your eyes before seeing clear. But now what?");
  choices = ["Get dressed","Ignore"];
  answer = setOptions(choices);
}

function getDressed(){
  story("You get out of bed and get out of your pajamas and put on your outfit for today. You look at yourself in the mirror, you look fabulous!<br>You head towards the kitchen but stop when you see the time. Hm, is it too late for breakfast?");
  choices = ["Eat Breakfast","Skip it"];
  answer = setOptions(choices);
}

function ignoreDressed(){
  story("You get out of bed and get out of your pajamas…that's all.<br>You head towards the kitchen but stop when you feel a cool breeze. Hm could you be missing something?");
  choices = ["Lets eat Breakfast","Skip"];
  answer = setOptions(choices);
}

/*Old text here*/

function town(){
  // var name = prompt("what is your name?");
  ("One day you are on your way home from school and you hear a whisper coming from a dark forest you never remember seeing before.\
  \n\"Come here Come here!\"\
  \nit says. You can't place the voice, but there is something familiar about it. What do you do?");
  choices = ["Think some more", "go into the forest", "ignore it and go home"];
  answer = setOptions(choices);
}

// Places
function thinkSomeMore() {
  story("You think about it some more and are sure this forest was not here yesterday.  \
  \nWhere did it come from and how does it know your name?\
  \nWhat do you want to do?");
  choices = ["go into the forest", "ignore it and go home"];
  answer = setOptions(choices);
}

function enterForest() {
    story("You enter the forest and soon become hopefully lost.\
    \nWhile you can't find your way out you do see a few places of interest.");
    forest();
}

function forest() {
  story("There is a house made of candy.\
  \nThere is a fruit vender.\
  \nThere is a small opening in the trees with a ring of mushroom in the middle.");
  choices = ["Think some more", "ignore it and go home"];
  answer = setOptions(choices);
}

function homeEarly() {
  var messages = ['You ignore it and walk home.',
    'Nothing exciting happens to you one the way.',
    "That was a very boring story, but you must be a boring person for having chosen to go home.",
    "If it was me there is no way I am passing up the chance to check out a new forest that just happens over night.",
    "To each his own I guess."
  ];
  delayText(messages, 1000);
}