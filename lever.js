class lever{
        constructor(x,y,width,height){
            var options = {isStatic : true}
            this.body = Matter.Bodies.rectangle(x,y,width,height,options);
            Matter.World.add(world, this.body)
            this.width = width;
            this.height = height;
            
        }
        display(){
            rectMode(CENTER);
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
            rect(0, 0, this.width, this.height);
            pop();
        }
    }
    
