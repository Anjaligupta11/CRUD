import React from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from '../../Employees';
import { Link, useNavigate } from 'react-router-dom';
import "./Home.css"

const Home = () => {

    let history = useNavigate();

    const handleEdit = (id, name, age, city) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
        localStorage.setItem('City', city);
        localStorage.setItem('Id', id);
    }

    const handleDelete = (id) => {
        let index = Employees.map(function (e) {
            return e.id
        }).indexOf(id);

        Employees.splice(index, 1);

        history('/');
    }

    return (
        <>
            <div>
                <Table>
                    <th class="table table-success table-striped-columns">
                        <tr>
                            <th>
                                Name
                            </th>

                            <th>
                                Age
                            </th>

                            <th>
                                City
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>

                        <tbody>
                            {
                                Employees && Employees.length > 0
                                    ?
                                    Employees.map((item => {
                                        return (
                                            <tr>
                                                <td>
                                                    {item.Name}
                                                </td>
                                                <td>
                                                    {item.Age}
                                                </td>
                                                <td>
                                                    {item.City}
                                                </td>
                                                <td>
                                                    <Link to={'/edit'}>
                                                        <Button onClick={() => handleEdit(item.id, item.Name, item.Age, item.City)}>Edit</Button>
                                                    </Link>
                                                    &nbsp;
                                                    <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                                </td>
                                            </tr>
                                        )
                                    }))
                                    :
                                    "No data available"
                            }
                        </tbody>

                    </th>
                </Table>
                <br>
                </br>
                <Link className="d-grid gap" to="/create">
                    <Button size="sm">Create</Button>
                </Link>
            </div>
        </>
    )
}

export default Home;
