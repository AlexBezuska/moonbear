class PlayerMovement2dbehavior extends Sup.Behavior {
  
  speed = 0.03;
  
  update() {
    
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.ArcadePhysics2D.getAllBodies());

    
    let velocity = this.actor.arcadeBody2D.getVelocity();
    
   if (Sup.Input.isKeyDown("LEFT")) velocity.x = -this.speed;
    else if (Sup.Input.isKeyDown("RIGHT")) velocity.x = this.speed;
    else velocity.x = 0;
    
    if (Sup.Input.isKeyDown("DOWN")) velocity.y = -this.speed;
    else if (Sup.Input.isKeyDown("UP")) velocity.y = this.speed;
    else velocity.y = 0;
    
    this.actor.arcadeBody2D.setVelocity(velocity);
    
  }
}
Sup.registerBehavior(PlayerMovement2dbehavior);
