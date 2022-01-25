async function signupFormHandler(event) {

    event.preventDefault();
  

    // git id's for the following from handlebars
    // in a input element
    const ranger = document.querySelector('#signup-ranger').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
  
    if (ranger && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          ranger,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok){
          console.log('Success')
      } else{
          alert(response.statusText);
      }
    }
  }
// get form class for signup
  document.querySelector('.signup-form???').addEventListener('submit', signupFormHandler);
