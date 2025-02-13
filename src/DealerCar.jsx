// import React from 'react'

// export default function DealerCar() {
//   return (
//     <div>DealerCar</div>
//   )
// }



// import React, { useState } from 'react';

// const PaginationTable = () => {
//   // Sample data (replace with your actual data)
//   const data = Array.from({ length: 50 }, (_, index) => ({
//     id: index + 1,
//     postedFrom: `Location ${index + 1}`,
//     createdDate: `2024-01-${(index % 31) + 1}`,
//     lastLoginDate: `2024-01-${(index % 31) + 10}`,
//     code: `C${1000 + index}`,
//     mobileNumber: `123456789${index % 10}`,
//     mode: index % 2 === 0 ? 'Online' : 'Offline',
//     version: `v${1 + (index % 5)}.0`,
//     verifiedOtpBy: `Verifier ${index + 1}`,
//     staffName: `Staff ${index + 1}`,
//     remarks: `Remark ${index + 1}`,
//     reportDate: `2024-02-${(index % 28) + 1}`,
//     deletedDate: index % 5 === 0 ? `2024-03-${(index % 28) + 1}` : null,
//     bannedDate: index % 7 === 0 ? `2024-04-${(index % 28) + 1}` : null,
//     action: 'Edit',
//     status: index % 3 === 0 ? 'Active' : 'Inactive',
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
//               <th>S.No</th>
//               <th>Posted From</th>
//               <th>Created Date</th>
//               <th>Last Login Date</th>
//               <th>Code</th>
//               <th>Mobile Number</th>
//               <th>Mode</th>
//               <th>Version</th>
//               <th>Verified OTP By</th>
//               <th>Staff Name</th>
//               <th>Remarks</th>
//               <th>Report Date</th>
//               <th>Deleted Date</th>
//               <th>Banned Date</th>
//               <th>Action</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.postedFrom}</td>
//                 <td>{item.createdDate}</td>
//                 <td>{item.lastLoginDate}</td>
//                 <td>{item.code}</td>
//                 <td>{item.mobileNumber}</td>
//                 <td>{item.mode}</td>
//                 <td>{item.version}</td>
//                 <td>{item.verifiedOtpBy}</td>
//                 <td>{item.staffName}</td>
//                 <td>{item.remarks}</td>
//                 <td>{item.reportDate}</td>
//                 <td>{item.deletedDate || '-'}</td>
//                 <td>{item.bannedDate || '-'}</td>
//                 <td>
//                   <button className="btn btn-primary btn-sm">{item.action}</button>
//                 </td>
//                 <td>{item.status}</td>
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


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DealerCar = () => {

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
    { postedFrom: 'PUC', mobile: '9943494299', postedBy: 'Agent - Amirthalingam', cars: 3 },
    { postedFrom: 'PUC', mobile: '8778268681', postedBy: 'Agent -', cars: 71 },
    { postedFrom: 'PUC', mobile: '6380005030', postedBy: 'Agent - yuvaraj', cars: 3 },
    { postedFrom: 'TUC', mobile: '7397143524', postedBy: 'Agent - Vignesh', cars: 1 },
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
    <h4>Dealer Cars
    </h4>  <button className='btn' style={{background:"#2EA44F", color:"#fff", border:'none'}}>EXPORT WITH OTP VERIFICATION</button>
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
        <button className='btn' type="submit" style={{background:"#E91E63", color:"#fff", border:'none'}}>
          Submit
        </button>
      </form>
    </div>
    <div className="container mt-4">
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Posted From</th>
            <th>Mobile Number</th>
            <th>Posted By</th>
            <th>No. of Cars</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.postedFrom}</td>
              <td>{item.mobile}</td>
              <td>{item.postedBy}</td>
              <td>{item.cars}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2">Expand</button>
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

export default DealerCar;
