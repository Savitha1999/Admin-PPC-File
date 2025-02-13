// import React from 'react';
// import { Container, Row, Col, Card, Form, Button, Table, InputGroup, FormControl } from 'react-bootstrap';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa';

// const Area = () => {
//   return (
//     <Container fluid>
//       <Row>
//         <Col className="p-4">
//           <h1>Area Management</h1>
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
//                     <Form.Group controlId="area">
//                       <Form.Label>Enter Area</Form.Label>
//                       <Form.Control type="text" placeholder="Enter area" />
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
//               <h4>Area List</h4>
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
//                 <th>Area</th>
//                 <th>State</th>
//                 <th>Edit / Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Abishegapakkam</td>
//                 <td>Pondicherry</td>
//                 <td>
//                   <FaEdit className="mr-2" />
//                   <FaTrashAlt />
//                 </td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>Ariyankuppam</td>
//                 <td>Pondicherry</td>
//                 <td>
//                   <FaEdit className="mr-2" />
//                   <FaTrashAlt />
//                 </td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td>Arumbarthapuram</td>
//                 <td>Pondicherry</td>
//                 <td>
//                   <FaEdit className="mr-2" />
//                   <FaTrashAlt />
//                 </td>
//               </tr>
//               <tr>
//                 <td>4</td>
//                 <td>Bahoor</td>
//                 <td>Pondicherry</td>
//                 <td>
//                   <FaEdit className="mr-2" />
//                   <FaTrashAlt />
//                 </td>
//               </tr>
//               <tr>
//                 <td>5</td>
//                 <td>Bommayarpalayam</td>
//                 <td>Pondicherry</td>
//                 <td>
//                   <FaEdit className="mr-2" />
//                   <FaTrashAlt />
//                 </td>
//               </tr>
//               <tr>
//                 <td>6</td>
//                 <td>Kalapet</td>
//                 <td>Pondicherry</td>
//                 <td>
//                   <FaEdit className="mr-2" />
//                   <FaTrashAlt />
//                 </td>
//               </tr>
//               <tr>
//                 <td>7</td>
//                 <td>Kurivinatham</td>
//                 <td>Pondicherry</td>
//                 <td>
//                   <FaEdit className="mr-2" />
//                   <FaTrashAlt />
//                 </td>
//               </tr>
//               <tr>
//                 <td>8</td>
//                 <td>Dhanvantry Nagar</td>
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

// export default Area;













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Area = () => {
//     const [areas, setAreas] = useState([]);
//     const [areaName, setAreaName] = useState('');
//     const [editingArea, setEditingArea] = useState(null);

//     useEffect(() => {
//         fetchAreas();
//     }, []);

//     const fetchAreas = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/PPC/area-all');
//             setAreas(response.data);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const createArea = async () => {
//         try {
//             const response = await axios.post('http://localhost:5000/PPC/area-create', { areaName });
//             setAreas([...areas, response.data]);
//             setAreaName('');
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const updateArea = async () => {
//         try {
//             const response = await axios.put(`http://localhost:5000/PPC/area-update/${editingArea._id}`, { areaName });
//             setAreas(areas.map(area => (area._id === editingArea._id ? response.data : area)));
//             setAreaName('');
//             setEditingArea(null);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const deleteArea = async (id) => {
//         try {
//             await axios.delete(`http://localhost:5000/PPC/area-delete/${id}`);
//             setAreas(areas.filter(area => area._id !== id));
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const editArea = (area) => {
//         setEditingArea(area);
//         setAreaName(area.areaName);
//     };

    
//     return (
//         <div className="container">
//             <h1>Area Management</h1>
//             <div className="form-container">
//                 <h2>{editingArea ? 'Update Area' : 'Create Area'}</h2>
//                 <label htmlFor="area">Area:</label>
//                 <input
//                     type="text"
//                     id="area"
//                     value={areaName}
//                     onChange={(e) => setAreaName(e.target.value)}
//                 />
//                 <button onClick={editingArea ? updateArea : createArea}>
//                     {editingArea ? 'Update' : 'Create'}
//                 </button>
//             </div>
//             <div className="export-print">
//                 <a href="#">Export All to Excel</a>
//                 <a href="#">Print All</a>
//             </div>
//             <div className="table-container">
//                 <h2>Areas</h2>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Sl No</th>
//                             <th>Area</th>
//                             <th>Edit / Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {areas.map((area, index) => (
//                             <tr key={area._id}>
//                                 <td>{index + 1}</td>
//                                 <td>{area.areaName}</td>
//                                 <td>
//                                     <span className="edit" onClick={() => editArea(area)}>✏️</span>
//                                     <span className="delete" onClick={() => deleteArea(area._id)}>🗑️</span>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Area;












import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaSearch } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const Area = () => {
    const [areas, setAreas] = useState([]);
    const [areaName, setAreaName] = useState('');
    const [editingArea, setEditingArea] = useState(null);
    const [stateName, setStateName] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchAreas();
    }, []);

    const fetchAreas = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/area-all`);
            setAreas(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const createArea = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/area-create`, { areaName, state: stateName });
            setAreas([...areas, response.data]);
            setAreaName('');
            setStateName('');
        } catch (err) {
            console.error(err);
        }
    };

    const updateArea = async () => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/area-update/${editingArea._id}`, { areaName, state: stateName });
            setAreas(areas.map(area => (area._id === editingArea._id ? response.data : area)));
            setAreaName('');
            setStateName('');
            setEditingArea(null);
        } catch (err) {
            console.error(err);
        }
    };

    const deleteArea = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/area-delete/${id}`);
            setAreas(areas.filter(area => area._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    const editArea = (area) => {
        setEditingArea(area);
        setAreaName(area.areaName);
        setStateName(area.state);
    };

    const filteredAreas = areas.filter(area =>
        area.areaName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Area Management</h1>
            <div className="form-container">
                <h2>{editingArea ? 'Update Area' : 'Create Area'}</h2>
                <div className="form-row">
                    <label htmlFor="state">State:</label>
                    <select id="state" value={stateName} onChange={(e) => setStateName(e.target.value)}>
                        <option value="" disabled>Select a state</option>
                        <option value="Pudhucherry">Pudhucherry</option>
                        <option value="Tamilnadu">Tamilnadu</option>
                        <option value="Others">Others</option>
                    </select>
                    <label htmlFor="area">Area:</label>
                    <input
                        type="text"
                        id="area"
                        value={areaName}
                        onChange={(e) => setAreaName(e.target.value)}
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
                <button onClick={editingArea ? updateArea : createArea}>
                    {editingArea ? 'Update' : 'Create'}
                </button>
            </div>

            <h4 className="text-danger">Roll Details</h4>
      <p>
        <a href="#export">Export All to Excel</a> | <a href="#print">Print All to Print</a>
      </p>
      
            <div className="table-container">
                <h2>Areas</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>State</th>
                            <th>Area</th>
                            <th>Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAreas.map((area, index) => (
                            <tr key={area._id}>
                                <td>{index + 1}</td>
                                <td>{area.state}</td>
                                <td>{area.areaName}</td>
                                <td>
                                    <span className="edit text-primary" onClick={() => editArea(area)}> <FaEdit /> </span>
                                    <span className="delete text-danger fs-5" onClick={() => deleteArea(area._id)}> <MdDeleteForever /> </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Area;
