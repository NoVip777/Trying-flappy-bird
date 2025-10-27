class Bird{
  constructor(ctx, pipes){
    // algumas variaveis
    this.ctx=ctx
    this.gravidade=0.2
    this.velY=0
    this.pulo=-5
    this.caindo=false
    this.largura=25
    this.altura=20
    this.x=140
    this.y=(this.ctx.canvas.height/2)
    this.iniciarstyle = document.getElementById('iniciar')
    this.morreu = false
    this.msgMorte = "haha, MORREU!!!"
    
    // delay de pulo
    this.delay=0
    this.prontoPular=10
  }
  
  // inicia o joguinho
  iniciar(){
    this.caindo=true
    this.y=(this.ctx.canvas.height/2)
    this.iniciarstyle.style.display="none";
    this.velY = 0
    this.morreu = false
  }
  
  // faz pular com delay
  pular(){
    if(this.delay >= this.prontoPular){
      this.velY=0
      this.velY+=this.pulo
      this.delay=0
    }
  }
  
  // faz morreer
  morrer(){
    if(this.y > this.ctx.canvas.height || this.y < -this.altura){
      if(this.iniciarstyle){
        this.iniciarstyle.style.display="block"
        this.caindo = false
        this.morreu = true
      }
      if(this.morreu){
        this.ctx.font = "50px arial"
        this.ctx.fillStyle = "#000"
        this.ctx.fillText(this.msgMorte, 100, this.ctx.canvas.height/2)
      }
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
    this.morrer()
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
