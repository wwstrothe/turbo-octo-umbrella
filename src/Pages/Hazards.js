import React from 'react';
import { Card, Table } from 'react-bootstrap';

function Hazards() {
  return (
    <Card>
      <Card.Body>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Property Preservation Type</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Cleaning Refrigerator or <br></br>
                Cleaning stand alone freeze
              </td>
              <td>Up to $100 each</td>
            </tr>
            <tr>
              <td>Cleaning toilet</td>
              <td>Up to $76 each </td>
            </tr>
            <tr>
              <td>Clapping wires</td>
              <td>Up to $10 each </td>
            </tr>
            <tr>
              <td>Capping gas/water </td>
              <td>Up to $50 each </td>
            </tr>
            <tr>
              <td>Removing gas can(s) or Propane tank(s) </td>
              <td>Up to $15 each </td>
            </tr>
          </tbody>
        </Table>

        <Card.Subtitle>Health and Safety</Card.Subtitle>
        <Card.Text>
          - REFRIGERATOR/FREEZER <br></br>The Fannie Mae allowable for cleaning
          includes the removal of all perishables from both the refrigerator and
          freezer in addition to a wipe down of the appliance’s interior and
          exterior. A separate allowable is provided for a stand alone
          freezer(s) to include removing all perishables and a wipe down of the
          appliance’s interior and exterior.
        </Card.Text>
        <Card.Text>
          - TOILET/BATHROOM<br></br>
          The Fannie Mae allowable for cleaning should be used when fecal matter
          is present. This allowable also includes cleaning with a toilet brush,
          wiping down exterior, and winterizing, if in season.
        </Card.Text>
        <Card.Text>
          - GAS/WATER<br></br>
          Bare wires and uncapped or open gas/water lines are required to be
          capped regardless of utility status.
        </Card.Text>
        <Card.Text>
          - FUEL REMOVAL<br></br>
          The Fannie Mae allowable for removal of gas can(s) or propane tank(s)
          does not include removing equipment that contains gas or propane
          (e.g., lawnmower, weed eater, grill, etc.).
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Hazards;
