import { heroes } from "../../data/heroes";

const GetHeroesByPublisher = (publisher) =>{
    const theHeroes = ["DC Comics","Marvel Comics"];
    if(!theHeroes.includes(publisher)){
        throw new Error(`${publisher} no encontrado`);
    }

    return heroes.filter(hero => hero.publisher.toLocaleLowerCase() === publisher.toLocaleLowerCase());
    

}

export default GetHeroesByPublisher;