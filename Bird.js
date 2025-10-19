class Bird{
  constructor(ctx){
    this.ctx=ctx
    this.gravidade=0.5
    this.velY=1
    this.pulo=20
    this.caindo=false
    this.pulando=false
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
    this.pulando=true
    if (this.pulando){
      this.velY-=this.pulo
      this.y+=this.velY
      this.pulando=false
      this.velY=1
    }
  }
  
  gerenciar(){
    if(this.caindo){
      this.velY += this.gravidade
      this.y+=this.velY
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