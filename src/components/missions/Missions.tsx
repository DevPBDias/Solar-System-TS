import dataMissions from '../../data/missions'
import MissionCard from './MissionCard'
import './Mission.css'

function Missions() {
    return (
        <main className='missionContainer'>
            <h2 className='missionTile'>Missões</h2>
            <div className='missionCardContainer'>
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
            </div>
        </main>
    )
}

export default Missions