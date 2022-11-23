//2nd board

function createAI() {
    c.fillStyle = 'black';
    c.fillRect(pos2_x, pos2_y, 5 * scale + gap, 5 * scale + gap);
    console.log(pos2_x);
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (!(i == 2 && j == 2)) {
                c.fillStyle = 'grey';
                c.fillRect(calc2_X(i), calcY(j), bsize, bsize);
            }
        }
    }
    ai();
}

function ai() {
    if (!ended) {
        let randomNum = Math.floor(Math.random() * block_movements.length);
        switch (block_movements[randomNum]) {
            case 'up':
                if (emp2_Y != 4) {
                    moveai(emp2_X, emp2_Y + 1, emp2_X, emp2_Y);
                }
                break;
            case 'down':
                if (emp2_Y != 0) {
                    moveai(emp2_X, emp2_Y - 1, emp2_X, emp2_Y);
                }
                break;
            case 'left':
                if (emp2_X != 4) {
                    moveai(emp2_X + 1, emp2_Y, emp2_X, emp2_Y);
                }
                break;
            case 'right':
                if (emp2_X != 0) {
                    moveai(emp2_X - 1, emp2_Y, emp2_X, emp2_Y);
                }
                break;
        }
        setTimeout(() => {
            ai();
        }, 600)
    }
}


function moveai(oldx, oldy, x, y) {
    //remove
    c.fillStyle = 'black';
    c.fillRect(calc2_X(oldx), calcY(oldy), bsize, bsize);
    //draw
    c.fillStyle = 'gray';
    c.fillRect(calc2_X(x), calcY(y), bsize, bsize);
    c.drawImage(overlay, calc2_X(x), calcY(y), bsize, bsize);
    emp2_X = oldx;
    emp2_Y = oldy;
}

