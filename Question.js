class Question{
    constructor(){
        this.input = createInput("Name");
        this.input1 = createInput("Option");
        this.button = createButton('Confirm');
        this.title = createElement('h2');
        this.question = createElement("h3");
        this.option1 = createElement("h4");
        this.option2 = createElement("h4");
        this.option3 = createElement("h4");
        this.option4 = createElement("h4");
    }
    
    display(){
        this.title.html("Quiz");
        this.question.html("Which of the following particles does NOT appear in the standard model?");
        this.title.position(displayWidth/4 - 50, 0);
        this.title.position(displayWidth/2 - 50, 0);
        this.question.position(100,75)
        this.option1.html("A) Tau Neutrino");
        this.option1.position(displayWidth/1/2,100);
        
        this.option2.html("B) Top Quark");
        this.option2.position(displayWidth/1/2 ,200);
        
        this.option3.html("C) Proton");
        this.option3.position(displayWidth/1/2 ,300);
        
        this.option4.html("D) Electron");
        this.option4.position(displayWidth/1/2 ,400);

        this.input.position(displayWidth - 400 , displayHeight/2 + 180);
        this.input1.position(displayWidth/2/3- 40 , displayHeight/2 + 180);
        this.button.position(displayWidth-displayWidth/2, displayHeight/2+ 230);
        
    
        this.button.mousePressed(()=>{
          this.input.hide();
          this.input1.hide();
          this.button.hide();
          this.option1.hide();
          this.option2.hide();
          this.option3.hide();
          this.option4.hide();
          this.question.hide();
          this.title.hide();
          contestant.name = this.input.value();
          contestantCount+=1;
          contestant.index = contestantCount;
          contestant.update();
          contestant.updateCount(contestantCount);
          
        });
    
        
    
      }

}