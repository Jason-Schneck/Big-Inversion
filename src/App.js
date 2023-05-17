import './App.css';
import SecondCompontent from './components/SecondComponent';


function App() {
  return (
    <div className="App">
      <fieldset>
        <legend>People</legend>
        <SecondCompontent firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
        <SecondCompontent firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
        <SecondCompontent firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
        <SecondCompontent firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/> 
      </fieldset>
      
    </div>
    
  );
}

export default App;
