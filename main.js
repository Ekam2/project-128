arijit_song = "";
jvke_song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

user_name = localStorage.getItem("Username");

document.getElementById("welcome_user_name").innerHTML = "Hi " + user_name + "! " +"     "  +  "    Welcome To THE AI MUSIC WEB APP        "  + "           (also click to go back)"  ;


function d(){
    window.location = "hi.html";
}

function note(){
window.alert("NOTE - Get your left-hand wrist in front of the webcam to play MILNE HAI MUJHSE AAYE Song. Get your right-hand wrist in front of the webcam to play GOLDEN HOUR Theme Song.   Keep at least 2 feet distance from the webcam, so that your wrists are detected quickly");
}

    function setup(){
        canvas = createCanvas(600,530);
        canvas.center();
      
    
        video = createCapture(VIDEO);
        video.hide();

        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
    }
    
    function draw(){
        image(video,0,0,600,530);}

        function preload(){
            arijit_song = loadSound("arijit.mp3");
            jvke_song = loadSound("jvke.mp3");
        }

function modelLoaded(){
    console.log("PoseNet is Intialized");
}


function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
    }
}


