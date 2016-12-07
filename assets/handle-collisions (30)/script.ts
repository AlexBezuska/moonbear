class HandlecollisionsBehavior extends Sup.Behavior {
  awake() {
    
  }

  update() {
    //Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.ArcadePhysics2D.getAllBodies());
    
    var allBodies = Sup.ArcadePhysics2D.getAllBodies();
    for (var i = 0; i < allBodies.length; i++) {
      if (Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, allBodies[i])){
        if (allBodies[i].actor.getName() === "apple"){
          allBodies[i].actor.destroy();
          Sup.Audio.playSound("sounds/select");
        }
      }
    }

  }
}
Sup.registerBehavior(HandlecollisionsBehavior);
