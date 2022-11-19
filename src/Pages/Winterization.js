import React from 'react';
import { Card, Table } from 'react-bootstrap';

function Winterization() {
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
              <td>Snow Removal </td>
              <td>Up to $75 one time only if needed to secure property </td>
            </tr>
            <tr>
              <td>Winterization/De-winterization </td>
              <td>
                Up to $200 for first unit and up to $80 per each additional
                unit.
              </td>
            </tr>
          </tbody>
        </Table>

        <Card.Text>
          Generally, all properties should be winterized between October 1 and
          March 31.
        </Card.Text>
        <Card.Text>
          Winterizations are allowed during any month of the year in the
          following states:
          <br></br>
          AK, CT, IA, IL, IN, MA, ME, MI, MN, MT, ND, NE, NH, NY, OH, PA, RI,
          SD, VT, WI
        </Card.Text>
        <Card.Text>
          Properties should be winterized only once. The property may be
          re-winterized only if the initial winterization is deemed to be no
          longer effective. The Servicer must submit bids to Fannie Mae for
          winterization prior to the work being done. Winterizations should
          include shutting off the water source either at the curb or the main
          interior water supply if it is not possible to shut it off at the
          curb. Winterization also includes a complete draining of all plumbing
          and heating systems. For properties where water services and utilities
          are shared with other units, such as condominiums, the utilities
          should be maintained. The water service should also be maintained if
          needed for wet winterizations.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Winterization;
