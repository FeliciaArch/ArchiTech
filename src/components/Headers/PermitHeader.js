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

import permit from 'assets/img/permit.png'; // with import



// core components

export default class PermitHeader extends React.Component {
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

      >
      <img src={permit} style={{width: "100%"}}/>
        </div>

    </>
  );
  }
}
