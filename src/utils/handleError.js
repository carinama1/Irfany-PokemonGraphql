export const handleError = (err, cb) => {
  if (err && err.response) {
    const { status } = err.response;
    cb(false, err.response.data.error.message);
  } else {
    cb(false, "Please check your network connection");
  }
};
