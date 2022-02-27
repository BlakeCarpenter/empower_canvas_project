import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

interface CanvasResultFormProps {
    firstName:string;
    lastName:string;
    canvasNotes:string;

    setFirstName:Function;
    setLastName:Function;
    setCanvasNotes:Function;
}

export default function CanvasResultForm(props:CanvasResultFormProps){
    const {firstName, lastName, canvasNotes, setFirstName, setLastName, setCanvasNotes} = props;
    
    return <Form>
        <Row>
            <Col md={6}>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                </Form.Group>
            </Col>
        </Row>
        <Form.Group>
            <Form.Label>Canvas Notes</Form.Label>
            <Form.Control as="textarea" rows={7} value={canvasNotes} onChange={(event) => setCanvasNotes(event.target.value)}/>
        </Form.Group>
    </Form>
}