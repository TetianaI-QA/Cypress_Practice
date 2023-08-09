const baseUrl = `https://automationintesting.online/`;
const userAdmin = {
    name: `admin`,
    password: `password`
}

let token = `test`;
let regex = /token=([^;]+)/;

describe(`API`, () => {
    it(`Check data from API`, () => {
        cy.request(`POST`, `${baseUrl}auth/login`, {username: userAdmin.name, password: userAdmin.password}).then((response) => {
            expect(response.status).to.equal(200);
            token = response.headers[`set-cookie`]
            // [0].split{`;`}[0];
            console.log(token);
        })
    })

    it.only(`Create room`, () => {
        cy.visit(`${baseUrl}`)
    })
})