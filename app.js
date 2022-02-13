const express = require('express')
const bd = require('./DataBase/db')


try {
    bd.authenticate();
    console.log('Conexão estabelecida com a base de dados');
  } catch (error) {
    console.error('Náo foi possível conectar na base de dados', error);
  }

  (async () => {
    
    try {
        const resultado = await bd.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();