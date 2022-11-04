const { spec } = require('pactum');

it('should check api health', async () => {
  await spec()
    .get('http://3.110.159.152:8080/wd-webapp/health')
    //.post('https://the-internet.herokuapp.com/login')
    .expectBodyContains('UP')
    .expectStatus(200)
});

it('should verify credentials', async () => {
  await spec()
    .post('http://3.110.159.152:8080/wd-webapp/login')
    //.post('https://the-internet.herokuapp.com/login')
    .withJson({
      "username":"admin",
      "password":"12345"
  })
    .expectBodyContains('Success')
    .expectStatus(200)
});



// const { spec } = require('pactum');

// it('should save a new user', async () => {
//   await spec()
//     .get('https://restful-booker.herokuapp.com/ping')
//     .expectBodyContains("Created")
//     .expectStatus(201)
// });