import './App.css';
import Header from './components/header/Header'
import Planets from './components/planets/Planets'
import Missions from './components/missions/Missions'
import solarSystem from "./assets/logo.png";

function App() {
  return (
    <div>
      <Header title={solarSystem} />
      <Planets />
      <Missions />
    </div>
  )
}

export default App
