// // import React from "react";
// // import { useState } from 'react';
// // import { FaBars, FaTimes } from 'react-icons/fa';
// // const Navbar = ({ toggleSidebar }) => {
// //     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //     const handleToggle = () => {
// //       setIsSidebarOpen(!isSidebarOpen);
// //       toggleSidebar();
// //     };
// //   return (
  
// //     <div className="navbar p-3 mb-5">
// //     <button className="hamburger-menu" onClick={handleToggle}>
// //       {isSidebarOpen ? (
// //         <FaTimes size={20} color="#6666ff"/>
// //       ) : (
// //         <FaBars size={20} color="#6666ff"/>
// //       )}
// //     </button>
// //       <h1>PPC</h1>
// //   </div>
// //   );
// // };

// // export default Navbar;


// // import React, { useState } from 'react';
// // import { Dropdown } from 'react-bootstrap';
// // import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
// // import logo from './logo.jpg'
// // const Navbar = ({ toggleSidebar }) => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   const handleToggle = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //     toggleSidebar();
// //   };

// //   return (
// //     <div className="d-flex justify-content-between align-items-center p-4 mb-5 navbarstyle">
// //       {/* Hamburger Menu */}
// //       <button className="hamburger-menu" onClick={handleToggle}>
// //         {isSidebarOpen ? (
// //           <FaTimes size={30} fontWeight={'bold'} color="#0000ff" />
// //         ) : (
// //           <FaBars size={30} color="#0000ff" />
// //         )}
// //       </button>

// //       {/* Dropdown Profile Icon */}
// //       <div className="ms-auto">
// //         <Dropdown align="end">
// //           <Dropdown.Toggle
// //             // variant="light"
// //             id="dropdown-profile"
// //             className="d-flex align-items-center border-0 bg-transparent"
// //           >
// //             {/* <img src={logo} alt='' height={40} className="rounded-circle" /> */}
// //             <FaUserCircle size={44} color="#F0F2F5" />
// //           </Dropdown.Toggle>
// //           <Dropdown.Menu >
// //             <Dropdown.Item href="#profile">Profile</Dropdown.Item>
// //             <Dropdown.Item href="#settings">Settings</Dropdown.Item>
// //             <Dropdown.Item href="#logout">Logout</Dropdown.Item>
// //           </Dropdown.Menu>
// //         </Dropdown>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;



















// import React, { useState } from 'react';
// import { Dropdown } from 'react-bootstrap';
// import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
// import logo from './logo.jpg'
// const Navbar = ({ toggleSidebar }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleToggle = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//     toggleSidebar();
//   };

//   return (
//     <div className="d-flex justify-content-between align-items-center p-4 mb-5 navbarstyle">
//       {/* Hamburger Menu */}
//       <button className="hamburger-menu" onClick={handleToggle}>
//         {isSidebarOpen ? (
//           <FaTimes size={30} fontWeight={'bold'} color="#0000ff" />
//         ) : (
//           <FaBars size={30} color="#0000ff" />
//         )}
//       </button>

//       {/* Dropdown Profile Icon */}
//       <div className="ms-auto">
//         <Dropdown align="end">
//           <Dropdown.Toggle
//             // variant="light"
//             id="dropdown-profile"
//             className="d-flex align-items-center border-0 bg-transparent"
//           >
//             {/* <img src={logo} alt='' height={40} className="rounded-circle" /> */}
//             <FaUserCircle size={44} color="#F0F2F5" />
//           </Dropdown.Toggle>
//           <Dropdown.Menu >
//             <Dropdown.Item href="#profile">Profile</Dropdown.Item>
//             <Dropdown.Item href="#settings">Settings</Dropdown.Item>
//             <Dropdown.Item href="#logout">Logout</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>
//     </div>
//   );
// };

// export default Navbar;










// import React, { useState } from 'react';
// import { Dropdown } from 'react-bootstrap';
// import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
// import logo from './logo.jpg'
// const Navbar = ({ toggleSidebar }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleToggle = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//     toggleSidebar();
//   };

//   return (
//     <div className="d-flex justify-content-between align-items-center p-4 mb-5 navbarstyle">
//       {/* Hamburger Menu */}
//       <button className="hamburger-menu" onClick={handleToggle}>
//         {isSidebarOpen ? (
//           <FaTimes size={30} fontWeight={'bold'} color="#0000ff" />
//         ) : (
//           <FaBars size={30} color="#0000ff" />
//         )}
//       </button>

//       {/* Dropdown Profile Icon */}
//       <div className="ms-auto">
//         <Dropdown align="end">
//           <Dropdown.Toggle
//             // variant="light"
//             id="dropdown-profile"
//             className="d-flex align-items-center border-0 bg-transparent"
//           >
//             {/* <img src={logo} alt='' height={40} className="rounded-circle" /> */}
//             <FaUserCircle size={44} color="#0b5f7b" />
//           </Dropdown.Toggle>
//           <Dropdown.Menu >
//             <Dropdown.Item href="#profile">Profile</Dropdown.Item>
//             <Dropdown.Item href="#settings">Settings</Dropdown.Item>
//             <Dropdown.Item href="/admin">Logout</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>
//     </div>
//   );
// };

// export default Navbar;










import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { FaBars, FaTimes, FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";
import logo from "./logo.jpg";

const AppNavbar = ({ toggleSidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    toggleSidebar();
  };

  return (
    <Navbar expand="md" className="shadow-sm bg-light p-3 mb-3">
      <Container fluid>
        {/* Logo Section */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
  {/* <img
    src={logo}
    alt="Logo"
    className="rounded-circle me-2"
    height="40" 
    width="40"  
    style={{ objectFit: "cover" }} 
  /> */}
  <span className="fw-bold text-primary"> Pondy Properties | Admin </span>
</Navbar.Brand>

        {/* Hamburger Menu for Sidebar */}
        <button
          className="border-0 bg-transparent d-md-none"
          onClick={handleToggle}
          aria-label="Toggle Sidebar"
        >
          {isSidebarOpen ? (
            <FaTimes size={25} className="text-primary" />
          ) : (
            <FaBars size={25} className="text-primary" />
          )}
        </button>

        {/* Responsive Navbar Collapse */}
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-dark fw-medium">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="text-dark fw-medium">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className="text-dark fw-medium">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse> */}

        {/* Profile Dropdown */}
        <Dropdown align="end">
          <Dropdown.Toggle
            variant="light"
            id="dropdown-profile"
            className="border-0 bg-transparent d-flex align-items-center p-0"
          >
            <FaUserCircle size={30} className="text-primary" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="shadow rounded">
            <Dropdown.Item href="#profile" className="d-flex align-items-center">
              <FaUserCircle className="me-2" /> Profile
            </Dropdown.Item>
            <Dropdown.Item href="#settings" className="d-flex align-items-center">
              <FaCog className="me-2" /> Settings
            </Dropdown.Item>
            <Dropdown.Item href="/logout" className="d-flex align-items-center text-danger">
              <FaSignOutAlt className="me-2" /> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
