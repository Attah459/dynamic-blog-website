// DOM selections
const usernameInput = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');

// Function to display the saved name (if any)
function displaySavedName() {
    const savedName = localStorage.getItem('savedName');
    if (savedName) {
        displayName.textContent = `Saved Name: ${savedName}`;
    }
}

// Load saved name on page load
window.addEventListener('DOMContentLoaded', displaySavedName);


saveBtn.addEventListener('click', () => {
    const name = usernameInput.value.trim();
    if (name) {
        localStorage.setItem('savedName', name);
        displayName.textContent = `Saved Name: ${name}`;
    } else {
        displayName.textContent = 'Please enter a name.';
    }
});

// Clear name from localStorage
clearBtn.addEventListener('click', () => {
    localStorage.removeItem('savedName');
    usernameInput.value = '';
    displayName.textContent = '';
});
