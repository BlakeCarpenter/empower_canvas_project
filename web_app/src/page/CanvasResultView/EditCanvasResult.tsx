import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

import CanvasResult from '../../models/CanvasResult';
import Button from 'react-bootstrap/Button';
import CanvasResultForm from './CanvasResultForm';

interface EditCanvasResultProps {
    id?:number
}

export default function EditCanvasResult(props:EditCanvasResultProps){
    const {id} = useParams();
    const navigate = useNavigate();
    const [firstName, setFirstName] = React.useState<string>("");
    const [lastName, setLastName] = React.useState<string>("");
    const [canvasNotes, setCanvasNotes] = React.useState<string>("");

    const submit = () => {
        let editedCanvas = {id, firstName, lastName, canvasNotes} as CanvasResult;

        axios.put(`http://localhost:8080/api/canvas-result/${id}`, editedCanvas)
            .then(response => {
                navigate(-1);
            })
            .catch();
    }

    React.useEffect(() => {
        axios.get(`http://localhost:8080/api/canvas-result/${id}`)
            .then(response => {
                let data:CanvasResult = response.data.data;
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setCanvasNotes(data.canvasNotes);
            })
            .catch();
    }, []);
    
    return <>
        <h5>Edit Canvas Result</h5>
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