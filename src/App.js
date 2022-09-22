import { Container, Table } from "react-bootstrap";
import "./styles.css";

export default function App() {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Days</th>
            <th>Time</th>
            <th>Unit</th>
            <th>Room </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
