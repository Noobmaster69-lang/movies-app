const request = require('supertest');
const app = require('../app');

let id; 

test('GET /actor', async () => { 
    const res = await request(app).get('/actor');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
 });

 test('Post /actor', async () => {
    const actor = {
        firstName: "Leonardo",
        lastName: "Di Caprio",
        nationality: "USA",
        birthday: 1999,
        image: "https://Dicaprio.jpg"
    }
    const res = await request(app).post('/actor').send(actor);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.firstName).toBe(actor.firstName);
 });

 test('PUT /actor/:id', async () => { 
    const actor = {
        firstName: "Leonardo update",
    };
    const res = await request(app).put(`/actor/${id}`).send(actor);
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(actor.firstName);
  });

 test('DELETE /actor/:id', async () => {
    const res = await request(app).delete('/actor/'+id);
    expect(res.status).toBe(204);
 });
