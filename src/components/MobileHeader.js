import React from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import BackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles({
  root: {},
  toolbar: {
    height: 32,
    boxShadow: "0 1px 6px 0 rgba(49, 53, 59, 0.4)",
  },
});

const MobileHeader = ({ className, ...rest }) => {
  const classes = useStyles();
  const navigation = useNavigate();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Box
          style={{ width: "100%", height: "100%" }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <div style={{ cursor: "pointer" }} onClick={() => navigation("/")}>
            <BackIcon fontSize="medium" />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

MobileHeader.propTypes = {
  className: PropTypes.string,
};

export default MobileHeader;
