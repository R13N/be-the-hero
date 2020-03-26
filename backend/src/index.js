const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// cors vai restringir acesso
app.use(cors());
//para transformar o conteúdo trazido em json para objeto javascript antes das requisições
app.use(express.json());
app.use(routes);

app.listen(3333);