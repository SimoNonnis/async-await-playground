const fetch = require('node-fetch');

const gitHubUrl = 'https://api.github.com/users/';

async function getEndPoint(url, string) {
  const response = await fetch(`${url}${string}`);
  const jsonRes = await response.json();

  return jsonRes;
}

async function showGitHubUserAndRepos() {
  const [user, repos] = await Promise.all([
    getEndPoint(gitHubUrl, 'chenglou'),
    getEndPoint(gitHubUrl, 'chenglou/repos')
  ]);

  const { name, location } = user;
  const { length } = repos;

  console.log({ name, location, length });
}

showGitHubUserAndRepos();
