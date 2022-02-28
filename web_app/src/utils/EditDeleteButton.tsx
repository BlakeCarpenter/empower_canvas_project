import React from 'react';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {ThreeDotsVertical, XLg, PencilFill, TrashFill} from "react-bootstrap-icons";

interface EditDeleteButtonProps{
    editLink:string;
    deleteAction:Function;
}

export default function EditDeleteButton(props:EditDeleteButtonProps){
    const {editLink, deleteAction} = props;
    let navigate = useNavigate();
    const [showMore, setShowMore] = React.useState(false);

    const toggle = () => {
        setShowMore(!showMore);
    }
    
    return showMore ? <>
        <Button variant="primary" onClick={() => navigate(editLink)}><PencilFill/></Button>
        <Button variant="danger" onClick={() => deleteAction()}><TrashFill/></Button>
        <Button variant="light" onClick={toggle}><XLg/></Button>
    </> :
    <Button variant="light" onClick={toggle}>
        <ThreeDotsVertical/>
    </Button>
}