function calcX(x) { return (gap + position_x + x * scale); }
function calcY(y) { return (gap + position_y + y * scale); }



function calc2_X(x) { return (gap + pos2_x + x * scale); }
let pos2_x = p_x - (position_x - (p_x + p_board)) - (5 * scale + gap);
let pos2_y = position_y;

let block_movements = ['up', 'left', 'down', 'right'];

class block {
    constructor(c, x, y) {
        this.color = c;
        this.x = x;
        this.y = y;
    }

    draw() {
        c.drawImage(texture, calcX(this.x), calcY(this.y), bsize, bsize);
        c.fillStyle = this.color;
        c.fillRect(calcX(this.x), calcY(this.y), bsize, bsize);
        c.drawImage(overlay, calcX(this.x), calcY(this.y), bsize, bsize);
        /*if (this.x == 0 || this.y == 0 || this.x == 4 || this.y == 4) {
            c.fillStyle = 'rgba(75,75,75,0.5)';
            c.fillRect(calcX(this.x), calcY(this.y), bsize, bsize);
        }
        */
    }

    draw2() {
        c.drawImage(texture, calc2_X(this.x), calcY(this.y), bsize, bsize);
        c.fillStyle = this.color;
        c.fillRect(calc2_X(this.x), calcY(this.y), bsize, bsize);
        c.drawImage(overlay, calc2_X(this.x), calcY(this.y), bsize, bsize);
    }

    removeBlock() {
        c.fillStyle = 'black';
        c.fillRect(calcX(this.x) - gap, calcY(this.y) - gap, bsize + 2 * gap, bsize + 2 * gap);
    }

    removeBlock2() {
        c.fillStyle = 'black';
        c.fillRect(calc2_X(this.x) - gap, calcY(this.y) - gap, bsize + 2 * gap, bsize + 2 * gap);
    }

    animate(iny, yFactor, inx, xFactor) {
        iny = iny + yFactor;
        inx = inx + xFactor;
        c.fillStyle = (highlight == null ? this.color : highlight);
        c.fillRect(calcX(this.x) + move_size + inx, calcY(this.y) + move_size + iny, bsize - move_size * 2, bsize - move_size * 2);
        c.drawImage(overlay, calcX(this.x) + move_size + inx, calcY(this.y) + move_size + iny, bsize - move_size * 2, bsize - move_size * 2);
        //wait
        setTimeout(() => {
            if (Math.abs(iny) < scale && Math.abs(inx) < scale) {
                c.fillStyle = 'black';
                c.fillRect(calcX(this.x) + inx, calcY(this.y) + iny, bsize, bsize);
                this.animate(iny, yFactor, inx, xFactor);
            }
        }, scale / 10);
    }

    animate2(iny, yFactor, inx, xFactor) {
        iny = iny + yFactor;
        inx = inx + xFactor;
        c.fillStyle = (highlight == null ? this.color : highlight);
        c.fillRect(calc2_X(this.x) + move_size + inx, calcY(this.y) + move_size + iny, bsize - move_size * 2, bsize - move_size * 2);
        c.drawImage(overlay, calc2_X(this.x) + move_size + inx, calcY(this.y) + move_size + iny, bsize - move_size * 2, bsize - move_size * 2);
        //wait
        setTimeout(() => {
            if (Math.abs(iny) < scale && Math.abs(inx) < scale) {
                c.fillStyle = 'black';
                c.fillRect(calc2_X(this.x) + inx, calcY(this.y) + iny, bsize, bsize);
                this.animate2(iny, yFactor, inx, xFactor);
            }
        }, scale / 10);
    }
}








//pattern ---------------------------------------------------------------------------
let pattern = [];
let kek = [red, green, orange, blue, yellow, white];

function generatePattern() {

    let colors_selected = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 9; i++) {
        let randomNum = Math.floor(Math.random() * kek.length);
        if (colors_selected[randomNum] < 4) {
            pattern[i] = kek[randomNum];
            colors_selected[randomNum] += 1;
        } else {
            i = i - 1;
        }
    }
    setTimeout(drawPattern, 1000);
}

function drawPattern() {
    c.fillStyle = 'black';
    c.fillRect(p_x, p_y, p_board, p_board);
    let posx = p_x + p_gap;
    let posy = p_y + p_gap;
    for (let i = 0; i < 9; i++) {
        setTimeout(() => {
            if (i == 3 || i == 6) { posx = p_x + p_gap; posy = posy + p_gap + p_size }
            c.fillStyle = pattern[i];
            sfx.tik.play();
            c.drawImage(texture, posx, posy, p_size, p_size);
            c.fillRect(posx, posy, p_size, p_size);
            posx = posx + p_gap + p_size;
        }, 200 * i);

    }
    colors_selected = null;

}

