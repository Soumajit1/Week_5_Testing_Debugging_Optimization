const request = require('supertest');
const app = require('./server');

describe('GET /api/users', () => {
  it('responds with json', (done) => {
    request(app).get('/api/users').expect('Content-Type', /json/).expect(200, done);
  });
});