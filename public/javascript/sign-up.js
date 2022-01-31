async function signupFormHandler(event) {

  event.preventDefault();


  // git id's for the following from handlebars
  // in a input element
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok){
      document.location.replace('/')

        console.log('Success')
    } else{
        alert(response.statusText);
    }
  }
}
// get form class for signup
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

