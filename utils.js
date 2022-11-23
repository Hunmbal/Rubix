let [min, sec, ms] = [00, 00, 00];
let ms_temp = 0;

let bg = document.getElementById("bg");
let local_img = document.getElementById("lc");



function startTimer() {
    ms_temp = ms_temp + 10;
    ms = ms_temp / 10;
    if (ms_temp > 1000) { sec = sec + 1; ms_temp = 0 }
    if (sec == 60) { min = min + 1; sec = 0 }

    document.querySelector("#ms").innerHTML = ms; (ms < 10 ? ('0').concat(sec.toString()) : ms);
    document.querySelector('#sec').innerHTML = (sec < 10 ? ('0').concat(sec.toString()) : sec);
    document.querySelector('#min').innerHTML = ('0').concat(min.toString());

    if (!ended) {
        if (min < 5) {
            setTimeout(startTimer, 10);
        } else {
            finished();
        }
    }
}

function drawBg() {
    c.drawImage(bg, 0, 0, 1110, 600);
    /*image
    img = document.getElementById("bg");
    c.drawImage(img, 0, 0, 1110, 600);
    c.fillStyle = 'rgba(10,10,10,0.25)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 5; i < 595; i++) {
        //colors -----
        let a = (Math.abs(gradient - ((i * i / 87500) + (-i / 150) + 1))).toString();
        //------------
        let col = ('rgba(').concat(r, ',', g, ',', b, ',', a, ')');
        //------------
        c.strokeStyle = col;
        c.lineWidth = thickness;
        c.beginPath();
        c.moveTo(0, i);
        c.lineTo(1110, i);
        c.stroke();
    }*/
}

//MENU--------------------
function createMenu() {
    c.drawImage(bg, 0, 0, 1110, 600);
    drawBg();
    document.getElementById('set').style.display = 'grid';
    document.getElementById('frame').style.display = 'grid';
}


function transition_local_Bg(move) {

    c.fillStyle = ('rgba(50,50,50,').concat((move / 10).toString(), ')');
    c.drawImage(local_img, pos2_x, pos2_y, 355, 355);
    c.fillRect(pos2_x, pos2_y, 5 * scale + gap, 5 * scale + gap);
    c.drawImage(local_img, position_x, position_y, 355, 355);
    c.fillRect(position_x, position_y, 5 * scale + gap, 5 * scale + gap);
    setTimeout(() => {
        if (move > 0) {
            move = move - 1
            transition_local_Bg(move);
        }
    }, 70);
}

function startCountdown(time) {
    document.getElementById('count').innerHTML = time;
    setTimeout(() => {
        time = time - 1;
        if (time > 0) {
            startCountdown(time);
        } else {
            ended = false;
            document.getElementById("timer").style.display = 'flex';
            document.getElementById('countdown').style.display = 'none';
            startTimer();
        }
    }, 1000);

}

