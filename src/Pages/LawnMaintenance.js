import React from 'react';
import { Card, Table } from 'react-bootstrap';

function LawnMaintenance() {
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
              <td>Initial Lawn Cut (up to 10,000 sq ft)</td>
              <td>Up to $100 </td>
            </tr>
            <tr>
              <td>Initial Lawn Cut (up to 15,000 sq ft)</td>
              <td>Up to $150 </td>
            </tr>
            <tr>
              <td>Regular Lawn Maintenance Cut (up to 10,000) </td>
              <td>Up to $80 </td>
            </tr>
            <tr>
              <td>Regular Lawn Maintenance Cut (up to 15,000) </td>
              <td>Up to $100 </td>
            </tr>
          </tbody>
        </Table>

        <Card.Text>
          - INITIAL GRASS CUTS<br></br>
          Initial grass cuts should be performed on lots up to 15,000 sq ft. If
          lot size is greater then 15,000 sq ft, initial full lot and subsequent
          cuts and initial perimeter and subsequent perimeter cuts should be
          submitted simultaneously. Perimeter is defined as 100x150 or 15,000 sq
          ft.
        </Card.Text>
        <Card.Text>
          - DEBRIS IN YARD/SHRUBS<br></br>
          Incidental debris removal should be included as part of the allowable
          grass cut as well as edging, minimal leaf removal, and clearing of all
          grass cut clippings. The yard and its surroundings should be in model
          condition upon completion of the yard maintenance. Bids are required
          for shrub trimming when shrubs affect condition, access to the
          property, or where local ordinance dictates.
        </Card.Text>
        <Card.Text>Diagram of Perimeter example:</Card.Text>

        <Card.Img
          className="perimeter "
          src="public/assets/images/perimeterExample.png"
        />

        <Card.Text>
          <br></br>- GRASS CUT SCHEDULE<br></br>
          Initial grass cuts should be made between April 1 and October 31 in
          the following states/territories:<br></br>
          AR, CO, CT, DE, ID, IL, IN, IA, KS, KY, ME, MD, MA, MI, MN, MO, MT,
          NE, NH, NJ, NY, NC, ND, OH, OK, OR, PA, RI, SD, TN, UT, VT, VA, WA,
          WV, WI, WY,DC.{' '}
        </Card.Text>
        <Card.Text>
          Initial grass cuts may be completed during <strong>any month</strong>{' '}
          of the year in the following states/territories:<br></br>
          AL, AZ, CA, FL, GA, HI, LA, MS, NM, NV, SC, TX, the Caribbean, and the
          Pacific Islands
        </Card.Text>
        <Card.Text>
          Initial grass cuts are allowed from{' '}
          <strong>June 1 to September 30</strong> in the state of: AK
        </Card.Text>
        <Card.Text>
          One initial grass cut should be performed per calendar year.
        </Card.Text>
        <Card.Text>
          - GRASS RE-CUTS<br></br>
          Grass should typically be cut twice a month between April 1 and
          October 31. Approval is required if more frequent re-cuts are
          necessary. Re-cuts once a month may be sufficient depending on
          conditions. Prior approval for re-cuts from November 1 to March 31
          must be obtained unless otherwise prescribed below:
        </Card.Text>
        <Card.Text>
          <ul>
            <li>
              Re-cuts may be completed all year in CA, FL, HI, NM, the
              Caribbean, and the Pacific Islands.
            </li>
            <li>
              Re-cuts may be completed from April 1 to November 30 in AL, AR,
              GA, LA, MS, OK, SC, and TX.
            </li>
            <li>Re-cuts may be completed from June 1 to September 30 in AK.</li>
            <li>
              Re-cuts may be completed once per month in CA, CO, NM, UT, and WY.
            </li>
            <li>Prior approval is required for all re-cuts in AZ and NV.</li>
            <li>
              Refer to previous GRASS CUT SCHEDULE within this document for
              details.
            </li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LawnMaintenance;
