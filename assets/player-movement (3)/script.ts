let playerFreeze = false;

class PlayermovementBehavior extends Sup.Behavior {
  
  speed = 0.03;
  awake() {
    
  }

  update() {
    
    
    // Get Current Velocity
    let velocity = this.actor.arcadeBody2D.getVelocity();
    
    // Controller
//     let dz = 0.1;
//     let controller = false;
    
//     let leftStickX = Sup.Input.getGamepadAxisValue(0, 0);
//     if (leftStickX < -dz || leftStickX > dz){
//       controller = true;
//       velocity.x = this.speed * leftStickX;
//       this.actor.arcadeBody2D.setVelocity(velocity);
//     } else { 
//       velocity.x = 0; 
//     }
    
//     let leftStickY = Sup.Input.getGamepadAxisValue(0, 1);
//     if (leftStickY < -dz || leftStickY > dz){ 
//       controller = true;
//       velocity.y = -this.speed * leftStickY; 
//       this.actor.arcadeBody2D.setVelocity(velocity);
//     } else { 
//       velocity.y = 0; 
//     }
    
//     if (controller) {
      
//     }
    
    
    

    //Keyboard  
    if (!playerFreeze) {
      if (Sup.Input.isKeyDown("LEFT")){ 
        velocity.x = -this.speed;
      } else if (Sup.Input.isKeyDown("RIGHT")){ 
        velocity.x = this.speed;  
      } else { 
        velocity.x = 0; 
      }

      if (Sup.Input.isKeyDown("UP")){ 
        velocity.y = this.speed;  
      } else if (Sup.Input.isKeyDown("DOWN")){ 
        velocity.y = -this.speed;    
      } else { 
        velocity.y = 0;
      }
    }
  
    
    // Apply Velocity
  
    this.actor.arcadeBody2D.setVelocity(velocity);
    
  }
}
Sup.registerBehavior(PlayermovementBehavior);
