import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Box,
  CssBaseline,
  Avatar,
} from "@mui/material";
import { login } from "../../redux/actions/account";
import { connect } from "react-redux";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import history from "../../config/history";
import LoadingIndicatorButton from "../Loading/LoadingButton";
import { isValidData } from "./helper";

const SignIn = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (i) => {
    ValidateField(i.target.name, i.target.value);
    setForm({ ...form, [i.target.name]: i.target.value });
  };

  const ValidateField = (fieldName, value) => {
    if (isValidData[fieldName].rgx.test(value)) {
      setError({ ...error, [fieldName]: "" });
      return;
    }
    setError({ ...error, [fieldName]: isValidData[fieldName].message });
  };
  const validFormState = () => {
    for (let key in error) {
      if (error[key] !== "") return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validFormState()) {
      const submitForm = { ...form };
      setLoading(true);
      loginInFetchToken(submitForm);
    }
  };

  const loginInFetchToken = async (submitForm) => {
    const { resMessage } = await props.login(submitForm);
    setLoading(false);
    if (resMessage === "success") {
      history.push("/info");
    } else {
      setMessage("Failed to fetch data, try again.");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChange}
            error={error.email ? true : false}
            helperText={error.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChange}
            error={error.password ? true : false}
            helperText={error.password}
          />
          <LoadingIndicatorButton
            handleClick={handleSubmit}
            loading={loading}
          />
          <Typography>{message}</Typography>
        </Box>
      </Box>
    </Container>
  );
};
export default connect(({ account }) => ({ account }), {
  login,
})(SignIn);
