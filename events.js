let paused = false;
let paused2 = false;
let pausedkey = null;
let pausedkey2 = null;
window.addEventListener('keydown', (e) => {
    if (!ended && !paused && gametype == 'online') {
        switch (e.key) {
            case 's':
            case 'ArrowDown':
                moveDown(emptyX, emptyY);
                paused = true; pausedkey = e.key;
                break;
            case 'w':
            case 'ArrowUp':
                moveUp(emptyX, emptyY);
                paused = true; pausedkey = e.key;
                break;
            case 'a':
            case 'ArrowLeft':
                moveLeft(emptyX, emptyY);
                paused = true; pausedkey = e.key;
                break;
            case 'd':
            case 'ArrowRight':
                moveRight(emptyX, emptyY);
                paused = true; pausedkey = e.key;
                break;
        }
    } else if (!ended && gametype == 'local') {
        if (!paused) {
            switch (e.key) {
                case 'ArrowDown':
                    moveDown(emptyX, emptyY);
                    paused = true; pausedkey = e.key;
                    break;
                case 'ArrowUp':
                    moveUp(emptyX, emptyY);
                    paused = true; pausedkey = e.key;
                    break;
                case 'ArrowLeft':
                    moveLeft(emptyX, emptyY);
                    paused = true; pausedkey = e.key;
                    break;
                case 'ArrowRight':
                    moveRight(emptyX, emptyY);
                    paused = true; pausedkey = e.key;
                    break;
            }
        }
        //local player 2
        if (!paused2) {
            switch (e.key) {
                case 's':
                    moveDown2(empty2X, empty2Y);
                    paused2 = true; pausedkey2 = e.key;
                    break;
                case 'w':
                    moveUp2(empty2X, empty2Y);
                    paused2 = true; pausedkey2 = e.key;
                    break;
                case 'a':
                    moveLeft2(empty2X, empty2Y);
                    paused2 = true; pausedkey2 = e.key;
                    break;
                case 'd':
                    moveRight2(empty2X, empty2Y);
                    paused2 = true; pausedkey2 = e.key;
                    break;
            }
        }
    }

})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case pausedkey:
            paused = false;
            break;
        case pausedkey2:
            paused2 = false;
            break;
    }
})

document.getElementById('local').addEventListener('click', () => {
    startGame('local');
});