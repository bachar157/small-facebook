export function publishPost(subscriber) {
    const text = document.getElementById('post-text').value;
    const imageFile = document.getElementById('post-image').files[0];
    const postsContainer = document.getElementById('posts-container');
  
    if (text && imageFile) {
      // Create a new post element
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      // Add profile picture to post
      const profilePic = document.createElement('img');
      profilePic.src = 'profile-pic.jpg'; // Replace with actual path to profile image
      profilePic.classList.add('post-profile-pic');
  
      // Create a post header
      const postHeader = document.createElement('div');
      postHeader.classList.add('post-header');
      postHeader.appendChild(profilePic);
  
      // Insert date and time
      const dateElement = document.createElement('span');
      const date = new Date();
      dateElement.textContent = `Posted on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
      postHeader.appendChild(dateElement);
  
      // Insert text
      const textElement = document.createElement('p');
      textElement.textContent = text;
      postElement.appendChild(postHeader);
      postElement.appendChild(textElement);
  
      // Insert image
      const imageElement = document.createElement('img');
      const reader = new FileReader();
      reader.onload = function(e) {
        imageElement.src = e.target.result;
        postElement.appendChild(imageElement);
  
        // Add the post to the container
        postsContainer.appendChild(postElement);
  
        // Clear the input fields
        document.getElementById('post-text').value = '';
        document.getElementById('post-image').value = '';
      };
      reader.readAsDataURL(imageFile);
  
      // Add delete option
      const deleteIcon = document.createElement('i');
      deleteIcon.classList.add('fas', 'fa-times', 'delete-post');
      deleteIcon.onclick = function() {
        postsContainer.removeChild(postElement);
      };
      postElement.appendChild(deleteIcon);
    } else {
      alert('Please enter text and select an image to post.');
    }
  }
  