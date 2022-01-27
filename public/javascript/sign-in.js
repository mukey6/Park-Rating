async function loginFormHandler(event) {
console.log("clicked")
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
      document.location.replace('/dashboard')
          } else {
      alert(response.statusText);
    }
  }
}




// get handlebar form/button an add it here 

<<<<<<< HEAD
document.querySelector('.login-form').addEventListener('click', loginFormHandler);
=======
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
>>>>>>> 5def1340f68e1ff8a385a9ae4deddc7481e0ba58

