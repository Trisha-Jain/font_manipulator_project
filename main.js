right_wristX = 0;
right_wristY = 0;
left_wristX = 0;
left_wristY = 0;
noseX = 0;
noseY = 0;

function setup () {

    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#969697');
}

function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
    }
}