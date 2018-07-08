const fetch = require('node-fetch');

const gitHubUrl = 'https://api.github.com/users/';

async function getUser(url, name) {
  const response = await fetch(`${url}${name}`);
  const user = await response.json();

  if (response.status !== 200) {
    throw Error(user.message);
  }

  return user;
}

async function showGitHubUser() {
  try {
    const { name, location } = await getUser(gitHubUrl, 'not-exist');
    console.log({ name, location });
  } catch (err) {
    console.log('Error: ', err.message);
  }
}

showGitHubUser();
