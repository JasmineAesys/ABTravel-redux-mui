import "./App.css";
import { Container } from "@mui/system";
import EventList from "./pages/EventList";
import SingleEvent from "./pages/EventList";
import Preorder from "./pages/Preorder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderSuccess from "./pages/OrderSuccess";
import Stats from "./pages/Stats";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/:id" element={<SingleEvent />} />
          <Route path="/preorder/:id" element={<Preorder />} />
          <Route path="/ordersuccess" element={<OrderSuccess />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
