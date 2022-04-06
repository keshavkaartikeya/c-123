noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log('poseNet is initialized');
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("moseX="+noseX+"noseY="+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rigthWristX=results[0].pose.rightWrist.x;
        difference-floor(leftWristX-rightWristX);
        console.log("leftWristX="+leftWristX+"rightWrist="+rightWristX+"diffrence ="+difference);

    }
}
function draw() {
    background('#FF0000');
    document.getElementById("square_side").innerHTML="width and heigth of a square will be ="+difference+"px";
    fill('#0000FF');
    stroke('#000000');
    square(noseX,noseY,difference);
}