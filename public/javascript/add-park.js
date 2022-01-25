async function newFormHandler(event) {

  event.preventDefault();

    // get handlebar input an add it here 
  const park_name = document.querySelector('????"]').value;
  const park_rate = document.querySelector('????').value;
       
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
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}
      // get handlebar input an add it here 
document.querySelector('.new-park-form??').addEventListener('submit', newFormHandler);

