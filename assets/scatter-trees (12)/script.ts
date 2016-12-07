class ScatterTrees extends Sup.Behavior {
  trees = [];
  treeCount = 20;
  
  start() {
    for (var i = 0; i < this.treeCount; i++){
      Sup.appendScene("Plants")[0]
        .arcadeBody2D.warpPosition(Sup.Math.Random.float(1, 15), Sup.Math.Random.float(1, 15));
    } 
  }

  update() {
  }
}

Sup.registerBehavior(ScatterTrees);