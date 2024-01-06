import {useState} from 'react';
import { Ads } from './components/Ads';
import { Header } from './components/Header';
import { Map } from './components/Map';
import './App.scss';
import { AddAdsModal } from './components/AddAdsModal';

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const openModal = () => {
    setShowAddModal(true);
  };

  const closeModal = () => {
    setShowAddModal(false);
  };

  return (
    <div className="app">
      <Header openModal={openModal} />
      <main className='main'>
        <Map/>
        <Ads/>
      </main>
      {showAddModal && <AddAdsModal onClose={closeModal} />}
    </div>
  );
}

export default App;
