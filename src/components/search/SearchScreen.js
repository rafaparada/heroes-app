import { useState,useMemo } from "react";
import { heroes } from "../../data/heroes"
import HeroCard from "../heroes/HeroCard";
import { useLocation,useHistory } from "react-router";
const SearchScreen = () => {
    const [stringSearch,setStringSearch]=useState('');
    const location = useLocation();
    const history  = useHistory();
    const query = new URLSearchParams(location.search);
    const q = query.get("q") || 0;
    const handleInputChange = e =>{
        setStringSearch(e.target.value);
    }
    const handleSearch = () =>{
        query.set("q",stringSearch);
        history.push({search:query.toString()});
    }
    //que memorice la query y la ejecute solo cuando cambie
    const filteredHeroes = useMemo(()=>heroes.filter(hero=>hero.superhero.toLocaleLowerCase().includes(q)),[q]);
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
                    {stringSearch.length === 0 ? <h1>Inicie una busqueda</h1> : (stringSearch.length > 0 && filteredHeroes.length===0) ? <h1>No se encontraron resultados</h1> :<h1>Results</h1> } 
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
