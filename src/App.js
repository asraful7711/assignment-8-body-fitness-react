import logo from './logo.svg';
import './App.css';
import Records from './components/Records/Records';
import Activities from './components/Activities/Activities';

function App() {


  return (
    <div className="App">
      <div className="lg:grid grid-cols-4 bg-slate-100">
        <div className="activity-container col-span-3 lg:ml-11">
          <Activities></Activities>
        </div>
        <div className="record-container">
          <Records></Records>

        </div>
      </div>
    </div>
  );
}

export default App;
