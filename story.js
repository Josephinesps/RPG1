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
    case "Read the Letter":
      readingLetter();
      break;
    case "Go for a swim":
      swimmingWithShrek();
      break;
    case "Go find Donkey":
      startingAdventure();
      break;
    }
}

function sceneTest(){
  sceneNum = 1;
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
  story("You see Shrek CHOWING down some food<br>Hey do you know what is up with Do-<br>CRASH!!!! HEE HAWWWWWWW!!!<br>you and Shrek both go into shock.<br> you start shaking in fear.<br>Was that Donkey?<br>Did someone just break in?<br>What do you want to do?");
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

function readingLetter(){
  addImage("letter.png");
  story("You pick up the note and read it outloud.<br>I have your friend. If you want your friend back, you're going have to give me your swamp.<br>...oh my god! You ask Shrek what to do.<br>As Shrek explains his plan you look outside and see a nice lake of swamp water.<br>Do you want to take a dip.");
  choices = ["Go find Donkey","Go for a swim"];
  answer = setOptions(choices);
}

function eatFood(){
  addImage("Eating.gif");
  story("Shrek run out to go investagate on what happened. On you way to follow him, you look back at the table and see a feast of delicous foods.<br>Your stomatch growls, as your mouth started to water.<br>Your hunger takes over as you start to DEVOUR the food.");
  choices = ["Start over"];
  answer = setOptions(choices);
}

function findOut(){
  addImage("letter.png");
  story("You and Shrek both decide to go investagate.<br>You turn the corner and by your surpise you see nothing but a note.<br>Where's Donkey though?<br>Maybe the letter will help.");
  choices = ["Read the Letter"];
  answer = setOptions(choices);
}

function booHoo(){
  addImage("crying.gif");
  var messages = ("You get scared to and start to cry.<br>What a BABY!!");
  choices = ["Start over"];
  answer = setOptions(choices);
}

function swimmingWithShrek(){
  addImage("GoSwimming.png");
  story("You ignore everything that Shrek said and decide to take a dip. You convice Shrek to go with you.<br>As you guys were swimming you realize how much of a nice...handsome...kindhearted guy he is.<br>You and Shrek forget about donkey and start spending more and more time togther.<br>You're in love.");
  choices = ["Start over"];
  answer = setOptions(choices);
}

function startingAdventure(){
  addImage("OntheRoad.png");
  story("You guys are on the road on the way to the most reasonable place to look.<br>The VILLAGE.");
  choices = ["To be continued"];
}
