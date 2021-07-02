class Block{
    constructor(x, y, width, height) {
        var options = {
            friction: 0.05,
            density: 0.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        this.image = loadImage("block.png");
        World.add(world, this.body);
      }
      display(){
        if(this.body){
        if(this.body.speed < 4.5){
          push();
          // translate(pos.x, pos.y);
          // rotate(angle);
          // rectMode(CENTER);
          // rect(0,0,this.width, this.height);
          imageMode(CENTER);
          image(this.image, this.body.position.x, this.body.position.y);
          pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           //imageMode(CENTER);
           image(this.image, this.body.position.x, this.body.position.y, 50, 50);
           pop();
         }
        }
      }
}
