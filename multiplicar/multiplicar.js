const fs = require('fs');
const color = require('colors');
let crearArchivo = async (base, limit=10) => {
    let data = '';
    if (!Number(base)) throw new Error(`El valor introducido ${base} no es un número, intentelo de nuevo`);
    for (let i = 1; i <= limit; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }
    fs.writeFile(`tablas/tabla-${base}-al-${limit}.txt`, data, (err) => {
        if (err) throw err;
    });
    return `tabla-${base}-${limit}`;
}

let listarTabla = (base, limit = 10) => {
    console.log("===================".green);
    console.log(`    Tabla de ${base}    `.green);
    console.log("===================".green);
    for (let i = 0; i <=limit; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}