

const resultElement=document.getElementById('result');
let recognition;



function startConverting(){
    if('webitSpeechRecognition' in window){
        recognition = new webkitSpeechRecognition();
            setupRecognition(recognition);
            recognition.start();
    }
}

function setupRecognition(recognition){

    recognition.contnuous = true;

    recognition.interimResults=true;

    recognition.lang='en-US';

    recognition.onresult=function(event){
        
        const{finalTranscript,interTransscript}=
        processResult(event.results);

        resultElement.innerHTML=finalTranscript+interTransscript
    }

}


function processResult(result){

    let finalTranscript='';
    let interTransscript ='';

    for(let i=0;i<result.lenth;i++){
        let Transcript = results[i][0].transcript;
        transcript.replace("\n","<br>");

        if(result[i].isFinal){
            finalTranscript+=transcript;
        }

        else{
            interTransscript+=transcript;
        }

        return{finalTranscript,interTransscript}

    }
}


function startConverting(){
    if(recognition){
        recognition.stop();
    }
}
