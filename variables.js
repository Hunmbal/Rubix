const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1110;
canvas.height = 600;

c.draw

//block style
let overlay = document.getElementById("overlay");
let texture = document.getElementById("texture");

//main board------------------------------------------------------------->>>>>>>>>
let scale = 70;
let gap = 5; //must be >5
let position_x = 690;
let position_y = 70;
let bsize = scale - gap; //block size
//animation
let movement = gap + 10;  //to change the bounce of the animation
let highlight = 'rgba(0,0,200,0.8)'; //color of animation
let move_size = 1;
//block colors
let red = 'rgba(200,0,0,0.8)';
let orange = 'rgba(250,91,0,0.8)';
let green = 'rgba(0,200,0,0.8)';
let blue = 'rgba(0,0,200,0.8)';
let white = 'rgba(255,255,255,0.8)';
let yellow = 'rgba(250,220,90,0.8)';



//pattern board---------------------------------------------------------->>>>>>>>>>
let p_size = 30;
let p_gap = 7; //must be >5
let p_board = p_size * 3 + p_gap * 4;
let p_x = 495;
let p_y = 220;

//Background color
let r = (200).toString();
let g = (101).toString();
let b = (90).toString();
let gradient = 0.99;
let thickness = 0.3;

//sound-----------------------
var sfx = {
    push: new Howl({
        src: [
            './audio/push2.mp3'
        ],
        volume: 0.03
    }),
    push2: new Howl({
        src: [
            './audio/move.mp3'
        ],
        volume: 0.1
    }),
    tik: new Howl({
        src: [
            './audio/bat.mp3'
        ]
    }),
}