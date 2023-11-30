import Subscriber from './Subscriber.js';
import { publishPost } from './postPublisher.js';

    const subscriber = new Subscriber(1, 'Jane Doe', 'janedoe', 'jane@example.com', ['Page1', 'Page2'], ['Group1', 'Group2'], true);

    const postButton = document.getElementById('post-button');
    if (postButton) {
        postButton.addEventListener('click', () => publishPost(subscriber));
    }

    const profileButton = document.getElementById('profile-button');
    if (profileButton) {
        profileButton.addEventListener('click', displayUserModal);
    }

    const imageInput = document.getElementById('post-image');
    if (imageInput) {
        imageInput.addEventListener('change', showImageName);
    }

function displayUserModal() {
    const modal = document.getElementById('user-modal');
    if (modal) {
        modal.style.display = 'block';
        modal.innerHTML = `<div class="modal-content">${subscriber.getInfo()}<br><button onclick="closeModal()">Close</button></div>`;
    }
}

function closeModal() {
    const modal = document.getElementById('user-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

window.closeModal = closeModal;

function showImageName() {
    const input = document.getElementById('post-image');
    const imageName = document.getElementById('image-name');
    if (input && input.files && input.files.length > 0) {
        imageName.textContent = input.files[0].name;
    } else if (imageName) {
        imageName.textContent = '';
    }
}