import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";

const ContentWrapper = styled.div`
  height: calc(100vh - 130px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Result = styled.img`
  width: 360px;
  height: 360px;
  @media (max-width: 600px) {
    width: 320px;
    height: 320px;
  }
`;

const Content = styled.div``;

const EmtpyPage = () => {
  return (
    <ContentWrapper>
      <Content>
        <Result src="/static/images/empty.png"></Result>
        <Typography style={{ textAlign: "center" }} variant="h1">
          <span>
            Sadge... <br />
            <Typography style={{ marginTop: 10 }} variant="h3">
              You don't have any pokemon
            </Typography>
          </span>
        </Typography>
      </Content>
    </ContentWrapper>
  );
};

export default EmtpyPage;
