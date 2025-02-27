// JavaScript code to handle comment submissions and display

document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');

    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const commentInput = document.getElementById('commentInput').value;
            if (commentInput) {
                const commentItem = document.createElement('li');
                commentItem.textContent = commentInput;
                commentList.appendChild(commentItem);
                document.getElementById('commentInput').value = ''; // Clear input field
            }
        });
    }
});

