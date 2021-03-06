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

        var a = getRandomInt(1,4)
        a = 8
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
        triangle();
        carré();
        randdiamong();
        circle();


    }

function triangle() {

        //full random ready
        context.beginPath();
        context.moveTo(getRandomInt(0,768), getRandomInt(0,1024));
        context.lineTo(getRandomInt(0,768), getRandomInt(0,1024));
        context.lineTo(getRandomInt(0,768), getRandomInt(0,1024));
        context.rotate(getRandomInt(0,190))
        context.fillStyle = getRandomColor();
        context.fill();
}
function carré() {

        //full random ready
        context.fillStyle=getRandomColor();
        context.fillRect(getRandomInt(0,768),getRandomInt(0,1024),getRandomInt(0,768),getRandomInt(0,1024))
}

function randdiamong() {

        //full random ready
        var x,y,width,height;
        x= getRandomInt(0,768)
        y = getRandomInt(0,1024)
        width = getRandomInt(10,200)
        height = getRandomInt(10,200)
        drawDiamond(x,y,width,height)
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

       var posx = getRandomInt(0,768)
       var posy = getRandomInt(0,1024)

       context.fillStyle = getRandomColor();
       context.beginPath();
       context.arc(posx, posy, getRandomInt(10,50), 0, 2 * Math.PI);
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