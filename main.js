//https://teachablemachine.withgoogle.com/models/1r9qG3azJ/

function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1r9qG3azJ/model.json',modelReady)
}

function modelReady(result){
    classifier.classify(gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}