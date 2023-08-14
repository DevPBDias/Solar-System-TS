import './App.css';
import Header from './components/header/Header'
import Planets from './components/planets/Planets'
import solarSystem from "./assets/logo.png";

function App() {
  return (
    <div>
      <Header title={solarSystem} />
      <Planets />
    </div>
  )
}

export default App
