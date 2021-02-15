class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA !=null){
            var a = this.sling.bodyA.position;
            var b = this.sling.pointB;
            line (a.x+20,a.y-5,b.x+20,b.y-5)
            line (a.x-10,a.y-5,b.x-10,b.y-5)
            image (this.sling3,a.x-15,a.y,15,30) 
        }
    }
    
}