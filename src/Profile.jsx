// import React from 'react'

// export default function Profile() {
//   return (
//     <div>Profile</div>
//   )
// }


import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    pucNumber: '',
    profileImage: null,
    username: '',
    password: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleSave = () => {
    console.log('Save:', formData);
    // Add save logic here
  };

  const handleUpdate = () => {
    console.log('Update:', formData);
    // Add update logic here
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Form</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="pucNumber" className="form-label">ENTER PUC NUMBER:</label>
          <input
            type="text"
            id="pucNumber"
            name="pucNumber"
            className="form-control"
            value={formData.pucNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="profileImage" className="form-label">Profile Image:</label>
          <input
            type="file"
            id="profileImage"
            className="form-control"
            onChange={handleImageChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
          <button type="button" className="btn btn-secondary" onClick={handleUpdate}>Update</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
