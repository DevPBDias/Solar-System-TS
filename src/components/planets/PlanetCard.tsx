import './PlanetCard.css'

type IPlanetCard = {
    planetName: string,
    planetImg: string
}

function PlanetCard(props: IPlanetCard) {
    const { planetImg, planetName } = props;

    return (
        <section className="card-planet">
            <img src={planetImg} alt={planetName} className={planetName} />
            <p className="name">{planetName}</p>
        </section>

    )
}

export default PlanetCard