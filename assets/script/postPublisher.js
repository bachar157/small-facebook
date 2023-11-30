export function publishPost(subscriber) {
    const text = document.getElementById('post-text').value;
    const imageFile = document.getElementById('post-image').files[0];
    const postsContainer = document.getElementById('posts-container');
    const feedbackElement = document.getElementById('feedback');

    if (text && imageFile) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const profilePic = document.createElement('img');
        profilePic.src = "./assets/img/th (1).jfif"; // Ensure this path is correct
        profilePic.style.width = '50px';
        profilePic.style.height = '50px';
        profilePic.style.borderRadius = '50%';
        profilePic.style.marginRight = '20px'; // Add right margin directly

        

        const postHeader = document.createElement('div');
        postHeader.classList.add('post-header');
        postHeader.appendChild(profilePic);

        const dateElement = document.createElement('span');
        const date = new Date();
        dateElement.textContent = `Posted on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
        postHeader.appendChild(dateElement);

        const textElement = document.createElement('p');
        textElement.textContent = text;
        postElement.appendChild(postHeader);
        postElement.appendChild(textElement);

        const imageElement = document.createElement('img');
        const reader = new FileReader();
        reader.onload = function(e) {
            imageElement.src = e.target.result;
            postElement.appendChild(imageElement);
            postsContainer.appendChild(postElement);

            document.getElementById('post-text').value = '';
            document.getElementById('post-image').value = '';
            feedbackElement.textContent = 'Post published successfully!';
            feedbackElement.className = 'feedback success';
        };
        reader.onerror = function() {
            feedbackElement.textContent = 'Error in reading the image file.';
            feedbackElement.className = 'feedback error';
        };
        if (imageFile.type.startsWith('image/')) {
            reader.readAsDataURL(imageFile);
        } else {
            feedbackElement.textContent = 'Please select a valid image file.';
            feedbackElement.className = 'feedback error';
        }

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-times', 'delete-post');
        deleteIcon.onclick = function() {
            postsContainer.removeChild(postElement);
        };
        postElement.appendChild(deleteIcon);
    } else {
        feedbackElement.textContent = 'Please enter text and select an image to post.';
        feedbackElement.className = 'feedback error';
    }
}