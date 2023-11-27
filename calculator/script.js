let cha1=document.querySelector('.display') 
  cha1.textContent=null

document.addEventListener('DOMContentLoaded', function () {
  let operatervalue
  let cha=document.getElementsByTagName('button') 
  let cha1=document.querySelector('.display') 
  
  let cha2=document.querySelectorAll('.operater') 
  console.log(cha2)
  for (var j = 0; j < cha2.length; j++) {
    cha2[j].addEventListener('click', function () {
      operatervalue=this.textContent
    })}
    
    
    for (var i = 0; i < cha.length; i++) {
      cha[i].addEventListener('click', function () {
        
        let cha1=document.querySelector('.display')
        cha1.textContent= cha1.textContent+this.textContent
        

        
      })
    }
    let cha3=document.querySelector('.equal') 
    cha3.addEventListener('click',function(){
      
      let cha1=document.querySelector('.display')
      splitparts=cha1.textContent.split(operatervalue)
      firstvalue=parseInt(splitparts[0])
      lastvalue=parseInt(splitparts[1])
     if(operatervalue=='+'){
      cha1.textContent=firstvalue+lastvalue
    }
    
    else if(operatervalue=='-'){
      
      cha1.textContent=firstvalue-lastvalue
    }
    else if(operatervalue=='/'){
      
      cha1.textContent=firstvalue/lastvalue
    }
    else if(operatervalue=='*'){
       cha1.textContent=firstvalue*lastvalue

     }
    })
  })