class Note{
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            restitution: 1.0
        }
        this.body = Bodies.rectangle(300,125,32,40);
        this.width = 32;
        this.height = 40;
        this.image = loadImage("Images/Note.png");
        World.add(world,this.body);
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