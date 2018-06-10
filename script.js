   var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');

    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = 768;
        canvas.height = 1024;

        /**
         * Your drawings need to be inside this function otherwise they will be reset when
         * you resize the browser window and the canvas goes will be cleared.
         */
        drawStuff();
    }
    resizeCanvas();

    function drawStuff() {
        // do your drawing stuff here
        var a = getRandomInt(1,4)
        switch (a)
        {
            case 1:
                triangle();
                break;
            case 2:
                carré();
                break;
            case 3:
                drawDiamond(100,200,300,400)
                break;
            case 4:
                circle()
                break;
        }
    }

function triangle() {


        context.beginPath();
        context.moveTo(75, 50);
        context.lineTo(120, 75);
        context.lineTo(100, 25);
        context.rotate(getRandomInt(0,190)) 
        context.fillStyle = getRandomColor();
        context.fill();

}
function carré(position, size_factor, color) {


        context.fillStyle=getRandomColor();
        context.fillRect(10,10,40,40)

}
function drawDiamond(x, y, width, height){
    context.save();
    context.beginPath();
    context.moveTo(x, y);

    // top left edge
    context.lineTo(x - width / 2, y + height / 2);

    // bottom left edge
    context.lineTo(x, y + height);

    // bottom right edge
    context.lineTo(x + width / 2, y + height / 2);

    // closing the path automatically creates
    // the top right edge
    context.closePath();

    context.fillStyle = getRandomColor();
    context.fill();
    context.restore();
}
   function circle() {

       var posx = 100
       var posy = 200

       context.fillStyle = getRandomColor();
       context.beginPath();
       context.arc(posx, posy, 50, 0, 2 * Math.PI);
       context.fill();
   }

   function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   function getRandomColor() {
       var letters = '0123456789ABCDEF';
       var color = '#';
       for (var i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
       }
       return color;
   }