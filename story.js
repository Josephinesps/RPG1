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
    case "Skip":
      skipIgnore();
      break;
    case "Lets eat Breakfast":
      eatIgnore();
      break;
    case "Skip it":
      dressedSkip();
      break;
    case "Eat Breakfast":
      dressedEat();
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

function skipIgnore(){
  story("You skip breakfast and head towards your school bag, before putting it on you realize that you're a little lightheaded and freezing. Your vision goes blurry. YOU PASS OUT!<br>Ya know breakfast is the most important meal of the day, also next time you should get dressed");
  choices = ["Start over"];
  answer = setOptions(choices);
}

function eatIgnore(){
  story("You go for a quick bowl of cereal after ignoring the breeze. As you are eating, you wonder if you've done your homework, but when you stand up you can barely move. You're too cold.<br>You pass out from almost freezing to death. Wow<br>What a move, maybe the breeze should’ve given you the clue.");
  choices = ["Start over"];
  answer = setOptions(choices);
}

function dressedSkip(){
  story("You believe you have no time for breakfast, so you head out early. The wind is blowing as you walk towards the bus stop. When you arrive there you stand and wait…<br>And wait…<br>And wait…<br>And wait… <br>You’ve been waiting for almost an hour now, Your stomach is screaming at you for food. It's painful. You go back home and miss school for the day, hm maybe you did have time to eat breakfast.");
  choices = ["Start over"];
  answer = setOptions(choices);
}

function dressedEat(){
  story("You have plenty of time for breakfast! So you prepare yourself some home-made scramble eggs, buttered toast and a nice class of your choice of juice. Your morning is going great!!<br>You finish your meal, but before heading out, you wonder if you ever did your homework…");
  choices = ["You didn't","You did"];
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
