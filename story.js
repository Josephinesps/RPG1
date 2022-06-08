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
    case "Go back":
      goBack();
      break;
    case "Go see Shrek":
      kitchen();
      break;
    case "Eat Shreks food":
      eatFood();
      break;
    case "Go investagate":
      findOut();
      break;
    case "Cry":
      booHoo();
      break;
    case "You won!":
      youWon();
      break;
    }
}

function sceneTest(){
  addImage("StartingScreen.png");
  story("You wake up, in a place that looks oddly familiar. Your head is pounding, you struggle to stand up and try to understand where you are. You see ahead of you what looks like a house with surpisingly a bathroom behind it.<br>What do you do?");
  choices = ["Use the bathroom","Explore the House"];
  answer = setOptions(choices);
}

function findShrek(){
  addImage("ShrekGettingOutOfShed.png");
  var messages = ['You pray that no one was inside as you slowly open the door and see Shrek TAKING A MASSIVE DUMP. You slammed the door in embaressment.'
  ];
  delayText(messages, 1000);
  choices = ["Start over"];
  answer = setOptions(choices);
}


function inHouse(){
  addImage("InsideHouse.png");
  story("You walk in the house to find Donkey sitting on a chair, He looks frightened.<br>Should we talk to him?");
  choices = ["Talk to him","Explore some more"];
  answer = setOptions(choices);
}

function bathroom(){
  addImage("ShrekShed.png");
  story("You decide to go to the bathroom before you start your exploration, you are hesitant. It looks like there is someone in there.<br>Do you still want to use the bathroom?");
  choices = ["Open Door","Go back"];
  answer = setOptions(choices);
}

function donkey(){
  story("You say hi to Donkey and ask if he is okay.<br>Donkey hesitantly whispered he's coming...<br>What do you mean by he's coming? who's he? ...Donkey? you screamed.<br>Yet Donkey doesn't answer nor does he even bat a eye.<br> You're confused, concered even.<br>The best thing you can do is see if Shrek has any idea what is going on.");
  choices = ["Go see Shrek"];
  answer = setOptions(choices);
}

function kitchen(){
  addImage("DinnerTime.png");
  story("You see Shrek CHOWING down some food<br>Hey do you know what is up with Do-<br>CRASH!!!! HEE HAWWWWWWW!!!<br>you and Shrek both go into shock.<br> you start shaking in fear. Was that Donkey? Did someone just break in?<br>What do you want to do?");
  choices = ["Eat Shreks food","Go investagate","Cry"];
  answer = setOptions(choices);
}

function goBack(){
  addImage("StartingScreen.png");
  var messages = [ 'You got scared and decided to head back to the house<br>want to explore?'
  ];
  delayText(messages, 1000);
  choices = ["Explore the House"];
  answer = setOptions(choices);
}

function dressedSkip(){
  addImage("busStop.png");
  story("You believe you have no time for breakfast, so you head out early. The wind is blowing as you walk towards the bus stop. When you arrive there you stand and wait…<br>And wait…<br>And wait…<br>And wait… <br>You’ve been waiting for almost an hour now, Your stomach is screaming at you for food. It's painful. You go back home and miss school for the day, hm maybe you did have time to eat breakfast.");
  choices = ["Start over"];
  answer = setOptions(choices);
}

function eatFoodd(){
  addImage("greenKitchen.png");
  story("Shre run out to go investagate on what happened. On you way to follow him, you look back at the table and see a feast of delicous foods.<br>Your stomatch growls, as your mouth started to water.<br>Your hunger takes over as you start to DEVOUR the food.");
  choices = ["You didn't","You did"];
  answer = setOptions(choices);
}

function findOut(){
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

function booHoo(){
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
