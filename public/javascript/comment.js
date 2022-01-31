async function commentFormHandler(event) {

  event.preventDefault();


  // get textarea for comment (textarea[name="comment-body)
  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
      // get end-point for comments
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          post_id,
          comment_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        console.log('success')
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }  }


    // get class for form associated with comments 
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);

