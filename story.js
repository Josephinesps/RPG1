/* Uses Case Statements */

// variables
// var name = "";
var scene1=sceneTest;

function checkAnswers(answer) {
  switch(answer) {
    case "Use the bathroom":
      bathroom();
      break;
    case "Start over":
      sceneTest();
      break;
    case "Explore the House":
      inHouse();
      break;
    case "Open Door":
      findShrek();
      break;
    case "Talk to him":
      donkey();
      break;
    case "Explore some more":
      kitchen();
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
  addImage("StartingScreen.png");
  story("You wake up, in a place that looks oddly familiar. Your head is pounding as if you hit your head. You see ahead of you what looks like a home with surpisingly a bathroom behind it.<br>What do you do?");
  choices = ["Use the bathroom","Explore the House"];
  answer = setOptions(choices);
}

function findShrek(){
  addImage("ShrekGettingOutOfShed.png");
  var messages = ['You open the door in hopes no one was inside yet shrek was there. you slammed the door in embaressment.'
  ];
  delayText(messages, 1000);
  choices = ["Start over"];
  answer = setOptions(choices);
}


function inHouse(){
  addImage("InsideHouse.png");
  story("You walk in the house to find donkey sitting on a chair, He looks frightened.<br>Should we talk to him?");
  choices = ["Talk to him","Explore some more"];
  answer = setOptions(choices);
}

function bathroom(){
  addImage("ShrekShed.png");
  story("You decide to go to the bathroom before you start your exploration, you are hesitant.<br>What do you do?");
  choices = ["Open Door","Go back"];
  answer = setOptions(choices);
}

function donkey(){
  story("You get out of bed and get out of your pajamas…that's all.<br>You head towards the kitchen but stop when you feel a cool breeze. Hm could you be missing something?");
  choices = ["Lets eat Breakfast","Skip"];
  answer = setOptions(choices);
}

function kitchen(){
  addImage("dizzyMan.png");
  var messages = [ 'You skip breakfast and head towards your school bag, before putting it on you realize that youre a little lightheaded and freezing.', 
  'Your vision goes blurry. YOU PASS OUT!',
  'Ya know breakfast is the most important meal of the day, also next time you should get dressed'
 ];
  delayText(messages, 1000);
  choices = ["Start over"];
  answer = setOptions(choices);
}

function eatIgnore(){
  addImage("greenKitchen.png");
  var messages = [ 'You go for a quick bowl of cereal after ignoring the breeze. As you are eating, you wonder if youve done your homework, but when you stand up you can barely move.',
  'Youre too cold.',
  'You pass out from almost freezing to death. Wow<br>What a move, maybe the breeze should’ve given you the clue.'
  ];
  delayText(messages, 1000);
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
  var messages = [ 'You did..great! You head to school and you’re all ready for your test, that homework study guide did come in handy last night.',
  'You take the test, it was a stressful three hours of testing, though hours pass as you wait for your results.',
  'I hope its no surprise that you.', 
  'Passed! I mean what did you expect?'
  ];
  delayText(messages, 1000);
  choices = ["You won!"];
  answer = setOptions(choices);
}

function youWon(){
  addImage("confetti.png");
  var messages = [ 'You won, you got all the right combinations that resulted in the end :)',
  'Are you missing some ending?', 
  'If so, play again!'
  ];
  delayText(messages, 1000);
  choices = ["Start over"];
  answer = setOptions(choices);
}
