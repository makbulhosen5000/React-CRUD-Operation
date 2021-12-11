import React, { useContext } from 'react';
import { UserContext } from '../use-context/UserContext';
import {Link, useParams } from 'react-router-dom';
import {Button, Modal} from 'react-bootstrap';
import css from './Delete.css';

const Delete = () => {
    const [users,setUsers] = useContext(UserContext);
    const {id} = useParams();
   
    const DeleteUser=(id)=>{
        const user = users.filter((user) =>user.id != id);
        setUsers(user)
    }
    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Are Your Sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Want to delete it!</h3>
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/">
                        <Button className="action_btn" variant="secondary">Cancel</Button>
                         <Button className="action_btn" onClick={()=>DeleteUser(id)} variant="danger">Delete</Button>
                    </Link>
                </Modal.Footer>
           </Modal.Dialog>
        </div>
       
    );
};

export default Delete;