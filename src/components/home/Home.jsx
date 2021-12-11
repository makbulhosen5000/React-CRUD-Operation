import React, { useContext } from 'react';
import {Button,Table} from 'react-bootstrap';
import { UserContext } from '../use-context/UserContext';
import './Home.css';
import {Link} from 'react-router-dom';


const Home = () => {
    const [users,setUsers] = useContext(UserContext);
    return (
        <div>
            <Link to="/create">
            <Button className='action_home' variant="outline-success">Create User</Button>
            </Link>
            <Table striped bordered hover>
               <thead>
                   <tr className="text-center">
                       <th>Id</th>
                       <th>Name</th>
                       <th>Position</th>
                       <th>Salary</th>
                       <th>Action</th>
                   </tr>
               </thead>
               <tbody>
                   {
                    users.map(user=>
                    <tr className="text-center">
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.position}</td>
                        <td>{user.salary}</td>
                        <td className="">
                            <Link to={"/edit/"+user.id}>  
                            <Button className="action_btn" variant="warning">Edit</Button>
                            </Link>
                            
                            <Link to={"/view/"+user.id}>
                            <Button className="action_btn" variant="primary">View</Button>
                            </Link>
                            <Link to={"/delete/"+user.id}>
                            <Button className="action_btn" variant="danger">Delete</Button>
                            </Link>
                            
                        
                        </td>
                    </tr>
                    )
                   }
                
               </tbody>
           </Table>
        </div>
    );
};

export default Home;