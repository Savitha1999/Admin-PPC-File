


import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

const AdminReport = () => {
  return (
    <Container fluid>
      {/* First Table */}
      <Row className="mb-4 mt-4">
        <Col>
          <Table responsive  >
            <thead>
              <tr>
                <th>SL NO</th>
                <th>DESCRIPTION</th>
                <th>APP</th>
                <th>WEB</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>NO. OF LOGIN</td>
                <td>16110</td>
                <td>284</td>
                <td>16394</td>
              </tr>
              <tr>
                <td>2</td>
                <td>NO. OF REPORTED</td>
                <td>N/A</td>
                <td>62</td>
                <td>62</td>
              </tr>
              <tr>
                <td>3</td>
                <td>NO. OF HELP REQUIRED</td>
                <td>N/A</td>
                <td>85</td>
                <td>85</td>
              </tr>
              <tr>
                <td>4</td>
                <td>NO. OF CONTACT FORM</td>
                <td>N/A</td>
                <td>161</td>
                <td>161</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Second Table */}
      <Row className="mb-4">
        <Col>
          <Table responsive>
            <thead>
              <tr>
                <th>SL NO</th>
                <th>DESCRIPTION</th>
                <th>CLIENT</th>
                <th>ADMIN</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>NO. OF DELETED</td>
                <td>663</td>
                <td>1329</td>
                <td>1992</td>
              </tr>
              <tr>
                <td>2</td>
                <td>NO. OF EXPIRED</td>
                <td>N/A</td>
                <td>993</td>
                <td>993</td>
              </tr>
              <tr>
                <td>3</td>
                <td>NO. OF PENDING</td>
                <td>N/A</td>
                <td>65</td>
                <td>65</td>
              </tr>
              <tr>
                <td>4</td>
                <td>NO. OF PRE APPROVED</td>
                <td>N/A</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>5</td>
                <td>NO. OF APPROVED</td>
                <td>N/A</td>
                <td>2056</td>
                <td>2056</td>
              </tr>
              <tr>
                <td>6</td>
                <td>NO. OF INCOMPLETE</td>
                <td>N/A</td>
                <td>2962</td>
                <td>2962</td>
              </tr>
              <tr>
                <td>7</td>
                <td>NO. OF BUYER ASSISTANCE</td>
                <td>5330</td>
                <td>238</td>
                <td>5568</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Third Table */}
      <Row className="mb-4">
        <Col>
          <Table responsive>
            <thead>
              <tr>
                <th>SL NO</th>
                <th>DESCRIPTION</th>
                <th>OFFLINE BILL</th>
                <th>ONLINE BILL</th>
                <th>TOTAL BILL</th>
                <th>OFFLINE AMOUNT</th>
                <th>ONLINE AMOUNT</th>
                <th>NET AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>FREE</td>
                <td>3137</td>
                <td>N/A</td>
                <td>3137</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>2</td>
                <td>SILVER</td>
                <td>36</td>
                <td>28</td>
                <td>64</td>
                <td>9754</td>
                <td>8476</td>
                <td>18230</td>
              </tr>
              <tr>
                <td>3</td>
                <td>GOLD</td>
                <td>3</td>
                <td>0</td>
                <td>3</td>
                <td>1499</td>
                <td>N/A</td>
                <td>1499</td>
              </tr>
              <tr>
                <td>4</td>
                <td>PLATINUM</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>0</td>
              </tr>
              <tr>
                <td>5</td>
                <td>BASIC</td>
                <td>0</td>
                <td>3</td>
                <td>3</td>
                <td>N/A</td>
                <td>1497</td>
                <td>1497</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Fourth Table */}
      <Row className="mb-4">
        <Col>
          <Table responsive>
            <thead>
              <tr>
                <th>SL NO</th>
                <th>DESCRIPTION</th>
                <th>OFFLINE BILL</th>
                <th>ONLINE BILL</th>
                <th>TOTAL BILL</th>
                <th>OFFLINE AMOUNT</th>
                <th>ONLINE AMOUNT</th>
                <th>NET AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>FREE</td>
                <td>1141</td>
                <td>N/A</td>
                <td>1141</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>2</td>
                <td>BASIC</td>
                <td>0</td>
                <td>3</td>
                <td>3</td>
                <td>N/A</td>
                <td>3</td>
                <td>3</td>
              </tr>
              <tr>
                <td>3</td>
                <td>ADVANCE</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>0</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminReport;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css'
// const AddProperty = () => {
//     const [formData, setFormData] = useState({
//         propertyMode: '',
//         propertyType: '',
//         price: '',
//         propertyAge: '',
//         bankLoan: '',
//         negotiation: '',
//         length: '',
//         breadth: '',
//         totalArea: '',
//         ownership: '',
//         bedrooms: '',
//         kitchen: '',
//         kitchenType: '',
//         balconies: '',
//         floorNo: '',
//         areaUnit: '',
//         propertyApproved: '',
//         postedBy: '',
//         facing: '',
//         salesMode: '',
//         salesType: '',
//         description: '',
//         furnished: '',
//         lift: '',
//         attachedBathrooms: '',
//         western: '',
//         numberOfFloors: '',
//         carParking: '',
//         rentalPropertyAddress: '',
//         country: '',
//         state: '',
//         city: '',
//         district: '',
//         area: '',
//         streetName: '',
//         doorNumber: '',
//         nagar: '',
//         ownerName: '',
//         email: '',
//         phoneNumber: '',
//         alternatePhone: '',
//         bestTimeToCall: '',
//         // profile: [],
//         photos: [],
//         rentAmount: '',
//         rentSecurityAmount: '',
//         rentMaintenanceCharge: '',
//         maintancePer: '',
//         // status: '',
//     });

//     // Handle form input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     // Handle photo upload (multiple files)
//     const handlePhotoUpload = (e) => {
//         const files = Array.from(e.target.files);
//         if (formData.photos.length + files.length <= 15) {
//             setFormData({
//                 ...formData,
//                 photos: [...formData.photos, ...files],
//             });
//         } else {
//             alert('Maximum 15 photos can be uploaded.');
//         }
//     };

    

//     // Handle photo removal
//     const removePhoto = (index) => {
//         setFormData({
//             ...formData,
//             photos: formData.photos.filter((_, i) => i !== index),
//         });
//     };


//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
       
    
//         if (formData.photos.length === 0) {
//             alert('Please upload at least one photo.');
//             return;
//         }
    
//         const data = new FormData();
//         for (const key in formData) {
//             if (key === 'photos') {
//                 formData.photos.forEach((photo) => {
//                     data.append('photos', photo);
//                 });
//             } else {
//                 data.append(key, formData[key]);
//             }
//         }
    
//         try {
//             const response = await axios.post('http://localhost:1000/PPC/add-property', data, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',  // Ensure this header is set correctly
//                 },
//             });
//             alert('Property added successfully!');
//             console.log(response.data);
//         } catch (error) {
//             console.error('Error adding property:', error.response ? error.response.data : error.message);
//             alert('Error adding property');
//         }
//     };
    




//     return (
//         <div className="container-fluid" style={{backgroundColor: '#F0F8FF',}}>
//                 <div className="row">
//                 <div className="col-md-7 col-12 d-flex justify-content-center align-items-center" style={{background:'#FFFFFF', boxShadow:'10px 10px 5px -11px rgba(0,0,0,0.75)'}}>

//             <form onSubmit={handleSubmit} className="propertyform w-100" style={{ maxWidth: '500px' }}>
//             <h2 style={{color:"#45A29E", fontWeight:"bold"}}>Sell or Rent your Property</h2>
//             <p> You are posting this property for <span style={{background:'#FFCC33', fontWeight:'bold'}}>FREE!</span> </p>
//             <div className="mb-3">
//                     <lable> Name:</lable>
//                     <input className="form-control rounded-0"
//                         type="text"
//                         name="ownerName"
//                         value={formData.ownerName}
//                         onChange={handleChange}
//                     />
//                 </div>
              
//                 <div className="mb-3">
//                     <lable>Phone Number:</lable>
//                     <input className="form-control rounded-0"
//                         type="text"
//                         name="phoneNumber"
//                         value={formData.phoneNumber}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <h4 style={{color:"#45A29E", fontWeight:"bold"}}>Property details</h4>
//                 <div className="mb-3">
//                     <label className="form-label">Property Mode:</label>
//                     <select className="form-select rounded-0" name="propertyMode" value={formData.propertyMode} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="Residential">Residential</option>
//                         <option value="Commercial">Commercial</option>
//                         <option value="Agricultural">Agricultural</option>
//                         <option value="Rent">Rent</option>
//                     </select>
//                 </div>
//                 {(formData.propertyMode === "Residential" || formData.propertyMode === "Commercial" || formData.propertyMode === "Rent" || formData.propertyMode === "Agricultural") && (
//               <div className="mb-3">
//               <label className="form-label">Property Type:</label>
//               <select className="form-select rounded-0" name="propertyType" value={formData.propertyType || ""} onChange={handleChange}>
//                   <option value="">Select</option>
//                   <optgroup label="ALL RESIDENTIAL">
//             <option value="Flat/ Apartment">Flat/ Apartment</option>
//             <option value="Residential House">Residential House</option>
//             <option value="Villa">Villa</option>
//             <option value="Builder Floor Apartment">Builder Floor Apartment</option>
//             <option value="Residential Land/ Plot">Residential Land/ Plot</option>
//             <option value="Penthouse">Penthouse</option>
//             <option value="Studio Apartment">Studio Apartment</option>
//           </optgroup>
//           <optgroup label="ALL COMMERCIAL">
//             <option value="Commercial Office Space">Commercial Office Space</option>
//             <option value="Office in IT Park/ SEZ">Office in IT Park/ SEZ</option>
//             <option value="Commercial Shop">Commercial Shop</option>
//             <option value="Commercial Showroom">Commercial Showroom</option>
//             <option value="Commercial Land">Commercial Land</option>
//             <option value="Warehouse/ Godown">Warehouse/ Godown</option>
//             <option value="Industrial Land">Industrial Land</option>
//             <option value="Industrial Building">Industrial Building</option>
//             <option value="Industrial Shed">Industrial Shed</option>
//           </optgroup>
//           <optgroup label="ALL AGRICULTURAL">
//             <option value="Agricultural Land">Agricultural Land</option>
//             <option value="Farm House">Farm House</option>
//           </optgroup>
//               </select>
//           </div>
//         )}
//  {(formData.propertyType === "Flat/ Apartment" || formData.propertyType === "Residential House"
//     || formData.propertyType === "Villa" || formData.propertyType === "Builder Floor Apartment" || formData.propertyType === "Penthouse" 
//     || formData.propertyType === "Studio Apartment" || formData.propertyType === "Service Apartment"
//     || formData.propertyType === "Commercial Office Space" || formData.propertyType === "Office in IT Park/ SEZ" || formData.propertyType === "Commercial Shop"
//     || formData.propertyType === "Commercial Showroom" || formData.propertyType === "Commercial Land" || formData.propertyType === "Warehouse/ Godown"
//     || formData.propertyType === "Industrial Land" || formData.propertyType === "Industrial Building" || formData.propertyType === "Industrial Shed"
//     || formData.propertyType === "Farm House"
//  ) && (
//     <div className='row'>
//                            <div className="col-md-6 mb-3">
//                            <label className="form-label">Balconies:</label>
//                            <select className="form-select rounded-0"
//                                name="balconies"
//                                value={formData.balconies}
//                                onChange={handleChange}
//                            >
//                                <option value="">Select</option>
//                                <option value="No">No</option>
//                                <option value="1 Balcony">1 Balcony</option>
//                                <option value="2 Balconies">2 Balconies</option>
//                                <option value="3 Balconies">3 Balconies</option>
//                                <option value="4 Balconies">4 Balconies</option>
//                                <option value="5 Balconies">5 Balconies</option>
//                                <option value="6 Balcony">6 Balcony</option>
//                                <option value="7 Balconies">7 Balconies</option>
//                                <option value="8 Balconies">8 Balconies</option>
//                                <option value="9 Balconies">9 Balconies</option>
//                                <option value="10 Balconies">10 Balconies</option>
//                                <option value="10+ Balconies">10+ Balconies</option>
//                            </select>
//                        </div>
//                 {/* Bedrooms field */}

//                         <div className="col-md-6 mb-3">
//                     <label className="form-label">Bedrooms:</label>
//                     <select className="form-select rounded-0"
//                         name="bedrooms"
//                         value={formData.bedrooms}
//                         onChange={handleChange}
//                     >
//                         <option value="">Select</option>
//                         <option value="No">No</option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                         <option value="5">5</option>
//                         <option value="6">6</option>
//                         <option value="7">7</option>
//                         <option value="8">8</option>
//                         <option value="9">9</option>
//                         <option value="10">10</option>
//                         <option value="11">11</option>
//                         <option value="12">12</option>
//                         <option value="13">13</option>
//                         <option value="14">14</option>
//                         <option value="15">15</option>
//                         <option value="16">16</option>
//                         <option value="17">17</option>
//                         <option value="18">18</option>
//                         <option value="19">19</option>
//                         <option value="20">20</option>
//                         <option value="20+">20+</option>
//                     </select>
//                 </div>

                
//                 <div className="col-md-6 mb-3">
//                     <label className="form-label">Kitchen:</label>
//                     <select className="form-select rounded-0" name="kitchen" value={formData.kitchen} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                     </select>
//                 </div>

//                 <div className="col-md-6 mb-3">
//                     <label className="form-label">Kitchen Type:</label>
//                     <select className="form-select rounded-0" name="kitchenType" value={formData.kitchenType} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="Modular">Modular</option>
//                         <option value="Normal">Normal</option>
//                         <option value="No">No</option>
//                     </select>
//                 </div>




//                 <div className="col-md-6 mb-3">
//                     <label className="form-label">Floor No:</label>
//                     <select className="form-select rounded-0" name="floorNo" value={formData.floorNo} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="Lower Basement">Lower Basement</option>
//                         <option value="Upper Basement">Upper Basement</option>
//                         <option value="Ground Floor">Ground Floor</option>
//                         <option value="Top Floor">Top Floor</option>
//                         {/* Add other options as needed */}
//                     </select>
//                 </div>


//                  {/* Additional Fields */}
//                  <div className="col-md-6 mb-3">
//                     <label className="form-label">Furnished:</label>
//                     <select className="form-select rounded-0" name="furnished" value={formData.furnished} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="Furnished">Furnished</option>
//                         <option value="Semi-Furnished">Semi-Furnished</option>
//                         <option value="Unfurnished">Unfurnished</option>
//                     </select>
//                 </div>

//                 <div className="col-md-6 mb-3">
//                     <label className="form-label">Lift:</label>
//                     <select className="form-select rounded-0" name="lift" value={formData.lift} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                         <option value="Closed">Closed</option>
//                     </select>
//                 </div>

//                 {/* Attached Bathrooms field */}
//                 <div className="col-md-6 mb-3">
//                     <label className="form-label">Attached Bathrooms:</label>
//                     <select className="form-select rounded-0"
//                         name="attachedBathrooms"
//                         value={formData.attachedBathrooms}
//                         onChange={handleChange}
//                     >
//                         <option value="">Select</option>
//                         <option value="No">No</option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                         <option value="5">5</option>
//                         <option value="6">6</option>
//                         <option value="7">7</option>
//                         <option value="8">8</option>
//                         <option value="9">9</option>
//                         <option value="10">10</option>
//                         <option value="10+">10+</option>
//                     </select>
//                 </div>

//                 {/* Western field */}
//                 <div className="col-md-6 mb-3">
//                     <label className="form-label">Western:</label>
//                     <select className="form-select rounded-0"
//                         name="western"
//                         value={formData.western}
//                         onChange={handleChange}
//                     >
//                         <option value="">Select</option>
//                         <option value="No">No</option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                         <option value="5">5</option>
//                         <option value="6">6</option>
//                         <option value="7">7</option>
//                         <option value="8">8</option>
//                         <option value="9">9</option>
//                         <option value="10">10</option>
//                         <option value="10+">10+</option>
//                     </select>
//                 </div>

//                 {/* Number of Floors field */}
//                 <div className="col-md-6 mb-3">
//                     <label className="form-label">Number of Floors:</label>
//                     <select className="form-select rounded-0"
//                         name="numberOfFloors"
//                         value={formData.numberOfFloors}
//                         onChange={handleChange}
//                     >
//                         <option value="">Select</option>
//                         <option value="UnderGround">UnderGround</option>
//                         <option value="GroundFloor">Ground Floor</option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                         <option value="5">5</option>
//                         <option value="6">6</option>
//                         <option value="7">7</option>
//                         <option value="8">8</option>
//                         <option value="9">9</option>
//                         <option value="10">10</option>
//                         <option value="11">11</option>
//                         <option value="12">12</option>
//                         <option value="13">13</option>
//                         <option value="14">14</option>
//                         <option value="15">15</option>
//                         <option value="16">16</option>
//                         <option value="17">17</option>
//                         <option value="18">18</option>
//                         <option value="19">19</option>
//                         <option value="20">20</option>
//                         <option value="20+">20+</option>
//                     </select>
//                 </div>

                
//                 <div className="col-md-6 mb-3">
//                     <label className="form-label">Car Parking Available:</label>
//                     <select className="form-select rounded-0" name="carParking" value={formData.carParking} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                     </select>
//                 </div>
//                 </div>
//         )}



//                 {/* <div className="col-md-6 mb-3">
//                     <label className="form-label">Property Type:</label>
//                     <select className="form-select rounded-0" name="propertyType" value={formData.propertyType} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="Flat/ Apartment">Flat/ Apartment</option>
//                         <option value="Residential House">Residential House</option>
//                         <option value="Villa">Villa</option>
//                         <option value="Builder Floor Apartment">Builder Floor Apartment</option>
//                         <option value="Penthouse">Penthouse</option>
//                         <option value="Studio Apartment">Studio Apartment</option>
//                         <option value="Service Apartment">Service Apartment</option>
//                         <option value="Commercial Office Space">Commercial Office Space</option>
//                         <option value="Office in IT Park/ SEZ">Office in IT Park/ SEZ</option>
//                         <option value="Commercial Shop">Commercial Shop</option>
//                         <option value="Commercial Showroom">Commercial Showroom</option>
//                         <option value="Commercial Land">Commercial Land</option>
//                         <option value="Warehouse/ Godown">Warehouse/ Godown</option>
//                         <option value="Industrial Land">Industrial Land</option>
//                         <option value="Industrial Building">Industrial Building</option>
//                         <option value="Industrial Shed">Industrial Shed</option>
//                         <option value="Agricultural Land">Agricultural Land</option>
//                         <option value="Farm House">Farm House</option>
//                     </select>
//                 </div> */}

//                 <div className="mb-3">
//                     <label className="form-label">Price:</label>
//                     <input className="form-control rounded-0"
//                         type="number"
//                         name="price"
//                         value={formData.price}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Property Age:</label>
//                     <select className="form-select rounded-0" name="propertyAge" value={formData.propertyAge} onChange={handleChange}>
//             <option value="">Select</option>
//             <option value="Newly Build">Newly Built</option>
//             <option value="2 Years">2 Years</option>
//             <option value="3 Years">3 Years</option>
//             <option value="4 Years">4 Years</option>
//             <option value="5 Years">5 Years</option>
//             <option value="6 Years">6 Years</option>
//             <option value="7 Years">7 Years</option>
//             <option value="8 Years">8 Years</option>
//             <option value="9 Years">9 Years</option>
//             <option value="10 Years">10 Years</option>
//             <option value="11 Years">11 Years</option>
//             <option value="12 Years">12 Years</option>
//             <option value="13 Years">13 Years</option>
//             <option value="14 Years">14 Years</option>
//             <option value="15 Years">15 Years</option>
//             <option value="16 Years">16 Years</option>
//             <option value="17 Years">17 Years</option>
//             <option value="18 Years">18 Years</option>
//             <option value="19 Years">19 Years</option>
//             <option value="20 Years">20 Years</option>
//             <option value="20+ Years">20+ Years</option>
//                     </select>
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Bank Loan Available:</label>
//                     <select className="form-select rounded-0" name="bankLoan" value={formData.bankLoan} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                     </select>
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Negotiation Allowed:</label>
//                     <select className="form-select rounded-0" name="negotiation" value={formData.negotiation} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                     </select>
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Length (in feet):</label>
//                     <input className="form-control rounded-0"
//                         type="number"
//                         name="length"
//                         value={formData.length}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Breath (in feet):</label>
//                     <input className="form-control rounded-0"
//                         type="number"
//                         name="breadth"
//                         value={formData.breadth}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Total Area (sq. ft.):</label>
//                     <input className="form-control rounded-0"
//                         type="number"
//                         name="totalArea"
//                         value={formData.totalArea}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Ownership:</label>
//                     <select className="form-select rounded-0" name="ownership" value={formData.ownership} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="single Owner">Single Owner</option>
//                         <option value="Multiple Owner">Multiple Owner</option>
//                         <option value="Power Of Attorney">Power Of Attorney</option>
//                     </select>
//                 </div>




//                 <div className="mb-3">
//                     <label className="form-label">Area Unit:</label>
//                     <select className="form-select rounded-0" name="areaUnit" value={formData.areaUnit} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="sq.ft">sq.ft</option>
//                         <option value="sq.meter">sq.meter</option>
//                         <option value="cent">cent</option>
//                         <option value="Acre">Acre</option>
//                         <option value="Hectare">Hectare</option>
//                     </select>
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Property Approved:</label>
//                     <select className="form-select rounded-0" name="propertyApproved" value={formData.propertyApproved} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="Yes">Yes</option>
//                         <option value="No">No</option>
//                     </select>
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Posted By:</label>
//                     <select className="form-select rounded-0" name="postedBy" value={formData.postedBy} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="Owner">Owner</option>
//                         <option value="Agent">Agent</option>
//                         <option value="Builder">Builder</option>
//                     </select>
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Facing:</label>
//                     <select className="form-select rounded-0" name="facing" value={formData.facing} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="North">North</option>
//                         <option value="South">South</option>
//                         <option value="East">East</option>
//                         <option value="West">West</option>
//                         {/* Add other options here */}
//                     </select>
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Sales Mode:</label>
//                     <select className="form-select rounded-0" name="salesMode" value={formData.salesMode} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="Full Payment">Full Payment</option>
//                         <option value="Partial Payment">Partial Payment</option>
//                     </select>
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Sales Type:</label>
//                     <select className="form-select rounded-0" name="salesType" value={formData.salesType} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="Normal">Normal</option>
//                         <option value="Urgent">Urgent</option>
//                     </select>
//                 </div>




//                 <div className="mb-3">
//                     <label className="form-label">Rental Property Address:</label>
//                     <input className="form-control rounded-0"
//                         type="text"
//                         name="rentalPropertyAddress"
//                         value={formData.rentalPropertyAddress}
//                         onChange={handleChange}
//                     />
//                 </div>

             
//                 {/* Location Details */}
//                 <div className="mb-3">
//                     <label className="form-label">Country:</label>
//                     <input className="form-control rounded-0"
//                         type="text"
//                         name="country"
//                         value={formData.country}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">State:</label>
//                     <input className="form-control rounded-0"
//                         type="text"
//                         name="state"
//                         value={formData.state}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">City:</label>
//                     <input className="form-control rounded-0"
//                         type="text"
//                         name="city"
//                         value={formData.city}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <lable>District:</lable>
//                     <input className="form-control rounded-0"
//                         type="text"
//                         name="district"
//                         value={formData.district}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <lable>Area:</lable>
//                     <input className="form-control rounded-0"
//                         type="text"
//                         name="area"
//                         value={formData.area}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 {/* New Fields */}
//                 <div className="mb-3">
//                     <lable>Street Name:</lable>
//                     <input className="form-control rounded-0"
//                         type="text"
//                         name="streetName"
//                         value={formData.streetName}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <lable>Door Number:</lable>
//                     <input className="form-control rounded-0"
//                         type="text"
//                         name="doorNumber"
//                         value={formData.doorNumber}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <lable>Nagar:</lable>
//                     <input className="form-control rounded-0"
//                         type="text"
//                         name="nagar"
//                         value={formData.nagar}
//                         onChange={handleChange}
//                     />
//                 </div>

            

//                 <div className="mb-3">
//                     <lable>Email:</lable>
//                     <input className="form-control rounded-0"
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                 </div>

           

//                 <div className="mb-3">
//                     <lable>Alternate Phone:</lable>
//                     <input className="form-control rounded-0"
//                         type="text"
//                         name="alternatePhone"
//                         value={formData.alternatePhone}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <lable>Best Time to Call:</lable>
//                     <select className="form-select rounded-0" name="bestTimeToCall" value={formData.bestTimeToCall} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="AnyTime">Any Time</option>
//                         <option value="Morning">Morning</option>
//                         <option value="Afternoon">Afternoon</option>
//                         <option value="Evening">Evening</option>
//                     </select>
//                 </div>


//                           {/* Rent-related fields */}
//                 <div className="mb-3">
//                     <lable>Rent Amount:</lable>
//                     <input className="form-control rounded-0"
//                         type="number"
//                         name="rentAmount"
//                         value={formData.rentAmount}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <lable>Rent Security Amount:</lable>
//                     <input className="form-control rounded-0"
//                         type="number"
//                         name="rentSecurityAmount"
//                         value={formData.rentSecurityAmount}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <lable>Rent Maintenance Charge:</lable>
//                     <input className="form-control rounded-0"
//                         type="number"
//                         name="rentMaintenanceCharge"
//                         value={formData.rentMaintenanceCharge}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <lable>Maintenance Per:</lable>
//                     <select className="form-select rounded-0" name="maintancePer" value={formData.maintancePer} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="Monthly">Monthly</option>
//                         <option value="Yearly">Yearly</option>
//                         <option value="Quarterly">Quarterly</option>
//                         <option value="One-Time">One-Time</option>
//                     </select>
//                 </div>

//                 {/* Status Field
//                 <div className="col-md-6 mb-3">
//                     <lable>Status</lable>
//                     <select className="form-select rounded-0" name="status" value={formData.status} onChange={handleChange}>
//                         <option value="">Select</option>
//                         <option value="incomplete">Incomplete</option>
//                         <option value="complete">Complete</option>
//                     </select>
//                 </div> */}
                 
//                                   {/* Image upload input (Allow multiple images) */}
//                                   <div className="text-start mb-3">
//             <label htmlFor="photo-upload" className="btn rounded-0 photoupload" style={{background:'#73C2FB',color:'#ffffff', fontWeight:'bold'}}>
//               <i className="bi bi-image me-2"></i>
//               Upload Photos
//             </label>
//             <input
//               id="photo-upload"
//               type="file"
//               multiple
//               accept="image/*"
//               className="form-control d-none"
//               onChange={handlePhotoUpload}
//             />
//           </div>
//                 {/* Display selected images with remove option */}
//                 <div
//                     className="addpropertyphoto mb-3 p-3"
//                     style={{
//                         display: 'grid',
//                         gap: '10px',
//                         gridTemplateColumns: `repeat(${
//                             window.innerWidth > 1200
//                                 ? 5
//                                 : window.innerWidth > 992
//                                 ? 3
//                                 : window.innerWidth > 768
//                                 ? 2
//                                 : window.innerWidth > 576
//                                 ? 2
//                                 : 1
//                         }, 1fr)`,
//                     }}
//                 >
//                     {formData.photos.map((photo, index) => (
//                         <div key={index} style={{ textAlign: 'center' }}>
//                             <img
//                                 src={URL.createObjectURL(photo)}
//                                 alt="Uploaded"
//                                 style={{ width: '80px', height: '80px', objectFit: 'cover' }}
//                             />
//                             <p
//                                 style={{ color: 'red', cursor: 'pointer' }}
//                                 onClick={() => removePhoto(index)}
//                             >
//                                 Remove
//                             </p>
//                         </div>
//                     ))}
//                 </div>


//                 <div className="mb-3">
//                     <label className="form-label">Description:</label>
//                     <textarea placeholder='Text your Opinion' className='w-100 text-mute'
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                     ></textarea>
//                 </div>



//                 {/* Submit button */}
//                 <button className="apppropertybtn" type="submit">Add Property</button>
//             </form>
//             </div>
//             <div className="col-md-5 d-none d-md-block" style={{ height: '100vh' }}></div>

//             </div>

//         </div>
//     );
// };

// export default AddProperty;
