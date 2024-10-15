
function format(command, value = null) {
    document.execCommand(command, false, value);
}

// counter
const editor = document.querySelector('.editor');
const charCounter = document.querySelector('.char-counter');
editor.addEventListener('input', () => {
    const textLength = editor.innerText.length;
    charCounter.textContent = `${textLength}/10000`;
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

  // Function to check if the editor is empty
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
    const storySection = document.querySelector('.story-section'); // Select the story section
    const goProSection = document.getElementById('go-pro-section');
    const userProfileSection = document.getElementById('user-profile');

    const journalCards = document.querySelectorAll('.journal-card'); // Select all journal cards

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
const selectedEmojiDisplay = document.getElementById('selected-emoji');
const displayedEmoji = document.getElementById('displayed-emoji');
const addFeelingBtn = document.getElementById('add-feeling-btn');

let selectedEmoji = null;

addFeelingBtn.addEventListener('click', function () {
    if (!selectedEmoji) {
        emojiPicker.style.display = 'block'; selected
    }
});

document.querySelectorAll('#emoji-picker .emoji').forEach(emoji => {
    emoji.addEventListener('click', function () {
        selectedEmoji = this.innerText;
        selectedEmojiDisplay.innerText = selectedEmoji;
        displayedEmoji.innerText = selectedEmoji; 

        emojiPicker.style.display = 'none';
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

