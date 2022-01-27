async function loginFormHandler(event) {

  event.preventDefault();
// get handlebar id an add it here 
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {

      // get end point and add it to fetch
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        console.log('success')
        // redirect to users page
      document.location.replace('/')
          } else {
      alert(response.statusText);
    }
  }
}




// get handlebar form/button an add it here 

document.querySelector('.login-form').addEventListener('click', loginFormHandler);

