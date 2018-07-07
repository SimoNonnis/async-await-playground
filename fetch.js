const fetch = require('node-fetch');

const gitHubUrl = 'https://api.github.com/users/';

function showUser(url, name) {
  fetch(`${url}${name}`)
    .then(res => res.json())
    .then(user => {
      console.log({ userName: user.name, location: user.location });
    });
}

showUser(gitHubUrl, 'chenglou');
