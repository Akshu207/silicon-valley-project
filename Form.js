class Form {
    constructor(){
   
   
        this.input = createInput("Write your name");
       this.greeting = createElement('h2');
   
    }
    

    
   display(){
       player.name = this.input.value();
    this.input.position(1120,352)
       this.greeting.position(500,20);
       this.greeting.html("Welcome"+player.name);

   }   
   }