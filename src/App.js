import Header from './Header';
import Side from './Side';
import Center from './Center';
import Academy from './Academy';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="body">
        <div className="Academy">
          <h1>Academy</h1>
          <Academy />
        </div>

        <div className="Center">
          <h1>Center</h1>
          <Center />
        </div>

        <div className="siditem">
          <h1>Sideitem</h1>
          <Side />
        </div>
      </div>
    </>
  );
}

export default App;
