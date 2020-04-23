// Add your code here
function submitData(userName, userEmail) {
  const body = document.querySelector('body')
  const userData = {
    name: userName,
    email: userEmail
  }

  const postObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  }
  
  return fetch('http://localhost:3000/users', postObj).then(resp => resp.json()).then(
    user => {
    body.append(user.id)
  }
  ).catch(function(error) {
    body.append(error.message)
  })
}

submitData('jess', 'jess@example.com');