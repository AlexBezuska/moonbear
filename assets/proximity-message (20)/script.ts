

function inProximity(actor1, actor2, radius){
  var circle1 = {radius: radius, x: actor1.getX(), y: actor1.getY()};
  var circle2 = {radius: radius, x: actor2.getX(), y: actor2.getY()};

  var dx = circle1.x - circle2.x;
  var dy = circle1.y - circle2.y;
  var distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < circle1.radius + circle2.radius) {
    return true;
  }else {
    return false;
  }
}



class ProximityMessage extends Sup.Behavior {
  radius = 9;
  other = Sup.getActor("Player");
  message = "test";
  continueArrow = true;
  inChat = false;
  
  awake() {
    
  }

  update() {
    if (inProximity(this.actor, this.other, this.radius)){
      dialogueBoxShow = true;
      if (!this.inChat) { 
      
      dialogueObject = this.message;
      Sup.log(dialogueObject);
        this.inChat = true;
      } 
      
     
    } else {
      dialogueBoxClosed = false;
      this.inChat = false;
      dialogueBoxClear = true;
    }
    
  }
}
Sup.registerBehavior(ProximityMessage);
