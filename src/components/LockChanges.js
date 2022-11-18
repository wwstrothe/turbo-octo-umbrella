import React, { useState } from 'react';
import { Card, Collapse, Table } from 'react-bootstrap';

function LockChanges() {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <Card.Body>
        <Card.Title
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Lock Changes and Securing
        </Card.Title>

        <Collapse in={open}>
          <div>
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
                    Knoblock<br></br>
                    Knob lock and Deadbolt
                  </td>
                  <td>Up to $60 each</td>
                </tr>
                <tr>
                  <td>
                    Padlock<br></br>
                    Padlock and hasp{' '}
                  </td>
                  <td>up to $40 each </td>
                </tr>
                <tr>
                  <td>Slider lock</td>
                  <td>Up to $25 each </td>
                </tr>
                <tr>
                  <td>Window lock </td>
                  <td>Up to $25 each </td>
                </tr>
              </tbody>
            </Table>

            <Card.Text>
              Servicers are required to secure a rear or a secondary door for
              access on vacant properties, including the main dwelling and all
              outbuildings. Slider locks and window locks should be placed only
              if existing locks are inoperable or not present on the main level
              and where accessible.
            </Card.Text>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default LockChanges;
