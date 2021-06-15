import React from "react";
import { Container, Spinner } from "native-base";
import { DefaultHeader } from "./DefaultHeader";

export const DefaultLoading = (props) => (
  <Container>
    <DefaultHeader title={props.title} />
    <Spinner />
  </Container>
);
