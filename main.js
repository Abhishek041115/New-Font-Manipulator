Xnosetext=0;
Ynosetext=0;
Xrightwristtext=0;
Xleftwristtext=0;
Xleftrightwristtext=0;
function setup()
{
video=createCapture(VIDEO);
video.size(400,300);
video.position(200,120)
canvas=createCanvas(440,440);
canvas.position(700,110);
posenet=ml5.poseNet(video, modelLoaded);
posenet.on('pose',gotPoses);
}
function modelLoaded()
{
console.log("Model is Loaded");
}
function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
Xnosetext=results[0].pose.nose.x;
Ynosetext=results[0].pose.nose.y;
Xrightwristtext=results[0].pose.rightWrist.x;
Xleftwristtext=results[0].pose.leftWrist.x;
Xleftrightwristtext=floor(Xleftwristtext-Xrightwristtext);
}
}
function draw()
{
background('white')
fill('red')
textSize(Xleftrightwristtext);
text('Abhishek',200,220);
}