import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function OrderSuccess() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Box m={3}>
        <Typography textAlign="center" id="modal-modal-title" variant="h3">
          Order completed successfully!
        </Typography>
        <Box m={3} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography textAlign="center" id="modal-modal-title" variant="h5">
            Be ready for your next travel!
          </Typography>
        </Box>
        <ElectricBikeIcon
          fontSize="large"
          color="primary"
          sx={{
            animation: "linear 2s linear infinite",
            "@keyframes linear": {
              "0%": {
                transform: "translate(0px)",
              },
              "100%": {
                transform: "translate(900px)",
              },
            },
            transition: "transform 200s",
          }}
        />
        <Box m={5} sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={() => navigate("/")}>
            Back to Events
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default OrderSuccess;
