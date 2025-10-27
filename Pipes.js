class Pipes{
  constructor(ctx, bird){
    this.ctx = ctx
    this.bird = bird
    this.yAleatorio = Math.floor(Math.random() * (480-20*1)) + 20;
    this.ax = 500
    this.ay = this.yAleatorio
    this.largura = 40
    this.altura = 500
    this.velocidade = 3
  }
  
  gerenciar(){
    if(this.bird.caindo){
      this.ax -= this.velocidade
      if(this.ax < 0-this.largura){
        this.yAleatorio=Math.floor(Math.random() * (480-20*1)) + 20
        this.ay = this.yAleatorio
        this.ax = 500
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
  }
}