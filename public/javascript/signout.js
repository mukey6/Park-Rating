async function logout() {
  /// get logout end point
  const response = await fetch("/???", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // refirect to homepage
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}
// get logout class from handlebar
document.querySelector("#logout???").addEventListener("click", logout);
