import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useReactTable } from "@tanstack/react-table";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/material";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import { order } from "../features/eventSlice";

function Preorder() {
  const { id } = useParams();
  const eventToOrder = useSelector((state) => state.events[id]);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function payAndRedirect() {
    dispatch(order([eventToOrder.id, quantity]));
    navigate("/ordersuccess");
  }
  return (
    <>
      <Navbar />
      <Box m={3}></Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">Data</TableCell>
              <TableCell align="center">Prezzo</TableCell>
              <TableCell align="center">Quantità</TableCell>
              <TableCell align="center">Totale</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {eventToOrder.title}
              </TableCell>
              <TableCell align="center">{eventToOrder.data}</TableCell>
              <TableCell align="center">{eventToOrder.price} €</TableCell>
              <TableCell align="center">
                <TextField
                  required
                  type="number"
                  error={error}
                  helperText={error === "" ? "Empty field!" : " "}
                  inputProps={{ min: 1, style: { textAlign: "center" } }}
                  id="standard-basic"
                  label="Quantità"
                  variant="standard"
                  defaultValue={quantity}
                  onChange={(e) => {
                    if (e.target.value === 0 || e.target.value === "") {
                      setError(true);
                    } else {
                      setError(false);
                      setQuantity(e.target.value);
                    }
                  }}
                />
              </TableCell>
              <TableCell align="center">{quantity * eventToOrder.price} €</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={4} sx={{ display: "flex", justifyContent: "end" }}>
        <Button onClick={() => payAndRedirect()} variant="contained" endIcon={<ElectricBikeIcon fontSize="large" />}>
          Conferma e paga{" "}
        </Button>
      </Box>
    </>
  );
}

export default Preorder;
