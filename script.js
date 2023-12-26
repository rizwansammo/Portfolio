const terminalInput = document.querySelector('.input');
const terminalOutput = document.querySelector('.output');

terminalInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const command = terminalInput.value.trim().toLowerCase();

    if (command === 'social') {
      terminalOutput.innerHTML += '<p>Social Media Links: ...</p>';
    } else if (command === 'about') {
      terminalOutput.innerHTML += '<p>About the owner: ...</p>';
    } else {
      terminalOutput.innerHTML += '<p>Command not recognized. Try "social" or "about".</p>';
    }

    terminalInput.value = '';
  }
});

// Function to update the user and directory information
function updateTerminalHeader(user, directory) {
  const userSpan = document.querySelector('.user');
  const directorySpan = document.querySelector('.directory');

  userSpan.textContent = user;
  directorySpan.textContent = directory;
}

// Example usage: updateTerminalHeader('your_user', '~/your_directory');
updateTerminalHeader('user', '~/rizwan');
