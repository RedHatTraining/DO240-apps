import React, { useEffect, useState } from "react";
import { Brand, Page, PageSection, PageSectionVariants, Text, TextContent, Bullseye, PageHeader } from "@patternfly/react-core";
import getBooks from "./services/bookService";
import BookCard from "./components/BookCard";
import imgBrand from "./images/training_white.png";
import { useKeycloak } from "@react-keycloak/web";

export default function Dashboard() {
  const [bookData, setBookData] = useState([]);
  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    if (keycloak.authenticated) {
      console.log(`Using token: ${keycloak.token}`);
      getBooks(keycloak.token)
        .then(setBookData)
        .catch(console.log);
    } else {
      console.log("unauthenticated");
    }
  }, [initialized] );

  const Header = (
    <PageHeader 
      logo={<Brand src={imgBrand} alt="Red Hat Learning Logo" />}
      className="border-top-red"/>
  );

  return (
    <Page header={Header}>
      <PageSection className="center" variant={PageSectionVariants.darker}>
        <TextContent>
          <Text component="h1">Library Application</Text>
        </TextContent>
      </PageSection>
      <PageSection>
        <Bullseye>
          {bookData && bookData.map((book, key) => <BookCard key={key} {...book} />)}
        </Bullseye>
      </PageSection>
    </Page>
  );
}
