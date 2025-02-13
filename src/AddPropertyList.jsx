


import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [statusProperties, setStatusProperties] = useState({});
  const [previousStatuses, setPreviousStatuses] = useState({}); // Store previous statuses before delete
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch-all-data`);
      setProperties(response.data.users);
      
      const initialStatuses = response.data.users.reduce((acc, property) => {
        acc[property.ppcId] = property.status || "active"; // Default to 'active' if no status exists
        return acc;
      }, {});

      setStatusProperties(initialStatuses);
      localStorage.setItem("statusProperties", JSON.stringify(initialStatuses));
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    const storedStatusProperties = localStorage.getItem("statusProperties");
    if (storedStatusProperties) {
      setStatusProperties(JSON.parse(storedStatusProperties));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("statusProperties", JSON.stringify(statusProperties));
  }, [statusProperties]);



  const handleDelete = async (ppcId, phoneNumber) => {
    // Show confirmation alert
    const isConfirmed = window.confirm("Are you sure you want to delete this property?");
    
    if (!isConfirmed) {
      return; // Stop execution if user cancels
    }
  
    // Store previous status before deleting
    setPreviousStatuses((prev) => ({ ...prev, [ppcId]: statusProperties[ppcId] }));
  
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/delete-datas`, 
        null, // No request body, as we are using query parameters
        {
          params: {
            ppcId,
            phoneNumber,
          }
        }
      );
  
      if (response.status === 200) {
        setStatusProperties((prev) => ({
          ...prev,
          [ppcId]: "delete",
        }));
        console.log(`Property ${ppcId} marked as deleted.`);
      }
    } catch (error) {
      console.error("Error deleting property:", error.response?.data || error.message);
      alert("Failed to delete property.");
    }
  };
  
  // **Handle Undo Functionality**
  const handleUndo = async (ppcId) => {
    const restoredStatus = previousStatuses[ppcId] || "active"; // Restore previous status or default to 'active'

    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/update-property-status`, {
        ppcId,
        status: restoredStatus,
      });

      setStatusProperties((prev) => ({
        ...prev,
        [ppcId]: restoredStatus,
      }));

      // Remove previous status tracking
      setPreviousStatuses((prev) => {
        const updated = { ...prev };
        delete updated[ppcId];
        return updated;
      });
    } catch (error) {
      console.error("Error undoing delete:", error);
      alert("Failed to undo delete.");
    }
  };

  // **Handle Status Change**
  const handleStatusChange = async (ppcId, currentStatus) => {
    const newStatus = currentStatus === "active" ? "pending" : "active";

    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/update-property-status`, {
        ppcId,
        status: newStatus,
      });

      setStatusProperties((prev) => ({
        ...prev,
        [ppcId]: newStatus,
      }));
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status.");
    }
  };

  return (
    <Container fluid className="p-3">
      <Helmet>
        <title>Pondy Property | Properties</title>
      </Helmet>

      <h2 className="mb-4 mt-5">User All Properties</h2>
      <Row className="g-3">
        <Col lg={12} className="d-flex align-items-center justify-content-center">
          <div style={{ width: "100%" }}>
            <div style={{ maxHeight: "500px", overflowY: "scroll", scrollbarWidth: "none" }}>
              {properties.length > 0 ? (
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                    <th>Image</th>
    <th>PPC ID</th>
    <th>Phone Number</th>
    <th>Property Mode</th>
    <th>Property Type</th>
    <th>Price</th>
    <th>City</th>
    <th>Area</th>
    <th>Owner Name</th>
    <th>Email</th>
    <th>Best Time To Call</th>
    <th>Rental Property Address</th>
    <th>State</th>
    <th>District</th>
    <th>Street Name</th>
    <th>Door Number</th>
    <th>Nagar</th>
    <th>Alternate Phone</th>
    <th>Country Code</th>
    <th>Bank Loan</th>
    <th>Negotiation</th>
    <th>Ownership</th>
    <th>Bedrooms</th>
    <th>Kitchen</th>
    <th>Kitchen Type</th>
    <th>Balconies</th>
    <th>Floor No</th>
    <th>Area Unit</th>
    <th>Property Approved</th>
    <th>Property Age</th>
    <th>Posted By</th>
    <th>Facing</th>
    <th>Sales Mode</th>
    <th>Sales Type</th>
    <th>Furnished</th>
    <th>Lift</th>
    <th>Attached Bathrooms</th>
    <th>Western</th>
    <th>Number of Floors</th>
    <th>Car Parking</th>
    <th>Status</th>
    <th>Actions</th>
                      <th>Active OR Pending</th>
                      <th>View Details</th>
                      
                    </tr>
                  </thead>

                  <tbody>
                    {properties.map((property) => (
                      <tr key={property._id}>
                        <td>
                          <img
                            src={
                              property.photos && property.photos.length > 0
                                ? `http://localhost:5000/${property.photos[0]}`
                                : "https://d17r9yv50dox9q.cloudfront.net/car_gallery/default.jpg"
                            }
                            alt="Property"
                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                          />
                        </td>
                        <td>{property.ppcId}</td>
                        <td>{property.phoneNumber}</td>
                        <td>{property.propertyMode}</td>
                        <td>{property.propertyType}</td>
                        <td>{property.price}</td>
                        <td>{property.city}</td>
                        <td>{property.totalArea}</td>
                        <td>{property.ownerName}</td>
                        <td>{property.email}</td>
                        <td>{property.bestTimeToCall}</td>

                         {/* Adding the new fields to the table */}
      <td>{property.rentalPropertyAddress}</td>
      <td>{property.state}</td>
      <td>{property.district}</td>
      <td>{property.streetName}</td>
      <td>{property.doorNumber}</td>
      <td>{property.nagar}</td>
      <td>{property.alternatePhone}</td>
      <td>{property.countryCode}</td>
      <td>{property.bankLoan}</td>
      <td>{property.negotiation}</td>
      <td>{property.ownership}</td>
      <td>{property.bedrooms}</td>
      <td>{property.kitchen}</td>
      <td>{property.kitchenType}</td>
      <td>{property.balconies}</td>
      <td>{property.floorNo}</td>
      <td>{property.areaUnit}</td>
      <td>{property.propertyApproved}</td>
      <td>{property.propertyAge}</td>
      <td>{property.postedBy}</td>
      <td>{property.facing}</td>
      <td>{property.salesMode}</td>
      <td>{property.salesType}</td>
      <td>{property.furnished}</td>
      <td>{property.lift}</td>
      <td>{property.attachedBathrooms}</td>
      <td>{property.western}</td>
      <td>{property.numberOfFloors}</td>
      <td>{property.carParking}</td>
      <td>{property.status}</td>


                        {/* Status Column */}
                         <td>
                          <span
                            style={{
                              padding: "5px 10px",
                              borderRadius: "5px",
                              backgroundColor:
                                statusProperties[property.ppcId] === "delete"
                                  ? "red"
                                  : statusProperties[property.ppcId] === "active"
                                  ? "green"
                                  : "rgb(236, 106, 149)",
                              color: "white",
                            }}
                          >
                            {statusProperties[property.ppcId]}
                          </span>
                        </td>

                        {/* <td>
                          {statusProperties[property.ppcId] === "delete" ? (
                            <Button variant="secondary" size="sm" onClick={() => handleUndo(property.ppcId)}>
                              Undo
                            </Button>
                          ) : (
                            <>
                              <Button
                                variant="info"
                                size="sm"
                                onClick={() =>
                                  navigate(`/dashboard/edit-property`, {
                                    state: { ppcId: property.ppcId, phoneNumber: property.phoneNumber },
                                  })
                                }
                              >
                                Edit
                              </Button>

                              <Button
        variant="primary"
        size="sm"
        className="ms-2"
        onClick={() =>
          navigate(`/dashboard/detail`, {
            state: { ppcId: property.ppcId, phoneNumber: property.phoneNumber },
          })
        }
      >
        View Details
      </Button>


                              <Button
                                variant="danger"
                                size="sm"
                                className="ms-2"
                                onClick={() => handleDelete(property.ppcId,property.phoneNumber)}
                              >
                                Delete
                              </Button>

                              <Button
                                variant="warning"
                                size="sm"
                                className="ms-2"
                                onClick={() => handleStatusChange(property.ppcId, statusProperties[property.ppcId] || "pending")}
                              >
                                {statusProperties[property.ppcId] === "active" ? "Pending" : "Active"}
                              </Button>
                            </>
                          )}
                        </td>  */}


                       <td>
                          {statusProperties[property.ppcId] === "delete" ? (
                            <Button variant="secondary" size="sm" onClick={() => handleUndo(property.ppcId)}>
                              Undo
                            </Button>
                          ) : (
                            <>
                              <Button
                                variant="info"
                                size="sm"
                                className="ms-2"
                                onClick={() =>
                                  navigate(`/dashboard/edit-property`, {
                                    state: { ppcId: property.ppcId, phoneNumber: property.phoneNumber },
                                  })
                                }
                              >
                                Edit
                              </Button>

                              <Button
                                variant="danger"
                                size="sm"
                                className="ms-2 mt-2"
                                onClick={() => handleDelete(property.ppcId, property.phoneNumber)}
                              >
                                Delete
                              </Button>
                            </>
                          )}
                        </td>

                        {/* Status Change Button */}
                        <td>
                          <Button
                            variant="warning"
                            size="sm"
                            onClick={() =>
                              handleStatusChange(property.ppcId, statusProperties[property.ppcId] || "pending")
                            }
                          >
                            {statusProperties[property.ppcId] === "active" ? "Pending" : "Active"}
                          </Button>
                        </td>

                        {/* View Details Button */}
                        <td>
                          <Button
                            variant=""
                            size="sm"
                            style={{backgroundColor:"#0d94c1",color:"white"}}
                            onClick={() =>
                              navigate(`/dashboard/detail`, {
                                state: { ppcId: property.ppcId, phoneNumber: property.phoneNumber },
                              })
                            }
                          >
                            View Details
                          </Button>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <p>Loading properties...</p>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPropertyList;
