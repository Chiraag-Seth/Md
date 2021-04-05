class Ground {
            constructor(x,y,width,height) {
              var options = {
                  isStatic: true
              }
              this.body = Bodies.rectangle(200,380,50,50,options);
              this.width = width;
              this.height = height;
              World.add(world, this.body);
    }
}
    