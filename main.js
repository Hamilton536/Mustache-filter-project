noseX = 0;
noseY = 0;

function preload(){
    Mustache_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(Mustache_nose,noseX,noseY,30,30);
}

function take_snapshot(){
    save("myMustacheimage.png");
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 10;
        console.log("nose x= " + noseX);
        console.log("nose y= " + noseY);
    }
}