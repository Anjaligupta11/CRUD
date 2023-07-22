import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from '../../Employees';
// import { v4 as u } from "uuid";
import {  useNavigate } from 'react-router-dom';


const Edit = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();

    let index = Employees.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        let a = Employees[index];
        a.Name = name;
        a.Age = age;
        a.City = city;
    
          history("/");
    }

    useEffect(() =>{
       setName(localStorage.getItem('Name'))
       setAge(localStorage.getItem('Age'))
       setCity(localStorage.getItem('City'))
       setId(localStorage.getItem('Id'))
    }, [])
        

    return (
        <div>
        <Form className='d-grip gap-2' style={{ margin: "15rem" }}>
          <Form.Group className='mb-3' controlId='forName'>
            <Form.Control type='text' placeholder='Enter Name' value={name} required onChange={(e) => setName(e.target.value)}></Form.Control>
          </Form.Group>
  
          <Form.Group className='mb-3' controlId='forAge'>
            <Form.Control type='number' placeholder='Enter Age' value={age} required onChange={(e) => setAge(e.target.value)}></Form.Control>
          </Form.Group>
  
          <Form.Group className='mb-3' controlId='forCity'>
            <Form.Control type='text' placeholder='Enter City' value={city} required onChange={(e) => setCity(e.target.value)}></Form.Control>
          </Form.Group>
  
          <Button onClick={(e) => handleSubmit(e)} type='submit'>Update</Button>
  
        </Form>
      </div>
    )
}

export default Edit



