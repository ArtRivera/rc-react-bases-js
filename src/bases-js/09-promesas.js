import { getHeroeById } from "./bases-js/exp-imp";
// import { heroes } from "./data/heroes";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//     }, 3000);
// });

// promesa.then(heroe => console.log(heroe))

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        const heroe = getHeroeById(id);
        if (heroe === undefined) reject('No existe el heroe');
        else resolve(heroe);
    });
}

getHeroeByIdAsync(1111)
    .then(console.log)
    .catch(console.error);