import { useState, useEffect } from "react";
import { Ads } from "./components/Ads";
import { Header } from "./components/Header";
import { Map } from "./components/Map";
import "./App.scss";
import { AddAdsModal } from "./components/AddAdsModal";
import { getInitData } from "./helpers";
import { useAppDispatch } from "./hooks";
import { initAdsData } from "./store/adsSlice";

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const getInitialData = async () => {
    try {
      setIsLoading(true);

      const data = await getInitData();
      dispatch(initAdsData(data));
    } catch (error) {
      if (error instanceof Error) {
        console.warn(error.message);
      } else {
        console.warn('error => getInitData()');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = () => {
    setShowAddModal(true);
  };

  const closeModal = () => {
    setShowAddModal(false);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <div className="app">
      <Header openModal={openModal} />
      <main className="main">
        {isLoading && <p className="main__loading">Loading...</p>}
        <Map />
        <Ads />
      </main>
      {showAddModal && <AddAdsModal onClose={closeModal} />}
    </div>
  );
}

export default App;
