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

test.afterEach(async ({ page }) => {
    // Limpeza após os testes
    await mongoose.disconnect();
});