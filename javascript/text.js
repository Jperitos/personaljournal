
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
        // Toggle the display of the notification popup
        if (notificationPopup.style.display === 'none' || notificationPopup.style.display === '') {
            notificationPopup.style.display = 'block';
        } else {
            notificationPopup.style.display = 'none';
        }
    });

    // Close the notification popup when clicking outside of it
    window.addEventListener('click', function (event) {
        if (!notificationBell.contains(event.target) && !notificationPopup.contains(event.target)) {
            notificationPopup.style.display = 'none';
        }
    });
});


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
            journalSection.style.display = 'block'; // Show journal
            storySection.style.display = 'none'; // Hide story section
            journalContents.style.display = 'none'; // Hide journal content section
            goProSection.style.display = 'none'; // Hide GO PRO section
            userProfileSection.style.display = 'none'; // Hide user profile section
        } else {
            journalSection.style.display = 'none'; // Hide journal
            storySection.style.display = 'block'; // Show story section
        }
    });

    // Handle journal card click
    journalCards.forEach(card => {
        card.addEventListener('click', function () {
            const title = this.querySelector('.card-title').innerText;
            const emoji = this.querySelector('.emoji').innerText;
            
            // Display journal content
            document.getElementById('selected-journal-title').innerText = emoji + " " + title;
            document.getElementById('selected-journal-content').innerText = "This is the content of " + title;

            // Hide the journal section and show the content section
            journalSection.style.display = 'none';
            journalContents.style.display = 'block';
        });
    });

    // Functions to toggle the Go Pro and User Profile sections
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

    // You can add event listeners for the buttons or links to toggle these sections
    document.getElementById('go-pro-toggle').addEventListener('click', showGoProSection);
    document.getElementById('user-profile-toggle').addEventListener('click', showUserProfileSection);
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

