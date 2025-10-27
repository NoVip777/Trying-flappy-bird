class Pipes{
  constructor(ctx, bird){
    this.ctx = ctx
    this.bird = bird
    this.ax = 480
    this.ay = this.yAleatorio
    this.largura = 30
    this.altura = 500
    this.yAleatorio = Math.floor(Math.random() * (480-20*1)) + 20;
  }
  
  gerenciar(){
    
  }
  
  desenhar(){
    this.gerenciar()
    this.ctx.fillStyle = '#0f0'
    this.ctx.fillRect(this.ax, this.ay, this.largura, this.altura)
  }
}