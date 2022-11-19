import Accordion from 'react-bootstrap/Accordion';
import Boarding from '../components/Boarding';
import Hazards from '../components/Hazards';
import LawnMaintenance from '../components/LawnMaintenance';
import LockChanges from '../components/LockChanges';
import Other from '../components/Other';
import RoofRepair from '../components/RoofRepair';
import SwimmingPool from '../components/SwimmingPool';
import Winterization from '../components/Winterization';

function Fees() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Roof Repair</Accordion.Header>
        <Accordion.Body>
          <RoofRepair />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Boarding</Accordion.Header>
        <Accordion.Body>
          <Boarding />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Lock Changes and Securing</Accordion.Header>
        <Accordion.Body>
          <LockChanges />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Hazards</Accordion.Header>
        <Accordion.Body>
          <Hazards />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Swimming Pool</Accordion.Header>
        <Accordion.Body>
          <SwimmingPool />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Lawn Maintenance</Accordion.Header>
        <Accordion.Body>
          <LawnMaintenance />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Winterization</Accordion.Header>
        <Accordion.Body>
          <Winterization />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Other</Accordion.Header>
        <Accordion.Body>
          <Other />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Fees;
