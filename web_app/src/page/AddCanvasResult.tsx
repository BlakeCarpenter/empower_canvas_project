import React from 'react';
import axios from 'axios';

import CanvasResult from '../models/CanvasResult';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddCanvasResult(){
    const [firstName, setFirstName] = React.useState<string>("");
    const [lastName, setLastName] = React.useState<string>("");
    const [canvasNotes, setCanvasNotes] = React.useState<string>("");

    const submit = () => {
        let newCanvas:CanvasResult = new CanvasResult();
        newCanvas.firstName = firstName;
        newCanvas.lastName = lastName;
        newCanvas.canvasNotes = canvasNotes;

        axios.post("http://localhost:8080/api/canvas-result", newCanvas)
            .then(response => {
                console.log(response.data);
            })
            .catch();
    }
    
    return <Container>
        <h5>Add Canvas Result</h5>
        <Form>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Canvas Notes</Form.Label>
                <Form.Control as="textarea" value={canvasNotes} onChange={(event) => setCanvasNotes(event.target.value)}/>
            </Form.Group>
        </Form>
        <Button onClick={submit}>Submit</Button>
    </Container>
}