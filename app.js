const { argv } = require('./config/yargs'); //Destructoración de objetos
const color = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let command = argv._[0]; //Obtengo el primer comando del array

switch (command) { //Validar tipo de comando y su respectiva función.
    case 'listar':
        listarTabla(argv.base, argv.limit);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limit)
            .then(nameFile => console.log(`Archivo creado: ${color.green(nameFile)}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
