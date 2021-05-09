class Box{
    constructor(x,y,w,h){
        var options = {
            friction: 1.0,
            density: 0.04,
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y)
        rectMode(CENTER)
        strokeWeight(4)
        stroke("black")
        fill("yellow")
        rect(0,0, this.w, this.h)
        pop()
    }

}