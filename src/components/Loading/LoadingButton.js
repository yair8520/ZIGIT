import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

export default function LoadingIndicatorButton(props) {
  return (
    <LoadingButton
      fullWidth
      onClick={props.handleClick}
      loading={props.loading}
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Sign in
    </LoadingButton>
  );
}
