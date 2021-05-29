class Ball{
    constructor(x,y,radius, Stat, increaseVelocity){
        var options = {restitution: 0.5, isStatic : Stat}
        this.body = Matter.Bodies.circle(x,y,radius,options);
        Matter.World.add(world, this.body)
        this.radius = radius;
        if(increaseVelocity == "lol"){
           this.image = loadImage("increaseVelocity.png");
        }
        else{
            this.image = loadImage("mainBall.png");
        }
        
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, 20,20);
    }
}