import React from "react";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const SnackbarComponent = ({
  isSnackBarOpen,
  handleSnackBarClose,
  succes,
  message,
}) => {
  return (
    <Snackbar
      open={isSnackBarOpen}
      autoHideDuration={6000}
      onClose={handleSnackBarClose}
    >
      <Alert
        onClose={handleSnackBarClose}
        severity={succes ? "success" : "error"}
      >
        {message ? message : "SnackBar Text"}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
