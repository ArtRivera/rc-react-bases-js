const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron Man',
}

// Asigna el valor de un objeto creando una nueva referencia en la memoria
const persona2 = {...persona };

// const { nombre, edad, clave } = persona;

// console.log(nombre, edad, clave);

const retornaPersona = ({ nombre, clave, edad, rango = 'Capi' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.02032,
            lng: 35.015
        }
    }
};

const { nombreClave, anios, latlng } = retornaPersona(persona);
const { lat, lng } = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);