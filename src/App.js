import { Container, Table, Form } from "react-bootstrap";
import "./styles.css";
import { useEffect, useState } from "react";

const tt = [
  {
    Day: "Monday",
    Unit: "CSC-311",
    Venue: "TB-010",
    Time: "9.00-11.00"
  },
  {
    Day: "Monday",
    Unit: "CSC-312P",
    Venue: "LAB-3",
    Time: "13.00-16.00"
  },
  {
    Day: "Tuesday",
    Unit: "CSC-316",
    Venue: "TB-203",
    Time: "7.00-10.00"
  },
  {
    Day: "Tuesday",
    Unit: "CSC-313A",
    Venue: "TB-206",
    Time: "10.00-13.00"
  },
  {
    Day: "Wensday",
    Unit: "CSC-315A",
    Venue: "TB-303",
    Time: "10.00-12.00"
  },
  {
    Day: "Wensday",
    Unit: "CSC-314",
    Venue: "TB-001",
    Time: "12.00-15.00"
  },
  {
    Day: "Wensday",
    Unit: "CSC-314",
    Venue: "TB-103",
    Time: "16.00-18.00"
  },
  {
    Day: "Thursday",
    Unit: "CSC-311P",
    Venue: "LAB-3",
    Time: "16.00-19.00"
  }
];

export default function App() {
  const [day, setDay] = useState("Monday");
  const [ftt, setFtt] = useState([]);

  const handleChange = (value) => {
    setDay(value);
  };
  const newTT = () => {
    return tt.filter((t) => t.Day === day);
  };
  useEffect(() => {
    const ntt = newTT();
    setFtt(ntt);
  }, [day]);

  return (
    <Container className="mt-5">
      <Form.Group className="mb-3">
        <Form.Label>Select Day</Form.Label>
        <Form.Select
          style={{ width: "170px" }}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wensday">Wensday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </Form.Select>
      </Form.Group>

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
          <td>{day}</td>
          {ftt.length > 0 ? (
            ftt.map((t) => (
              <tr>
                <td></td>
                <td>{t.Time}</td>
                <td>{t.Unit}</td>
                <td>{t.Venue}</td>
              </tr>
            ))
          ) : (
            <>
              <tr>
                <td className="text-center" colSpan={4}>
                  Every Friday is Holiday.Nobody is coming to save u!
                </td>
              </tr>
              <tr>
                <td className="text-center" colSpan={4}>
                  #It`s possible...
                </td>
              </tr>
            </>
          )}
        </tbody>
      </Table>
    </Container>
  );
}
