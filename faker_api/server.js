const express = require("express");
const app = express();
const faker = require("faker");

const createUser = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: faker.address.streetAddress(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    };
    return newFake;
};

app.get("/", (req, res) => {
    res.json({message: "This is Faker API practice!"});
});

app.get("/api/users/new", (req, res) => {
    const newFakeUser = createUser();
    console.log(newFakeUser);
    res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
    const newFakeCompany = createCompany();
    console.log(newFakeCompany);
    res.json(newFakeCompany);
});

app.get("/api/user/company", (req, res) => {
    const newFakeUser = createUser();
    const newFakeCompany = createCompany();
    res.json({ newFakeUser, newFakeCompany });
});

const port = 8000;
app.listen(port, () => {
    console.log(`Faker app running on port ${port}.`);
});
