import React from "react";
import { Outlet } from "react-router-dom";
import { Hidden, makeStyles } from "@material-ui/core";
import TopBar from "./TopBar";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 100,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      paddingBottom: 52,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

const MainLayout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <TopBar />
      </Hidden>

      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>

      <Hidden smUp>
        <Footer />
      </Hidden>
    </div>
  );
};

export default MainLayout;
