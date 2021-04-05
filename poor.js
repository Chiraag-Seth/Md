class ThirdAppearance{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(200,255,150,200,options);
       // this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = 150;
        this.height = 200;
        World.add(world,this.body);
         this.image = loadImage("Images/ScaredMan.png")

         //this.body = Bodies.rectangle(x,y,width,height)
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

