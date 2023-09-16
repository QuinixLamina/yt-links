// script.js
const playButton = document.getElementById("playButton");
const videoLinkInput = document.getElementById("videoLink");
const videoPlayer = document.getElementById("videoPlayer");

playButton.addEventListener("click", () => {
    const videoLink = videoLinkInput.value;
    
    // Check if the input is a valid YouTube link
    if (isValidYouTubeLink(videoLink)) {
        videoPlayer.style.display = "block";
        videoPlayer.innerHTML = `
            <iframe
                width="560"
                height="315"
                src="${videoLink.replace("/watch?v=", "/embed/")}"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        `;
    } else {
        alert("Invalid YouTube video link. Please provide a valid link.");
    }
});

function isValidYouTubeLink(link) {
    // This is a simple validation. You may want to implement a more robust one.
    return link.includes("youtube.com/watch?v=");
}
