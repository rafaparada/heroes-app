import { heroes } from "../../data/heroes";

const GetHeroById = heroId => heroes.find(hero => hero.id===heroId); 
    
export default GetHeroById;