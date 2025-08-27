import { Grid, TextField, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, register } from "../../State/Auth/Action";
import { store } from "../../State/store";

function RegisterForm() {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  // const { auth } = useSelector((state) => state.auth); // ✅ GOOD

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);
  useEffect(() => {
    if (auth.user) {
      // handleClose();
    }
  }, [auth.user]);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(register(userData));
    console.log("UserData", userData);
  };
  // const handleSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid>
            <TextField
              type="text"
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid>
            <TextField
              type="text"
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid>
            <TextField
              type="email"
              required
              id="email"
              name="email"
              label="E mail"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid>
            <TextField
              type="password"
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid>
            <Button
              // className="bg-[#9155FD] w-full"

              type="submit"
              size="large"
              variant="contained"
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div>
        <div>
          <Button onClick={() => navigate("/login")} size="small">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
