const terminalInput = document.querySelector('.input');
const terminalOutput = document.querySelector('.output');

terminalInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const command = terminalInput.value.trim().toLowerCase();

    if (command === 'social') {
      terminalOutput.innerHTML += '<p>Social Media Links: ...</p>'; // Add your social media links here
    } else if (command === 'about') {
      terminalOutput.innerHTML += '<p>About the owner: ...</p>'; // Add owner's information here
    } else {
      terminalOutput.innerHTML += '<p>Command not recognized. Try "social" or "about".</p>';
    }

    terminalInput.value = '';
  }
});
