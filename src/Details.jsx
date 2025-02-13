

// import React, { useState } from 'react';

// const PaginationTable = () => {
//   // Sample data (replace with your actual data)
//   const data = [
//     {
//       id: 1, // S.No
//       postedFrom: "TUC",
//       customerName: "",
//       email: "",
//       mobileNumber: "+911918056623716",
//       alternateMobileNumber: "+",
//       address: "",
//       city: "",
//       state: "",
//       landmark: "",
//       noOfCars: 0,
//       noOfBuyerAssistant: 0,
//       firstLogin: "2025-01-08 08:39:00",
//       lastLogin: "2025-01-08 11:32:13",
//       loginCount: 0,
//       status: "active",
//     },
//   ];
//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   // Calculate indexes for current page
//   const lastIndex = currentPage * itemsPerPage;
//   const firstIndex = lastIndex - itemsPerPage;
//   const currentData = data.slice(firstIndex, lastIndex);

//   // Total pages
//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };
//   const [fromDate, setFromDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [search, setSearch] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Search: ${search}, From Date: ${fromDate}, End Date: ${endDate}`);
//   };

//   return (
//     <>
//      <div className="d-flex justify-content-end align-items-center mb-3">
//         <button className="btn btn-primary">EXPORT WITH OTP VERIFICATION</button>
//       </div> 
//     <div className="container mt-5">
//     <h2 className="mb-4">Manage Details</h2>
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="searchInput" className="form-label">
//           Search
//         </label>
//         <input
//           type="text"
//           id="searchInput"
//           className="form-control"
//           placeholder="Enter search term"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="fromDate" className="form-label">
//           From Date
//         </label>
//         <select
//           id="fromDate"
//           className="form-select"
//           value={fromDate}
//           onChange={(e) => setFromDate(e.target.value)}
//         >
//           <option value="">Select a date</option>
//           <option value="2023-01-01">2023-01-01</option>
//           <option value="2023-02-01">2023-02-01</option>
//           <option value="2023-03-01">2023-03-01</option>
//         </select>
//       </div>

//       <div className="mb-3">
//         <label htmlFor="endDate" className="form-label">
//           End Date
//         </label>
//         <select
//           id="endDate"
//           className="form-select"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//         >
//           <option value="">Select a date</option>
//           <option value="2023-12-31">2023-12-31</option>
//           <option value="2023-11-30">2023-11-30</option>
//           <option value="2023-10-31">2023-10-31</option>
//         </select>
//       </div>

//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   </div>
//     <div className="container mt-4">
//       <h2 className="text-center">Responsive Pagination Table</h2>
//       <div className="table-responsive">
//         <table className="table table-bordered">
//           <thead className="thead-dark">
//             <tr>
//               <th>S.No</th>
//               <th>Posted From</th>
//               <th>Customer Name</th>
//               <th>Email</th>
//               <th>Mobile Number	</th>
//               <th>Alternate Mobile Number</th>
//               <th>Address</th>
//               <th>city</th>
//               <th>State</th>
//               <th>Landmark</th>
//               <th>No Of Cars</th>
//               <th>No Of Buyer Assistant</th>
//               <th>First Login</th>
//               <th>Last Login</th>
//               <th>Login Count</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.postedFrom}</td>
//                 <td>{item.customerName}</td>
//                 <td>{item.email}</td>
//                 <td>{item.mobileNumber}</td>
//                 <td>{item.alternateMobileNumber}</td>
//                 <td>{item.address}</td>
//                 <td>{item.city}</td>
//                 <td>{item.state}</td>
//                 <td>{item.landmark}</td>
//                 <td>{item.noOfCars}</td>
//                 <td>{item.noOfBuyerAssistant}</td>
//                 <td>{item.firstLogin}</td>
//                 <td>{item.lastLogin}</td>
//                 <td>{item.loginCount}</td>
//                 <td><button className="btn btn-sm btn-primary mx-1">
//             {item.action}
//           </button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination controls */}
//       <nav>
//         <ul className="pagination justify-content-center">
//           <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//             <button
//               className="page-link"
//               onClick={() => handlePageChange(currentPage - 1)}
//             >
//               Previous
//             </button>
//           </li>
//           {Array.from({ length: totalPages }, (_, index) => (
//             <li
//               className={`page-item ${
//                 currentPage === index + 1 ? 'active' : ''
//               }`}
//               key={index}
//             >
//               <button
//                 className="page-link"
//                 onClick={() => handlePageChange(index + 1)}
//               >
//                 {index + 1}
//               </button>
//             </li>
//           ))}
//           <li
//             className={`page-item ${
//               currentPage === totalPages ? 'disabled' : ''
//             }`}
//           >
//             <button
//               className="page-link"
//               onClick={() => handlePageChange(currentPage + 1)}
//             >
//               Next
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//     </>
//   );
// };

// export default PaginationTable;







import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Details = () => {
  const { ppcId } = useParams();
  const location = useLocation();
  const { phoneNumber } = location.state || {}; 

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!ppcId || !phoneNumber) {
      setError("Missing PPC ID or Phone Number");
      return;
    }

    const fetchPropertyDetails = async () => {
      try {
        console.log("Fetching property details for:", { ppcId, phoneNumber });

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch-data?${ppcId}`, {
          params: { ppcId, phoneNumber },
        });

        console.log("API Response:", response.data);

        if (response.data.property) {
          setProperty(response.data.property);
        } else {
          setError("No property found.");
        }
      } catch (error) {
        console.error("Error fetching property details:", error);
        setError("Failed to fetch property details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [ppcId, phoneNumber]);

  return (
    <Container className="mt-5">
      <Button variant="secondary" onClick={() => window.history.back()} className="mb-3">
        ⬅ Back
      </Button>

      {loading ? (
        <p>Loading property details...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : property ? (
        <Card className="p-4 shadow">
          <h2>{property.propertyType} in {property.city}</h2>
          <p><strong>Owner:</strong> {property.ownerName}</p>
          <p><strong>Phone:</strong> {property.phoneNumber}</p>
          <p><strong>Price:</strong> ₹{property.price}</p>
          <p><strong>Address:</strong> {property.totalArea}, {property.city}, {property.state}</p>

          {property.photos && property.photos.length > 0 ? (
            <img 
              src={`http://localhost:5000/${property.photos[0]}`} 
              alt="Property" 
              style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "10px" }}
            />
          ) : (
            <p>No property images available.</p>
          )}
        </Card>
      ) : (
        <p>No property details found.</p>
      )}
    </Container>
  );
};

export default Details;

