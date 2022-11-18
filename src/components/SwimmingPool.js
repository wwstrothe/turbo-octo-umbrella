import React, { useState } from 'react';
import { Card, Collapse, Table } from 'react-bootstrap';

function SwimmingPool() {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <Card.Body>
        <Card.Title
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Swimming Pool
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
                  <td>Secure pool</td>
                  <td>Up to $400</td>
                </tr>
              </tbody>
            </Table>

            <Card.Text>
              Servicers are required to drain, secure, and tarp or board where
              required by local ordinance. The allowable may be used for meeting
              local ordinance and is not limited to the following: draining,
              securing, locking gates, and repairing gate/fence panels that
              surround the pool/hot tub. Securing is defined by Fannie Mae as
              the confirmation that all fences and gates are intact, secured,
              and a minimum of four feet high.
            </Card.Text>
            <Card.Text>
              <ul>
                <li>
                  Servicers must verify local ordinance and association
                  standards regarding pools, draining, treatment, and water
                  levels. All trash located within the pool must be removed.
                </li>
                <li>
                  If the pool is already covered and the cover is secure,
                  Servicers must verify if additional fencing or securing is
                  required by local ordinance or association.
                </li>
                <li>
                  All gates and doors leading to pool access must be secured by
                  lock or padlock.
                </li>
                <li>
                  All missing sections of gates or fencing surrounding pool must
                  be replaced.
                </li>
                <li>Spas/Hot Tubs must be secured to local code.</li>
                <li>
                  Above ground pools shall be treated the same as in-ground
                  pools and follow same guidelines.
                </li>
              </ul>
            </Card.Text>
            <Card.Text>
              If a violation has been posted a copy of that document is required
              by Fannie Mae when considering any bid to secure/treat the pool or
              pool area.
            </Card.Text>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default SwimmingPool;
