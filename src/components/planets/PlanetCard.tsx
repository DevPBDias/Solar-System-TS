
type IPlanetCard = {
    planetName: string,
    planetImg: string
}

function PlanetCard(props: IPlanetCard) {
    const { planetImg, planetName } = props;

    return (
        <section>
            <img src={planetImg} alt={planetName} />
            <p>{planetName}</p>
        </section>

    )
}

export default PlanetCard