const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, p2] = personajes;

console.log(p2);


const retornaArreglo = () => ['ABC', 123];

const [letras, num] = retornaArreglo();

console.log(letras, num);

const state = (valor) => [valor, () => console.log('Hola Mundo')];

const [nombre, setNombre] = state('Goku');

console.log(nombre);
setNombre();