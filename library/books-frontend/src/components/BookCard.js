import { Card, CardBody, CardExpandableContent, CardHeader, TextContent } from "@patternfly/react-core";
import React, { Component } from "react";

export default class BookCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
    this.onExpand = () => {
      this.setState({
        isExpanded: !this.state.isExpanded
      });
    };
  }

  render(){
    const { year, copies, title } = this.props;
    // const { authorName } = this.props;
    const { isExpanded } = this.state;
    return (
      <>
        <Card style={{margin: "20px"}} isExpanded={isExpanded} >
          <CardHeader onExpand={this.onExpand}>
            { title }
          </CardHeader>
          <CardExpandableContent>
            <CardBody>
              <TextContent>
                {/* <p>Author: {authorName}</p> */}
                <p>Year of publishing: {year}</p>
                <p>Copies available: {copies}</p>
              </TextContent>
            </CardBody>
          </CardExpandableContent>
        </Card>
      </>
    );
  }
}