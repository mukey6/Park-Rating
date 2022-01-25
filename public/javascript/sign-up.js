async function signupFormHandler(event) {

    event.preventDefault();
  

    // git id's for the following from handlebars
    const username = document.querySelector('#???').value.trim();
    const email = document.querySelector('#???').value.trim();
    const password = document.querySelector('#????').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          username,
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
  event.preventDefault();

  // git id's for the following from handlebars
  const ranger = document.querySelector("#???").value.trim();
  const password = document.querySelector("#????").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        ranger,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("Success");
    } else {
      alert(response.statusText);
    }
  }

// get form class for signup
document
  .querySelector(".signup-form???")
  .addEventListener("submit", signupFormHandler);

