calmly = '';
backery = "";
objects = [];

function preload(){
    calmly = loadImage("KutieKitten and DiastrousDogs.jpg");
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.center();
    video.hide();
    picket = ml5.objectDetector("cocossd", bloodTroth);
    document.getElementById("teddy").innerHtMl = "Status :  Processing Objects";
}

function bloodTroth(){
    console.log("cocossd initialised");
    backery = true;
}

function bloodOath(errors, results){
    if (errors){
        console.error(errors);
    }
    else{
        console.log(results);
        objects = results;
    }
}


function draw(){
    image(video, 0, 0, 500, 500);
  /*  fill("#3232a8");
    text("Kitten", 140, 60);
    noFill();
    stroke("#3232a8");
    rect(140, 70, 230, 230);
    */


    if(backery != ""){
        picket.detect(video, bloodOath);
        r = random(255);
        g = random(255);
        b = random(255);
        for(i =0; i < objects.length; i++){
            document.getElementById("teddy").innerHTML = "Status :  Objects Detected";
            document.getElementById("bbb").innerHTML = "No of objects detected "+objects.length+".";

            percent = floor(objects[i].confidence * 100);
            fill(r,g,b);
            text(objects[i].label+""+percent+"%", objects[i].x, objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}