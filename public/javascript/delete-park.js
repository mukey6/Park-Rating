async function deleteFormHandler(event) {

    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
          // get end point and add it to fetch
    const deletedPost = await fetch(`/????/${id}`, {
        method: 'DELETE'
      });
  if(deletedPost.ok){
 // redirect to user's page to show their added parks
    document.location.replace('//')
  }else {
    alert(response.statusText);
  }
  }
  // find a class for the delete button
  document.querySelector('.delete-park-btn???').addEventListener('click', deleteFormHandler);
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  // get end point and add it to fetch
  const deletedPost = await fetch(`/????/${id}`, {
    method: "DELETE",
  });
  if (deletedPost.ok) {
    // redirect to user's page to show their added parks
    document.location.replace("//");
  } else {
    alert(response.statusText);
  }

// find a class for the delete button
document
  .querySelector(".delete-park-btn???")
  .addEventListener("click", deleteFormHandler);

