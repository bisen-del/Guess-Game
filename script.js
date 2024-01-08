let score=20;
let highScore=20;
const secNumber=Math.trunc(Math.random()*20)+1;

document.querySelector('.number').textContent=secNumber;
document.querySelector('.check').addEventListener
('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent='No Number';
    }else if(guess===secNumber){
        document.querySelector('.message').textContent='Correct Number';
        document.querySelector('.highscore').textContent=score;
        
    }else if(guess>secNumber){
        document.querySelector('.message').textContent='Too High';
        score--;
        document.querySelector('.score').textContent=score;
    }else if(guess<secNumber){
        document.querySelector('.message').textContent='Too Low';
        score--;
        document.querySelector('.score').textContent=score;

    }
    if(score<1){
        document.querySelector('.message').textContent='You Lost';
    }
    

    
})