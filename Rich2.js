class SecondAppearance{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(150,255,150,200,options);
       // this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = 120;
        this.height = 200;
        World.add(world,this.body);
         this.image = loadImage("Images/Walking.png")
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