// Assuming you have 'User.js' and 'Subscriber.js' modules ready as previously outlined

import Subscriber from './Subscriber.js';
import { publishPost } from './postPublisher.js';

// Initialize a subscriber
const subscriber = new Subscriber(1, 'Jane Doe', 'janedoe', 'jane@example.com', ['Page1', 'Page2'], ['Group1', 'Group2'], true);

// Event listener for the post button
document.getElementById('post-button').addEventListener('click', () => publishPost(subscriber));

window.displayUserModal = function() {
  const modal = document.getElementById('user-modal');
  modal.innerHTML = `<div class="modal-content">${subscriber.getInfo()}</div>`;
  modal.style.display = 'block';
};

// Close modal if clicked outside of modal content
window.onclick = function(event) {
  const modal = document.getElementById('user-modal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Example trigger for the modal display, replace with actual trigger in your application
document.body.addEventListener('click', (e) => {
  if (e.target.tagName === 'HEADER') {
    displayUserModal();
  }
});
document.getElementById('profile-button').addEventListener('click', displayUserModal);

function displayUserModal() {
  const modal = document.getElementById('user-modal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('user-modal');
  modal.style.display = 'none';
}

// Attach closeModal to the window object to make it accessible from the HTML
window.closeModal = closeModal;