// const signup1button= document.getElementById('signup1');
// const container = document.getElementById('container');

// signup1button.addEventListener('click', () => {
//     container.classList.add("right-panel-active");
// });
// signup1button.addEventListener('click', () => {
//     container.classList.remove("right-panel-active");
// });

// Validation for login and registration 
function validateInput(type) {
    let valid = true;
    if (type === 'login') {
        const username = document.querySelector('.login-input input[type="text"]');
        const password = document.querySelector('.login-input input[type="password"]');
        
        if (username.value === "" || password.value === "") {
            alert('Please fill in all fields');
            valid = false;
        }
    } else if (type === 'signup') {
        const name = document.querySelector('.login-input1 input[placeholder="Name"]');
        const email = document.querySelector('.login-input1 input[placeholder="Email Address"]');
        const username = document.querySelector('.login-input1 input[placeholder="Username"]');
        const password = document.querySelector('.login-input1 input[placeholder="Password"]');
        
        if (name.value === "" || email.value === "" || username.value === "" || password.value === "") {
            alert('Please fill in all fields');
            valid = false;
        } else if (!email.value.includes('@')) {
            alert('Please enter a valid email address');
            valid = false;
        }
    }
    return valid;
}

// Effects for login link
const loginlink = document.querySelector('.loginlink');
if (loginlink) {
    loginlink.addEventListener('mouseover', () => {
        loginlink.style.backgroundColor = '#0051ff';
    });
    loginlink.addEventListener('mouseout', () => {
        loginlink.style.backgroundColor = '#1346b3';
    });
}

// Form switch animation (fade between login and signup)
const loginForm = document.querySelector('.left');
const signupForm = document.querySelector('.left1');
const switchToSignup = document.querySelector('.signup1 a[href="#signup"]'); // Update selector to point to the right link
const switchToLogin = document.querySelector('.signup1 a[href="#login"]'); // Ensure this points to the right link

if (switchToSignup) {
    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.opacity = '0';
        setTimeout(() => {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
            signupForm.style.opacity = '1';
        }, 500);
    });
}

if (switchToLogin) {
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.style.opacity = '0';
        setTimeout(() => {
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
            loginForm.style.opacity = '1';
        }, 500);
    });
}

// Third-party icons click alert
const thirdPartyIcons = document.querySelectorAll('.icon i, .icon1 i');
thirdPartyIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        alert('This feature is not yet implemented.');
    });
});

// Form submissions
const loginSubmitButton = document.querySelector('.log-button');
if (loginSubmitButton) {
    loginSubmitButton.addEventListener('click', (e) => {
        if (!validateInput('login')) {
            e.preventDefault();
        }
    });
}

const signupSubmitButton = document.querySelector('.left1 .log-button');
if (signupSubmitButton) {
    signupSubmitButton.addEventListener('click', (e) => {
        if (!validateInput('signup')) {
            e.preventDefault();
        }
    });
}
