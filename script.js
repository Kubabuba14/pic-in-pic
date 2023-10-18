const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a media stream, passed to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {
        // Catch error
        console.log('whoops, error here!', error)
    }
}

button.addEventListener('click', async () => {
    // disable button
    button.disabled = true;
    // start button
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});

// on load
selectMediaStream();