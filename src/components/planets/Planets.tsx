import dataPlanets from '../../data/planets'
import PlanetCard from './PlanetCard'

function Planets() {
    return (
        <section>
            <h2>Planetas</h2>
            {
                dataPlanets.map((planet, index) => (
                    <PlanetCard key={index}
                        planetImg={planet.image}
                        planetName={planet.name}
                    />
                ))
            }
        </section>
    )
}

export default Planets