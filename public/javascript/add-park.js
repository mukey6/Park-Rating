async function newFormHandler(event) {

    event.preventDefault();
  
      // get handlebar input an add it here 
    const parkName = document.querySelector('????"]').value;
    const parkRate = document.querySelector('????').value;
         
    // get end point and add it to fetch
    const response = await fetch(`/???`, {
      method: 'POST',
      body: JSON.stringify({
        parkName,
        parkRate
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
        // redirect to user's page to show their added parks
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}


