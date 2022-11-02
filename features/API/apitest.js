const { spec } = require('pactum');

it('should save a new user', async () => {
  await spec()
    .get('http://65.2.171.175:8080/wd-webapp/login')
    //.post('https://the-internet.herokuapp.com/login')
    .withForm({
      username: 'admin',
      password: '12345'
    })
    .expectBodyContains('Success')
    .expectStatus(201)
});

// const { spec } = require('pactum');

// it('should save a new user', async () => {
//   await spec()
//     .get('https://restful-booker.herokuapp.com/ping')
//     .expectBodyContains("Created")
//     .expectStatus(201)
// });