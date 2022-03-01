import { Card, CardBody, CardExpandableContent, CardHeader, TextContent } from "@patternfly/react-core";
import React, { useState } from "react";

export default function BookCard(props) {
  const { year, copies, title, author } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <>
      <Card style={{margin: "20px"}} isExpanded={isExpanded} >
        <CardHeader onExpand={() => setIsExpanded(!isExpanded)}>
          { title }
        </CardHeader>
        <CardExpandableContent>
          <CardBody>
            <TextContent>
              <p>Author: {author.name}</p>
              <p>Year of publishing: {year}</p>
              <p>Copies available: {copies}</p>
            </TextContent>
          </CardBody>
        </CardExpandableContent>
      </Card>
    </>
  );
}