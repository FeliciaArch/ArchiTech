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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button,  Row, Col, Container } from "reactstrap";
import ThreeDMap from "components/Maps/3dMap.js";
import Switch from "react-bootstrap-switch";



// core components

export default class IndexHeader2 extends React.Component {
constructor(props) {
        super(props);
        this.state = {
            active: true,
        };
    }

render() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/landingpage.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
            <div className="title-brand">
             <div >
                        <Row>
                          <Col className="ml-auto mr-auto" md="8">
                                       <div>
                                        { this.state.active ? <ThreeDMap url={"https://codesandbox.io/embed/sf-opendata-sktm9?fontsize=14"}/>:
                                         <ThreeDMap url={"https://codesandbox.io/embed/architechmap2-c9ib8?fontsize=14"}/>
                                         }
                                       </div>

                          </Col>
                           <Col className="ml-auto mr-auto" md="4" >
                                          <h3 className="title text-left"> 161 Edinburgh St., San Francisco</h3>

                                           <div>
                                            { this.state.active ? <h5 className="description text-left">
                                                                                                            <strong>Lot Size</strong>: 2500 sqft <br/>
                                                                                                           <strong>Number of levels</strong>: 2 <br/>
                                                                                                            <strong>Building Height</strong>: 20'-0" <br/>
                                                                                                            <strong>Building Area</strong>: 2000 sqft <br/>
                                                                                                            <strong>Total Addition</strong>: 0 sqft

                                                                                                            </h5>:
                                                          <h5 className="description text-left">

                                                           <strong>Lot Size</strong>: 2500 sqft <br/>
                                                                                                                                                                     <strong>Number of levels</strong>:  <strong  style={{color: '#51cbce'}}>3 </strong> <br/>
                                                                                                                                                                      <strong>Building Height</strong>:  <strong  style={{color: '#51cbce'}}>30'-0" </strong> <br/>
                                                                                                                                                                      <strong>Building Area</strong>:  <strong  style={{color: '#51cbce'}}>3,960 sqft </strong> <br/>
                                                                                                                                                                      <strong>Total Addition</strong>:  <strong  style={{color: '#51cbce'}}>1,960 sqft </strong>



                                                                                                    </h5>
                                                            }
                                            </div>


                                          <br />
                                           <div id="switches" className="content-left">
                                                                                                        <label>
                                                                                                        <div>
                                                                                                                                                { this.state.active ? <h5> <strong> Show additional storey </strong> </h5>:
                                                                                                                                                 <h5> <strong> Show existing property </strong> </h5>
                                                                                                                                                 }
                                                                                                                                               </div>


                                                                                                          <Switch  defaultValue={false} onColor="primary" offColor="primary"   onChange={ () => this.setState({active: !this.state.active}) }
/>
                                                                                                        </label>

                                                                                                        <br />

                                                                                                      </div>
                                        </Col>



           </Row>


                        <div>
                         { this.state.active ?  <h2 className="presentation-subtitle text-center">
                                                                        Start your home’s next chapter - add a storey!
                                                                      </h2>:
                          <div><h3 className="presentation-subtitle text-center">
                                                  <strong> Congrats! You can add:
                                                           1 additional storey </strong>
                                                </h3><br/>
                                                                                                                         <Button
                                                                                                                                         className="btn-outline-neutral btn-round"
                                                                                                                                         color="default"
                                                                                                                                         href="/maps3"
                                                                                                                                         target="_blank"
                                                                                                                                       >
                                                                                                                                         Tired of Renovations?
                                                                                                                                       </Button>

                                                                                                                             </div>
                           }
               </div>
           </div>


            </div>
        </div>


      </div>

    </>
  );
  }
}
