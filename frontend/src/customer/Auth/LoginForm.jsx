// import { Grid, TextField, Button } from "@mui/material";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getUser, register } from "../../State/Auth/Action";
// // import { store } from "../../State/store";

// function LoginForm() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");
//   const { auth } = useSelector((store) => store);

//   useEffect(() => {
//     if (jwt) {
//       dispatch(getUser());
//     }
//   }, [jwt, auth.jwt]);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData(e.currentTarget);
//     const userData = {
//       email: data.get("email"),
//       password: data.get("password"),
//     };
//     dispatch(login(userData));
//     console.log("UserData", userData);
//   };
//   // const handleSubmit = () => {};
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid>
//             <TextField
//               type="email"
//               required
//               id="email"
//               name="email"
//               label="E mail"
//               fullWidth
//               autoComplete="email"
//             />
//           </Grid>
//           <Grid>
//             <TextField
//               type="password"
//               required
//               id="password"
//               name="password"
//               label="Password"
//               fullWidth
//               autoComplete="password"
//             />
//           </Grid>
//           <Grid>
//             <Button
//               // className="bg-[#9155FD] w-full"

//               type="submit"
//               size="large"
//               variant="contained"
//             >
//               Login
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//       <div>
//         <div>
//           <Button onClick={() => navigate("/register")} size="small">
//             Register
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;

import { Box, TextField, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../State/Auth/Action";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(login(userData));
    console.log("UserData", userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            type="email"
            required
            id="email"
            name="email"
            label="E mail"
            fullWidth
            autoComplete="email"
          />
          <TextField
            type="password"
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            autoComplete="current-password"
          />
          <Button type="submit" size="large" variant="contained">
            Login
          </Button>
        </Box>
      </form>
      <div>
        <Button onClick={() => navigate("/register")} size="small">
          Register
        </Button>
      </div>
    </div>
  );
}

export default LoginForm;
