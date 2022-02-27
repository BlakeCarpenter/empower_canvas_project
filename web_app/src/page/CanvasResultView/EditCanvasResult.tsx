import React from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

import CanvasResult from '../../models/CanvasResult';
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
    const [retrievalError, setRetrievalError] = React.useState<boolean>(false);

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
            .catch(err => {
                setRetrievalError(true);
            });
    }, [id, navigate]);
    
    return !retrievalError ? <>
        <h4>Edit Canvas Result</h4>
        <CanvasResultForm
            firstName={firstName}
            lastName={lastName}
            canvasNotes={canvasNotes}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setCanvasNotes={setCanvasNotes}
            sendAction={submit}
            cancelAction={() => navigate("/canvas-results")}
            sendButtonLabel="Save"
        />
    </> : <div>
        <h4>Could not retrieve Cavnasing Note</h4>
        <p>
            <Link to="/canvas-results">Return to Canvasing Notes</Link>
        </p>
    </div>
}