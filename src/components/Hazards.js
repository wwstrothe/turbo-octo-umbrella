import React, { useState } from 'react';
import { Collapse, Container } from 'react-bootstrap';

function Hazards() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <div
        variant="outline-secondary"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <h2>Hazards</h2>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </Container>
  );
}

export default Hazards;
