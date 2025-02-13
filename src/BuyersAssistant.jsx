// import React from 'react'

// export default function BuyersAssistant() {
//   return (
//     <div>BuyersAssistant</div>
//   )
// }


import React, { useState } from "react";

const BuyersAssistant = () => {
      const [fromDate, setFromDate] = useState("");
      const [endDate, setEndDate] = useState("");
      const [search, setSearch] = useState("");
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Search: ${search}, From Date: ${fromDate}, End Date: ${endDate}`);
      };
      const data = [
        {
          slId: 1,
          postedFrom: "TUC",
          baId: "6086",
          baPlanName: "FREE",
          createdDate: "2025-01-08 12:04:12",
          createdBy: "Client",
          mobileNumber: "9003308330",
          priceMin: 100000,
          priceMax: 500000,
          carMake: "Maruthi Suzuki",
          carModel: "Baleno",
          fuelType: "Petrol",
          bodyType: "Any",
          regState: "TN",
          buyingMode: "CASH",
          approvedBy: "Owner",
          approvedOffice: "",
          approvedDate: "2025-01-08 12:04:54",
          deleteOrView: "Create Follow-up",
        },
        {
          slId: 2,
          postedFrom: "TUC",
          baId: "6082",
          baPlanName: "FREE",
          createdDate: "2025-01-07 22:24:47",
          createdBy: "Client",
          mobileNumber: "9944029902",
          priceMin: 1500000,
          priceMax: 2500000,
          carMake: "Mahindra",
          carModel: "Any",
          fuelType: "Diesel",
          bodyType: "SUV",
          regState: "TN",
          buyingMode: "LOAN",
          approvedBy: "Owner",
          approvedOffice: "",
          approvedDate: "2025-01-07 22:25:27",
          deleteOrView: "Create Follow-up",
        },
      ];
    
  return (
    <> 
     <div className="d-flex justify-content-between align-items-center mb-3">
  <button className="btn" style={{background:"#5F9EA0", color:"#fff", border:'none'}}>delete buyer Assistant</button>
    </div>
    <div className="d-flex justify-content-between align-items-center mb-3">
    <h4>Manage Buyer Assistant
    </h4>  <button className="btn" style={{background:"#2EA44F", color:"#fff", border:'none'}}>EXPORT WITH OTP VERIFICATION</button>
    </div>
    <div className="container mt-5">
      <h2 className="mb-4">User Logs</h2>
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
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Sl ID</th>
            <th>Posted From</th>
            <th>BA ID</th>
            <th>BA Plan Name</th>
            <th>Created Date</th>
            <th>Created By</th>
            <th>Mobile Number</th>
            <th>Price Min</th>
            <th>Price Max</th>
            <th>Car Make</th>
            <th>Car Model</th>
            <th>Fuel Type</th>
            <th>Body Type</th>
            <th>Reg State</th>
            <th>Buying Mode</th>
            <th>Approved By</th>
            <th>Approved Office</th>
            <th>Approved Date</th>
            <th>Delete/View</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.slId}>
              <td>{item.slId}</td>
              <td>{item.postedFrom}</td>
              <td>{item.baId}</td>
              <td>{item.baPlanName}</td>
              <td>{item.createdDate}</td>
              <td>{item.createdBy}</td>
              <td>{item.mobileNumber}</td>
              <td>{item.priceMin}</td>
              <td>{item.priceMax}</td>
              <td>{item.carMake}</td>
              <td>{item.carModel}</td>
              <td>{item.fuelType}</td>
              <td>{item.bodyType}</td>
              <td>{item.regState}</td>
              <td>{item.buyingMode}</td>
              <td>{item.approvedBy}</td>
              <td>{item.approvedOffice}</td>
              <td>{item.approvedDate}</td>
              <td>
                <button className="btn btn-primary btn-sm">{item.deleteOrView}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default BuyersAssistant;
