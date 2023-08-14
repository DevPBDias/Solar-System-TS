import dataMissions from '../../data/missions'
import PlanetCard from './MissionCard'

function Missions() {
    return (
        <div>
            {
                dataMissions.map((planet, index) => (
                    <PlanetCard key={index}
                        planetImg={planet.image}
                        planetName={planet.name}
                    />
                ))
            }
        </div>
    )
}

export default Missions