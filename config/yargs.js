const { describe } = require('yargs');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option( 'l', {
                    alias: 'listar',
                    type: "boolean",
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option( 'h', {
                    alias:'hasta',
                    type: 'number',
                    default: 10,
                    describe:'Indicas hasta qué iteración quieres que llegue'
                })
                .check( ( argv, options ) => {//valida que se meta el tipo de dato correcto que indiques
                    if(isNaN( argv.b, argv.h )) { //si es un Not A Number
                        throw 'La base tiene que ser un número'
                    }
                    return true; //siempre necesario
                })
                .argv;

module.exports = argv; //argv es un objeto