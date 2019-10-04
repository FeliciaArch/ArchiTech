import React from "react";

// reactstrap components

import {Component} from 'react';

function iframe () {
    return (
     <div>
             <iframe src="https://sktm9.csb.app/"/>
           </div>
    )
  }


export default class HackMap extends Component {

render() {
  return(
    <div>
                <iframe src="https://sktm9.csb.app/" width="420" height="345" />
              </div>
  )
}

}
