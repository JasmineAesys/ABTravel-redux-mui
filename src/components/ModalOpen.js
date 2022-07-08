import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

function ModalOpen({ open, handleClose, current }) {
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
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CardMedia component="img" height="240" image={current.image} alt="pic" />
        <Typography id="modal-modal-title" gutterBottom variant="h5" component="h2">
          {current.title}
        </Typography>
        <Typography id="modal-modal-description" gutterBottom variant="subtitle2" sx={{ mt: 2 }}>
          {current.location}
        </Typography>
        <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }}>
          {current.description}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {current.data}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {current.price} €
          </Typography>
        </Box>
        <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }}>
          {current.subscribers} Iscritti
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Link to={`/preorder/${current.id}`} style={{ textDecoration: "none" }}>
            <Button onClick={handleClose} variant="contained" endIcon={<ElectricBikeIcon fontSize="large" />}>
              Prenota ora
            </Button>
          </Link>
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalOpen;
