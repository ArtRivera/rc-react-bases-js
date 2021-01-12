import { heroes } from "../data/heroes";

// console.log(heroes, owners);

const getHeroeById = (id) => heroes.find(elem => elem.id === id);

// console.log(getHeroeById(2));

const getHeroeByOwner = (owner) => heroes.filter(elem => elem.owner === owner);

// console.log(getHeroeByOwner('DC'));

export {
    getHeroeById,
    getHeroeByOwner
}