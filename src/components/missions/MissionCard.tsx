import './Mission.css'
import calendarIcon from '../../assets/calendar.png'
import flagIcon from '../../assets/flag.png'
import gpsIcon from '../../assets/gps.png'


type IMissionCard = {
    missionName: string,
    missionYear: string,
    missionCountry: string,
    missionDestionation: string,
}

function MissionCard(props: IMissionCard) {
    const { missionName, missionYear, missionCountry, missionDestionation } = props;

    return (
        <section className="missionCard">
            <p className="missionName">{missionName}</p>
            <div className="missionInfo">
                <div className='containerInfo'>
                    <img className='icon' src={calendarIcon} alt='calendarIcon' />
                    <p className="missionText">{missionYear}</p>
                </div>
                <div className='containerInfo'>
                    <img className='icon' src={flagIcon} alt='flagIcon' />
                    <p className="missionText">{missionCountry}</p>
                </div>
                <div className='containerInfo'>
                    <img className='icon' src={gpsIcon} alt='gpsIcon' />
                    <p className="missionText">{missionDestionation}</p>
                </div>
            </div>
        </section>

    )
}

export default MissionCard