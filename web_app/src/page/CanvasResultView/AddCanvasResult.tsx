import React from 'react';
import axios from 'axios';

import CanvasResult from '../../models/CanvasResult';
import Button from 'react-bootstrap/Button';
import CanvasResultForm from './CanvasResultForm';

interface AddCanvasResultProps {
    id?:number
}

export default function AddCanvasResult(props:AddCanvasResultProps){
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
    
    return <>
        <h5>Add Canvas Result</h5>
        <CanvasResultForm
             firstName={firstName}
             lastName={lastName}
             canvasNotes={canvasNotes}
             setFirstName={setFirstName}
             setLastName={setLastName}
             setCanvasNotes={setCanvasNotes}
        />
        <Button onClick={submit}>Submit</Button>
    </>
}