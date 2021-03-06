async function logout() {
console.log("clicked logout")
  /// get logout end point
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
      // refirect to homepage 
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}
// get logout class from handlebar button
document.querySelector('#logout').addEventListener('click', logout);
