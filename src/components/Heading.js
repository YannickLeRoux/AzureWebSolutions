import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Heading = () => {
    return (
        <div className="container my-5">
          <Row>
              <Col md="6" xs="12">
                <h1>Your worry-free</h1>
                <h2>Digital Agency</h2>
             </Col>
         </Row>
         <Row>
             <Col></Col>
             <Col md="6" xs="12">
               <p>Lorem ipsum dolor amet disrupt marfa activated charcoal ennui PBR&B bitters taiyaki drinking vinegar 3 wolf moon actually slow-carb. Adaptogen normcore forage single-origin coffee everyday carry banh mi, live-edge fam roof party pabst four dollar toast scenester keytar bicycle rights letterpress. Iceland shaman bicycle rights migas +1 iPhone twee. Food truck cred readymade glossier. Hashtag jean shorts pabst tousled twee godard paleo palo santo XOXO.</p>
             </Col>
        </Row>
        <Row>
             <Col></Col>
             <Col md="6" xs="12" className="text-center my-5">
             <button className="mx-auto btn btn-primary">Ask For A Free Quote</button>
             </Col>
        </Row>
          </div>
    );
};

export default Heading;