class Faller{
    constructor(x,y){
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,10,10,options);
        this.width = 10;
        this.height = 10;
        World.add(world, this.body);
        this.image = loadImage("Images/Treasure.png");
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }

}