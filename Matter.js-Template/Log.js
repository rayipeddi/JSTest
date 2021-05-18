class Log extends baseClass{
    constructor( x,y,width,height, angle){
        this.sprite = rectangle(x,y,width,height,angle)
    }
    display(){
    super.display()
    rotate(this.angle)
    rect(this.x,this.y, this.width,this.height)
    }
}