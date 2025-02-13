// import React from 'react'

// export default function ApprovedCar() {
//   return (
//     <div>ApprovedCar</div>
//   )
// }


// import React, { useState } from 'react';

// const PaginationTable = () => {
//   // Sample data (replace this with your API data)
//   const data = Array.from({ length: 50 }, (_, index) => ({
//     id: index + 1,
//     name: `Item ${index + 1}`,
//     description: `Description for item ${index + 1}`,
//   }));

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

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center">Responsive Pagination Table</h2>
//       <div className="table-responsive">
//         <table className="table table-bordered">
//           <thead className="thead-dark">
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Description</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.description}</td>
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
//   );
// };

// export default PaginationTable;


import React, { useState } from "react";
import { Table, Pagination, Button } from "react-bootstrap";

const ApprovedCar = () => {
        const [fromDate, setFromDate] = useState("");
        const [endDate, setEndDate] = useState("");
        const [search, setSearch] = useState("");
      
        const handleSubmit = (e) => {
          e.preventDefault();
          alert(`Search: ${search}, From Date: ${fromDate}, End Date: ${endDate}`);
        };
  const data = [
    {
      id: 8286,
      makeFeatured: "Set Featured",
      makePUCCar: "Set PUC CAR",
      postedFrom: "PUC",
      carMake: "Honda",
      carModel: "City",
      carPrice: 1045000,
      carKm: 51000,
      fuelType: "Petrol",
      regState: "TN",
      noOfAds: 49,
      mobileNumber: "9600902096",
      salesType: "Normal",
      submitBy: "GANESH",
      pendingApprovedBy: "",
      approvedBy: "GANESH",
      approvedDate: "2024-12-24 17:09:41",
      planName: "FREE",
      bill: "Create Bill",
    },
    {
      id: 8281,
      makeFeatured: "Set Featured",
      makePUCCar: "Set PUC CAR",
      postedFrom: "PUC",
      carMake: "Maruthi Suzuki",
      carModel: "DZire",
      carPrice: 750000,
      carKm: 24000,
      fuelType: "Petrol",
      regState: "PY",
      noOfAds: 70,
      mobileNumber: "8778268681",
      salesType: "Normal",
      submitBy: "GANESH",
      pendingApprovedBy: "",
      approvedBy: "GANESH",
      approvedDate: "2024-12-24 16:50:18",
      planName: "FREE",
      bill: "Create Bill",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <div className="d-flex justify-content-between align-items-center mb-3">
    <h4>Manage Approved Car

    </h4>  <button className="btn"style={{background:"#2EA44F", color:"#fff", border:'none'}}>EXPORT WITH OTP VERIFICATION</button>
    </div>
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="searchInput" className="form-label">
            Search
          </label>
          <input
            type="text"
            id="searchInput"
            className="form-control"
            placeholder="Enter search term"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      {/* From Date Field */}
      <div className="mb-3">
          <label htmlFor="fromDate" className="form-label">
            From Date
          </label>
          <input
            type="date"
            id="fromDate"
            className="form-control"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>

        {/* End Date Field */}
        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn" style={{background:"#5F9EA0", color:"#fff", border:'none'}}>
          Submit
        </button>
      </form>
    </div>
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>PUC ID</th>
            <th>Make Featured</th>
            <th>Make PUC CAR</th>
            <th>Posted From</th>
            <th>Car Make</th>
            <th>Car Model</th>
            <th>Car Price</th>
            <th>Car Km</th>
            <th>Fuel Type</th>
            <th>Reg State</th>
            <th>No of Ads</th>
            <th>Mobile NUMBER</th>
            <th>Sales TYPE</th>
            <th>Submit BY</th>
            <th>Pending Approved By</th>
            <th>Approved By</th>
            <th>Approved Date</th>
            <th>PLAN NAME</th>
            <th>Bill</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td><Button variant="link">{item.makeFeatured}</Button></td>
              <td><Button variant="link">{item.makePUCCar}</Button></td>
              <td>{item.postedFrom}</td>
              <td>{item.carMake}</td>
              <td>{item.carModel}</td>
              <td>{item.carPrice}</td>
              <td>{item.carKm}</td>
              <td>{item.fuelType}</td>
              <td>{item.regState}</td>
              <td>{item.noOfAds}</td>
              <td>{item.mobileNumber}</td>
              <td>{item.salesType}</td>
              <td>{item.submitBy}</td>
              <td>{item.pendingApprovedBy || "N/A"}</td>
              <td>{item.approvedBy}</td>
              <td>{item.approvedDate}</td>
              <td>{item.planName}</td>
              <td><Button variant="link">{item.bill}</Button></td>
              <td>
                <Button variant="primary" size="sm">View</Button>{" "}
                <Button variant="secondary" size="sm">Edit</Button>{" "}
                <Button variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        {[...Array(totalPages).keys()].map((page) => (
          <Pagination.Item
            key={page + 1}
            active={page + 1 === currentPage}
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
    </>
  );
};

export default ApprovedCar;
