class Treasure{
    constructor(x,y){
        var options = {
            isStatic = true
        }
        this.body = Bodies.rectangle(100,255, 100, 50, options);
        this.width = 100;
        this.height = 50;
        World.add(world, this.body);
        this.image = loadImage("Images/Treasure2");
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