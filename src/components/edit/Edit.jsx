
import React, { useState,setUser,users, useContext } from 'react';
import { UserContext } from '../use-context/UserContext';
import { useParams,Link } from 'react-router-dom';
import { Button,Form } from 'react-bootstrap';

const Edit = () => {

   
    const [users,setUsers] = useContext(UserContext);
    const {id}=useParams();
    const user = users.filter((user) =>user.id == id);

    const [name, setName] = useState(user[0].name);
    const [position, setPosition] = useState(user[0].position);
    const [salary, setSalary] = useState(user[0].salary);


    
      const updateName = (e) => {
        setName(e.target.value);
        const edited_name = name;
        user[0].name = edited_name;
      };
    
      const updatePosition = (e) => {
        setPosition(e.target.value);
        const edited_position = position;
        user[0].position = edited_position;
      };
    
      const updateSalary = (e) => {
        setSalary(e.target.value);
        const edited_salary = salary;
        user[0].salary = edited_salary;
      };
    
      const updateUser = (e) => {
        e.preventDefault();
        setUser([...users]);
      };
    return (
        <div className="edit">
            <Form> 
                <Form.Group>
                    <Form.Label><h1> ID No:{user[0].id}</h1></Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type="text"
                    name="name"
                    value={name}
                    onChange={updateName}
                    placeholder="Enter Name"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                    type="text"
                    name="position"
                    value={position}
                    onChange={updatePosition}
                    placeholder="Enter Position"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                    type="text"
                    name="salary"
                    value={salary}
                    onChange={updateSalary}
                    placeholder="Enter Salary"
                    />
                </Form.Group>
                <div className='mybtn'>
                    <Button onSubmit={()=>updateUser} className="action_btn" variant="success" type="submit">
                            Update User
                        </Button>

                    <Link to="/">
                        <Button className="action_btn" variant="primary">
                        Back to Home
                        </Button>
                    </Link>
                </div>
            </Form>
        </div>
    );
};

export default Edit;