import logo from './logo.svg';
import './App.css';
import zolmanlogo from './zolmanio.jpg';
import zolmanmusic from './zol.mp4';
import { Player } from 'video-react';

function App() {
  return (
    <div className="App">
      <video autoPlay>
        <source src={zolmanmusic} />
        </video>
      
      <h1>ВНИМАНИЕ!!!</h1>

      <h1>РАЗЫСКИВАЕТСЯ ПЕДОФИЛ, МАНЬЯК, УБИЙЦА, ТЕРРОРИСТ</h1>
      <img className='manyak-pedofil' src={zolmanlogo}></img>
      <div className='text-desc'>
<h1>ПОЗЫВНОЙ: 4EREP</h1>
      <h1>ОПИСАНИЕ ВНЕШНОСТИ </h1>
      <h1>РОСТ: 185СМ</h1>
      <h1>ВЕС: 68КГ</h1>
      <h1>ТЕЛОСЛОЖЕНИЕ: БОГАТЫРЬ</h1>
      <h1>ТАТУИРОВКИ: КУПОЛА</h1>
      </div>
    </div>
  );
}

export default App;
