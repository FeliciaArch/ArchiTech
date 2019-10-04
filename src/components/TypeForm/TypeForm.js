import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

export default class TypeForm extends React.Component {
  render() {
    return <div height ="500" width="1500"><ReactTypeformEmbed hideFooter="true" autoOpen="true" url="https://citystructure.typeform.com/to/PjE9tv" />
    <Button block
                                                                                                                                                                                    className="btn-outline-neutral btn-round"
                                                                                                                                                                                    color="default"
                                                                                                                                                                                    href="/tell-us-more"
                                                                                                                                                                                                  onClick={() => test()}
                                                                                                                                                                                  >
                                                                                                                                                                                    What can I build?
                                                                                                                                                                                  </Button></div>;
  }
}
