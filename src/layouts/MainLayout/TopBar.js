import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  toolbar: {
    height: 100,
    boxShadow: "0 1px 6px 0 rgba(49, 53, 59, 0.4)",
  },
});

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Box
          style={{ width: "100%" }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <RouterLink to="/">
            <img
              style={{ height: "70px" }}
              alt="Catch'Em"
              src="/static/images/main_icon.png"
            ></img>
          </RouterLink>
          <RouterLink to="/my-pokemon-list">
            <img
              style={{ height: "90px" }}
              alt="Catch'Em"
              src="/static/images/Bag_16:9.png"
            ></img>
          </RouterLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
