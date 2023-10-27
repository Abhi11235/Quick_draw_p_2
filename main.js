function setup()
{
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
}

function setup()
{
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function clearCanvas()
{
    background("white");
}

function draw()
{
    strokeWeight(13);
    stroke("blue");
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}


function updateCanvas()
{
    background("white");
}

Math.floor()
{
    var sketch;
    var random_number;
    console.log(sketch)

}

function classifyCanvas() 
{
classifier.classify(canvas,gotResult);
}

check_sketch()
{

}

function gotResult(error, results) 
{ if (error) {
     console.error(error); 
    
    } console.log(results);
     document.getElementById('label').innerHTML = 'Label: ' + results[0].label; 
     
     document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%'; 
     
     utterThis = new SpeechSynthesisUtterance(results[0].label);
       synth.speak(utterThis); 
}