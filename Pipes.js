class Pipes{
  constructor(ctx, bird){
    this.ctx = ctx
    this.bird = bird
    this.yAleatorio = Math.floor(Math.random() * (480-20*1)) + 20;
    this.gap = 80
    this.ax = 500
    this.ay = this.yAleatorio + this.gap
    this.largura = 40
    this.altura = 500
    this.bx = this.ax
    this.by = this.ay - this.gap - this.altura
    this.velocidade = 3
  }
  
  gerenciar(){
    this.bx = this.ax
    if(this.bird.caindo){
      this.ax -= this.velocidade
      if(this.ax < 0-this.largura){
        this.yAleatorio=Math.floor(Math.random() * (480-20*1)) + 20
        this.ay = this.yAleatorio
        this.ax = 500
        this.by = this.ay - this.gap - this.altura
      }
    }else{
      this.ax -= 0
      this.ax = 500
    }
  }
  
  desenhar(){
    this.gerenciar()
    this.ctx.fillStyle = '#0f0'
    this.ctx.fillRect(this.ax, this.ay, this.largura, this.altura)
    this.ctx.fillRect(this.bx, this.by, this.largura, this.altura)
  }
}