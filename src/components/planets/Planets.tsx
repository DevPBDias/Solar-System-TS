import dataPlanets from '../../data/planets'
import PlanetCard from './PlanetCard'

function Planets() {
    return (
        <div>
            {
                dataPlanets.map((planet, index) => (
                    <PlanetCard key={index}
                        planetImg={planet.image}
                        planetName={planet.name}
                    />
                ))
            }
        </div>
    )
}

export default Planets