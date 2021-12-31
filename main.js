function setup(){
    canvas=createCanvas(400,400);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
    }
    
    function modelLoaded(){
        console.log('PoseNet is Initalized');
    }
    
    function draw(){
        background('#969a97');
    
    }
    
    function gotPoses(results){
        if(results.length>0){
            console.log(results);
        }
    
    }
    
    
    
    
    
    