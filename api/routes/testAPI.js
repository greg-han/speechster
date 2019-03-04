var express = require("express");
var router = express.Router();
let thing = ""
function saveWords(words){
 thing = words;
	console.log("THING" + thing);
}
async function getwords(){
   let trans = await gcloudspeech(true)	   
   return trans;
  }

async function gcloudspeech(tf){
let transcript = "";
 if(tf){
  const speech = require('@google-cloud/speech');
  const fs = require('fs');

  // Creates a client
  const client = new speech.SpeechClient();

  // The name of the audio file to transcribe
  const fileName = '/home/gman/speechster/api/routes/resources/audio.raw';
  // Reads a local audio file and converts it to base64
  const file = fs.readFileSync(fileName);
  const audioBytes = file.toString('base64');
  
  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const audio = {
    content: audioBytes,
  };
  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: 'en-US',
  };
  const request = {
    audio: audio,
    config: config,
  };

  // Detects speech in the audio file
  const [response] = await client.recognize(request);
  //let transcript;
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
    console.log(`Transcription: ${transcription}`);
    transcript = String(transcription);
    saveWords(transcript);
 }
  return transcript;
}

gcloudspeech().catch(console.error);
//Rather than handling thihs in an async manner here, try just waiting for it client side instead.
router.get("/", function(req,res,next){
 // let state = this.getWords();
  let state = gcloudspeech(true)	   
  console.log("Transcript11" + state );
  res.send(state);
}).bind(this);

module.exports = router;
