const color = require('colors')
const fs = require('fs');
const { argv } = require('process');

const crearArchivo = ( base = 5 , listar = false, numb) => { //si la person no manda la base, se le da por defecto un 5
    return new Promise( (resolve,reject) => {
        try{
            
            let salida, consola = '';

            for ( let i = 1; i <= numb; i++){
                salida += `${base} x ${i} = ${i*base}\n`;
                consola += `${ color.green(base) } ${color.red('x')} ${ color.blue(i) } ${color.bgYellow('=')} ${ color.cyan(i*base) }\n`;
                }
            if(listar){
                console.log(color.america('=================='));
                console.log(color.bold.red(`   Tabla del:`, base));
                console.log(color.america('=================='));
                console.log(consola);
            }
            fs.writeFileSync( `./salida/tabla-${ base }.txt`,salida);
            
            return `tabla-${base}.txt `;
            
        }catch(err){
            throw 'No se pudo crear';
        }
    } )
}
module.exports = {
    crearArchivo//exportamos la función de crearArchivo
}