const { spec } = require('pactum');

it('should check api health', async () => {
  await spec()
    .get('https://e-paratext-367610.el.r.appspot.com/health') 
    //.post('https://the-internet.herokuapp.com/login')
    .expectBodyContains('UP')
    .expectStatus(200)
}).timeout(10000);;

it('should verify credentials', async () => {
  await spec()
    .post('https://e-paratext-367610.el.r.appspot.com/login')
    //.post('https://the-internet.herokuapp.com/login')
    .withJson({
      "username":"admin",
      "password":"12345"
  })
    .expectBodyContains('Success')
    .expectStatus(200)
}).timeout(10000);;



// const { spec } = require('pactum');

// it('should save a new user', async () => {
//   await spec()
//     .get('https://restful-booker.herokuapp.com/ping')
//     .expectBodyContains("Created")
//     .expectStatus(201)
// });