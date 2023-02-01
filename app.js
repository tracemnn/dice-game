var diceDom = document.querySelector('.dice');
var activePlayer, scores, currentScore;
var isNewGame;

function initGame() {
    // is new game 
    isNewGame = true;

    // Тоглогчийн ээлжийг хадгалах хувьсагч 
// first player is 0 and second player is 1
activePlayer = 0;

// оноог цуглуулах 
scores = [0, 0];

// current points
currentScore = 0;

// <div class="player-score" id="score-0">43</div>
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

diceDom.style.display = 'none';
}
initGame();
// dice
var diceNumber = Math.floor(Math.random()*6)+1;


// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener('click', function() {
    if(isNewGame) {
    // 1-6 hoorond randomoor 
    var diceNumber = Math.floor(Math.random()*6)+1;
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + diceNumber + '.png';

    if(diceNumber !== 1) {
        currentScore = currentScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = currentScore;
    }
    else {
        switchPlayer();

    }
 } else {
    alert('Тоглоом дууссан байна. New Game товчийг дарж эхлүүлнэ үү!')
 }
});

// hold towchnii event listener

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(isNewGame) {
        scores[activePlayer] = scores[activePlayer] + currentScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
        if(scores[activePlayer] >= 10 ) {
            isNewGame = false;
            document.getElementById('name-' + activePlayer).textContent = 'WINNER !!!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add("winner");
        } else {
            switchPlayer();
        }
    } else {
        alert('Тоглоом дууссан байна. New Game товчийг дарж эхлүүлнэ үү!')
     }
});

function switchPlayer() {
    currentScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");
}
// new game button 

document.querySelector('.btn-new').addEventListener('click', initGame);