import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import CanvasResult from '../../models/CanvasResult';
import CanvasResultForm from './CanvasResultForm';

export default function AddCanvasResult(){
    const navigate = useNavigate();
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
                navigate(-1);
            })
            .catch();
    }
    
    return <>
        <h4>Add Canvas Result</h4>
        <CanvasResultForm
             firstName={firstName}
             lastName={lastName}
             canvasNotes={canvasNotes}
             setFirstName={setFirstName}
             setLastName={setLastName}
             setCanvasNotes={setCanvasNotes}
             sendAction={submit}
             cancelAction={() => navigate(-1)}
             sendButtonLabel="Add"
        />
    </>
}