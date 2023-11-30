const request = require('supertest');
const app = require('../app');

let id; 

test('GET /directors', async () => { 
    const res = await request(app).get('/directors');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
 });

 test('Post /directors', async () => {
    const director = {
      firstName: 'Jean',
      lastName: 'Paul',
      nationality: 'Peru',
      image: 'https://jeanPaul.jpg',
      birthday: 1998
    }
    const res = await request(app).post('/directors').send(director);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.firstName).toBe(director.firstName)
 });

 test('PUT /directors/:id', async () => { 
    const director = {firstName: "Jean Update" }
    const res = await request(app).put(`/directors/${id}`).send(director);
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(director.firstName);
  });

 test('DELETE /directors/:id', async () => {
    const res = await request(app).delete('/directors/'+id);
    expect(res.status).toBe(204);
 });