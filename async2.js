const fetch = require('node-fetch');

const gitHubUrl = 'https://api.github.com/users/';

async function getUser(url, name) {
  const response = await fetch(`${url}${name}`);
  const user = await response.json();

  return user;
}

getUser(gitHubUrl, 'chenglou').then(({ name, location }) =>
  console.log({ name, location })
);
