class Hexagon{
  constructor() {
    var options = {
      restitution:0.1,
      density:0.01,
      isStatic:false,
      frictionAir:0.2
    }
    this.body = Bodies.polygon(1250,100,190,90,options);
    this.image = loadImage("hexagon.jpg");
    this.width = 200;
    this.height = 100;
    World.add(world, this.body);
  }

  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    textSize(19);
		text(firstNumber+" - "+secondNumber,-53,5);
    pop();
  }
}