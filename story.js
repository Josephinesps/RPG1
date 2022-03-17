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
    case "You didn't":
      noHomework();
      break;
    case "You did":
      yesHomework();
      break;
    case "You won!":
      youWon();
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
  addImage("bedroomPhoto.png");
  story("You forced yourself up as if it was a chore. You turn off your annoying alarm, flick on your lamp, and rub your eyes before seeing clear. But now what?");
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
  addImage("greenKitchen.png");
  story("You go for a quick bowl of cereal after ignoring the breeze. As you are eating, you wonder if you've done your homework, but when you stand up you can barely move. You're too cold.<br>You pass out from almost freezing to death. Wow<br>What a move, maybe the breeze should’ve given you the clue.");
  choices = ["Start over"];
  answer = setOptions(choices);
}

function dressedSkip(){
  addImage("busStop.png");
  story("You believe you have no time for breakfast, so you head out early. The wind is blowing as you walk towards the bus stop. When you arrive there you stand and wait…<br>And wait…<br>And wait…<br>And wait… <br>You’ve been waiting for almost an hour now, Your stomach is screaming at you for food. It's painful. You go back home and miss school for the day, hm maybe you did have time to eat breakfast.");
  choices = ["Start over"];
  answer = setOptions(choices);
}

function dressedEat(){
  addImage("greenKitchen.png");
  story("You have plenty of time for breakfast! So you prepare yourself some home-made scramble eggs, buttered toast and a nice glass of your choice of juice. Your morning is going great!!<br>You finish your meal, but before heading out, you wonder if you ever did your homework…");
  choices = ["You didn't","You did"];
  answer = setOptions(choices);
}

function noHomework(){
  addImage("homeWork.png");
  var messages = [ 'You didn’t.. Oh well. You head to school anyways.', 
  'As you get there you remember that your homework was supposed to be the study guide for your up coming test!',
  "You still have to take the test ya know, and you do! Hours pass as you wait for your results, I hope it's no surprise that you.",
  'Failed. I mean what did you expect?'
  ];
  delayText(messages, 1000);
  choices = ["Start over"];
  answer = setOptions(choices);
}

function yesHomework(){
  addImage("homeWork.png");
  story("You did..great! You head to school and you’re all ready for your test, that homework study guide did come in handy last night.<br>You take the test, it was a stressful three hours of testing, though hours pass as you wait for your results, i hope it's no surprise that you. <br>Passed! I mean what did you expect?");
  choices = ["You won!"];
  answer = setOptions(choices);
}

function youWon(){
  story("You won, you got all the right combinations that resulted in the end :)..<br>Are you missing some ending? If so, play again!");
  choices = ["Start over"];
  answer = setOptions(choices);
}
