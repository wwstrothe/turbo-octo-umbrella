// components
import Boarding from './components/Boarding';
import Footer from './components/Footer';
import Hazards from './components/Hazards';
import Header from './components/Header';
import LawnMaintenance from './components/LawnMaintenance';
import LockChanges from './components/LockChanges';
import Other from './components/Other';
import RoofRepair from './components/RoofRepair';
import SwimmingPool from './components/SwimmingPool';
import Winterization from './components/Winterization';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <RoofRepair />
        <Boarding />
        <LockChanges />
        <Hazards />
        <SwimmingPool />
        <LawnMaintenance />
        <Winterization />
        <Other />
      </div>

      <Footer />
    </div>
  );
}

export default App;
