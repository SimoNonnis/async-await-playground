const fetch = require('node-fetch');

const gitHubUrl = 'https://api.github.com/users/';

async function showUser(url, name) {
  const response = await fetch(`${url}${name}`);
  const user = await response.json();

  console.log({ userName: user.name, location: user.location });
}

showUser(gitHubUrl, 'chenglou');
