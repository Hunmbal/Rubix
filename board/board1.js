//main board-------------------

let emptyX = 2;
let emptyY = 2;
let arr = [];
function createBoard1() {
    //init

    //c.fillStyle = 'black';
    //c.fillRect(position_x, position_y, 5 * scale + gap, 5 * scale + gap);

    b = new block(red, 0, 0); arr[0] = b;
    b = new block(red, 0, 1); arr[1] = b;
    b = new block(red, 1, 0); arr[2] = b;
    b = new block(red, 1, 1); arr[3] = b;

    b = new block(green, 3, 0); arr[4] = b;
    b = new block(green, 3, 1); arr[5] = b;
    b = new block(green, 4, 0); arr[6] = b;
    b = new block(green, 4, 1); arr[7] = b;

    b = new block(blue, 0, 3); arr[8] = b;
    b = new block(blue, 0, 4); arr[9] = b;
    b = new block(blue, 1, 3); arr[10] = b;
    b = new block(blue, 1, 4); arr[11] = b;

    b = new block(orange, 4, 4); arr[12] = b;
    b = new block(orange, 4, 3); arr[13] = b;
    b = new block(orange, 3, 4); arr[14] = b;
    b = new block(orange, 3, 3); arr[15] = b;

    b = new block(white, 2, 0); arr[16] = b;
    b = new block(white, 2, 1); arr[17] = b;
    b = new block(white, 2, 3); arr[18] = b;
    b = new block(white, 2, 4); arr[19] = b;

    b = new block(yellow, 0, 2); arr[20] = b;
    b = new block(yellow, 1, 2); arr[21] = b;
    b = new block(yellow, 3, 2); arr[22] = b;
    b = new block(yellow, 4, 2); arr[23] = b;

    //for (let i = 0; i < 24; i++) {
    //  arr[i].draw()
    //}

}

function moveDown(x, y) {
    for (let i = 0; i < 24; i++) {
        if (arr[i].x == x && arr[i].y == y - 1) {
            sfx.push.play();;
            let b = arr[i]
            b.removeBlock();
            //animate
            b.animate(0, movement, 0, 0);
            setTimeout(() => {
                b.y = b.y + 1;
                b.removeBlock()
                b.draw();
                checkPattern();
            }, 100);
            emptyY = emptyY - 1;

        }
    }
}

function moveUp(x, y) {
    for (let i = 0; i < 24; i++) {
        if (arr[i].x == x && arr[i].y == y + 1) {
            sfx.push.play();;
            let b = arr[i]
            b.removeBlock();
            //animate
            b.animate(0, -(movement), 0, 0);
            setTimeout(() => {
                b.y = b.y - 1;
                b.removeBlock()
                b.draw();
                checkPattern();
            }, 100);
            emptyY = emptyY + 1;
        }
    }
}

function moveRight(x, y) {
    for (let i = 0; i < 24; i++) {
        if (arr[i].x == x - 1 && arr[i].y == y) {
            sfx.push.play();;
            let b = arr[i]
            b.removeBlock();
            b.animate(0, 0, 0, movement);
            setTimeout(() => {
                b.x = b.x + 1;
                b.removeBlock();
                b.draw();
                checkPattern();
            }, 100);
            emptyX = emptyX - 1;
        }
    }
}

function moveLeft(x, y) {
    for (let i = 0; i < 24; i++) {
        if (arr[i].x == x + 1 && arr[i].y == y) {
            sfx.push.play();;
            let b = arr[i]
            b.removeBlock();
            b.animate(0, 0, 0, -(movement));
            setTimeout(() => {
                b.x = b.x - 1;
                b.removeBlock();
                b.draw();
                checkPattern();
            }, 100);
            emptyX = emptyX + 1;
        }
    }
}

function getColor(x, y) {
    for (let i = 0; i < 24; i++) {
        if (arr[i].x == x && arr[i].y == y) {
            return arr[i].color;
        }
    }
}

function checkPattern() {
    let solved = [];
    let x = 1;
    let y = 1;
    for (let i = 0; i < 9; i++) {
        if (i == 3 || i == 6) { y += 1; x = 1 }
        solved[i] = getColor(x, y);
        x += 1;
    }

    if (JSON.stringify(solved) == JSON.stringify(pattern)) {
        endGame(1);
    }
}