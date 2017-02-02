const CANVAS = document.getElementById("canvas");
CANVAS.width = 512;
CANVAS.height = 512;
const CANVASCOORDS = CANVAS.getBoundingClientRect();
const CANVASINNERCOORDS = {
    top: CANVASCOORDS.top + CANVAS.clientTop,
    left: CANVASCOORDS.left + CANVAS.clientLeft
};
const CTX = CANVAS.getContext('2d');

function randomColor() {
    return ('#' + Math.floor(Math.random() * 16777215).toString(16))
}

function CreateFigure(color, X, Y) {
    CTX.fillStyle = color;
    for (i = 0; i <= 32; i++) {
        CTX.fillRect(X, Y + (i * 16) - 8, 1024 - (i * 16), 16);
    }
    for (i = 0; i <= 32; i++) {
        CTX.fillRect(X, Y - (i * 16) - 8, 1024 - (i * 16), 16);
    }
}

function init() {
    const FIGURE = {
        X: -1024,
        Y: event.clientY - CANVASINNERCOORDS.top,
        color: randomColor()
    };

    function animate() {

        if (FIGURE.X < 0) {
            FIGURE.X += 8;
            CANVAS.removeEventListener("click", init);
            CreateFigure(FIGURE.color, FIGURE.X, FIGURE.Y);
        } else {
            CANVAS.addEventListener("click", init);
            clearInterval(timer);
        }
    }

    let timer = setInterval(animate, 20);
    animate();
}

CANVAS.addEventListener("click", init);







	
	
	

