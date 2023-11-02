document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById("editor");

    
    function addText() {
        const textElement = document.createElement("textarea");
        editor.appendChild(textElement);
        // disable the button
        addTextButton.disabled = true;

        // add class to button 
        addTextButton.classList.add("disabled");

    }

    // create a function to add image    
    function addImage() {
        const imageUrl = prompt("Enter the image URL:");
        if (imageUrl) {
            const imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            editor.appendChild(imageElement);
        }

        addImageButton.classList.add("disabled");
        // disable the button
        addImageButton.disabled = true;
    }

    
    function addVideo() {
        const videoUrl = prompt("Enter the Video URL:");
        if (videoUrl) {
            const videoElement = document.createElement("iframe");
            videoElement.src = videoUrl;
            videoElement.controls=true;
            videoElement.autoplay=true;
            videoElement.setAttribute("frameborder", "0");
            videoElement.setAttribute("allowfullscreen", "true");
            editor.appendChild(videoElement);
        }
        addVideoButton.classList.add("disabled");
        // disable the button
        addVideoButton.disabled = true;
    }

    function addMusic() {
        const audioUrl = prompt("Enter the Music URL:");
        if (audioUrl) {
            const audioElement = document.createElement("audio");
            audioElement.controls=true;
            audioElement.autoplay=true;
            audioElement.src = audioUrl;
            audioElement.setAttribute("frameborder", "0");
            audioElement.setAttribute("allowfullscreen", "true");
            editor.appendChild(audioElement);
        }
        addmusicButton.classList.add("disabled");

        // disable the button
        addmusicButton.disabled = true;
    }

    const addTextButton = document.getElementById("addText");
    const addImageButton = document.getElementById("addImage");
    const addVideoButton = document.getElementById("addVideo");
    const addmusicButton = document.getElementById("addMusic");

    addTextButton.addEventListener("click", addText);
    addImageButton.addEventListener("click", addImage);
    addVideoButton.addEventListener("click", addVideo);
    addmusicButton.addEventListener("click", addMusic);
});