let score = 20;
let HighScore = 0;
let guessingNumber = Math.trunc(Math.random()*20) +1;

//  document.querySelector('.score').textContent = score
console.log(guessingNumber);
const msg = document.querySelector('.resut');
const number = document.querySelector('.number')

document.querySelector('.check').addEventListener('click',function (){
const guess = Number(document.querySelector('.guess').value)

if(!guess){
    msg.textContent = '🙄 No Number!!'
 }
else if(guess ===  guessingNumber){
    msg.textContent = '🎉 Correct Anser';
    number.textContent= guessingNumber; 
    document.querySelector('.container-fluid').style.backgroundColor = '#60b347';
    HighScore = score;
    document.querySelector('.HighScore').textContent = HighScore
}
else if(guess !==  guessingNumber){
    if(score >1){
    guess > guessingNumber  ? msg.textContent = '📈 Too High!!' : msg.textContent = '📉 Too Low!!' 
    score--;
        document.querySelector('.score').textContent = score
    
    }else{document.querySelector('.score').textContent = 0 ;
     document.querySelector('.container-fluid').style.backgroundColor = '#dc3545'
    msg.textContent = '💥 Game over!!';}
   
}
}
)

 document.querySelector('.again').addEventListener('click',function (){
guessingNumber = Math.trunc(Math.random()*20) +1;
console.log(guessingNumber)
score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.container-fluid').style.backgroundColor = 'white';
msg.textContent = 'Start guessing...!! ';
number.textContent = '❓';
 })
