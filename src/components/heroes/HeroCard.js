import React from 'react';
import {Link} from 'react-router-dom';
const HeroCard = ({hero}) => {
    return (
        <div className="card mb-3 animate__fadeInUpBig" style={{maxWidth:'540px',maxHeight:'300px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${hero.id}.jpg`} className="img-fluid rounded-start" alt={hero.superhero} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{hero.id}</h5>
                        <p className="card-text">{hero.alter_ego}</p>
                        <p className="card-text">{hero.first_appearance}</p>
                        <p className="card-text">{(hero.alter_ego !== hero.characters) && hero.characters}</p>
                        <p className="card-text"><small className="text-muted"><Link to={`hero/${hero.id}`}>Mas...</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard

