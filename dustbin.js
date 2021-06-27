class Dustbin{
    constructor(x,y){
        this.x=x
        this.y=y
        this.w=200
        this.h=100
        this.t=20
        this.a=0
        this.bottombody=Bodies.rectangle(this.x,this.y,this.w,this.t,{isStatic:true})
        this.leftbody=Bodies.rectangle(this.x-this.w/2,this.y-this.h/2,this.t,this.h,{isStatic:true})
        Matter. Body.setAngle(this.leftbody,this.a)
        this.rightbody=Bodies.rectangle(this.x+this.w/2,this.y-this.h/2,this.t,this.h,{isStatic:true})
        Matter. Body.setAngle(this.rightbody,-1*this.a)
        World.add(world,this.bottombody)
        World.add(world,this.leftbody)
        World.add(world,this.rightbody)
    }
    display(){
        var bposition=this.bottombody.position
        var lposition=this.leftbody.position
        var rposition=this.rightbody.position
        push()
        translate(lposition.x,lposition.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        rotate (this.a)
        rect(0,0,this.t,this.h)
        pop()
        push()
        translate(rposition.x,rposition.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        rotate (-1*this.a)
        rect(0,0,this.t,this.h)
        pop()
        push()
        translate(bposition.x,bposition.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        //rotate (this.a)
        rect(0,0,this.w,this.t)
        pop()
    }
}