import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import CanvasResult from '../models/CanvasResult';

export default function ListCanvasResult(){
    const [resultList, setResultList] = React.useState<CanvasResult[]>([]);

    React.useEffect(() => {
        axios.get("http://localhost:8080/api/canvas-result")
            .then(response => setResultList(response.data))
            .catch()
            .finally();
    }, []);

    return <Container>
        <h5>View Canvas Results</h5>
        <Table>
            <thead></thead>
            <tbody>
                {resultList.map(v => <tr key={`${v.lastName}_${v.firstName}`}>
                    <td>{v.lastName}</td><td>{v.firstName}</td><td>{v.canvasNotes}</td>
                </tr>)}
            </tbody>
        </Table>
    </Container>
}