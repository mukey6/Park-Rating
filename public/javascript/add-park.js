async function newFormHandler(event) {

    event.preventDefault();
  
      // get handlebar input an add it here 
    const park_name = document.querySelector('#park-name').value;
    const park_rate = document.querySelector('#rate').value;
         
    // get end point and add it to fetch
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        park_name,
        park_rate
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
        // redirect to user's page to show their added parks
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

  document.querySelector('.new-park-form').addEventListener('submit', newFormHandler);
