//WRITE FILE SYNC
//const { argv, options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');

//option('L')
//

console.clear();


//console.log( process.argv );
//console.log( argv);

//console.log(process.argv);
//node app --base=9

/*
const [ , , arg3 = 'base=5'] = process.argv //DESESTRUCTURACION:se obtiene de --base=9 que es el tercer argumento, por eso el 2
const [ , base = 5] = arg3.split('=') //extraemos el número
console.log( base );
//const base = 12
*/
crearArchivo( argv.b, argv.l ,argv.h)
    .then( (nombreArchivo) => console.log( nombreArchivo, 'creado' ) )
    .catch( (err) => console.log( err ) )
/*
WRITE FILE
const fs = require('fs');
const base = 3
console.clear();
console.log('==================');
console.log(`   Tabla del: ${base}`);
console.log('==================');

let salida = ''
for ( let i = 1; i <= 10; i++){
    salida += `${base} x ${i} = ${i*base}\n`
}
console.log(salida);

fs.writeFile( `tabla-${base}.txt`,salida, ( err ) => {
    if(err) throw err
    console.log(`tabla-${base}.txt creado`);
} ) */