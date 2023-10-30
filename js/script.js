let play= document.querySelector(".play")
let player1= document.querySelector(".player1")
let player2= document.querySelector(".player2")
let win= document.querySelector(".win")
let win2= document.querySelector(".win2")
let p1input=document.querySelector('.p1input');
let p2input=document.querySelector('.p2input');
let p1btn=document.querySelector('.p1btn');
let p2btn=document.querySelector('.p2btn');
let error=document.querySelector('.error');
let attempt=0;



play.addEventListener('click',function(){
    document.querySelector('.game').style.display='none';
    player1.style.display='block';
})

p1btn.addEventListener('click',function(){
    let p1value= p1input.value
    if(p1value==''){
        error.innerHTML='Please give a NUMBER'
    }else if(p1value>9){
        error.innerHTML='Please give a NUMBER between (0-9)'
    }
    else{
        error.innerHTML='';
            player1.style.display='none';
        player2.style.display='block'
    }
})

p2btn.addEventListener('click',()=>{
    attempt++
   let p1value= p1input.value;
   let p2value= p2input.value;
console.log(p1value,p2value)
   if(p2value==p1value){
        player2.style.display='none';
        win.style.display='block';
   }
   else if(attempt>5){
        player2.style.display='none';
        win2.style.display='block';
   }
})