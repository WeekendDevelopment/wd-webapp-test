// const { spec } = require('pactum');

// it('should verify creds', async () => {

//   await spec()
//     .post('http://65.2.171.175:8080/wd-webapp/login')
//     .expectBody(`
//       {
//         "username": "admin",
//         "password": "12345"
//       }  
//     `)
//     .expectStatus(201);
  
// });


const { spec } = require('pactum');

it('should save a new user', async () => {
  await spec()
    .get('http://65.2.171.175:8080/wd-webapp/login')
    //.post('https://the-internet.herokuapp.com/login')
    .withForm({
      username: 'admin',
      password: '12345'
    })
    .expectBody({
      'Success'     
    })
    .expectStatus(200)
});