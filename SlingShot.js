class SlingShot{
    constructor(bodyA,pointB)
    {
    var options = {
    bodyA:bodyA,
    pointB:pointB,
    length:200,
    stiffness:1
    
    }
    this.sling=Constraint.create(options)
    World.add(world,this.sling)
    this.pointB=pointB;
    


}
display()
{
var pointA = this.sling.bodyA.position;
var pointB= this.pointB;
push()

strokeWeight(4)
stroke("purple")
line(pointA.x,pointA.y,pointB.x,pointB.y)
pop()

}
}