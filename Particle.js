class Particle{
    constructor(x,y){
        var options={
            restitution:0.4
        }
        this.r=12;
        this.body=Bodies.circle(x,y,this.r,options);
        this.colour=color(random(0,225),random(0,225),random(0,225));
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        //ImageMode(CENTER)
        noStroke()
        fill(this.colour)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()
    }
};

