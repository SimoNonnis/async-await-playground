const fetch = require('node-fetch');

const gitHubUrl = 'https://api.github.com/users/';

class GetUserClass {
  async getUser(url, name) {
    const response = await fetch(`${url}${name}`);
    const user = await response.json();

    return user;
  }
}

(async () => {
  const client = new GetUserClass();
  const { name, location } = await client.getUser(gitHubUrl, 'chenglou');
  console.log({ name, location });
})();
