import './App.scss';
import { Ads } from './components/Ads';
import { Header } from './components/Header';
import { Map } from './components/Map';

function App() {
  return (
    <div className="app">
      <Header />
      <main className='main'>
        <Map/>
        <Ads/>
      </main>
    </div>
  );
}

export default App;
