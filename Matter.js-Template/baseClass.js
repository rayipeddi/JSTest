class baseClass{
    constructor( x,y,width,height, angle){
        options = {
            restitution: 1,
            density: 1,
            friction: 1
        }
        this.x = x
        this.y = y
        this. width = width
        this. height = height
        this.angle = angle
    }
    display(){
        translate(this.position.x, this.position.y)
        push()
        rect(this.x, this.y, this.width, this.height, this.angle)
        pop()
    }
}