function preload() {
  
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    posenet=ml5.poseNet(video,modeloaded);
    posenet.on('pose',poses);
    
    }
     function modeloaded() {
         console.log('posenet.intialized');
     }
     function poses(res) {
         if (res.length > 0) {
             console.log(res);
             console.log('nose x = '+ res[0].pose.nose.x);
             console.log('nose y = '+ res[0].pose.nose.y);
         }
     }
    function draw() {
    image(video,0,0,300,300);
    }
function take_snapshot() {
    save('ryan.jpeg');
}