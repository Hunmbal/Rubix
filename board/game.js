let gametype = 0;
let ended = true;

function startGame(type) {
    gametype = type;
    switch (type) {
        case 'local':
            setTimeout(() => {
                document.getElementById('frame').style.display = 'none';
                document.getElementById('set').style.display = 'none';
                transition_local_Bg(10);
                generatePattern();
                setTimeout(() => {
                    //drawBg();
                    createBoard1();
                    createBoard2();
                    //display Timer
                    document.getElementById('countdown').style.display = 'flex';
                    startCountdown(5);
                }, 3000)
            }, 100)
            break;
        case 'online':
            setTimeout(() => {
                drawBg();
                createBlocks();
                createAI();
                setTimeout(startTimer, 10);
                generatePattern();

                document.getElementById('frame').style.display = 'none';
                //display Timer
                document.getElementById("timer").style.display = 'flex';
                startTimer();
            }, 10)
            break;
    }


}

function endGame(winner) {
    c.fillStyle = 'black';
    switch (gametype) {
        case 'local':
            endLocalGame(winner);
            break;
    }
    ended = true;
}




//Game ending

function endLocalGame(winner) {
    if (winner == 1) { winner_pos = position_x; }
    else { winner_pos = pos2_x; }

    c.fillRect(winner_pos, position_y, scale, scale * 5);
    c.fillRect(winner_pos + scale * 4 + gap, position_y, scale, scale * 5);
    c.fillRect(winner_pos + scale, position_y, scale * 3, scale);
    c.fillRect(winner_pos + scale, position_y + scale * 4 + gap, scale * 3, scale);



}