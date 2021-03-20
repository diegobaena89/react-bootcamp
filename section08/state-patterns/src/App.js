import './App.css';
import Ball from './Ball';
import IconList from './IconList';
import Lottery from './Lottery';
import ScoreKeeper from './ScoreKeeper';

function App() {
  return (
    <div>
      <ScoreKeeper />
      <IconList />
      <Lottery />
      <Lottery title='Mini Daily' maxNum={10} maxBalls={4}/>
    </div>
  );
}

export default App;
