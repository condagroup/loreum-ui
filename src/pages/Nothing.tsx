import React, { ReactElement } from "react";
import { Wrapper, Row, InfoCopyTitle } from "../app.styles";

function Nothing(): ReactElement {
  return (
    <Wrapper>
      <Row>
        <InfoCopyTitle>NOTHING HERE</InfoCopyTitle>
      </Row>
    </Wrapper>
  );
}

export default Nothing;
