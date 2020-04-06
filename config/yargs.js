const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola las tablas de multiplicar', opts) //comandos y opciones
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv //objeto que tiene el método argv
}
