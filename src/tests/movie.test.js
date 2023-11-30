const request = require('supertest');
const app = require('../app');
const models = require('../models');
let id; 

test('GET /movies', async () => { 
    const res = await request(app).get('/movies');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
 });

 test('Post /movies', async () => {
    const movies = {
        name:'Titanic',
        image: 'https:titanic.jpg',
        synopsis: 'Movie, large and exciting',
        releaseYear: 1998
      }
    const res = await request(app).post('/movies').send(movies);
    id = res.body.id;
    console.log(res.body);
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(movies.name)
 });

 test('PUT /movies/:id', async () => { 
    const movies = { name: "titanic 2.0" }
    const res = await request(app).put(`/movies/${id}`).send(movies);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(movies.name);
  });

 test('DELETE /movies/:id', async () => {
    const res = await request(app).delete('/movies/'+id);
    expect(res.status).toBe(204);
 });