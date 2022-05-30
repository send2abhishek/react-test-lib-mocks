import { Container } from "react-bootstrap";
import OrderEntry from "./pages/entry/OrderEntry";
//import SummaryForm from "./pages/summary/SummaryForm";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
