const app = require('../server');
const mongoose = require('mongoose');
const request = require('supertest');

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Configuração antes de rodar os testes (ex: conexão com o MongoDB)
    await mongoose.connect(process.env.MONGODB_URI);
});
test('Função para pegar um Carro.', async () => {
    var userId = '67991afb2a565f894cb0ee47';

    // Enviar requisição para buscar o carro
    const res = await request(app).get(`/api/carros/${userId}`);

    // Verifica se o conteúdo é um objeto válido
    expect(res.status).toBe(200);
});
test('Deve buscar um post via API. @api', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);

    const body = await response.json();
    
    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('title');
});
test.afterEach(async ({ page }) => {
    // Limpeza após os testes
    await mongoose.disconnect();
});