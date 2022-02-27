import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import {PlusLg} from 'react-bootstrap-icons';

import CanvasResult from '../../models/CanvasResult';
import EditDeleteButton from '../../utils/EditDeleteButton';
import DeleteDialog from './DeleteDialog';

export default function ListCanvasResult(){
    const navigate = useNavigate();
    const [resultList, setResultList] = React.useState<CanvasResult[]>([]);
    const [refresh, setRefresh] = React.useState<number>(0);
    const [deleteDialogId, setDeleteDialogId] = React.useState<number>(0);

    React.useEffect(() => {
        axios.get("http://localhost:8080/api/canvas-result")
            .then(response => setResultList(response.data.data))
            .catch()
            .finally();
    }, [refresh]);

    const refreshList = () => {
        setRefresh(refresh+1);
    }

    const closeDeleteDialog = () => {
        setDeleteDialogId(0);
    }
    
    const deleteCanvasResult = () => {
        axios.delete(`http://localhost:8080/api/canvas-result/${deleteDialogId}`)
            .then(response => {
                refreshList();
                closeDeleteDialog();
            });
    }

    return <>
        <DeleteDialog
            open={Boolean(deleteDialogId)}
            deleteAction={deleteCanvasResult}
            closeDialog={() => closeDeleteDialog()}
        />
        <div style={{display:"flex", justifyContent: "space-between"}}>
            <h4>Canvasing Notes</h4>
            <Button onClick={() => navigate("add")}><PlusLg/></Button>
        </div>
        <Row className="canvasing-notes-header">
            <Col xs={9} md={3}>
                <h5>Person</h5>
            </Col>
            <Col className="d-none d-md-block">
                <h5>Notes</h5>
            </Col>
        </Row>
        {resultList.length > 0 ? resultList.map((v,i) =>
            <Row
                className={`${i % 2 == 0 ? "bg-light border-top border-bottom" : ""}`}// Every other row
                key={`${v.id}_${v.lastName}_${v.firstName}`}
            >
                <Col xs={8} md={3}>{`${v.lastName ? v.lastName + ", " : null}${v.firstName}`}</Col>
                <Col className="d-none d-md-block text-truncate" md={7}>{v.canvasNotes}</Col>
                <Col className="canvasing-notes-button-container" xs={4} md={2}>
                    <EditDeleteButton
                        editLink={`/canvas-results/edit/${v.id}`}
                        deleteAction={() => setDeleteDialogId(v.id ? v.id : 0)}
                    />
                </Col>
            </Row>)
        :
            <Row><Col>No Canvasing Notes</Col></Row>
        }
    </>
}