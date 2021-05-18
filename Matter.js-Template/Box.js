class Box extends baseClass{
    constructor( x,y,width,height){
        this.body = rectangle(x,y,width,height)
    }
    display(){
    super.display()
    rotate(this.angle)
    rect(this.x,this.y, this.width,this.height)
    }
}