import './Create.css';
import React, { useState,setUser,users, useContext } from 'react';
import { UserContext } from '../use-context/UserContext';
import { Button,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Create = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");
  
    const [users, setUser] = useContext(UserContext);
  
    const createId = (e) => {
      setId(e.target.value);
      console.log(id)
    };
  
    const createName = (e) => {
      setName(e.target.value);
    };
  
    const createPosition = (e) => {
      setPosition(e.target.value);
    };
  
    const createSalary = (e) => {
      setSalary(e.target.value);
    };
  
    const createUser = (e) => {
        e.preventDefault();
        setUser([...users, {id:id, name:name, position:position, salary:salary}])
    }
  
    return (
      <div >
        <Form onSubmit={createUser}>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              name="id"
              value={id}
              onChange={createId}
              placeholder="Enter ID"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={createName}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              name="position"
              value={position}
              onChange={createPosition}
              placeholder="Enter Position"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="text"
              name="salary"
              value={salary}
              onChange={createSalary}
              placeholder="Enter Salary"
            />
          </Form.Group>
          <div className='mybtn'>
            <Button className="action_btn" variant="success" type="submit">
                    Save User
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
  
  export default Create;