const fetch = require('node-fetch');

const gitHubUrl = 'https://api.github.com/users/';

async function getEndPoint(url, string) {
  const response = await fetch(`${url}${string}`);
  const jsonRes = await response.json();

  if (response.status !== 200) {
    throw Error(jsonRes.message);
  }

  return jsonRes;
}

async function showGitHubUserAndRepos() {
  try {
    const userPromise = getEndPoint(gitHubUrl, 'chenglou');
    const reposPromise = getEndPoint(gitHubUrl, 'chenglou/repos');
    const { name, location } = await userPromise;
    const { length } = await reposPromise;

    console.log({ name, location, length });
  } catch (err) {
    console.log('Error: ', err.message);
  }
}

showGitHubUserAndRepos();
