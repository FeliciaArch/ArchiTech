/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ConnectedGraph from "components/ConnectedGraph.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <ConnectedGraph />

      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">About ArchiTech</h2>
                <h5 className="description">
                Home improvement projects can be complicated and expensive.
                ArchiTech is a tool that efficiently streamlines the planning
                process so you can plan your dream home for a fraction of the cost.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Need</h4>
                    <br/>
                    <p className="description">
                      A lot of burden falls on the homeowner when it comes to researching property information
                      and regulations, getting design plans, and finding contractors to partner with. We're here
                      to make things simple.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-zoom-split" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Scope</h4>
                    <br/>
                    <p>
A typical construction project consists of planning, design, permit, and construction phases.
This product is designed for the planning: zoning analysis, cost estimate, projected timeline, and team building.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-settings" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">How it Works</h4>
                    <br/>
                    <p>
By entering your address, we pull and curate data from public SF databases, calculate the maximum possible specifications of
the property using a MapBox API, and display the 3D rendering as you move through the tool.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-satisfied" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Outcomes</h4>
                    <br/>
                    <p>
We'll give you property information, a cost estimate, permit instructions, and suggested contracting companies.
You'll also see a 3D view of your property, with options to overlay additional rooms, or a new building that satisfies regulations.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">

        </div>
        <div className="section landing-section">

        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
