import React from 'react';
import { Card, Table } from 'react-bootstrap';

function Other() {
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
              <td>Emergency funds </td>
              <td>Up to $500 </td>
            </tr>
            <tr>
              <td>Sump Pump </td>
              <td>Up to $300</td>
            </tr>
            <tr>
              <td>Water/Gas/Electric/Unclassified utility </td>
              <td>Up to $75 for one time shut off/transfer fee of each</td>
            </tr>
            <tr>
              <td>Vacant Property Registration (VPR) </td>
              <td>Actual cost to register per local requirement</td>
            </tr>
          </tbody>
        </Table>

        <Card.Subtitle>Additional Information</Card.Subtitle>
        <Card.Text>
          EMERGENCY REPAIRS<br></br>
          The most important element to defining an emergency is that an
          immediate response is necessary to prevent damage or lessen the loss
          of property. Gradual and progressive deterioration or lack of property
          maintenance does not qualify as an emergency.
        </Card.Text>
        <Card.Text>
          SUMP PUMPS<br></br>
          If an existing sump pump is used to keep basements or crawl spaces
          dry, check the sump pump to make sure it is operational. If the sump
          pump in question is electrical, ensure that the sump pump is plugged
          into a power source and the electricity to the property is turned on
          and if necessary, transfer the electricity into the servicer's name.
          If the sump pump is inoperable, the servicer may use the allowable to
          replace the pump.
        </Card.Text>
        <Card.Text>
          UTILITY TRANSFERS<br></br>
          If required for preservation, the Servicer must transfer utilities
          into their name during pre-foreclosure proceedings.
        </Card.Text>
        <Card.Text>
          VACANT PROPERTY REGISTRATION (VPR)<br></br>
          If local ordinance requires a vacant property to be registered,
          servicers should follow requirements. Reimbursement will be provided
          only for the registration fee.
        </Card.Text>
        <Card.Text>
          CODE VIOLATIONS<br></br>
          If any violations are posted on a property the Servicer must submit a
          bid to correct the violation(s) via HomeTracker if amounts exceed
          Fannie Mae’s allowable and attach a copy of the violation to the bid.
          The servicer should note in the comments section of the HomeTracker
          P&P form that the violation has been submitted.
        </Card.Text>
        <Card.Text>
          PROPERTIES IN BANKRUPTCY<br></br>
          Servicers should consult with their legal department when addressing
          issues of vacant properties in bankruptcy.
        </Card.Text>
        <Card.Text>
          DISCOLORATION<br></br>
          Identify the source of the discoloration. Fannie Mae typically does
          not remediate discoloration during pre-foreclosure proceedings. When
          submitting bids to treat discoloration, include the area affected in
          square feet. Include the cause/source of discoloration and exact
          method to be used in treatment.
        </Card.Text>
        <Card.Text>
          DEBRIS REMOVAL<br></br>
          Interior and exterior items submitted as debris may be considered
          personal property by the mortgagor. As a result, Fannie Mae does not
          typically consider the removal of any items during foreclosure
          proceedings.
        </Card.Text>
        <Card.Text>
          The following are examples of items typically not removed from the
          interior: toothpaste, medicine, household cleaning products, and paint
          thinner, dry or canned goods, paint cans with secured lids, oil in
          secure containers, alcohol, fire extinguishers, car batteries, broken
          glass or tires.
        </Card.Text>
        <Card.Text>
          PERSONAL PROPERTY<br></br>
          Fannie Mae will not usually consider removal or storage of personal
          property prior to foreclosure with exceptions regarding code
          violations, liens, fines or discolored debris caused by water damage.
          Servicers should consult their legal department and provide
          acknowledgment of approval to remove personal property in the comment
          section of the bid.
        </Card.Text>
        <Card.Text>
          Items located on the exterior of the home should be moved to the
          garage or a secured area. <strong>Do not submit</strong> requests to
          remove personal property. Examples include, but are not limited to,
          the following:
        </Card.Text>
        <Card.Text>
          <ul>
            <li>
              Vehicles (autos, trailers, boats, recreational vehicles,
              motorcycles, etc.)
            </li>
            <li>Building materials</li>
            <li>Clothing</li>
            <li>Furniture</li>
            <li>Lawn and Garden equipment</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Other;
