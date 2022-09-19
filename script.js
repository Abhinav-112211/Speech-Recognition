function record(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB","hi-GB";
    recognition.onresult = function(event){
        document.getElementById('speechToText').value = event.results[0][0].transcript;
    }
    recognition.start();
}