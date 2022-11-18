import React, { useState } from 'react';
import { Card, Collapse, Table } from 'react-bootstrap';

function Boarding() {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <Card.Body>
        <Card.Title
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Boarding
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
                  <td>Windows </td>
                  <td>
                    75 UI or less $70<br></br> 76-100 UI $90<br></br> 101-125 UI
                    $115{' '}
                  </td>
                </tr>
                <tr>
                  <td>Slider Door </td>
                  <td>Up to $160 </td>
                </tr>
                <tr>
                  <td>Security Door </td>
                  <td>Up to $250</td>
                </tr>
                <tr>
                  <td>Crawl Space </td>
                  <td>Up to $60 </td>
                </tr>
              </tbody>
            </Table>

            <Card.Text>
              Properties should not be boarded unless it is necessary to prevent
              vandalism, where required by local ordinance, or when windows are
              broken. The allowable for any security door and/or crawl space
              will include the cost of boarding and padlock(s). United Inches
              (UI) is calculated by adding length and width (e.g., a 25x60
              window is 85 UI).
            </Card.Text>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default Boarding;
