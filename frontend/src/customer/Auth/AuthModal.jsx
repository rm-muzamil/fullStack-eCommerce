import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import RegisterForm from "./RegisterForm";

import LoginForm from "./LoginForm";
import { useLocation } from "react-router-dom";
import Product from "../components/Product/Product";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AuthModal({ handleClose, open }) {
  // const handleClose = () => {};
  const handleOpen = () => {};
  const location = useLocation();
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <LoginForm /> */}
          {location.pathname === "/login" ? <LoginForm /> : <RegisterForm />}
          hy
        </Box>
      </Modal>
    </div>
  );
}

export default AuthModal;
