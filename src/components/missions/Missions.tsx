import dataMissions from '../../data/missions'
import MissionCard from './MissionCard'

function Missions() {
    return (
        <main>
            <h2>Missões</h2>
            {
                dataMissions.map((mission, index) => (
                    <MissionCard key={index}
                        missionName={mission.name}
                        missionYear={mission.year}
                        missionCountry={mission.country}
                        missionDestionation={mission.destination}
                    />
                ))
            }
        </main>
    )
}

export default Missions