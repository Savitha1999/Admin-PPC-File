






// // import React, { useState, useEffect } from "react";
// // import { Helmet } from "react-helmet";
// // import { Container, Row, Col, Table, Button } from "react-bootstrap";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // const AddCar = () => {
// //   const [properties, setProperties] = useState([]);
// //   const [deletedProperties, setDeletedProperties] = useState({}); // Track deleted properties
// //   const navigate = useNavigate();

// //   // Fetch properties on component mount
// //   useEffect(() => {
// //     const fetchProperties = async () => {
// //       try {
// //         const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch-all-data`);
// //         setProperties(response.data.users);
// //       } catch (error) {
// //         console.error("Error fetching properties:", error);
// //       }
// //     };

// //     fetchProperties();
// //   }, []);

// //   // Edit Property Handler
// //   const handleEdit = (ppcId) => {
// //     console.log("Editing property with PPC ID:", ppcId);
// //     navigate("/edit-property", { state: { ppcId } }); // Redirect to the edit form
// //   };

// //   // Delete Property Handler
// //   const handleDelete = async (ppcId, phoneNumber) => {
// //     try {
// //       // Mark property as deleted in UI
// //       setDeletedProperties((prev) => ({ ...prev, [ppcId]: true }));

// //       // Make API call to delete the property
// //       await axios.post(`${process.env.REACT_APP_API_URL}/delete-property`, { ppcId, phoneNumber });
// //       console.log("Deleted property with PPC ID:", ppcId);
// //     } catch (error) {
// //       console.error("Error deleting property:", error);
// //     }
// //   };


  


// //   const handleUndo = async (ppcId, phoneNumber) => {
// //     try {
// //       // Debug log
// //       console.log("Undo request payload:", { ppcId, phoneNumber });
  
// //       // Make API call
// //       const response = await axios.post(`${process.env.REACT_APP_API_URL}/undo-delete`, {
// //         ppcId,
// //         phoneNumber,
// //       });
  
// //       console.log(`Undo successful for property with PPC ID: ${ppcId}`);
      
// //       // Remove the property from deleted state
// //       setDeletedProperties((prev) => {
// //         const updated = { ...prev };
// //         delete updated[ppcId];
// //         return updated;
// //       });
// //     } catch (error) {
// //       console.error("Error undoing delete:", error.response?.data || error.message);
// //     }
// //   };
  

// //   return (
// //     <Container fluid className="p-3">
// //       <Helmet>
// //         <title>Pondy Property | Properties</title>
// //       </Helmet>
// //       <Row className="g-3">
// //         <Col lg={12} className="d-flex align-items-center justify-content-center">
// //           <div style={{ width: "100%" }}>
// //             <div style={{ maxHeight: "500px", overflowY: "scroll", scrollbarWidth: "none" }}>
// //               {properties.length > 0 ? (
// //                 <Table striped bordered hover responsive>
// //                   <thead>
// //                     <tr>
// //                       <th>Image</th>
// //                       <th>PPC ID</th>
// //                       <th>Phone Number</th>
// //                       <th>Property Mode</th>
// //                       <th>Property Type</th>
// //                       <th>City</th>
// //                       <th>Area</th>
// //                       <th>Bedrooms</th>
// //                       <th>Price</th>
// //                       <th>Negotiation</th>
// //                       <th>Actions</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {properties.map((property) => (
// //                       <tr key={property._id}>
// //                         <td>
// //                           <img
// //                             src={
// //                               property.photos && property.photos.length > 0
// //                                 ? `http://localhost:5000/${property.photos[0]}`
// //                                 : "https://d17r9yv50dox9q.cloudfront.net/car_gallery/default.jpg"
// //                             }
// //                             alt="Property"
// //                             style={{ width: "50px", height: "50px", objectFit: "cover" }}
// //                           />
// //                         </td>
// //                         <td>{property.ppcId}</td>
// //                         <td>{property.phoneNumber}</td>
// //                         <td>{property.propertyMode}</td>
// //                         <td>{property.propertyType}</td>
// //                         <td>{property.city}</td>
// //                         <td>{property.totalArea}</td>
// //                         <td>{property.bedrooms}</td>
// //                         <td>{property.price}</td>
// //                         <td>{property.negotiation}</td>
// //                         <td>
// //                           {deletedProperties[property.ppcId] ? (
// //                             <Button
// //                               variant="secondary"
// //                               size="sm"
// //                               className="ms-2"
// //                               onClick={() => handleUndo(property.ppcId, property.phoneNumber)}
// //                               >
// //                               Undo
// //                             </Button>
// //                           ) : (
// //                             <>
// //                               <Button
// //                                 variant="info"
// //                                 size="sm"
// //                                 onClick={() => handleEdit(property.ppcId)}
// //                               >
// //                                 Edit
// //                               </Button>
// //                               <Button
// //                                 variant="danger"
// //                                 size="sm"
// //                                 className="ms-2"
// //                                 onClick={() => handleDelete(property.ppcId, property.phoneNumber)}
// //                               >
// //                                 Delete
// //                               </Button>
// //                             </>
// //                           )}
// //                         </td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </Table>
// //               ) : (
// //                 <p>Loading properties...</p>
// //               )}
// //             </div>
// //           </div>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default AddCar;










// import React, { useState, useEffect } from "react";
// import { Helmet } from "react-helmet";
// import { Container, Row, Col, Table, Button } from "react-bootstrap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import AddProperty from "./AddProperty";

// const AddCar = () => {
//   const [properties, setProperties] = useState([]);
//   const [deletedProperties, setDeletedProperties] = useState({}); // Track deleted properties
//   const navigate = useNavigate();

//   // Fetch properties on component mount
//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch-all-data`);
//         setProperties(response.data.users);
//       } catch (error) {
//         console.error("Error fetching properties:", error);
//       }
//     };

//     fetchProperties();
//   }, []);

//   // Load deleted properties from localStorage on initial load
//   useEffect(() => {
//     const storedDeletedProperties = localStorage.getItem("deletedProperties");
//     if (storedDeletedProperties) {
//       setDeletedProperties(JSON.parse(storedDeletedProperties));
//     }
//   }, []);

//   // Save deleted properties to localStorage whenever deletedProperties changes
//   useEffect(() => {
//     localStorage.setItem("deletedProperties", JSON.stringify(deletedProperties));
//   }, [deletedProperties]);

//   // Edit Property Handler
//   const handleEdit = (ppcId,phoneNumber) => {
//     console.log("Editing property with PPC ID:", ppcId);
//     navigate("/edit-property", { state: { ppcId,phoneNumber } }); // Redirect to the edit form
//   };

//   // Delete Property Handler
//   const handleDelete = async (ppcId, phoneNumber) => {
//     try {
//       // Mark property as deleted in UI
//       setDeletedProperties((prev) => ({ ...prev, [ppcId]: true }));

//       // Make API call to delete the property
//       await axios.post(`${process.env.REACT_APP_API_URL}/delete-property`, { ppcId, phoneNumber });
//       console.log("Deleted property with PPC ID:", ppcId);
//     } catch (error) {
//       console.error("Error deleting property:", error);
//     }
//   };

//   // Undo Deletion Handler
//   const handleUndo = async (ppcId, phoneNumber) => {
//     try {
//       console.log("Undo request payload:", { ppcId, phoneNumber });

//       // Make API call to undo delete
//       await axios.post(`${process.env.REACT_APP_API_URL}/undo-delete`, { ppcId, phoneNumber });

//       // Remove the property from deleted state
//       setDeletedProperties((prev) => {
//         const updated = { ...prev };
//         delete updated[ppcId];
//         return updated;
//       });
//       console.log(`Undo successful for property with PPC ID: ${ppcId}`);
//     } catch (error) {
//       console.error("Error undoing delete:", error.response?.data || error.message);
//     }
//   };



//   return (
//     <Container fluid className="p-3">
//       <AddProperty />


//       <Helmet>
//         <title>Pondy Property | Properties</title>
//       </Helmet>

//       <h2 className="mb-4 mt-5"> User All Properties </h2>
//       <Row className="g-3">
//         <Col lg={12} className="d-flex align-items-center justify-content-center">
//           <div style={{ width: "100%" }}>
//             <div style={{ maxHeight: "500px", overflowY: "scroll", scrollbarWidth: "none" }}>
//               {properties.length > 0 ? (
//                 <Table striped bordered hover responsive>
//                  <thead>
//   <tr>
    // <th>Image</th>
    // <th>PPC ID</th>
    // <th>Phone Number</th>
    // <th>Property Mode</th>
    // <th>Property Type</th>
    // <th>Price</th>
    // <th>City</th>
    // <th>Area</th>
    // <th>Owner Name</th>
    // <th>Email</th>
    // <th>Best Time To Call</th>
    // <th>Rental Property Address</th>
    // <th>State</th>
    // <th>District</th>
    // <th>Street Name</th>
    // <th>Door Number</th>
    // <th>Nagar</th>
    // <th>Alternate Phone</th>
    // <th>Country Code</th>
    // <th>Bank Loan</th>
    // <th>Negotiation</th>
    // <th>Ownership</th>
    // <th>Bedrooms</th>
    // <th>Kitchen</th>
    // <th>Kitchen Type</th>
    // <th>Balconies</th>
    // <th>Floor No</th>
    // <th>Area Unit</th>
    // <th>Property Approved</th>
    // <th>Property Age</th>
    // <th>Posted By</th>
    // <th>Facing</th>
    // <th>Sales Mode</th>
    // <th>Sales Type</th>
    // <th>Furnished</th>
    // <th>Lift</th>
    // <th>Attached Bathrooms</th>
    // <th>Western</th>
    // <th>Number of Floors</th>
    // <th>Car Parking</th>
    // <th>Actions</th>
//   </tr>
// </thead>
                

// <tbody>
//   {properties.map((property) => (
//     <tr key={property._id}>
//       <td>
//         <img
//           src={
//             property.photos && property.photos.length > 0
//               ? `http://localhost:5000/${property.photos[0]}`
//               : "https://d17r9yv50dox9q.cloudfront.net/car_gallery/default.jpg"
//           }
//           alt="Property"
//           style={{ width: "50px", height: "50px", objectFit: "cover" }}
//         />
//       </td>
//       <td>{property.ppcId}</td>
//       <td>{property.phoneNumber}</td>
//       <td>{property.propertyMode}</td>
//       <td>{property.propertyType}</td>
//       <td>{property.price}</td>
//       <td>{property.city}</td>
//       <td>{property.totalArea}</td>
//       <td>{property.ownerName}</td>
//       <td>{property.email}</td>
//       <td>{property.bestTimeToCall}</td>

      // {/* Adding the new fields to the table */}
      // <td>{property.rentalPropertyAddress}</td>
      // <td>{property.state}</td>
      // <td>{property.district}</td>
      // <td>{property.streetName}</td>
      // <td>{property.doorNumber}</td>
      // <td>{property.nagar}</td>
      // <td>{property.alternatePhone}</td>
      // <td>{property.countryCode}</td>
      // <td>{property.bankLoan}</td>
      // <td>{property.negotiation}</td>
      // <td>{property.ownership}</td>
      // <td>{property.bedrooms}</td>
      // <td>{property.kitchen}</td>
      // <td>{property.kitchenType}</td>
      // <td>{property.balconies}</td>
      // <td>{property.floorNo}</td>
      // <td>{property.areaUnit}</td>
      // <td>{property.propertyApproved}</td>
      // <td>{property.propertyAge}</td>
      // <td>{property.postedBy}</td>
      // <td>{property.facing}</td>
      // <td>{property.salesMode}</td>
      // <td>{property.salesType}</td>
      // <td>{property.furnished}</td>
      // <td>{property.lift}</td>
      // <td>{property.attachedBathrooms}</td>
      // <td>{property.western}</td>
      // <td>{property.numberOfFloors}</td>
      // <td>{property.carParking}</td>

//       <td>
//         {deletedProperties[property.ppcId] ? (
//           <Button
//             variant="secondary"
//             size="sm"
//             className="ms-2"
//             onClick={() => handleUndo(property.ppcId, property.phoneNumber)}
//           >
//             Undo
//           </Button>
//         ) : (
//           <>
//             <Button
//               variant="info"
//               size="sm"
//               onClick={() => handleEdit(property.ppcId, property.phoneNumber)}
//             >
//               Edit
//             </Button>
//             <Button
//               variant="danger"
//               size="sm"
//               className="ms-2"
//               onClick={() => handleDelete(property.ppcId, property.phoneNumber)}
//             >
//               Delete
//             </Button>
//           </>
//         )}
//       </td>
//     </tr>
//   ))}
// </tbody>


//                 </Table>
//               ) : (
//                 <p>Loading properties...</p>
//               )}
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AddCar;




// import React, { useState, useEffect } from "react";
// import { Helmet } from "react-helmet";
// import { Container, Row, Col, Table, Button } from "react-bootstrap";
// import axios from "axios";
// import AddProperty from "./AddProperty";
// import { useNavigate } from "react-router-dom";

// const AddCar = () => {
//   const [properties, setProperties] = useState([]);
//   const [statusProperties, setStatusProperties] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   const fetchProperties = async () => {
//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch-all-data`);
//       setProperties(response.data.users);

//       // Initialize statusProperties from API response
//       const initialStatuses = response.data.users.reduce((acc, property) => {
//         acc[property.ppcId] = property.status || "incomplete"; // Default to 'incomplete' if no status exists
//         return acc;
//       }, {});
//       setStatusProperties(initialStatuses);
//       localStorage.setItem("statusProperties", JSON.stringify(initialStatuses)); // Store in localStorage
//     } catch (error) {
//       console.error("Error fetching properties:", error);
//     }
//   };

//   useEffect(() => {
//     const storedStatusProperties = localStorage.getItem("statusProperties");
//     if (storedStatusProperties) {
//       setStatusProperties(JSON.parse(storedStatusProperties));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("statusProperties", JSON.stringify(statusProperties));
//   }, [statusProperties]);

  // // **Handle Status Change**
  // const handleStatusChange = async (ppcId, currentStatus) => {
  //   const newStatus = currentStatus === "active" ? "pending" : "active";

  //   try {
  //     await axios.put(`${process.env.REACT_APP_API_URL}/update-property-status`, {
  //       ppcId,
  //       status: newStatus,
  //     });

  //     setStatusProperties((prev) => ({
  //       ...prev,
  //       [ppcId]: newStatus,
  //     }));
  //   } catch (error) {
  //     console.error("Error updating status:", error);
  //     alert("Failed to update status.");
  //   }
  // };

//   return (
//     <Container fluid className="p-3">
//       <AddProperty />
//       <Helmet>
//         <title>Pondy Property | Properties</title>
//       </Helmet>

//       <h2 className="mb-4 mt-5">User All Properties</h2>
//       <Row className="g-3">
//         <Col lg={12} className="d-flex align-items-center justify-content-center">
//           <div style={{ width: "100%" }}>
//             <div style={{ maxHeight: "500px", overflowY: "scroll", scrollbarWidth: "none" }}>
//               {properties.length > 0 ? (
//                 <Table striped bordered hover responsive>
//                   <thead>
//                     <tr>
//                       <th>Image</th>
//                       <th>PPC ID</th>
//                       <th>Phone Number</th>
//                       <th>Property Mode</th>
//                       <th>Property Type</th>
//                       <th>Price</th>
//                       <th>City</th>
//                       <th>Area</th>
//                       <th>Owner Name</th>
//                       <th>Email</th>
//                       <th>Status</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {properties.map((property) => (
//                       <tr key={property._id}>
//                         <td>
//                           <img
//                             src={
//                               property.photos && property.photos.length > 0
//                                 ? `http://localhost:5000/${property.photos[0]}`
//                                 : "https://d17r9yv50dox9q.cloudfront.net/car_gallery/default.jpg"
//                             }
//                             alt="Property"
//                             style={{ width: "50px", height: "50px", objectFit: "cover" }}
//                           />
//                         </td>
//                         <td>{property.ppcId}</td>
//                         <td>{property.phoneNumber}</td>
//                         <td>{property.propertyMode}</td>
//                         <td>{property.propertyType}</td>
//                         <td>{property.price}</td>
//                         <td>{property.city}</td>
//                         <td>{property.totalArea}</td>
//                         <td>{property.ownerName}</td>
//                         <td>{property.email}</td>

//                         {/* Status Column */}
//                         <td>
//                           <span
//                             style={{
//                               padding: "5px 10px",
//                               borderRadius: "5px",
//                               backgroundColor:
//                                 statusProperties[property.ppcId] === "active"
//                                   ? "green"
//                                   : "orange",
//                               color: "white",
//                             }}
//                           >
//                             {statusProperties[property.ppcId] || "incomplete"}
//                           </span>
//                         </td>

//                         <td>
//                           <Button
//                             variant="info"
//                             size="sm"
//                             onClick={() =>
//                               navigate(`/edit-property`, {
//                                 state: { ppcId: property.ppcId, phoneNumber: property.phoneNumber },
//                               })
//                             }
//                           >
//                             Edit
//                           </Button>
//                           <Button
//                             variant="danger"
//                             size="sm"
//                             className="ms-2"
//                             onClick={() => handleStatusChange(property.ppcId, statusProperties[property.ppcId] || "incomplete")}
//                           >
//                             {statusProperties[property.ppcId] === "active" ? "Set Pending" : "Set Active"}
//                           </Button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//               ) : (
//                 <p>Loading properties...</p>
//               )}
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AddCar;









// import React, { useState, useEffect } from "react";
// import { Helmet } from "react-helmet";
// import { Container, Row, Col, Table, Button } from "react-bootstrap";
// import axios from "axios";
// import AddProperty from "./AddProperty";
// import { useNavigate } from "react-router-dom";

// const AddCar = () => {
//   const [properties, setProperties] = useState([]);
//   const [statusProperties, setStatusProperties] = useState({});
//   const [previousStatuses, setPreviousStatuses] = useState({}); // Store previous statuses before delete
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   const fetchProperties = async () => {
//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch-all-data`);
//       setProperties(response.data.users);

//       // Initialize statusProperties from API response
//       const initialStatuses = response.data.users.reduce((acc, property) => {
//         acc[property.ppcId] = property.status || "active"; // Default to 'active' if no status exists
//         return acc;
//       }, {});

//       setStatusProperties(initialStatuses);
//       localStorage.setItem("statusProperties", JSON.stringify(initialStatuses));
//     } catch (error) {
//       console.error("Error fetching properties:", error);
//     }
//   };

//   useEffect(() => {
//     const storedStatusProperties = localStorage.getItem("statusProperties");
//     if (storedStatusProperties) {
//       setStatusProperties(JSON.parse(storedStatusProperties));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("statusProperties", JSON.stringify(statusProperties));
//   }, [statusProperties]);

//   // **Handle Delete Functionality**
//   const handleDelete = async (ppcId) => {
//     // Store previous status before deleting
//     setPreviousStatuses((prev) => ({ ...prev, [ppcId]: statusProperties[ppcId] }));

//     try {
//       await axios.put(`${process.env.REACT_APP_API_URL}/update-property-status`, {
//         ppcId,
//         status: "delete",
//       });

//       setStatusProperties((prev) => ({
//         ...prev,
//         [ppcId]: "delete",
//       }));
//     } catch (error) {
//       console.error("Error deleting property:", error);
//       alert("Failed to delete property.");
//     }
//   };

//   // **Handle Undo Functionality**
//   const handleUndo = async (ppcId) => {
//     const restoredStatus = previousStatuses[ppcId] || "active"; // Restore previous status or default to 'active'

//     try {
//       await axios.put(`${process.env.REACT_APP_API_URL}/update-property-status`, {
//         ppcId,
//         status: restoredStatus,
//       });

//       setStatusProperties((prev) => ({
//         ...prev,
//         [ppcId]: restoredStatus,
//       }));

//       // Remove previous status tracking
//       setPreviousStatuses((prev) => {
//         const updated = { ...prev };
//         delete updated[ppcId];
//         return updated;
//       });
//     } catch (error) {
//       console.error("Error undoing delete:", error);
//       alert("Failed to undo delete.");
//     }
//   };

  
//   // **Handle Status Change**
//   const handleStatusChange = async (ppcId, currentStatus) => {
//     const newStatus = currentStatus === "active" ? "pending" : "active";

//     try {
//       await axios.put(`${process.env.REACT_APP_API_URL}/update-property-status`, {
//         ppcId,
//         status: newStatus,
//       });

//       setStatusProperties((prev) => ({
//         ...prev,
//         [ppcId]: newStatus,
//       }));
//     } catch (error) {
//       console.error("Error updating status:", error);
//       alert("Failed to update status.");
//     }
//   };

//   return (
//     <Container fluid className="p-3">
//       <AddProperty />
//       <Helmet>
//         <title>Pondy Property | Properties</title>
//       </Helmet>

//       <h2 className="mb-4 mt-5">User All Properties</h2>
//       <Row className="g-3">
//         <Col lg={12} className="d-flex align-items-center justify-content-center">
//           <div style={{ width: "100%" }}>
//             <div style={{ maxHeight: "500px", overflowY: "scroll", scrollbarWidth: "none" }}>
//               {properties.length > 0 ? (
//                 <Table striped bordered hover responsive>
//                   <thead>
//                     <tr>
//                       <th>Image</th>
//                       <th>PPC ID</th>
//                       <th>Phone Number</th>
//                       <th>Property Mode</th>
//                       <th>Property Type</th>
//                       <th>Price</th>
//                       <th>City</th>
//                       <th>Area</th>
//                       <th>Owner Name</th>
//                       <th>Email</th>
//                       <th>Status</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {properties.map((property) => (
//                       <tr key={property._id}>
//                         <td>
//                           <img
//                             src={
//                               property.photos && property.photos.length > 0
//                                 ? `http://localhost:5000/${property.photos[0]}`
//                                 : "https://d17r9yv50dox9q.cloudfront.net/car_gallery/default.jpg"
//                             }
//                             alt="Property"
//                             style={{ width: "50px", height: "50px", objectFit: "cover" }}
//                           />
//                         </td>
//                         <td>{property.ppcId}</td>
//                         <td>{property.phoneNumber}</td>
//                         <td>{property.propertyMode}</td>
//                         <td>{property.propertyType}</td>
//                         <td>{property.price}</td>
//                         <td>{property.city}</td>
//                         <td>{property.totalArea}</td>
//                         <td>{property.ownerName}</td>
//                         <td>{property.email}</td>

//                         {/* Status Column */}
//                         <td>
//                           <span
//                             style={{
//                               padding: "5px 10px",
//                               borderRadius: "5px",
//                               backgroundColor:
//                                 statusProperties[property.ppcId] === "delete"
//                                   ? "red"
//                                   : statusProperties[property.ppcId] === "active"
//                                   ? "green"
//                                   : "orange",
//                               color: "white",
//                             }}
//                           >
//                             {statusProperties[property.ppcId]}
//                           </span>
//                         </td>

//                         <td>
//                           {statusProperties[property.ppcId] === "delete" ? (
//                             <Button variant="secondary" size="sm" onClick={() => handleUndo(property.ppcId)}>
//                               Undo
//                             </Button>
//                           ) : (
//                             <>
//                               <Button
//                                 variant="info"
//                                 size="sm"
//                                 onClick={() =>
//                                   navigate(`/edit-property`, {
//                                     state: { ppcId: property.ppcId, phoneNumber: property.phoneNumber },
//                                   })
//                                 }
//                               >
//                                 Edit
//                               </Button>
//                               <Button
//                                 variant="danger"
//                                 size="sm"
//                                 className="ms-2"
//                                 onClick={() => handleDelete(property.ppcId)}
//                               >
//                                 Delete
//                               </Button>

//                               <Button
//                             variant="danger"
//                             size="sm"
//                             className="ms-2"
//                             onClick={() => handleStatusChange(property.ppcId, statusProperties[property.ppcId] || "pending")}
//                           >
//                             {statusProperties[property.ppcId] === "active" ? "Pending" : "Active"}
//                           </Button>
//                             </>
//                           )}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//               ) : (
//                 <p>Loading properties...</p>
//               )}
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AddCar;















// ********************* final code *********************





import React from 'react'
import AddProperty from './AddProperty'

export default function AddCar() {
  return (
    <>
    <AddProperty />
    </>
  )
}



