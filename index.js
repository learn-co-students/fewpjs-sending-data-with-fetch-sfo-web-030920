function submitData(name, email) {
  let formData = {
    name,
    email,
  };

  let confObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  return fetch("http://localhost:3000/users", confObject)
    .then((resp) => resp.json())
    .then((user) => appendDataToDOM(user.id))
    .catch((e) => renderError(e));
}

function appendDataToDOM(id) {
  let h2 = document.createElement("h2");
  h2.innerHTML = id;
  document.body.appendChild(h2);
}

function renderError(error) {
  let h3 = document.createElement("h3");
  h3.innerHTML = error.message;
  document.body.appendChild(h3);
}
