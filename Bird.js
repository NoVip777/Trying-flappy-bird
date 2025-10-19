class Bird{
  constructor(ctx){
    this.ctx=ctx
    this.gravidade=3
    this.velY=3
    this.pulo=70
    this.caindo=false
    this.largura=25
    this.altura=20
    this.x=200
    this.y=(this.ctx.canvas.height/2)
  }
  
  iniciar(){
    this.caindo=true
    this.y=(this.ctx.canvas.height/2)
  }
  pular(){
    this.y-=this.pulo
  }
  
  gerenciar(){
    if(this.caindo){
      this.velY += this.gravidade
      this.y+=velY
    }
  }
  
  desenhar(){
    this.gerenciar()
    this.ctx.fillStyle='#ff0'
    this.ctx.fillRect(this.x, this.y, this.largura, this.altura)
  }
}

function iniciar(){
  iniciar()
}

function pular(){
  pular()
}