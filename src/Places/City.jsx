// import React from 'react';
// import { Container, Row, Col, Card, Form, Button, Table, InputGroup, FormControl } from 'react-bootstrap';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa';

// const City = () => {
//   return (
//     <Container fluid>
//       <Row>
//         <Col className="p-4">
//           <h1>City Management</h1>
//           <Card className="mb-4">
//             <Card.Body>
//               <Form>
//                 <Row className="align-items-end">
//                   <Col md={4}>
//                     <Form.Group controlId="state">
//                       <Form.Label>Select State</Form.Label>
//                       <Form.Control as="select">
//                         <option>Pondicherry</option>
//                         <option>Tamilnadu</option>
//                         {/* Add more states as needed */}
//                       </Form.Control>
//                     </Form.Group>
//                   </Col>
//                   <Col md={4}>
//                     <Form.Group controlId="city">
//                       <Form.Label>Enter City</Form.Label>
//                       <Form.Control type="text" placeholder="Enter city" />
//                     </Form.Group>
//                   </Col>
//                   <Col md={4}>
//                     <Button variant="primary" className="mr-2">Update</Button>
//                     <Button variant="success ms-3">Create</Button>
//                   </Col>
//                 </Row>
//               </Form>
//             </Card.Body>
//           </Card>
//           <p>
//         <a href="#export">Export All to Excel</a> | <a href="#print">Print All to Print</a>
//       </p>
//           <Row className="mb-4">
//             <Col md={6}>
//               <h4>City</h4>
//             </Col>
//             <Col md={6} className="d-flex justify-content-end">
//               <InputGroup>
//                 <FormControl placeholder="Search..." />
//               </InputGroup>
//             </Col>
//           </Row>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Sl No</th>
//                 <th>City</th>
//                 <th>State</th>
//                 <th>Edit / Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Ariyankuppam</td>
//                 <td>Pondicherry</td>
//                 <td>
//                   <FaEdit className="mr-2" />
//                   <FaTrashAlt />
//                 </td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>Ariyur</td>
//                 <td>Pondicherry</td>
//                 <td>
//                   <FaEdit className="mr-2" />
//                   <FaTrashAlt />
//                 </td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td>Bahour</td>
//                 <td>Pondicherry</td>
//                 <td>
//                   <FaEdit className="mr-2" />
//                   <FaTrashAlt />
//                 </td>
//               </tr>
//               <tr>
//                 <td>4</td>
//                 <td>Ellapillaichavady</td>
//                 <td>Pondicherry</td>
//                 <td>
//                   <FaEdit className="mr-2" />
//                   <FaTrashAlt />
//                 </td>
//               </tr>
//               <tr>
//                 <td>5</td>
//                 <td>Embalam</td>
//                 <td>Pondicherry</td>
//                 <td>
//                   <FaEdit className="mr-2" />
//                   <FaTrashAlt />
//                 </td>
//               </tr>
//               <tr>
//                 <td>6</td>
//                 <td>Gorimedu</td>
//                 <td>Pondicherry</td>
//                 <td>
//                   <FaEdit className="mr-2" />
//                   <FaTrashAlt />
//                 </td>
//               </tr>
//               <tr>
//                 <td>7</td>
//                 <td>Katterikuppam</td>
//                 <td>Pondicherry</td>
//                 <td>
//                   <FaEdit className="mr-2" />
//                   <FaTrashAlt />
//                 </td>
//               </tr>
//               <tr>
//                 <td>8</td>
//                 <td>Kalapet</td>
//                 <td>Pondicherry</td>
//                 <td>
//                   <FaEdit className="mr-2" />
//                   <FaTrashAlt />
//                 </td>
//               </tr>
//             </tbody>
//           </Table>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default City;



















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const City = () => {
//     const [cities, setCities] = useState([]);
//     const [cityName, setCityName] = useState('');
//     const [editingCity, setEditingCity] = useState(null);

//     useEffect(() => {
//         fetchCities();
//     }, []);

//     const fetchCities = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/PPC/city-all');
//             setCities(response.data);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const createCity = async () => {
//         try {
//             const response = await axios.post('http://localhost:5000/PPC/city-create', { cityName });
//             setCities([...cities, response.data]);
//             setCityName('');
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const updateCity = async () => {
//         try {
//             const response = await axios.put(`http://localhost:5000/PPC/city-update/${editingCity._id}`, { cityName });
//             setCities(cities.map(city => (city._id === editingCity._id ? response.data : city)));
//             setCityName('');
//             setEditingCity(null);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const deleteCity = async (id) => {
//         try {
//             await axios.delete(`http://localhost:5000/PPC/city-delete/${id}`);
//             setCities(cities.filter(city => city._id !== id));
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const editCity = (city) => {
//         setEditingCity(city);
//         setCityName(city.cityName);
//     };

//     return (
//         <div className="container">
//             <h1>City Management</h1>
//             <div className="form-container">
//                 <h2>{editingCity ? 'Update City' : 'Create City'}</h2>
//                 <label htmlFor="city">City:</label>
//                 <input
//                     type="text"
//                     id="city"
//                     value={cityName}
//                     onChange={(e) => setCityName(e.target.value)}
//                 />
//                 <button onClick={editingCity ? updateCity : createCity}>
//                     {editingCity ? 'Update' : 'Create'}
//                 </button>
//             </div>
//             <div className="export-print">
//                 <a href="#">Export All to Excel</a>
//                 <a href="#">Print All</a>
//             </div>
//             <div className="table-container">
//                 <h2>Cities</h2>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Sl No</th>
//                             <th>City</th>
//                             <th>Edit / Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {cities.map((city, index) => (
//                             <tr key={city._id}>
//                                 <td>{index + 1}</td>
//                                 <td>{city.cityName}</td>
//                                 <td>
//                                     <span className="edit" onClick={() => editCity(city)}>✏️</span>
//                                     <span className="delete" onClick={() => deleteCity(city._id)}>🗑️</span>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default City;

















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaSearch } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const City = () => {
    const [cities, setCities] = useState([]);
    const [cityName, setCityName] = useState('');
    const [editingCity, setEditingCity] = useState(null);
    const [stateName, setStateName] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchCities();
    }, []);

    const fetchCities = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/city-all`);
            setCities(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const createCity = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/city-create`, { cityName, state: stateName });
            setCities([...cities, response.data]);
            setCityName('');
            setStateName('');
        } catch (err) {
            console.error(err);
        }
    };

    const updateCity = async () => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/city-update/${editingCity._id}`, { cityName, state: stateName });
            setCities(cities.map(city => (city._id === editingCity._id ? response.data : city)));
            setCityName('');
            setStateName('');
            setEditingCity(null);
        } catch (err) {
            console.error(err);
        }
    };

    const deleteCity = async (id) => {
        try {
            await axios.delete(`h${process.env.REACT_APP_API_URL}/city-delete/${id}`);
            setCities(cities.filter(city => city._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    const editCity = (city) => {
        setEditingCity(city);
        setCityName(city.cityName);
        setStateName(city.state);
    };

    const filteredCities = cities.filter(city =>
        city.cityName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h1>City Management</h1>
            <div className="form-container">
                <h2>{editingCity ? 'Update City' : 'Create City'}</h2>
                <div className="form-row">
                    <label htmlFor="state">State:</label>
                    <select id="state" value={stateName} onChange={(e) => setStateName(e.target.value)}>
                        <option value="" disabled>Select a state</option>
                        <option value="Pudhucherry">Pudhucherry</option>
                        <option value="Tamilnadu">Tamilnadu</option>
                        <option value="Others">Others</option>
                    </select>
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                    />
                </div>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <span className="search-icon"><FaSearch /></span>
                </div>
                <button onClick={editingCity ? updateCity : createCity}>
                    {editingCity ? 'Update' : 'Create'}
                </button>
            </div>

            <h4 className="text-danger">Roll Details</h4>
      <p>
        <a href="#export">Export All to Excel</a> | <a href="#print">Print All to Print</a>
      </p>
      
            <div className="table-container">
                <h2>Cities</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCities.map((city, index) => (
                            <tr key={city._id}>
                                <td>{index + 1}</td>
                                <td>{city.state}</td>
                                <td>{city.cityName}</td>
                                <td>
                                    <span className="edit text-primary" onClick={() => editCity(city)}> <FaEdit /> </span>
                                    <span className="delete text-danger fs-5" onClick={() => deleteCity(city._id)}> <MdDeleteForever /> </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default City;
