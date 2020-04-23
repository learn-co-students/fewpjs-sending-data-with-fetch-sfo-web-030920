// Add your code here
function submitData(user, userEmail){
    const body = document.querySelector('body')
    const post = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: user,
          email: userEmail
        })
      };
    return fetch('http://localhost:3000/users', post)
    .then(function(response) {
        return response.json();
      })
      .then(user =>  {
        body.append(user.id);
      })
      .catch(function(error) {
        body.append(error.message);
    });
}