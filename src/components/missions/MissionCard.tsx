
type IMissionCard = {
    missionName: string,
    missionYear: string,
    missionCountry: string,
    missionDestionation: string,
}

function MissionCard(props: IMissionCard) {
    const { missionName, missionYear, missionCountry, missionDestionation } = props;

    return (
        <section>
            <p>{missionName}</p>
            <div>
                <p>{missionYear}</p>
                <p>{missionCountry}</p>
                <p>{missionDestionation}</p>
            </div>
        </section>

    )
}

export default MissionCard