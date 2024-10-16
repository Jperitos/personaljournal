
function format(command, value = null) {
    document.execCommand(command, false, value);
}

// counter
const editor = document.querySelector('.editor');
const charCounter = document.querySelector('.char-counter');
const maxChars = 10000;

editor.addEventListener('input', () => {
  const textLength = editor.innerText.length;
  charCounter.textContent = `${textLength}/${maxChars}`;

  if (textLength > maxChars) {
      editor.innerText = editor.innerText.slice(0, maxChars);
      charCounter.textContent = `${maxChars}/${maxChars}`; 
  }
});

function saveContent() {
    const content = editor.innerHTML;
    console.log('Saved Content: ', content);
    alert('Content saved! Check the console for the output.');
}
function saveContent() {
    const content = editor.innerHTML;
    console.log('Saved Content: ', content);
    alert('Content saved! Check the console for the output.');
}

////image and audio
function format(command, value = null) {
    document.execCommand(command, false, value);
}

function insertImage(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '100%'; 
            document.getElementById('editor').appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

//  audio recording
let mediaRecorder;
let audioChunks = [];

// Start recording audio
document.getElementById('startRecording').addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        audioChunks = [];

        mediaRecorder.addEventListener('dataavailable', event => {
            audioChunks.push(event.data);
        });

        document.getElementById('startRecording').disabled = true;
        document.getElementById('stopRecording').disabled = false;
    });
});


document.getElementById('stopRecording').addEventListener('click', () => {
    mediaRecorder.stop();

    mediaRecorder.addEventListener('stop', () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/mpeg' });
        const audioURL = URL.createObjectURL(audioBlob);
        const audioElement = document.createElement('audio');
        audioElement.controls = true;
        audioElement.src = audioURL;
        document.getElementById('editor').appendChild(audioElement);

        document.getElementById('startRecording').disabled = false;
        document.getElementById('stopRecording').disabled = true;
    });
});



  //check if the editor is empty
  function checkPlaceholder() {
    if (editor.innerHTML.trim() === '') {
      editor.classList.add('empty');
    } else {
      editor.classList.remove('empty');
    }
  }

  checkPlaceholder();

  editor.addEventListener('input', checkPlaceholder);


// toolbar
function toggleToolbar() {
    const toolbarContainer = document.querySelector('.toolbar-container');
    const toggleButton = document.querySelector('.toggle-toolbar-btn');

    toolbarContainer.classList.toggle('hidden');
    if (toolbarContainer.classList.contains('hidden')) {
        toggleButton.textContent = '•••'; 
    } else {
        toggleButton.textContent = '×';  
    }
}

// NOTIFICATION NA MU POP UP
document.addEventListener('DOMContentLoaded', function () {
    const notificationBell = document.getElementById('notification-bell');
    const notificationPopup = document.getElementById('notification-popup');

    notificationBell.addEventListener('click', function () {
        if (notificationPopup.style.display === 'none' || notificationPopup.style.display === '') {
            notificationPopup.style.display = 'block';
        } else {
            notificationPopup.style.display = 'none';
        }
    });

    // Close the notification popup 
    window.addEventListener('click', function (event) {
        if (!notificationBell.contains(event.target) && !notificationPopup.contains(event.target)) {
            notificationPopup.style.display = 'none';
        }
    });
});

 //return to journal-count
function toogleReturn() {
   
    var journalWrapper = document.getElementById("journal");
    var journalContents = document.getElementById
    ("journal-contents")
    
    journalWrapper.style.display = 'block';
    journalContents.style.display = 'none';
    
    
}


// JOURNAL HIDE THEN E CALL IGKA TOPLOK

document.addEventListener('DOMContentLoaded', function () {
    const journalToggle = document.getElementById('journal-toggle');
    const journalSection = document.getElementById('journal');
    const journalContents = document.getElementById('journal-contents');
    const storySection = document.querySelector('.story-section');
    const goProSection = document.getElementById('go-pro-section');
    const userProfileSection = document.getElementById('user-profile');

    journalToggle.addEventListener('click', function (event) {
        event.preventDefault();
        
        if (journalSection.style.display === 'none' || journalSection.style.display === '') {
            journalSection.style.display = 'block';  
            storySection.style.display = 'none';     
            journalContents.style.display = 'none';  
            goProSection.style.display = 'none';     
            userProfileSection.style.display = 'none'; 
        } else {
            journalSection.style.display = 'none';  
            storySection.style.display = 'block';  
        }
    });

    // Handle journal card click
    const journalCards = document.querySelectorAll('.journal-card');
    journalCards.forEach(card => {
        card.addEventListener('click', function () {
            const title = this.querySelector('.card-title').innerText;
            const emoji = this.querySelector('.emoji').innerText;

            document.getElementById('selected-journal-title').innerText = emoji + " " + title;
            document.getElementById('selected-journal-content').innerText = "This is the content of " + title;

            journalSection.style.display = 'none';
            journalContents.style.display = 'block';
        });
    }); 

    journalCards.forEach(card => {
        card.addEventListener('click', function () {
            const title = this.querySelector('.card-title').innerText;
            const emojii = this.querySelector('.emojii').innerText;
            
            document.getElementById('selected-journal-title').innerText = emojii + " " + title;
            document.getElementById('selected-journal-content').innerText = "This is the content of " + title;

            journalSection.style.display = 'none';
            journalContents.style.display = 'block';
        });
    });


    // Go Pro and User Profile 
    function showGoProSection() {
        journalSection.style.display = 'none';
        journalContents.style.display = 'none';
        storySection.style.display = 'none';
        goProSection.style.display = 'block';
        userProfileSection.style.display = 'none';
    }

    function showUserProfileSection() {
        journalSection.style.display = 'none';
        journalContents.style.display = 'none';
        storySection.style.display = 'none';
        goProSection.style.display = 'none';
        userProfileSection.style.display = 'block';
    }

    document.getElementById('go-pro-toggle').addEventListener('click', showGoProSection);
    document.getElementById('user-profile-toggle').addEventListener('click', showUserProfileSection);
});


// emoji
const emojiPicker = document.getElementById('emoji-picker');
const addFeelingBtn = document.getElementById('add-feeling-btn');
const selectedEmoji = document.getElementById('selected-emoji');
const displayedEmoji = document.getElementById('displayed-emoji');

// Toggle emoji picker visibility on button click
addFeelingBtn.addEventListener('click', () => {
  emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'block' : 'none';
});

// Add click event listeners to each emoji
document.querySelectorAll('.emoji').forEach(emoji => {
  emoji.addEventListener('click', (event) => {
    const emojiValue = event.target.textContent;
    selectedEmoji.textContent = emojiValue;   // Update the selected emoji
    displayedEmoji.textContent = emojiValue;  // Update the displayed emoji
    emojiPicker.style.display = 'none';       // Hide the picker after selection
  });
});






// // Date
// function updateDate() {
//     const dateElement = document.getElementById('liveDate');
//     const now = new Date();

//     // Format the date (You can customize the format as needed)
//     const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
//     const formattedDate = now.toLocaleDateString('en-US', options);

//     // Get current time
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const time = `${hours}:${minutes}`;

//     // Update the content of the date element
//     dateElement.innerHTML = `${formattedDate}, ${time}`;
// }

// // Call updateDate every second
// setInterval(updateDate, 1000);

// // Initialize with the current date/time when the page loads
// updateDate();

