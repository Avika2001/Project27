class Roof{
    constructor(x,y,width,height){
    var option = {
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,option); 
    this.width=width;
    this.height=height;
    World.add(world,this.body); 
    }
    display(){ 
        var pos=this.body.position;
        rectMode(CENTER); 
        fill("grey");
        push();
        translate(pos.x,pos.y);     
        rect(0,0,this.width,this.height);
        pop(); 
    } 
}
