const crypto = require('crypto');//método do node para criptografia, aqui usado para gerar id das Ongs
const connection = require('../database/connection');

module.exports = {

  async index( request, response ) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  async create( request, response ) {
      const { name, email, whatsapp, city, uf } = request.body;

      const id = crypto.randomBytes(4).toString('HEX'); //vai gerar 4 bytes de caracteres de forma aleatória e converter para hexadecimal

      await connection('ongs').insert({
          id,
          name,
          email,
          whatsapp,
          city,
          uf,
      })

      return response.json({ id });
    }

}