//local board ------------------------------------------------------------

let empty2X = 2;
let empty2Y = 2;
let arr2 = [];
function createBoard2() {
    //init
    //c.fillStyle = 'black';
    //c.fillRect(pos2_x, position_y, 5 * scale + gap, 5 * scale + gap);

    b = new block(red, 0, 0); arr2[0] = b;
    b = new block(red, 0, 1); arr2[1] = b;
    b = new block(red, 1, 0); arr2[2] = b;
    b = new block(red, 1, 1); arr2[3] = b;

    b = new block(green, 3, 0); arr2[4] = b;
    b = new block(green, 3, 1); arr2[5] = b;
    b = new block(green, 4, 0); arr2[6] = b;
    b = new block(green, 4, 1); arr2[7] = b;

    b = new block(blue, 0, 3); arr2[8] = b;
    b = new block(blue, 0, 4); arr2[9] = b;
    b = new block(blue, 1, 3); arr2[10] = b;
    b = new block(blue, 1, 4); arr2[11] = b;

    b = new block(orange, 4, 4); arr2[12] = b;
    b = new block(orange, 4, 3); arr2[13] = b;
    b = new block(orange, 3, 4); arr2[14] = b;
    b = new block(orange, 3, 3); arr2[15] = b;

    b = new block(white, 2, 0); arr2[16] = b;
    b = new block(white, 2, 1); arr2[17] = b;
    b = new block(white, 2, 3); arr2[18] = b;
    b = new block(white, 2, 4); arr2[19] = b;

    b = new block(yellow, 0, 2); arr2[20] = b;
    b = new block(yellow, 1, 2); arr2[21] = b;
    b = new block(yellow, 3, 2); arr2[22] = b;
    b = new block(yellow, 4, 2); arr2[23] = b;

    //for (let i = 0; i < 24; i++) {arr2[i].draw2()}

}


function moveDown2(x, y) {
    for (let i = 0; i < 24; i++) {
        if (arr2[i].x == x && arr2[i].y == y - 1) {
            sfx.push2.play();
            let b = arr2[i]
            b.removeBlock2();
            //animate2
            b.animate2(0, movement, 0, 0);
            setTimeout(() => {
                b.y = b.y + 1;
                b.removeBlock2()
                b.draw2();
                checkPattern2();
            }, 100);
            empty2Y = empty2Y - 1;

        }
    }
}

function moveUp2(x, y) {
    for (let i = 0; i < 24; i++) {
        if (arr2[i].x == x && arr2[i].y == y + 1) {
            sfx.push2.play();
            let b = arr2[i]
            b.removeBlock2();
            //animate2
            b.animate2(0, -(movement), 0, 0);
            setTimeout(() => {
                b.y = b.y - 1;
                b.removeBlock2()
                b.draw2();
                checkPattern2();
            }, 100);
            empty2Y = empty2Y + 1;
        }
    }
}

function moveRight2(x, y) {
    for (let i = 0; i < 24; i++) {
        if (arr2[i].x == x - 1 && arr2[i].y == y) {
            sfx.push2.play();
            let b = arr2[i]
            b.removeBlock2();
            b.animate2(0, 0, 0, movement);
            setTimeout(() => {
                b.x = b.x + 1;
                b.removeBlock2();
                b.draw2();
                checkPattern2();
            }, 100);
            empty2X = empty2X - 1;
        }
    }
}

function moveLeft2(x, y) {
    for (let i = 0; i < 24; i++) {
        if (arr2[i].x == x + 1 && arr2[i].y == y) {
            sfx.push2.play();
            let b = arr2[i]
            b.removeBlock2();
            b.animate2(0, 0, 0, -(movement));
            setTimeout(() => {
                b.x = b.x - 1;
                b.removeBlock2();
                b.draw2();
                checkPattern2();
            }, 100);
            empty2X = empty2X + 1;
        }
    }
}

function getColor2(x, y) {
    for (let i = 0; i < 24; i++) {
        if (arr2[i].x == x && arr2[i].y == y) {
            return arr2[i].color;
        }
    }
}

function checkPattern2() {
    let solved2 = [];
    let x = 1;
    let y = 1;
    for (let i = 0; i < 9; i++) {
        if (i == 3 || i == 6) { y += 1; x = 1 }
        solved2[i] = getColor2(x, y);
        x += 1;
    }

    if (JSON.stringify(solved2) == JSON.stringify(pattern)) {
        endGame(2);
    }
}