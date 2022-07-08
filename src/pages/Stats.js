import React, { useCallback } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

function Stats() {
  const eventsOrdered = useSelector((state) => state.events.filter((event) => event.subscribers > 0));

  const total = useCallback(() => {
    return eventsOrdered.map(({ price, subscribers }) => price * subscribers).reduce((sum, i) => sum + i, 0);
  }, [eventsOrdered]);
  return (
    <>
      <Navbar />
      <Box m={3}></Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#1976D2", color: "white !important" }}>
              <TableCell sx={{ color: "white " }} align="center">
                Evento
              </TableCell>
              <TableCell sx={{ color: "white " }} align="center">
                Data
              </TableCell>
              <TableCell sx={{ color: "white " }} align="center">
                Prezzo
              </TableCell>
              <TableCell sx={{ color: "white " }} align="center">
                Partecipanti
              </TableCell>
              <TableCell sx={{ color: "white " }} align="center">
                Totale
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventsOrdered.map((event, i) => {
              return (
                <TableRow
                  key={event.id}
                  style={i % 2 ? { background: "lavender" } : { background: "white" }}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": {
                      backgroundColor: "SkyBlue !important",
                    },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {event.title}
                  </TableCell>
                  <TableCell align="center">{event.data}</TableCell>
                  <TableCell align="center">{event.price} €</TableCell>
                  <TableCell align="center">{event.subscribers}</TableCell>
                  <TableCell align="center">{event.subscribers * event.price} €</TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell align="center">Totale</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">{total()}€</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Stats;
