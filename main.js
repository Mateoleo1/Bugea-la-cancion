noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
scorerightWrist=0;
scoreleftWrist=0
function preload(){
  sound=loadSound("Mundial.mp3")
}

  function setup() {
    canvas = createCanvas(600, 500);
   canvas.center()
   canvas.position(330,125)
    video = createCapture(VIDEO);
 canvas.position(330,125)
video.hide();
poseNet=ml5.poseNet(video,Watch);
  poseNet.on("pose", Red);


}
function Watch(){
console.log("poseNet");
}
function Red(results){
if(results.length>0){
  console.log(results)
  scorerightWrist=results[0].pose.keypoints[10].score;
  scoreleftWrist=results[0].pose.keypoints[9].score;
  rightWristX=results[0].pose.rightWrist.x;
  leftWristX=results[0].pose.leftWrist.x;
  rightWristY=results[0].pose.rightWrist.y;
  leftWristY=results[0].pose.leftWrist.y;
}
}

function draw() {
image(video,0,0,600,500)
fill ("#EA2F1C");
stroke ("#EA2F1C");
if (scorerightWrist>0.2){
circle(rightWristX,rightWristY,30);
if (rightWristY>0 && rightWristY<100){
  
  document.getElementById("Dj").innerHTML="velocity=0.5"; 
  sound.rate(0.5);
}
if (rightWristX>100 && rightWristX<200){
  sound.rate(1);
  document.getElementById("Dj").innerHTML="velocity=1";

}
if (rightWristX>200 && rightWristX<300){
  
  document.getElementById("Dj").innerHTML="velocity=1.5";
  sound.rate(1.5);
}
if (rightWristX>300 && rightWristX<400){
  
  document.getElementById("Dj").innerHTML="velocity=2";
  sound.rate(2);
}
if (rightWristX>400 && rightWristX<500){
 
  document.getElementById("Dj").innerHTML="velocity=2.5";
  sound.rate(2.5);
}
}
if (scoreleftWrist>0.2){
circle (leftWristX,leftWristY,30);
Numero=Number(leftWristY);
Numbero=floor(Numero*2  );
numeru=Numbero/1000;
document.getElementById("Id1").innerHTML="volumen"+numeru;
sound.setVolume(numeru);
}

}

function Hola(){
  sound.play();
  sound.setVolume(1);
  sound.rate(1);
}