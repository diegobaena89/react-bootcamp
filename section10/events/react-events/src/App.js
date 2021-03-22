import logo from './logo.svg';
import './App.css';
import WiseSquare from './WiseSquare';
import WiseSquareWithProps from './WiseAquareWithProps'
import AnnoyingForm from './AnnoyingForm';
import CopyDemo from './CopyDemo';

function App() {
  return (
    <div className="App">
      <WiseSquare />
      <AnnoyingForm />
      <CopyDemo />
      <WiseSquareWithProps />
    </div>
  );
}

export default App;
