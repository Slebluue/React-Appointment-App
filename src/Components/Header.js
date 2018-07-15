// Dependencies
// -----------------------------------------------
import React from 'react';

//  Components
// -----------------------------------------------
import {Grid, Row, Col} from 'react-bootstrap'

const Header = () => {
    return (
      <div className="App-header">
        <Grid>
          <Row>
            <Col sm={12}>
              <h1 className="App-title">Appointments Calendar App</h1>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
export default Header;