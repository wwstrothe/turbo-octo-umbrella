import React from 'react';
import { Card, Table } from 'react-bootstrap';

function RoofRepair() {
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
              <td>Tarping or patchwork </td>
              <td>Up to $400 for 10x20 sq ft area </td>
            </tr>
          </tbody>
        </Table>
        <Card.Subtitle>Roof Repair</Card.Subtitle>
        <Card.Text>
          When an active leak is discovered appropriate measures should be taken
          to preserve the property by stopping the leak. Fannie Mae typically
          does not encourage replacing roofs prior to sale, but in cases where
          the servicer feels that this is necessary a first and second bid will
          be submitted to Fannie Mae for consideration.
          <br></br>Do not tarp flat roofs.
        </Card.Text>
        <Card.Subtitle>Tarp or Patchwork</Card.Subtitle>
        <Card.Text>
          Fannie Mae requires that when roof repairs exceed allowable, a bid to
          tarp, except as noted above and a bid to patch must be submitted
          simultaneously on the same HomeTracker P&P form. Include: dimensions
          of affected area, location of damage, active or inactive leak, and
          amount of bid to complete work, full photo documentation, and advise
          Fannie Mae whether an insurance claim has been filed.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RoofRepair;
