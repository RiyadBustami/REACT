const express = require("express");
const app = express();
const port = 8000;

const { faker } = require("@faker-js/faker");

const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};

const newFakeProduct = createProduct();
console.log(newFakeProduct);

const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.firstName(),
        firstName: faker.name.lastName(),
        _id: faker.datatype.uuid(),
    }
    return newFake;
}

const newFakePerson = createUser();
console.log(newFakePerson);

const createCompany = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newFake;
}

const newFakeCompany = createCompany();
console.log(newFakeCompany);

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
})

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
})

app.get("/api/user/company", (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany()
    });
})

app.listen(port, () => console.log(`Listening on port: ${port}`))