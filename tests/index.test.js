const axios  = require("axios");

function sum(a,b){
    return a+b
}

const  BACKEND_URL = "http://localhost:3000"

describe("Authentication",() => {
    test('User is able to sign up only once', async() => {
      const username = "kirat" + Math.random();
      const password ="123456";
      const response = await axios.post(' ${BACKEND_URL}/api/v1/signup',{
        username,
        password,
        type: "admin"

    })
    
    expect(response.statusCode).toBe(200)
    const updatedResponse = await axios.post('${BACKEND_URL}/api/v1/signup',{
        username,
        password,
        type:"admin"
    })
    expect(updatedResponse.statusCode).toBe(400);
    
    });

    test('signup request fails if the username is empty',async()=> {
        const usernanme = 'kirat- ${Math.random()}'
        const password = "123456"

        const response = await axios.post('${BACKEND_URL}/api/v1/signup',{
            password
        })


        expect (response.statusCode).toBe(400)

    })

    test('Signin succeeds if the username  and password are correct',async()=> {
        const usernanme = 'kirat- ${Math.random()}'
        const password = "123456"

        await axios.post('${BACKEND_URL}/api/v1/signup',{
            username,
            password
        });

        const response = await axios.post('${BACKEND_URL}/api/v1/signin', {
            usernanme,
            password
        });

        expect(response.statusCode).toBe(200)
        expect(response.body.token).toBeDefined()

})

})
