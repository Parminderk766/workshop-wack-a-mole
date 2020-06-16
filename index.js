var score = 0;

var holes = Array.from(document.getElementsByClassName('hole'))

// var randomHoleIndes = Math.floor(Math.random() * holes.length);

setInterval(function() {holes[Math.floor(Math.random() * holes.length)].classList.toggle('mole')}, 300)

const gameArea = document.getElementById('whack-a-mole');

gameArea.addEventListener('click', function(clickEvent) {
    if (clickEvent.target.matches('.mole')){
         score++;
        document.getElementById('score').innerText = score;
    } else{
        score = 0;
        document.getElementById('score').innerText = score;
    }
})

