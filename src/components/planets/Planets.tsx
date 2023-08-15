import dataPlanets from '../../data/planets'
import PlanetCard from './PlanetCard'
import './PlanetCard.css'

function Planets() {
    return (
        <section className='planetContainer'>
            <h2 className='planetTitle'>Planetas</h2>
            <div className='cardContainer'>
                {
                    dataPlanets.map((planet, index) => (
                        <PlanetCard key={index}
                            planetImg={planet.image}
                            planetName={planet.name}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Planets