import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import {useMemo} from 'react';
import GetHeroById from "../selectors/GetHeroById";
const HeroesScreen = ({history}) => {
    const {heroeId} = useParams();
    
    const hero = useMemo(()=>GetHeroById(heroeId),[heroeId]);
    // const hero = GetHeroById(heroeId);

    if(!hero){
        return <Redirect to="/" />
    }
    const handleReturn = () =>{
        if(history.length <=2){
            history.push("/");
        }else{
            history.goBack();
        }
    }
    return (
        <div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-6">
                            <img src={`../assets/heroes/${hero.id}.jpg`} alt={hero.superhero} className="rounded float-start w-75 h-100" />
                        </div>
                        <div className="col-6">
                            <table className="table">
                                <thead></thead>
                                <tbody>
                                    <tr><td><h5>Superhero</h5></td><td><h5>:</h5></td><td><h6>{hero.superhero}</h6></td></tr>
                                    <tr><td><h5>Publisher</h5></td><td><h5>:</h5></td><td><h6>{hero.publisher}</h6></td></tr>
                                    <tr><td><h5>Alter ego</h5></td><td><h5>:</h5></td><td><h6>{hero.alter_ego}</h6></td></tr>
                                    <tr><td><h5>First appearance</h5></td><td><h5>:</h5></td><td><h6>{hero.first_appearance}</h6></td></tr>
                                    <tr><td><h5>Characters</h5></td><td><h5>:</h5></td><td><h6>{hero.characters}</h6></td></tr>
                                </tbody>
                            </table>  
                            <button className="btn btn-outline-success btn-lg" onClick={()=>handleReturn()}>Return</button>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}

export default HeroesScreen
