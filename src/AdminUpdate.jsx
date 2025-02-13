

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { FaUser, FaLock, FaBuilding, FaPhone, FaIdCard, FaTachometerAlt, FaHome, FaClipboard, FaTag } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const AdminUpdate = () => {
  // State for form fields
  const [updateName, setUpdateName] = useState('');
  const [updatePassword, setUpdatePassword] = useState('');
  const [updateRole, setUpdateRole] = useState('');
  const [updateUserType, setUpdateUserType] = useState('');
  const [updateAddress, setUpdateAddress] = useState('');
  const [updateOffice, setUpdateOffice] = useState('');
  const [updateJobType, setUpdateJobType] = useState('');
  const [updateUserName, setUpdateUserName] = useState('');
  const [updateTargetWeek, setUpdateTargetWeek] = useState('');
  const [updateTargetMonth, setUpdateTargetMonth] = useState('');
  const [updateMobile, setUpdateMobile] = useState('');
  const [updateAadhaarNumber, setUpdateAadhaarNumber] = useState('');
  
  // State to toggle fields visibility
  const [isEditing, setIsEditing] = useState(false);
  
  const [loading, setLoading] = useState(false);

  // Handle form submission (without API)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission (log the data or show success message)
    setTimeout(() => {
      toast.success('Admin updated successfully');
      setLoading(false);
    }, 1000);
  };

  return (
    <Container fluid className="p-0">
      <Row className="g-0 mt-5">
        <Col lg={12} className="d-flex align-items-center justify-content-center ms-5">
          <div className="shadow p-4 rounded w-100 bg-white" style={{ maxWidth: '700px' }}>
            <h2 style={{ color: '#45a29e', fontWeight: 'bold' }}>Admin Update</h2>

            {/* Display success or error message */}
            <ToastContainer />

            {/* Name Field and Edit Button */}
            {!isEditing ? (
              <div>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text"><FaUser /></span>
                    <Form.Control
                      type="text"
                      placeholder="Enter Admin Name"
                      value={updateName}
                      onChange={(e) => setUpdateName(e.target.value)}
                      required
                      style={{ height: '50px' }} 
                    />
                  </div>
                </Form.Group>
                <Button variant="warning" onClick={() => setIsEditing(true)} className="w-25 mt-3">
                  Edit
                </Button>
              </div>
            ) : (
              <Form onSubmit={handleSubmit}>
                {/* Two Columns Layout */}
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="updatePassword">
                      <Form.Label>Password</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text"><FaLock /></span>
                        <Form.Control
                          type="password"
                          placeholder="Enter Admin Password"
                          value={updatePassword}
                          onChange={(e) => setUpdatePassword(e.target.value)}
                          required
                          style={{ height: '50px' }} 
                        />
                      </div>
                    </Form.Group>

                    <Form.Group controlId="updateRole">
                      <Form.Label>Role</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text"><FaBuilding /></span>
                        <Form.Control
                          as="select"
                          value={updateRole}
                          onChange={(e) => setUpdateRole(e.target.value)}
                          required
                          style={{ height: '50px' }} 
                        >
                          <option value="">Select Role</option>
                          <option value="manager">Manager</option>
                          <option value="admin">Admin</option>
                          <option value="accountant">Accountant</option>
                        </Form.Control>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3 mt-3">
                  <Form.Label>UserName</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text"><FaUser /></span>
                    <Form.Control
                      type="text"
                      placeholder="Enter Admin Name"
                      value={updateUserName}
                      onChange={(e) => setUpdateUserName(e.target.value)}
                      required
                      style={{ height: '50px' }} 
                    />
                  </div>
                </Form.Group>

                    <Form.Group className="mb-3 mt-3" controlId="updateAddress">
                      <Form.Label>Address</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text"><FaHome /></span>
                        <Form.Control
                          type="text"
                          placeholder="Enter Address"
                          value={updateAddress}
                          onChange={(e) => setUpdateAddress(e.target.value)}
                          style={{ height: '50px' }} 
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="updateTargetWeek">
                      <Form.Label>Target Week</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text"><FaTachometerAlt /></span>
                        <Form.Control
                          type="text"
                          placeholder="Enter Target Week"
                          value={updateTargetWeek}
                          onChange={(e) => setUpdateTargetWeek(e.target.value)}
                          style={{ height: '50px' }} 
                        />
                      </div>
                    </Form.Group>

                    <Form.Group controlId="updateUserType">
                      <Form.Label>User Type</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text"><FaClipboard /></span>
                        <Form.Control
                          as="select"
                          value={updateUserType}
                          onChange={(e) => setUpdateUserType(e.target.value)}
                          required
                          style={{ height: '50px' }} 
                        >
                          <option value="">Select UserType</option>
                          <option value="all">ALL</option>
                          <option value="PUC">PUC</option>
                          <option value="TUC">TUC</option>
                        </Form.Control>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                   

             

                    <Form.Group className="mb-3" controlId="office">
        <Form.Label>Office</Form.Label>
        <Form.Control
          as="select"
          name="office"
          value={updateOffice}
          onChange={(e) => setUpdateOffice(e.target.value)}
          style={{ height: '50px' }}  // Increased height
        >
          <option value="">Select Office</option>
          <option value="AUROBINDO">AUROBINDO</option>
          <option value="SAINT">SAINT</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="jobType">
        <Form.Label>Job Type</Form.Label>
        <Form.Control
          as="select"
          name="jobType"
          value={updateJobType}
          onChange={(e) => setUpdateJobType(e.target.value)}
          style={{ height: '50px' }}  // Increased height
        >
          <option value="">Select Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </Form.Control>
      </Form.Group>

                    <Form.Group className="mb-3" controlId="updateTargetMonth">
                      <Form.Label>Target Month</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text"><FaTachometerAlt /></span>
                        <Form.Control
                          type="text"
                          placeholder="Enter Target Month"
                          value={updateTargetMonth}
                          onChange={(e) => setUpdateTargetMonth(e.target.value)}
                          style={{ height: '50px' }} 
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="updateMobile">
                      <Form.Label>Mobile</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text"><FaPhone /></span>
                        <Form.Control
                          type="text"
                          placeholder="Enter Mobile Number"
                          value={updateMobile}
                          onChange={(e) => setUpdateMobile(e.target.value)}
                          style={{ height: '50px' }} 
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="updateAadhaarNumber">
                      <Form.Label>Aadhaar Number</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text"><FaIdCard /></span>
                        <Form.Control
                          type="text"
                          placeholder="Enter Aadhaar Number"
                          value={updateAadhaarNumber}
                          onChange={(e) => setUpdateAadhaarNumber(e.target.value)}
                          style={{ height: '50px' }} 
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>

                <Button variant="warning" type="submit" className="w-25 mt-4" disabled={loading}>
                  {loading ? 'Updating...' : 'Update Admin'}
                </Button>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminUpdate;













// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
// import { toast, ToastContainer } from 'react-toastify'; 
// import 'react-toastify/dist/ReactToastify.css';

// const UpdateAdmin = () => {
//   // State for form fields
//   const [updateName, setUpdateName] = useState('');
//   const [updatePassword, setUpdatePassword] = useState('');
//   const [updateRole, setUpdateRole] = useState('');
//   const [updateUserType, setUpdateUserType] = useState('');
//   const [updateAddress, setUpdateAddress] = useState('');
//   const [updateOffice, setUpdateOffice] = useState('');
//   const [updateJobType, setUpdateJobType] = useState('');
//   const [updateTargetWeek, setUpdateTargetWeek] = useState('');
//   const [updateTargetMonth, setUpdateTargetMonth] = useState('');
//   const [updateMobile, setUpdateMobile] = useState('');
//   const [updateAadhaarNumber, setUpdateAadhaarNumber] = useState('');

//   const [loading, setLoading] = useState(false);

//   // Handle form submission (without API)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Simulate form submission (log the data or show success message)
//     setTimeout(() => {
//       toast.success('Admin updated successfully');
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <Container fluid className="p-0">
//       <Row className="g-0 mt-5">
//         <Col lg={12} className="d-flex align-items-center justify-content-center mt-4">
//           <div className="shadow p-4 rounded w-100 bg-white" style={{ maxWidth: '500px' }}>
//             <h2 style={{ color: '#45a29e', fontWeight: 'bold' }}>Admin Update</h2>

//             {/* Display success or error message */}
//             <ToastContainer />

//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="mb-3" controlId="updateName">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Admin Name"
//                   value={updateName}
//                   onChange={(e) => setUpdateName(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="updatePassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Enter Admin Password"
//                   value={updatePassword}
//                   onChange={(e) => setUpdatePassword(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group controlId="updateRole">
//                 <Form.Label>Role</Form.Label>
//                 <Form.Control
//                   as="select"
//                   value={updateRole}
//                   onChange={(e) => setUpdateRole(e.target.value)}
//                   required
//                 >
//                   <option value="">Select Role</option>
//                   <option value="manager">Manager</option>
//                   <option value="admin">Admin</option>
//                   <option value="accountant">Accountant</option>
//                 </Form.Control>
//               </Form.Group>

//               <Form.Group controlId="updateUserType">
//                 <Form.Label>User Type</Form.Label>
//                 <Form.Control
//                   as="select"
//                   value={updateUserType}
//                   onChange={(e) => setUpdateUserType(e.target.value)}
//                   required
//                 >
//                   <option value="">Select UserType</option>
//                   <option value="all">ALL</option>
//                   <option value="PUC">PUC</option>
//                   <option value="TUC">TUC</option>
//                 </Form.Control>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="updateAddress">
//                 <Form.Label>Address</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Address"
//                   value={updateAddress}
//                   onChange={(e) => setUpdateAddress(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="updateOffice">
//                 <Form.Label>Office</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Office"
//                   value={updateOffice}
//                   onChange={(e) => setUpdateOffice(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="updateJobType">
//                 <Form.Label>Job Type</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Job Type"
//                   value={updateJobType}
//                   onChange={(e) => setUpdateJobType(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="updateTargetWeek">
//                 <Form.Label>Target Week</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Target Week"
//                   value={updateTargetWeek}
//                   onChange={(e) => setUpdateTargetWeek(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="updateTargetMonth">
//                 <Form.Label>Target Month</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Target Month"
//                   value={updateTargetMonth}
//                   onChange={(e) => setUpdateTargetMonth(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="updateMobile">
//                 <Form.Label>Mobile</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Mobile Number"
//                   value={updateMobile}
//                   onChange={(e) => setUpdateMobile(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="updateAadhaarNumber">
//                 <Form.Label>Aadhaar Number</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Aadhaar Number"
//                   value={updateAadhaarNumber}
//                   onChange={(e) => setUpdateAadhaarNumber(e.target.value)}
//                 />
//               </Form.Group>

//               <Button variant="warning" type="submit" className="w-100 mt-4" disabled={loading}>
//                 {loading ? 'Updating...' : 'Update Admin'}
//               </Button>
//             </Form>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default UpdateAdmin;













// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
// import { toast, ToastContainer } from 'react-toastify'; 
// import 'react-toastify/dist/ReactToastify.css';

// const UpdateAdmin = () => {
//   // State for form fields
//   const [updateName, setUpdateName] = useState('');
//   const [updatePassword, setUpdatePassword] = useState('');
//   const [updateRole, setUpdateRole] = useState('');
//   const [updateUserType, setUpdateUserType] = useState('');
//   const [updateAddress, setUpdateAddress] = useState('');
//   const [updateOffice, setUpdateOffice] = useState('');
//   const [updateJobType, setUpdateJobType] = useState('');
//   const [updateTargetWeek, setUpdateTargetWeek] = useState('');
//   const [updateTargetMonth, setUpdateTargetMonth] = useState('');
//   const [updateMobile, setUpdateMobile] = useState('');
//   const [updateAadhaarNumber, setUpdateAadhaarNumber] = useState('');
  
//   const [isEditing, setIsEditing] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Fetch admin details when searching
//   const handleSearchAdmin = async (e) => {
//     e.preventDefault();
//     if (!updateName) {
//       setError('Please enter the admin name to search for.');
//       return;
//     }
//     setLoading(true);
//     setError('');

//     try {
//       const response = await fetch(`http://localhost:1000/PPC/admin/${updateName}`);
//       const data = await response.json();

//       if (response.ok) {
//         // Admin found, set edit mode to true and apply data to the form
//         setIsEditing(true);
//         setUpdatePassword(data.password || ''); // Apply password
//         setUpdateRole(data.role || ''); // Apply role
//         setUpdateUserType(data.userType || ''); // Apply userType
//         setUpdateAddress(data.address || ''); // Apply address
//         setUpdateOffice(data.office || ''); // Apply office
//         setUpdateJobType(data.jobType || ''); // Apply jobType
//         setUpdateTargetWeek(data.targetWeek || ''); // Apply targetWeek
//         setUpdateTargetMonth(data.targetMonth || ''); // Apply targetMonth
//         setUpdateMobile(data.mobile || ''); // Apply mobile
//         setUpdateAadhaarNumber(data.aadhaarNumber || ''); // Apply aadhaarNumber
//       } else {
//         setError('Admin not found');
//         setIsEditing(false);
//       }
//     } catch (err) {
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle update submission
//   const handleUpdateAdmin = async (e) => {
//     e.preventDefault();
//     if (!updateName) {
//       setError('Please enter the admin name to update.');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       const response = await fetch('http://localhost:1000/PPC/admin/update', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: updateName,
//           password: updatePassword,
//           role: updateRole,
//           userType: updateUserType,
//           address: updateAddress,
//           office: updateOffice,
//           jobType: updateJobType,
//           targetWeek: updateTargetWeek,
//           targetMonth: updateTargetMonth,
//           mobile: updateMobile,
//           aadhaarNumber: updateAadhaarNumber,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success('Admin updated successfully');
//         setIsEditing(false);  
//         setUpdateName('');
//         setUpdatePassword('');
//         setUpdateRole('');
//         setUpdateUserType('');
//       } else {
//         setError(data.message || 'Failed to update admin');
//       }
//     } catch (err) {
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container fluid className="p-0">
//       <Row className="g-0 mt-5">
//         <Col lg={12} className="d-flex align-items-center justify-content-center mt-4">
//           <div className="shadow p-4 rounded w-100 bg-white" style={{ maxWidth: '500px' }}>
//             <h2 style={{ color: '#45a29e', fontWeight: 'bold' }}>Admin Update</h2>

//             {error && <Alert variant="danger">{error}</Alert>}

//             {/* Search for Admin */}
//             <Form onSubmit={handleSearchAdmin}>
//               <Form.Group className="mb-3" controlId="updateName">
//                 <Form.Label>Admin Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Admin Name"
//                   value={updateName}
//                   onChange={(e) => setUpdateName(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <Button variant="primary" type="submit" className="w-100 mt-3" disabled={loading}>
//                 {loading ? 'Searching...' : 'Search Admin'}
//               </Button>
//             </Form>

//             {/* Edit Admin Form */}
//             {isEditing && (
//               <div>
//                 <Form onSubmit={handleUpdateAdmin} className="mt-4">
//                   <Form.Group className="mb-3" controlId="updatePassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                       type="password"
//                       placeholder="Enter New Password"
//                       value={updatePassword}
//                       onChange={(e) => setUpdatePassword(e.target.value)}
//                       required
//                     />
//                   </Form.Group>

//                   <Form.Group controlId="updateRole">
//                     <Form.Label>Role</Form.Label>
//                     <Form.Control
//                       as="select"
//                       value={updateRole}
//                       onChange={(e) => setUpdateRole(e.target.value)}
//                       required
//                     >
//                       <option value="">Select Role</option>
//                       <option value="manager">Manager</option>
//                       <option value="admin">Admin</option>
//                       <option value="accountant">Accountant</option>
//                     </Form.Control>
//                   </Form.Group>

//                   <Form.Group controlId="updateUserType">
//                     <Form.Label>User Type</Form.Label>
//                     <Form.Control
//                       as="select"
//                       value={updateUserType}
//                       onChange={(e) => setUpdateUserType(e.target.value)}
//                       required
//                     >
//                       <option value="">Select UserType</option>
//                       <option value="all">ALL</option>
//                       <option value="PUC">PUC</option>
//                       <option value="TUC">TUC</option>
//                     </Form.Control>
//                   </Form.Group>

//                   {/* Additional fields */}
//                   <Form.Group className="mb-3" controlId="updateAddress">
//                     <Form.Label>Address</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter Address"
//                       value={updateAddress}
//                       onChange={(e) => setUpdateAddress(e.target.value)}
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="updateOffice">
//                     <Form.Label>Office</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter Office"
//                       value={updateOffice}
//                       onChange={(e) => setUpdateOffice(e.target.value)}
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="updateJobType">
//                     <Form.Label>Job Type</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter Job Type"
//                       value={updateJobType}
//                       onChange={(e) => setUpdateJobType(e.target.value)}
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="updateTargetWeek">
//                     <Form.Label>Target Week</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter Target Week"
//                       value={updateTargetWeek}
//                       onChange={(e) => setUpdateTargetWeek(e.target.value)}
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="updateTargetMonth">
//                     <Form.Label>Target Month</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter Target Month"
//                       value={updateTargetMonth}
//                       onChange={(e) => setUpdateTargetMonth(e.target.value)}
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="updateMobile">
//                     <Form.Label>Mobile</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter Mobile Number"
//                       value={updateMobile}
//                       onChange={(e) => setUpdateMobile(e.target.value)}
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="updateAadhaarNumber">
//                     <Form.Label>Aadhaar Number</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter Aadhaar Number"
//                       value={updateAadhaarNumber}
//                       onChange={(e) => setUpdateAadhaarNumber(e.target.value)}
//                     />
//                   </Form.Group>

//                   <Button variant="warning" type="submit" className="w-100 mt-4" disabled={loading}>
//                     {loading ? 'Updating...' : 'Update Admin'}
//                   </Button>
//                 </Form>
//               </div>
//             )}
//           </div>
//         </Col>
//       </Row>

//       <ToastContainer />
//     </Container>
//   );
// };

// export default UpdateAdmin;
