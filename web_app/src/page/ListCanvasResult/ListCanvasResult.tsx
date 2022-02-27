import React from 'react';
import axios from 'axios';

import Table from 'react-bootstrap/Table';
import CanvasResult from '../../models/CanvasResult';
import EditDeleteButton from '../../utils/EditDeleteButton';
import DeleteDialog from './DeleteDialog';

export default function ListCanvasResult(){
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
        <h5>Canvasing Notes</h5>
        <Table>
            <thead>
                <tr>
                    <th>Person</th>
                    <th>Notes</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {resultList.map(v => <tr key={`${v.id}_${v.lastName}_${v.firstName}`}>
                    <td>{`${v.lastName ? v.lastName + ", " : null}${v.firstName}`}</td>
                    <td>{v.canvasNotes}</td>
                    <td>
                        <EditDeleteButton
                            editLink={`/canvas-results/edit/${v.id}`}
                            deleteAction={() => setDeleteDialogId(v.id ? v.id : 0)}
                        />
                    </td>
                </tr>)}
            </tbody>
        </Table>
    </>
}