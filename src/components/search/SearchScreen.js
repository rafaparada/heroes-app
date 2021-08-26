import { useState } from "react";
import { heroes } from "../../data/heroes"
import HeroCard from "../heroes/HeroCard";
const SearchScreen = () => {
    const filteredHeroes = heroes.filter(hero=>hero.superhero.toLocaleLowerCase().includes("g"));
    const [stringSearch,setStringSearch]=useState('');
    const handleInputChange = e =>{
        setStringSearch(e.target.value);
    }
    const handleSearch = () =>{
        alert(stringSearch);
    }
    return (
        <div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <h2>Busqueda de Heroes</h2>
                    <hr />
                    <input type="text" value={stringSearch} className="form-control" onChange={handleInputChange} />
                    <button className="btn btn-success mt-2" onClick={()=>handleSearch()}>Buscar</button>
                    <hr />
                    <h1>Results</h1>
                    {
                        filteredHeroes.map(hero=>(<HeroCard key={hero.id} hero={hero}  />))
                    }

                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}
export default SearchScreen
