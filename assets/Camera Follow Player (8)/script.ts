class CameraFollowPlayer extends Sup.Behavior {
  awake() {
    
  }

  update() {
    this.actor.setPosition( Sup.getActor("player").getX(), Sup.getActor("player").getY(), this.actor.getZ() );
  }
}
Sup.registerBehavior(CameraFollowPlayer);
