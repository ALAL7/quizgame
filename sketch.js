var canvas,gameState, contestantCount, database, quiz, question, contestant, allContestants;
gameState = 0;


function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  
}


function draw(){
  background("pink");
    
  
}
