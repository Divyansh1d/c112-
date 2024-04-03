function setup(){
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 350, 275);
    triangle(400,250,500,400,300,400);
    circle(500,100,150);
    rect(400, 250, 200, 150);
}