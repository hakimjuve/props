import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Card } from 'react-bootstrap';
export default function Profile(props) {
    return (
      <div className="App">
          <div className="con">
          <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={props.img}  />
  <Card.Body>
    <Card.Title>{props.fullName}</Card.Title>
    <Card.Text id="profession">
    {props.profession}
    </Card.Text>
    <Card.Text>
    {props.bio}
    </Card.Text>
    <Button variant="primary" onClick={props.alert}>Complete</Button>
  </Card.Body>
</Card>
          </div>
      </div>
    );
  }
