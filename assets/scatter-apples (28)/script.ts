class ScatterApples extends Sup.Behavior {
  apples = [];
  appleCount = 40;
  
  start() {
    for (var i = 0; i < this.appleCount; i++){
      Sup.appendScene("Fruit")[0]
        .arcadeBody2D.warpPosition(Sup.Math.Random.float(1, 15), Sup.Math.Random.float(1, 15));
    } 
  }

  update() {
  }
}

Sup.registerBehavior(ScatterApples);