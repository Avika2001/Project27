class Ball{
    constructor(x,y,r){
    var ballOption={
		  density: 1.0,
        restituition: 0.5,
        friction: 0.7,
        isStatic: true
	  }
    this.x=x;
    this.y=y;
    this.r=r;
	  this.body=Bodies.circle(this.x,this.y,this.r,ballOption);

	  World.add(world,this.body);
    }

display(){
    ellipseMode(RADIUS);
    fill("pink")
    push();
    translate(this.body.position.x,this.body.position.y);
    ellipse(0,0,this.r);
    pop();
}
}