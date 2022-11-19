import Accordion from 'react-bootstrap/Accordion';
import Boarding from '../Pages/Boarding';
import Hazards from '../Pages/Hazards';
import LawnMaintenance from '../Pages/LawnMaintenance';
import LockChanges from '../Pages/LockChanges';
import Other from '../Pages/Other';
import RoofRepair from '../Pages/RoofRepair';
import SwimmingPool from '../Pages/SwimmingPool';
import Winterization from '../Pages/Winterization';

function Fees() {
  return (
    <Accordion alwaysOpen className="fees">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h5>Roof Repair</h5>
        </Accordion.Header>
        <Accordion.Body>
          <RoofRepair />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h5>Boarding</h5>
        </Accordion.Header>
        <Accordion.Body>
          <Boarding />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h5>Lock Changes and Securing</h5>
        </Accordion.Header>
        <Accordion.Body>
          <LockChanges />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <h5>Hazards</h5>
        </Accordion.Header>
        <Accordion.Body>
          <Hazards />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <h5>Swimming Pool</h5>
        </Accordion.Header>
        <Accordion.Body>
          <SwimmingPool />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          <h5>Lawn Maintenance</h5>
        </Accordion.Header>
        <Accordion.Body>
          <LawnMaintenance />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>
          <h5>Winterization</h5>
        </Accordion.Header>
        <Accordion.Body>
          <Winterization />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>
          <h5>Other</h5>
        </Accordion.Header>
        <Accordion.Body>
          <Other />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Fees;
