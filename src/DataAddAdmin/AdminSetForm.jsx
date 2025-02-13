// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function AdminSetForm() {
//   const [formData, setFormData] = useState({
//     propertyMode: "",
//     propertyType: "",
//     bankLoan: "",
//     negotiation: "",
//     ownership: "",
//     bedrooms: "",
//     kitchen: "",
//     kitchenType: "",
//     balconies: "",
//     floorNo: "",
//     areaUnit: "",
//     propertyApproved: "",
//     propertyAge: "",
//     postedBy: "",
//     facing: "",
//     salesMode: "",
//     salesType: "",
//     furnished: "",
//     lift: "",
//     attachedBathrooms: "",
//     western: "",
//     numberOfFloors: "",
//     carParking: "",
//     bestTimeToCall: "",
//   });

//   const [dataList, setDataList] = useState([]); // Data list for the active field
//   const [activeField, setActiveField] = useState("propertyMode"); // Default active field

//   // Fetch data for the active field from the backend
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch`);
//       setDataList(response.data.data || []); // Assuming backend returns `data` for activeField
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Handle input changes for the active field
//   const handleFieldChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Add a new field
//   const handleAddField = async () => {
//     if (!formData[activeField]) {
//       alert(`Please enter a value for ${activeField}`);
//       return;
//     }


    
//     try {
//       await axios.post(`${process.env.REACT_APP_API_URL}/add`, {
//         field: activeField,
//         value: formData[activeField],
//       });

//       alert(`${activeField} added successfully!`);
//       setFormData({ ...formData, [activeField]: "" }); // Clear the input
//       fetchData(); // Refresh the data
//     } catch (error) {
//       console.error(`Error adding ${activeField}:`, error);
//     }
//   };

//   // Edit an existing field
//   const handleEditField = async (field, value) => {
//     const newValue = prompt(`Enter the updated value for ${field}:`);
//     if (!newValue) return;

//     try {
//       await axios.put(`${process.env.REACT_APP_API_URL}/update`, {
//         field,
//         value,
//         newValue,
//       });

//       alert(`${field} updated successfully!`);
//       fetchData(); // Refresh the data
//     } catch (error) {
//       console.error(`Error updating ${field}:`, error);
//     }
//   };

//   // Delete a field
//   const handleDeleteField = async (field, value) => {
//     const confirmDelete = window.confirm(`Are you sure you want to delete this ${field}?`);
//     if (!confirmDelete) return;

//     try {
//       await axios.delete(`${process.env.REACT_APP_API_URL}/delete`, {
//         data: { field, value },
//       });

//       alert(`${field} deleted successfully!`);
//       fetchData(); // Refresh the data
//     } catch (error) {
//       console.error(`Error deleting ${field}:`, error);
//     }
//   };

//   // Set the active field to manage dynamically
//   const handleSetActiveField = (field) => {
//     setActiveField(field);
//     fetchData(); // Fetch data for the selected field
//   };

//   useEffect(() => {
//     fetchData(); // Fetch initial data for the default field
//   }, [activeField]);

//   return (
//     <div>
//       <h1>Property Management</h1>
//       <form>
//         {/* Dynamic field selection */}
//         <label>
//           Select Field to Manage:
//           <select value={activeField} onChange={(e) => handleSetActiveField(e.target.value)}>
//             {Object.keys(formData).map((field) => (
//               <option key={field} value={field}>
//                 {field}
//               </option>
//             ))}
//           </select>
//         </label>

//         {/* Display only input for the selected field */}
//         <div style={{ marginBottom: "10px" }}>
//           <label>
//             {activeField.charAt(0).toUpperCase() + activeField.slice(1)}:
//             <input
//               type={activeField === "bedrooms" ? "text" : "text"}
//               name={activeField}
//               value={formData[activeField] || ""}
//               onChange={handleFieldChange}
//               style={{ marginRight: "10px" }}
//             />
//           </label>
//           <button type="button" onClick={handleAddField}>
//             Add {activeField}
//           </button>
//         </div>
//       </form>

//       {/* Table for managing the active field */}
//       <h2>Manage {activeField.charAt(0).toUpperCase() + activeField.slice(1)}</h2>
//       <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>{activeField}</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dataList
//             .filter((item) => item.field === activeField) // Filter only relevant fields
//             .map((item) => (
//               <tr key={item._id}>
//                 <td>{item._id}</td>
//                 <td>{item.value}</td>
//                 <td>
//                   <button onClick={() => handleEditField(item.field, item.value)}>Edit</button>
//                   <button onClick={() => handleDeleteField(item.field, item.value)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AdminSetForm;







import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function AdminSetForm() {
  const [formData, setFormData] = useState({
    propertyMode: "",
    propertyType: "",
    bankLoan: "",
    negotiation: "",
    ownership: "",
    bedrooms: "",
    kitchen: "",
    kitchenType: "",
    balconies: "",
    floorNo: "",
    areaUnit: "",
    propertyApproved: "",
    propertyAge: "",
    postedBy: "",
    facing: "",
    salesMode: "",
    salesType: "",
    furnished: "",
    lift: "",
    attachedBathrooms: "",
    western: "",
    numberOfFloors: "",
    carParking: "",
    bestTimeToCall: "",
  });

  const [dataList, setDataList] = useState([]);
  const [activeField, setActiveField] = useState("propertyMode");

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch`);
      setDataList(response.data.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddField = async () => {
    if (!formData[activeField]) {
      alert(`Please enter a value for ${activeField}`);
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/add`, {
        field: activeField,
        value: formData[activeField],
      });

      alert(`${activeField} added successfully!`);
      setFormData({ ...formData, [activeField]: "" });
      fetchData();
    } catch (error) {
      console.error(`Error adding ${activeField}:`, error);
    }
  };

  const handleEditField = async (field, value) => {
    const newValue = prompt(`Enter the updated value for ${field}:`);
    if (!newValue) return;

    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/update`, {
        field,
        value,
        newValue,
      });

      alert(`${field} updated successfully!`);
      fetchData();
    } catch (error) {
      console.error(`Error updating ${field}:`, error);
    }
  };

  const handleDeleteField = async (field, value) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete this ${field}?`);
    if (!confirmDelete) return;

    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/delete`, {
        data: { field, value },
      });

      alert(`${field} deleted successfully!`);
      fetchData();
    } catch (error) {
      console.error(`Error deleting ${field}:`, error);
    }
  };

  const handleSetActiveField = (field) => {
    setActiveField(field);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [activeField]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Property Management</h1>

      <div className="row mb-4">
        <div className="col-md-6">
          <label className="form-label">Select Field to Manage:</label>
          <select
            className="form-select"
            value={activeField}
            onChange={(e) => handleSetActiveField(e.target.value)}
          >
            {Object.keys(formData).map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">
            {activeField.charAt(0).toUpperCase() + activeField.slice(1)}:
          </label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              name={activeField}
              value={formData[activeField] || ""}
              onChange={handleFieldChange}
            />
          
          </div>
          
        </div>
       
      </div>
      <button className="btn" style={{backgroundColor:"#0b5f7b",color:"white"}} type="button" onClick={handleAddField}>
              Add {activeField}
            </button>

      <h2 className="mb-3 mt-3">Manage {activeField.charAt(0).toUpperCase() + activeField.slice(1)}</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>{activeField}</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataList
              .filter((item) => item.field === activeField)
              .map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.value}</td>
                  {/* <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEditField(item.field, item.value)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteField(item.field, item.value)}
                    >
                      Delete
                    </button>
                  </td> */}

                                <td>
                                    <span className="edit text-primary" onClick={() => handleEditField(item.field, item.value)}> <FaEdit /></span>
                                    <span className="delete text-danger fs-5" onClick={() => handleDeleteField(item.field, item.value)}><MdDeleteForever /></span>
                                </td>

                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminSetForm;
