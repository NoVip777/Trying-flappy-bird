class Bird{
  constructor(ctx){
    // algumas variaveis
    this.ctx=ctx
    this.gravidade=0.3
    this.velY=0
    this.pulo=-5
    this.caindo=false
    this.largura=25
    this.altura=20
    this.x=200
    this.y=(this.ctx.canvas.height/2)
    
    // delay de pulo
    this.delay=0
    this.prontoPular=20
  }
  
  // inicia o joguinho
  iniciar(){
    this.caindo=true
    this.y=(this.ctx.canvas.height/2)
  }
  
  // faz pular com delay
  pular(){
    if(this.delay >= this.prontoPular){
      this.velY=0
      this.velY+=this.pulo
      this.delay=0
    }
  }
  
  // faz o game atualiazar a gravidade, pulo, etc...
  gerenciar(){
    if(this.caindo){
      this.velY += this.gravidade
      this.y+=this.velY
      this.delay++
    }
  }
  
  // desenha/atualiza o gerenciar e o quadrado do bird
  desenhar(){
    this.gerenciar()
    this.ctx.fillStyle='#ff0'
    this.ctx.fillRect(this.x, this.y, this.largura, this.altura)
  }
}

// fucao que chama o iniciar
function iniciar(){
  bird.iniciar()
}

// fucao que chama o pular
function pular(){
  bird.pular()
}
