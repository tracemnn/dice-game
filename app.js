// Тоглогчийн ээлжийг хадгалах хувьсагч 
// first player is 0 and second player is 1

var activePlayer = 0;

// оноог цуглуулах 

var scores = [0, 0];

// current points

var currentScore =0;

// dice

var dice = Math.floor(Math.random()*6)+1;

// <div class="player-score" id="score-0">43</div>
document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';

document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';

document.querySelector('.dice').style.display = 'none';

console.log("Шоо: " + dice);