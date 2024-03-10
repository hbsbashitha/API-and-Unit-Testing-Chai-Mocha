import { before, describe } from 'mocha';
import { expect } from 'chai';
import axios from 'axios';


describe('api test cases', () => {
    const baseUrl = 'https://fqyexnbdx8.execute-api.us-east-1.amazonaws.com/Prod';
    describe('GET /api/users', async () => {
        let response;
        before(async () => {
            
            response = await axios.get(baseUrl + '/users');
        });
        it('should return 200 OK with data', () => {
            expect(response.status).to.equal(200);
        },
        it('should return an array of users', () => {
            expect(response.data.date).to.be.an('array');
        }),
        it('user should have id, name, age, and security_status', () => {
            const fistUser = response.data.date[0];
            expect(fistUser).to.have.property('id');
            expect(fistUser).to.have.property('name');
            expect(fistUser).to.have.property('age');
            expect(fistUser).to.have.property('security_status');
        })
        )
    });
    
    describe('POST /api/users', () => {
        let response;
        const newUser = {
            id : '2',
            name: 'John Doe',
            age: 30
        };
        before(async () => {
            response = await axios.post(baseUrl + '/users', newUser);
        });
        it('should return 200 Created with data', () => {
            expect(response.status).to.equal(200);
        })
        it('should return the user data', () => {
            const fistUser = response.data.date;
            expect(fistUser).to.be.an('object');
            expect(fistUser).to.have.property('id');
            expect(fistUser.name).to.equal(newUser.name);
            expect(fistUser.age).to.equal(newUser.age);
            expect(fistUser).to.have.property('security_status');
        })
    });

    describe('PUT /api/users/{id}', () => {
        let response;
        const updatedUser = {
            name: 'John Doe',
            age: 31
        };
        before(async () => {
            response = await axios.put(baseUrl + '/users/2', updatedUser);;
        });
        it('should return 200 OK with data', () => {
            expect(response.status).to.equal(200);
        })
        it('should return the user data', () => {
            const updatedUser = response.data.data;
            expect(updatedUser).to.be.an('object');
            expect(updatedUser).to.have.property('id');
            expect(updatedUser.name).to.equal(updatedUser.name);
            expect(updatedUser.age).to.equal(updatedUser.age);
            expect(updatedUser).to.have.property('security_status');
        })
    });

    describe('DELETE /api/users/{id}', () => {
        let response;
        before(async () => {
            response = await axios.delete(baseUrl + '/users/2');
        });
        it('should return 200 No Content', () => {
            expect(response.status).to.equal(200);
        })
    });

});
