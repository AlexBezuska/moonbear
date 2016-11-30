class PlayerAnimationbehavior extends Sup.Behavior {
  update() {
    if (Sup.Input.isKeyDown("SPACE")){
      this.actor.spriteRenderer.setSprite("moonbear-action");
    }else {
      this.actor.spriteRenderer.setSprite("moonbear");
    }
   
  }
}
Sup.registerBehavior(PlayerAnimationbehavior);
