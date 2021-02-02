import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { Button, Typography, makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) => ({
  buttonMain: {
    fontWeight: "bold",
    marginTop: 24,
    padding: "10px 24px",
    borderRadius: 12,
    fontSize: 32,
    background: theme.btn.primary,
    "&:hover": {
      opacity: 0.9,
      background: theme.btn.primary,
    },
  },
}));

const Card = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 100px);
`;

const Result = styled.img`
  animation: zoom 0.6s ease-in-out;
  margin: 32px 0px;
  width: 360px;
  height: 360px;
  @media (max-width: 600px) {
    width: 320px;
    height: 320px;
  }
`;

const ReleasingPage = ({ ...rest }) => {
  const classes = useStyles();
  const navigation = useNavigate();

  return (
    <Card>
      <Fragment>
        <Result src={"/static/images/kekBye.gif"}></Result>
        <Typography style={{ textAlign: "center" }} variant="h1">
          <span>
            GOOD BYE! <br />
            <Typography style={{ marginTop: 10 }} variant="h3">
              Your pokemon has been released..
            </Typography>
          </span>
        </Typography>
        <Button
          className={classes.buttonMain}
          onClick={() => {
            navigation("/my-pokemon-list", { replace: true });
          }}
        >
          MY LIST
        </Button>
      </Fragment>
    </Card>
  );
};

export default ReleasingPage;
