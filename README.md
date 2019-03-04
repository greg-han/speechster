
# Speechster!
## A quick project made for the SFHacks hackathon
The goal was to make something that transcribed online videos. After realizing that gcloud didn't support URL's,
the goal changed to reading downloaded audio files. Then, I decided that it should simply display what the user said to the screen through a react voice recording library. Some cool text manipulation and data could have been done on it (Like most frequent or similar words).

Unfortunately, my teammate left late and I was on my own. I didn't want to present by myself so I just left.
First time using gcloud platform. Just used some of their test scripts.
Uses CRA and some express boilerplate. I basically had to come up with a very basic design and figure out the gcloud api.

*Note for later, USE ASYNC/AWAIT CLIENTSIDE this will work.
Just need to set up a recorder, and set some code to retrieve the downloaded file after recording. 
