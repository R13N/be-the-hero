const crypto = require('crypto');//método do node para criptografia, aqui usado para gerar id das Ongs

module.exports = function generateUniqueId(){
  return crypto.randomBytes(4).toString('HEX');//vai gerar 4 bytes de caracteres de forma aleatória e converter para hexadecimal
}