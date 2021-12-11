import './View.css';
import React, { useContext } from 'react';
import { UserContext } from '../use-context/UserContext';
import { useParams,Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

const View=()=>{
    const [Users,setUsers]=useContext(UserContext);
    const {id}=useParams();
  
    const user=Users.filter((user) =>user.id == id);
    return(
        <div className="view">
            <h1>ID:{user[0].id}</h1>
            <h1>Name:{user[0].name}</h1>
            <h1>Position:{user[0].position}</h1>
            <h1>Salary:{user[0].salary} /=</h1>
             <Link to="/">
                <Button className="action_btn" variant="success">Back to Home</Button>
            </Link>
        </div>
    )
}
export default View;