const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

// cors vai restringir acesso
app.use(cors());
//para transformar o conteúdo trazido em json para objeto javascript antes das requisições
app.use(express.json());
app.use(routes);
app.use(errors());//após as rotas

module.exports = app;