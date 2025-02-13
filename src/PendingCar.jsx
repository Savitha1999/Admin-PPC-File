// import React from 'react'

// export default function PendingCar() {
//   return (
//     <div>PendingCar</div>
//   )
// }




import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PendingCar = () => {
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
    {
      sNo: 1,
      pucId: 8243,
      carImage: '',
      carStatus: 'Submit Pending',
      postedFrom: 'TUC',
      carTitle: 'Maruthi Suzuki - Alto 800',
      countryCode: '+91',
      mobileNumber: '8754421255',
      totalNoOfCars: 2,
      salesType: 'Urgent',
      video: '',
      submitBy: 'owner',
      submitDate: '2024-12-12',
      followupDate: '',
      status: '',
      staffName: '',
      addFollowup: '',
      bill: '',
      action: '',
      approve: ''
    },
    {
      sNo: 2,
      pucId: 8199,
      carImage: '',
      carStatus: 'Submit Pending',
      postedFrom: 'TUC',
      carTitle: 'Tata Motors - Spacio',
      countryCode: '+91',
      mobileNumber: '567536385',
      totalNoOfCars: 1,
      salesType: 'Normal',
      video: '',
      submitBy: 'owner',
      submitDate: '2024-11-30',
      followupDate: '',
      status: '',
      staffName: '',
      addFollowup: '',
      bill: '',
      action: '',
      approve: ''
    }
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
    <h4>Manage Pending Car
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
        <button type="submit" className="btn" style={{background:"#E91E63", color:"#fff", border:'none'}}>
          Submit
        </button>
      </form>
    </div>
    <div className="container mt-4">
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>S. NO</th>
            <th>PUC ID</th>
            <th>Car Image</th>
            <th>Car Status</th>
            <th>Posted From</th>
            <th>Car Title</th>
            <th>Country Code</th>
            <th>Mobile Number</th>
            <th>Total No. Of Cars</th>
            <th>Sales Type</th>
            <th>Video</th>
            <th>Submit By</th>
            <th>Submit Date</th>
            <th>Followup Date</th>
            <th>Status</th>
            <th>Staff Name</th>
            <th>Add Followup</th>
            <th>Bill</th>
            <th>Action</th>
            <th>Approve</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.sNo}</td>
              <td>{item.pucId}</td>
              <td><img src={item.carImage || 'placeholder.jpg'} alt="Car" className="img-thumbnail" style={{ width: '100px', height: 'auto' }} /></td>
              <td>{item.carStatus}</td>
              <td>{item.postedFrom}</td>
              <td>{item.carTitle}</td>
              <td>{item.countryCode}</td>
              <td>{item.mobileNumber}</td>
              <td>{item.totalNoOfCars}</td>
              <td>{item.salesType}</td>
              <td>{item.video}</td>
              <td>{item.submitBy}</td>
              <td>{item.submitDate}</td>
              <td>{item.followupDate}</td>
              <td>{item.status}</td>
              <td>{item.staffName}</td>
              <td>{item.addFollowup}</td>
              <td>{item.bill}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2">View</button>
                <button className="btn btn-success btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm me-2">Delete</button>
                <button className="btn btn-warning btn-sm">Create Follow-up</button>
              </td>
              <td>
                <button className="btn btn-info btn-sm">Approve</button>
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

export default PendingCar;
