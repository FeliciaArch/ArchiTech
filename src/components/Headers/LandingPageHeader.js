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
import { Button, Container } from "reactstrap";
import ConnectedGraph from "components/ConnectedGraph.js";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/landingpage.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1 class="font-weight-normal">ArchiTech</h1>
            <h3 class="font-weight-bold">You know that bathroom you wanted to add? Well, You can't.</h3>
            <h4 class="font-weight-normal">Let's find out why...</h4>
            <br />
            <ConnectedGraph />
            <Button
                  className="btn-round mr-1"
                  color="neutral"
                  type="button"
                  href="/tell-us-more"

                >
                  Get Started
                </Button>
          </div>
          <div
                    className="moving-clouds"
                    style={{
                      backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
                    }}
                  />
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
