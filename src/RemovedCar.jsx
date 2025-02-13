// import React from 'react'

// export default function RemovedCar() {
//   return (
//     <div>RemovedCar</div>
//   )
// }





import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RemovedCar = () => {
        const [fromDate, setFromDate] = useState("");
        const [endDate, setEndDate] = useState("");
        const [search, setSearch] = useState("");
      
        const handleSubmit = (e) => {
          e.preventDefault();
          alert(`Search: ${search}, From Date: ${fromDate}, End Date: ${endDate}`);
        };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const data = [
    { pucId: 8322, postedFrom: 'TUC', carMake: '', carModel: '', carPrice: 0, carKm: 0, fuelType: '', regState: '', regYear: 0, phoneNumber: '9003224716', salesType: '', submitBy: '', planType: 'Pending Car', status: 'Wrong info', reasonForDelete: 'Wrong info', deletedDate: '2025-01-11 04:28:21', deletedBy: 'owner' },
    { pucId: 8331, postedFrom: 'TUC', carMake: '', carModel: '', carPrice: 0, carKm: 0, fuelType: '', regState: '', regYear: 0, phoneNumber: '6379072182', salesType: '', submitBy: '', planType: 'Pending Car', status: 'SOLD OUT by PUC', reasonForDelete: 'SOLD OUT by PUC', deletedDate: '2025-01-10 14:59:40', deletedBy: 'owner' },
  ];

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <div className="d-flex justify-content-between align-items-center mb-3">
    <h4>MANAGE REMOVED CAR

    </h4>  <button className="btn" style={{background:"#2EA44F", color:"#fff", border:'none'}}>EXPORT WITH OTP VERIFICATION</button>
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
        <button className="btn" type="submit" style={{background:"#E91E63", color:"#fff", border:'none'}}>
          Submit
        </button>
      </form>
    </div>
    <div className="container mt-4">
      <h2 className="mb-4">Pagination Table</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>PUC ID</th>
            <th>Posted From</th>
            <th>Car Make</th>
            <th>Car Model</th>
            <th>Car Price</th>
            <th>Car Km</th>
            <th>Fuel Type</th>
            <th>Reg State</th>
            <th>Reg Year</th>
            <th>Phone Number</th>
            <th>Sales Type</th>
            <th>Submit By</th>
            <th>Plan Type</th>
            <th>Status</th>
            <th>Reason for Delete</th>
            <th>Deleted Date</th>
            <th>Deleted By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.pucId}</td>
              <td>{item.postedFrom}</td>
              <td>{item.carMake}</td>
              <td>{item.carModel}</td>
              <td>{item.carPrice}</td>
              <td>{item.carKm}</td>
              <td>{item.fuelType}</td>
              <td>{item.regState}</td>
              <td>{item.regYear}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.salesType}</td>
              <td>{item.submitBy}</td>
              <td>{item.planType}</td>
              <td>{item.status}</td>
              <td>{item.reasonForDelete}</td>
              <td>{item.deletedDate}</td>
              <td>{item.deletedBy}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2">Undo</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}
            >
              <button className="page-link" onClick={() => handlePageChange(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    </>
  );
};

export default RemovedCar;
