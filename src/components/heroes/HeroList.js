import React,{useMemo} from 'react'
import GetHeroesByPublisher from '../selectors/GetHeroesByPublisher'
import HeroCard from './HeroCard';
const HeroList = ({publisher}) => {
    const heroes = useMemo(()=>GetHeroesByPublisher(publisher),[publisher]);
    //const heroes = GetHeroesByPublisher(publisher);
    return (
        <div>
            {
                heroes.map(hero=>(
                    <HeroCard  key={hero.id} hero={hero} />
                ))
            }
        </div>
    )
}
export default HeroList
