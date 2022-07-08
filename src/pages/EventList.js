import React, { useState } from "react";
import { Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import ModalOpen from "../components/ModalOpen";
import { Box } from "@mui/material";

function EventList() {
  const eventsList = useSelector((state) => state.events);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);
  const handleOpen = (index) => {
    setOpen(true);
    setIndex(eventsList[index]);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Navbar />
      {open && <ModalOpen current={index} open={open} handleOpen={handleOpen} handleClose={handleClose} />}

      <Stack direction="row" flexWrap="wrap" justifyContent="center">
        {eventsList.map((event) => {
          return (
            <Card
              sx={{
                width: 345,
                margin: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              key={event.id}
            >
              <CardMedia component="img" height="240" image={event.image} alt="pic" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {event.title}
                </Typography>
                <Typography variant="subtitle2" gutterBottom component="div">
                  {event.location}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography> */}
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {event.data}
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {event.price} €
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {event.subscribers} Iscritti
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small" value={event.id} onClick={(e) => handleOpen(e.target.value)}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    </>
  );
}

export default EventList;
