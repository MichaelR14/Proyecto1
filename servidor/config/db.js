const pg = require('pg');
const { use } = require('react');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {

    try {
        
        await pg.connect(process.env.DB_PG, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
    })
        console.log('BDD CONECTADA');

    } catch (error) {
        console.log(error);
        process.exit(1); // DETENER APP
    }

}

module.exports = conectarDB