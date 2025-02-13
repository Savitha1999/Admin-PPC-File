


import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaFileVideo } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { FaTimes } from 'react-icons/fa';
import { FaRupeeSign } from 'react-icons/fa';
import { MdLocationOn , MdApproval, MdLocationCity, MdOutlineBedroomParent, MdOutlineDescription } from 'react-icons/md';
import { BsBank } from 'react-icons/bs';
import { RiLayoutLine } from 'react-icons/ri';
import { TbArrowLeftRight } from 'react-icons/tb';
import {FaCouch,FaHandshake,FaTag,FaLocationArrow,FaCalendarAlt,FaArrowUp,FaShower,FaToilet,FaCar,FaCheckCircle,FaUtensils,FaBed, FaMoneyBill,FaPhone, FaRegBuilding, FaCity } from 'react-icons/fa';
import { FaBuilding , FaHome, FaMapSigns, FaMapMarkerAlt, FaVectorSquare, FaRoad, FaDoorClosed, FaMapPin, FaUserAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

import { BiWorld} from "react-icons/bi";
import './AddProperty.css';


import { FaBath, FaChartArea, } from 'react-icons/fa';
import { FaKitchenSet } from 'react-icons/fa6';
import { BsBuildingsFill } from 'react-icons/bs';
import { GiHouse, GiGears } from 'react-icons/gi';
import { FaClock, FaRegAddressCard } from 'react-icons/fa6';

function EditProperty() {
  const location = useLocation();
  const { ppcId, phoneNumber } = location.state || {};

  const [formData, setFormData] = useState({
    phoneNumber: "",
    rentalPropertyAddress: "",
    state: "",
    city: "",
    district: "",
    area: "",
    streetName: "",
    doorNumber: "",
    nagar: "",
    ownerName: "",
    email: "",
    alternatePhone: "",
    countryCode: "+91", // Default value
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

  const [photos, setPhotos] = useState([]);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [video, setVideo] = useState(null);
  const [countryCodes, setCountryCodes] = useState([
    { code: "+1", country: "USA/Canada" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
    { code: "+81", country: "Japan" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+34", country: "Spain" },
    { code: "+55", country: "Brazil" },
    { code: "+52", country: "Mexico" },
    { code: "+86", country: "China" },
    { code: "+39", country: "Italy" },
    { code: "+7", country: "Russia/Kazakhstan" },
  ]);
  const [dropdownState, setDropdownState] = useState({
      activeDropdown: null,
      filterText: "",
    });
  
    // Toggle dropdown visibility
    const toggleDropdown = (field) => {
      setDropdownState((prevState) => ({
        activeDropdown: prevState.activeDropdown === field ? null : field,
        filterText: "",
      }));
    };
  
    // Handle dropdown selection
    const handleDropdownSelect = (field, value) => {
      setFormData((prevState) => ({ ...prevState, [field]: value }));
      setDropdownState({ activeDropdown: null, filterText: "" });
    };
  
    // Handle filter input change for dropdown
    const handleFilterChange = (e) => {
      setDropdownState((prevState) => ({ ...prevState, filterText: e.target.value }));
    };
  const [dataList, setDataList] = useState({});

  // Fetch property data by ppcId
  useEffect(() => {
    if (!ppcId) return;  // Prevent fetching if ppcId is not available

    const fetchPropertyData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch-data?ppcId=${ppcId}`);
        const data = response.data.user;

        setFormData({
          phoneNumber: data.phoneNumber || "",
          rentalPropertyAddress: data.rentalPropertyAddress || "",
          state: data.state || "",
          city: data.city || "",
          district: data.district || "",
          area: data.area || "",
          streetName: data.streetName || "",
          doorNumber: data.doorNumber || "",
          nagar: data.nagar || "",
          ownerName: data.ownerName || "",
          email: data.email || "",
          alternatePhone: data.alternatePhone || "",
          countryCode: data.countryCode || "+91",
          propertyMode: data.propertyMode || "",
          propertyType: data.propertyType || "",
          bankLoan: data.bankLoan || "",
          negotiation: data.negotiation || "",
          ownership: data.ownership || "",
          bedrooms: data.bedrooms || "",
          kitchen: data.kitchen || "",
          kitchenType: data.kitchenType || "",
          balconies: data.balconies || "",
          floorNo: data.floorNo || "",
          areaUnit: data.areaUnit || "",
          propertyApproved: data.propertyApproved || "",
          propertyAge: data.propertyAge || "",
          postedBy: data.postedBy || "",
          facing: data.facing || "",
          salesMode: data.salesMode || "",
          salesType: data.salesType || "",
          furnished: data.furnished || "",
          lift: data.lift || "",
          attachedBathrooms: data.attachedBathrooms || "",
          western: data.western || "",
          numberOfFloors: data.numberOfFloors || "",
          carParking: data.carParking || "",
          bestTimeToCall: data.bestTimeToCall || "",
        });

        // Optionally set photos and video data
        // setPhotos(data.photos || []);
        // setVideo(data.video || null);
      } catch (error) {
        console.error('Error fetching property data:', error);
        toast.error('Failed to fetch property details');
      }
    };

    fetchPropertyData();
  }, [ppcId]);

  // Fetch dropdown data for select fields
  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch`);
        const groupedData = response.data.data.reduce((acc, item) => {
          if (!acc[item.field]) acc[item.field] = [];
          acc[item.field].push(item.value);
          return acc;
        }, {});
        setDataList(groupedData);
      } catch (error) {
        console.error("Error fetching dropdown data:", error);
      }
    };

    fetchDropdownData();
  }, []);

  // Handle field changes for form data
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 50 * 1024 * 1024; // 50MB
    if (file.size > maxSize) {
      alert('File size exceeds the 50MB limit');
      return;
    }
    setVideo(file);
  };
  const removeVideo = () => {
    setVideo(null);
  };
  // const handlePhotoUpload = (e) => {
  //   const files = Array.from(e.target.files);
  //   const maxSize = 10 * 1024 * 1024; // 10MB size limit
  //   if (photos.length + files.length <= 15) {
  //     files.forEach((file) => {
  //       if (file.size > maxSize) {
  //         alert('File size exceeds the 10MB limit');
  //         return;
  //       }
  //     });
  //     setPhotos([...photos, ...files]);
  //     setSelectedPhotoIndex(0);
  //   } else {
  //     alert('Maximum 15 photos can be uploaded.');
  //   }
  // };

  // const removePhoto = (index) => {
  //   setPhotos(photos.filter((_, i) => i !== index));
  //   if (index === selectedPhotoIndex) {
  //     setSelectedPhotoIndex(0);
  //   }
  // };


  

  
  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const maxSize = 10 * 1024 * 1024; 
    for (let file of files) {
      if (file.size > maxSize) {
        alert('File size exceeds the 10MB limit');
        return;
      }
    }
    if (photos.length + files.length <= 15) {
      setPhotos([...photos, ...files]);
      setSelectedPhotoIndex(0); 
    } else {
      alert('Maximum 15 photos can be uploaded.');
    }
  };

  const removePhoto = (index) => {
    setPhotos(photos.filter((_, i) => i !== index));
    if (index === selectedPhotoIndex) {
      setSelectedPhotoIndex(0); 
    }
  };

  
  const handlePhotoSelect = (index) => {
    setSelectedPhotoIndex(index); 
  };


  // Revoke object URLs when component unmounts or photos change
  useEffect(() => {
    return () => {
      photos.forEach((photo) => {
        if (photo instanceof Blob) {
          URL.revokeObjectURL(photo);
        }
      });
    };
  }, [photos]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ppcId) {
      alert("PPC-ID is required. Please refresh or try again.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("ppcId", ppcId);

    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    photos.forEach((photo) => {
      formDataToSend.append("photos", photo);
    });

    if (video) {
      formDataToSend.append("video", video);
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/update-property`,
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error saving property data:", error);
    }
  };
     const fieldIcons = {
        phoneNumber: <FaPhone color="#2F747F" />,
        rentalPropertyAddress: <MdLocationCity color="#2F747F" />,
        state: <MdLocationCity color="#2F747F" />,
        city: <FaCity color="#2F747F" />,
        district: <RiLayoutLine color="#2F747F" />,
        area: <FaCity color="#2F747F" />,
        streetName: <RiLayoutLine color="#2F747F" />,
        doorNumber: <FaRegBuilding color="#2F747F" />,
        nagar: <FaRegAddressCard color="#2F747F" />,
        ownerName: <FaRegBuilding color="#2F747F" />,
        email: <FaEnvelope color="#2F747F" />,
        alternatePhone: <FaPhone color="#2F747F" />,
        propertyMode: <MdApproval color="#2F747F" />,
        propertyType: <FaRegBuilding color="#2F747F" />,
        bankLoan: <BsBank color="#2F747F" />,
        negotiation: <FaRupeeSign color="#2F747F" />,
        ownership: <FaUserAlt color="#2F747F" />,
        bedrooms: <FaBed color="#2F747F" />,
        kitchen: <FaKitchenSet color="#2F747F" />,
        kitchenType: <FaKitchenSet color="#2F747F" />,
        balconies: <FaRegBuilding color="#2F747F" />,
        floorNo: <BsBuildingsFill color="#2F747F" />,
        areaUnit: <FaChartArea color="#2F747F" />,
        propertyApproved: <FaCheckCircle color="#2F747F" />,
        propertyAge: <FaCalendarAlt color="#2F747F" />,
        postedBy: <FaRegBuilding color="#2F747F" />,
        facing: <GiHouse color="#2F747F" />,
        salesMode: <GiGears color="#2F747F" />,
        salesType: <FaRegBuilding color="#2F747F" />,
        furnished: <FaHome color="#2F747F" />,
        lift: <FaRegBuilding color="#2F747F" />,
        attachedBathrooms: <FaBath color="#2F747F" />,
        western: <FaBath color="#2F747F" />,
        numberOfFloors: <BsBuildingsFill color="#2F747F" />,
        carParking: <FaCar color="#2F747F" />,
        bestTimeToCall: <FaClock color="#2F747F" />,
      };
    const renderDropdown = (field) => {
      const options = dataList[field] || [];
      const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(dropdownState.filterText.toLowerCase())
      );
  
      return (
        dropdownState.activeDropdown === field && (
          <div
            className="dropdown-popup"
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#fff',
              width: '100%',
              maxWidth: '400px',
              padding: '10px',
              zIndex: 10,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              overflowY: 'auto',
              maxHeight: '50vh',
              animation: 'popupOpen 0.3s ease-in-out',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <input
                type="text"
                placeholder="Filter options..."
                value={dropdownState.filterText}
                onChange={handleFilterChange}
                style={{
                  width: '80%',
                  padding: '5px',
                  marginBottom: '10px',
                }}
              />
              <button
                type="button"
                onClick={() => toggleDropdown(field)}
                style={{
                  cursor: 'pointer',
                  border: 'none',
                  background: 'none',
                }}
              >
                <FaTimes size={18} color="red" />
              </button>
            </div>
            <ul
              style={{
                listStyleType: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              {filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setFormData((prevState) => ({
                      ...prevState,
                      [field]: option,
                    }));
                    toggleDropdown(field);
                  }}
                  style={{
                    padding: '5px',
                    cursor: 'pointer',
                    backgroundColor: '#f9f9f9',
                    marginBottom: '5px',
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )
      );
    };
  return (
    <div className="d-flex align-items-center justify-content-center">
    <div style={{
      width: '100%',
      maxWidth: '450px',
      minWidth: '300px',
      padding: '5px',
      borderRadius: '8px',
      margin: '0 5px',
    }} 
    >
      <h1>Edit Property</h1>

       <form onSubmit={handleSubmit} className="w-100">
        <p className="p-3" style={{ color: "white", backgroundColor: "rgb(47,116,127)" }}>PPC-ID: {ppcId}</p>


         {/* Upload Photos */}
         <div className="form-group photo-upload-container mt-2">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    name="photos"
                    id="photo-upload"
                    className="photo-upload-input"
                  />
                  <label htmlFor="photo-upload " className="photo-upload-label fw-normal m-0">
                    <MdAddPhotoAlternate
                      style={{
                        color: 'white',
                        backgroundColor: '#2e86e4',
                        padding: '5px',
                        fontSize: '30px',
                        borderRadius: '50%',
                        marginRight: '5px',
                      }}
                    />
                    Upload Your Property Images
                  </label>
                </div>

                {photos.length > 0 && (
                  <div className="uploaded-photos">
                    <h4>Uploaded Photos</h4>
                    <div className="uploaded-photos-grid">
                      {photos.map((photo, index) => (
                        <div key={index} className="uploaded-photo-item">
                          <input
                            type="radio"
                            name="selectedPhoto"
                            className='me-1 '
                            checked={selectedPhotoIndex === index}
                            onChange={() => handlePhotoSelect(index)}
                          />
                          <img
                            src={URL.createObjectURL(photo)}
                            alt="Uploaded"
                            className="uploaded-photo mb-3 "
                          />
                          <button
                            className="remove-photo-btn"
                            onClick={() => removePhoto(index)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}


<h4 style={{ color: "rgb(47,116,127)", fontWeight: "bold", marginBottom: "10px" }}> Property Video  </h4>
        {/* Video Upload Section */}
        <div className="form-group">
          <input
            type="file"
            name="video"
            accept="video/*"
            id="videoUpload"
            onChange={handleVideoChange}
            className="d-none"
          />
          <label htmlFor="videoUpload" className="file-upload-label fw-normal">
            <span className=" pt-5">
              <FaFileVideo
                style={{
                  color: 'white',
                  backgroundColor: '#2e86e4',
                  padding: '5px',
                  fontSize: '30px',
                  marginRight: '5px',
                }}
              />
              Upload Property Video
            </span>
          </label>

          {/* Display the selected video */}
          {video && (
  <div className="selected-video-container">
    <h4 className="text-start">Selected Video:</h4>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <video width="200" controls>
        <source src={URL.createObjectURL(video)} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Button
        variant="danger"
        // onClick={() => setVideo(null)}
        // style={{ height: '40px' }}
        onClick={removeVideo}
        style={{ height: '40px' }}
      >
        Remove
      </Button>
    </div>
  </div>
)}
</div>



  <div>
  {/* Property Mode */}
  <div className="form-group">
    <label style={{ width: '100%'}}>
    <label>Property Mode</label>

      <div style={{ display: "flex", alignItems: "center", width:"100%" }}>
        <div style={{ flex: "1" }}>
          <select
            name="propertyMode"
            value={formData.propertyMode || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select Property Mode</option>
            {dataList.propertyMode?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("propertyMode")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.propertyMode || <FaHome />}
            </span>
            {formData.propertyMode || "Select Property Mode"}
          </button>

          {renderDropdown("propertyMode")}
        </div>
      </div>
    </label>
  </div>


  <div className="form-group">
    <label style={{ width: '100%'}}>
<label>Property Type</label>
      <div style={{ display: "flex", alignItems: "center"}}>
        <div style={{ flex: "1" }}>
          <select
            name="propertyType"
            value={formData.propertyType || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select property Type</option>
            {dataList.propertyType?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("propertyType")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.propertyType || <FaHome />}
            </span>
            {formData.propertyType || "Select Property Type"}
          </button>

          {renderDropdown("propertyType")}
        </div>
      </div>
    </label>
  </div>
  {/* Price */}
 
  <div className="form-group">
  <label>Price:</label>
  <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
    <FaRupeeSign className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
    <input
      type="tel"
      name="price"
      value={formData.price}
      onChange={handleFieldChange}
      className="form-input m-0"
      placeholder="price"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
  </div>
  {/* Property Age */}
  <div className="form-group">
    <label style={{ width: '100%'}}>
    <label>Property Age </label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="propertyAge"
            value={formData.propertyAge || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select Property Age</option>
            {dataList.propertyAge?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("propertyAge")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.propertyAge || <FaHome />}
            </span>
            {formData.propertyAge || "Select Property Age"}
          </button>

          {renderDropdown("propertyAge")}
        </div>
      </div>
    </label>
  </div>

  {/* Bank Loan */}

  <div className="form-group">
    <label style={{ width: '100%'}}>
    <label>Bank Loan </label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="bankLoan"
            value={formData.bankLoan || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select Bank Loan</option>
            {dataList.bankLoan?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("bankLoan")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.bankLoan || <FaHome />}
            </span>
            {formData.bankLoan || "Select Bank Loan"}
          </button>

          {renderDropdown("bankLoan")}
        </div>
      </div>
    </label>
  </div>

  </div>
{/* // )} */}


{/* {currentStep >= 2 && ( */}
                <div>
  {/* Negotiation */}

  <div className="form-group">
    <label style={{ width: '100%'}}>
    <label>Negotiation </label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="negotiation"
            value={formData.negotiation || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select negotiation</option>
            {dataList.negotiation?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("negotiation")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.negotiation || <FaHome />}
            </span>
            {formData.negotiation || "Selectnegotiation"}
          </button>

          {renderDropdown("negotiation")}
        </div>
      </div>
    </label>
  </div>

  {/* Length */} 
  <div className="form-group">
  <label>length:</label>
  <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
    <FaRegAddressCard className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
    <input
      type="text"
      name="length"
      value={formData.length}
      onChange={handleFieldChange}
      className="form-input m-0"
      placeholder="length"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
</div>
  {/* Breadth */}
  <div className="form-group">
  <label>breadth:</label>
  <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
    <FaRegAddressCard className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
    <input
      type="text"
      name="breadth"
      value={formData.breadth}
      onChange={handleFieldChange}
      className="form-input m-0"
      placeholder="breadth"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
  </div>
  {/* Total Area */}
  <div className="form-group">
  <label>Total Area:</label>
  <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
    <FaRegAddressCard className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
    <input
      type="text"
      name="totalArea"
      value={formData.totalArea}
      onChange={handleFieldChange}
      className="form-input m-0"
      placeholder="totalArea"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
  </div>

    {/* areaUnit */}
    <div className="form-group">
    <label style={{ width: '100%'}}>
    <label>area Unit </label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="areaUnit"
            value={formData.areaUnit || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select areaUnit</option>
            {dataList.areaUnit?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("areaUnit")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.areaUnit || <FaHome />}
            </span>
            {formData.areaUnit || "Select areaUnit"}
          </button>

          {renderDropdown("areaUnit")}
        </div>
      </div>
    </label>
  </div>

  {/* Ownership */}
  <div className="form-group">
    <label style={{ width: '100%'}}>
    <label>Ownership </label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="ownership"
            value={formData.ownership || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select ownership</option>
            {dataList.ownership?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("ownership")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.ownership || <FaHome />}
            </span>
            {formData.ownership || "Select ownership"}
          </button>

          {renderDropdown("ownership")}
        </div>
      </div>
    </label>
  </div>

  </div>


                <div>
  {/* Bedrooms */}

<div className="form-group">
    <label style={{ width: '100%'}}>
    <label>bedrooms </label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="bedrooms"
            value={formData.bedrooms || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select bedrooms</option>
            {dataList.bedrooms?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("bedrooms")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.bedrooms || <FaHome />}
            </span>
            {formData.bedrooms || "Select bedrooms"}
          </button>

          {renderDropdown("bedrooms")}
        </div>
      </div>
    </label>
  </div>
  {/* kitchen */}
  <div className="form-group">
    <label style={{ width: '100%'}}>
    <label>kitchen </label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="kitchen"
            value={formData.kitchen || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select kitchen</option>
            {dataList.kitchen?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("kitchen")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.kitchen || <FaHome />}
            </span>
            {formData.kitchen || "Select kitchen"}
          </button>

          {renderDropdown("kitchen")}
        </div>
      </div>
    </label>
  </div>
    {/* kitchenType */}
    <div className="form-group">
    <label style={{ width: '100%'}}>
    <label>kitchenType </label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="kitchenType"
            value={formData.kitchenType || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select kitchenType</option>
            {dataList.kitchenType?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("kitchenType")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.kitchenType || <FaHome />}
            </span>
            {formData.kitchenType || "Select kitchenType"}
          </button>

          {renderDropdown("kitchenType")}
        </div>
      </div>
    </label>
  </div>
    {/* balconies */}
    <div className="form-group">
    <label style={{ width: '100%'}}>
    <label>balconies </label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="balconies"
            value={formData.balconies || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select balconies</option>
            {dataList.balconies?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("balconies")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.balconies || <FaHome />}
            </span>
            {formData.balconies || "Select balconies"}
          </button>

          {renderDropdown("balconies")}
        </div>
      </div>
    </label>
  </div>
    {/* floorNo */}
    <div className="form-group">
    <label style={{ width: '100%'}}>
    <label>floorNo </label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="floorNo"
            value={formData.floorNo || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select floorNo</option>
            {dataList.floorNo?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("floorNo")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.floorNo || <FaHome />}
            </span>
            {formData.floorNo || "Select floorNo"}
          </button>

          {renderDropdown("floorNo")}
        </div>
      </div>
    </label>
  </div>
  </div>
  

                <div>
    {/* propertyApproved */}

    <div className="form-group">
    <label style={{ width: '100%'}}>
    <label>property Approved</label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="propertyApproved"
            value={formData.propertyApproved || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select propertyApproved</option>
            {dataList.propertyApproved?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("propertyApproved")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.propertyApproved || <FaHome />}
            </span>
            {formData.propertyApproved || "Select propertyApproved"}
          </button>

          {renderDropdown("propertyApproved")}
        </div>
      </div>
    </label>
  </div>

    {/* postedBy */}
    <div className="form-group">
    <label style={{ width: '100%'}}>
    <label>postedBy</label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="postedBy"
            value={formData.postedBy || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select postedBy</option>
            {dataList.postedBy?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("postedBy")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.postedBy || <FaHome />}
            </span>
            {formData.postedBy || "Select postedBy"}
          </button>

          {renderDropdown("postedBy")}
        </div>
      </div>
    </label>
  </div>
    {/* facing */}
    <div className="form-group">

    <label style={{ width: '100%'}}>
    <label>facing</label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="facing"
            value={formData.facing || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select facing</option>
            {dataList.facing?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("facing")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.facing || <FaHome />}
            </span>
            {formData.facing || "Select facing"}
          </button>

          {renderDropdown("facing")}
        </div>
      </div>
    </label>
  </div>
    {/* salesMode */}

    <div className="form-group">
    <label style={{ width: '100%'}}>
    <label>sales Mode</label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="salesMode"
            value={formData.salesMode || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select salesMode</option>
            {dataList.salesMode?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("salesMode")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.salesMode || <FaHome />}
            </span>
            {formData.salesMode || "Select salesMode"}
          </button>

          {renderDropdown("salesMode")}
        </div>
      </div>
    </label>
  </div>
    {/* salesType */}
    <div className="form-group">
    <label style={{ width: '100%'}}>
      <label>Sale Type</label>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="salesType"
            value={formData.salesType || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select salesType</option>
            {dataList.salesType?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("salesType")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.salesType || <FaHome />}
            </span>
            {formData.salesType || "Select salesType"}
          </button>

          {renderDropdown("salesType")}
        </div>
      </div>
    </label>
  </div>
  </div>


  {/* Description */}
  <div className="form-group">
    <label>Description:</label>
    <textarea name="description" onChange={handleFieldChange} className="form-control" placeholder="Enter Description"></textarea>
  </div>

                <div>
  {/* furnished */}
  <div className="form-group">
    <label style={{width:"100%"}}>
    <label>furnished</label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="furnished"
            value={formData.furnished || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select furnished</option>
            {dataList.furnished?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("furnished")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.furnished || <FaHome />}
            </span>
            {formData.furnished || "Select furnished"}
          </button>

          {renderDropdown("furnished")}
        </div>
      </div>
    </label>
  </div>
    {/*lift */}
    <div className="form-group">
    <label style={{ width: '100%'}}>
      <label>lift</label>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="lift"
            value={formData.lift || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select lift</option>
            {dataList.lift?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("lift")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.lift || <FaHome />}
            </span>
            {formData.lift || "Select lift"}
          </button>

          {renderDropdown("lift")}
        </div>
      </div>
    </label>
  </div>

      {/*attachedBathrooms */}
      <div className="form-group">
    <label style={{ width: '100%'}}>
    <label>attached Bathrooms</label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="attachedBathrooms"
            value={formData.attachedBathrooms || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select attachedBathrooms</option>
            {dataList.attachedBathrooms?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("attachedBathrooms")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.attachedBathrooms || <FaHome />}
            </span>
            {formData.attachedBathrooms || "Select attachedBathrooms"}
          </button>

          {renderDropdown("attachedBathrooms")}
        </div>
      </div>
    </label>
  </div>
    {/* western */}
    <div className="form-group">

    <label style={{ width: '100%'}}>
    <label>western</label>

      <div style={{ display: "flex", alignItems: "center"}}>
        <div style={{ flex: "1" }}>
          <select
            name="western"
            value={formData.western || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select western</option>
            {dataList.western?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("western")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.western || <FaHome />}
            </span>
            {formData.western || "Select western"}
          </button>

          {renderDropdown("western")}
        </div>
      </div>
    </label>
  </div>
    {/* numberOfFloors */}
    <div className="form-group">

    <label style={{ width: '100%'}}>
    <label>number Of Floors</label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="numberOfFloors"
            value={formData.numberOfFloors || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select numberOfFloors</option>
            {dataList.numberOfFloors?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("numberOfFloors")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.numberOfFloors || <FaHome />}
            </span>
            {formData.numberOfFloors || "Select numberOfFloors"}
          </button>

          {renderDropdown("numberOfFloors")}
        </div>
      </div>
    </label>
  </div>
    {/* carParking */}

    <div className="form-group">
    <label style={{ width: '100%'}}>
    <label>car Parking</label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="carParking"
            value={formData.carParking || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select carParking</option>
            {dataList.carParking?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("carParking")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.carParking || <FaHome />}
            </span>
            {formData.carParking || "Select carParking"}
          </button>

          {renderDropdown("carParking")}
        </div>
      </div>
    </label>
  </div>
  </div>


  {/*   rentalPropertyAddress */}
<div>
  <div className="form-group">
<label>rental Property Address:</label>

<div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', border: '1px solid #2F747F', background:"#fff"}}>
    <FaHome className="input-icon" 
    style={{color: '#2F747F', marginLeft:"10px"}} />
    <input
      type="text"
      name="rentalPropertyAddress"
      value={formData.rentalPropertyAddress}
      onChange={handleFieldChange}
      className="form-input m-0"
      placeholder="Rental Property Address"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
</div>


  {/* country */}

  <div className="form-group">
  <label>country:</label>
  <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
    <BiWorld className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
    <input
      type="text"
      name="country"
      value={formData.country}
      onChange={handleFieldChange}
      className="form-input m-0"
      placeholder="country"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
  </div>
  
  {/* State */}

<div className="form-group">
  <label>State:</label>
  <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
    <MdLocationCity className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
    <input
      type="text"
      name="state"
      value={formData.state}
      onChange={handleFieldChange}
      className="form-input m-0"
      placeholder="State"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
</div>
  {/* City */}

<div className="form-group">
  <label>City:</label>
  <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
    <FaCity className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
    <input
      type="text"
      name="city"
      value={formData.city}
      onChange={handleFieldChange}
      className="form-input m-0"
      placeholder="City"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
</div>

  {/* district */}
  <div className="form-group">
  <label>District:</label>
  <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
    <FaRegAddressCard className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
    <input
      type="text"
      name="district"
      value={formData.district}
      onChange={handleFieldChange}
      className="form-input m-0"
      placeholder="District"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
</div>
  {/* area */}
  <div className="form-group">
  <label>Area:</label>
  <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
    <MdLocationOn className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
    <input
      type="text"
      name="area"
      value={formData.area}
      onChange={handleFieldChange}
      className="form-input m-0"
      placeholder="Area"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
</div>
  {/* streetName */}
  <div className="form-group">
  <label>Street Name:</label>
  <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
    <FaRoad className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
    <input
      type="text"
      name="streetName"
      value={formData.streetName}
      onChange={handleFieldChange}
      className="form-input m-0"
      placeholder="Street Name"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
</div>
  {/* doorNumber */}
  <div className="form-group">
  <label>Door Number:</label>
  <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
    <FaDoorClosed className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
    <input
      type="text"
      name="doorNumber"
      value={formData.doorNumber}
      onChange={handleFieldChange}
      className="form-input m-0"
      placeholder="Door Number"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
  </div>

  {/* Nagar */}
  <div className="form-group">
  <label>Nagar:</label>
  <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
    <FaMapPin className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
    <input
      type="text"
      name="nagar"
      value={formData.nagar}
      onChange={handleFieldChange}
      className="form-input m-0"
      placeholder="Nagar"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
</div>
  {/* Owner Name */}

  

<div className="form-group">
  <label>Owner Name:</label>
  <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
    <FaUserAlt className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
    <input
      type="text"
      name="ownerName"
      value={formData.ownerName}
      onChange={handleFieldChange}
      className="form-input m-0"
      placeholder="Owner Name"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
</div>

  {/* Email */}
  <div className="form-group">
  <label>Email:</label>
  <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
    <FaEnvelope className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleFieldChange}
      className="form-input m-0"
      placeholder="Email"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
</div>
  {/* Phone Number */}

<div className="form-group">
<label>Phone Number:</label>

  <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
    <FaPhone className="input-icon" style={{ color: '#2F747F', marginLeft:"10px" }} />
    
    <div style={{ flex: '0 0 10%' }}>
      <label>
        <select
          name="countryCode"
          value={formData.countryCode || ""}
          onChange={handleFieldChange}
          className="form-control m-0"
          style={{ width: '100%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
        >
          <option value="">Select Country Code</option>
          {countryCodes.map((item, index) => (
            <option key={index} value={item.code}>
              {item.code} - {item.country}
            </option>
          ))}
        </select>
      </label>
    </div>

    <input
      type="text"
      name="phoneNumber"
      value={formData.phoneNumber}
      readOnly
      className="form-input m-0"
      placeholder="Phone Number"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
</div>
  {/* Alternate Number */}

<div className="form-group">
<label>Alternate number:</label>

  <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
    <FaPhone className="input-icon" style={{ color: '#2F747F', marginLeft:"10px" }} />
    
    <div style={{ flex: '0 1 10%' }}>
      <label>
        <select
          name="countryCode"
          value={formData.countryCode || ""}
          onChange={handleFieldChange}
          className="form-control m-0"
          style={{ width: '100%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
        >
          <option value="">Select Country Code</option>
          {countryCodes.map((item, index) => (
            <option key={index} value={item.code}>
              {item.code} - {item.country}
            </option>
          ))}
        </select>
      </label>
    </div>

    <input
      type="tel"
      name="alternatePhone"
      value={formData.alternatePhone}
      onChange={handleFieldChange}
      className="form-input m-0"
      placeholder="Alternate Phone Number"
      style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
    />
  </div>
</div>

  {/* Best Time to Call */}
  <div className="form-group" >
    <label style={{width:'100%'}}>
    <label>best Time To Call</label>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <select
            name="bestTimeToCall"
            value={formData.bestTimeToCall || ""}
            onChange={handleFieldChange}
            className="form-control"
            style={{ display: "none" }} // Hide the default <select> dropdown
          >
            <option value="">Select bestTimeToCall</option>
            {dataList.bestTimeToCall?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className="m-0"
            type="button"
            onClick={() => toggleDropdown("bestTimeToCall")}
            style={{
              cursor: "pointer",
              border: "1px solid #2F747F",
              padding: "10px",
              background: "#fff",
              borderRadius: "5px",
              width: "100%",
              textAlign: "left",
              color: "#2F747F",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              {fieldIcons.bestTimeToCall || <FaHome />}
            </span>
            {formData.bestTimeToCall || "Select bestTimeToCall"}
          </button>

          {renderDropdown("bestTimeToCall")}
        </div>
      </div>
    </label>
  </div>
  </div>



              {/* Step 3: Submit all data */}
            
                <Button
                  type="submit"
                  style={{ marginTop: '15px', backgroundColor: "rgb(47,116,127)", border:"none" }}
                >
                  update property
                </Button>
       
      </form>
    </div>
    </div>
  );
}

export default EditProperty;











// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { MdAddPhotoAlternate } from "react-icons/md";
// import { FaFileVideo } from "react-icons/fa";
// import { Button } from "react-bootstrap";
// import { useLocation } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaTimes } from 'react-icons/fa';
// import { FaRupeeSign } from 'react-icons/fa';
// import { MdApproval, MdLocationCity, MdOutlineBedroomParent, MdOutlineDescription } from 'react-icons/md';
// import { BsBank } from 'react-icons/bs';
// import { RiLayoutLine } from 'react-icons/ri';
// import { TbArrowLeftRight } from 'react-icons/tb';
// import {FaCouch,FaHandshake,FaTag,FaLocationArrow,FaCalendarAlt,FaArrowUp,FaShower,FaToilet,FaCar,FaCheckCircle,FaUtensils,FaBed, FaMoneyBill,FaPhone, FaRegBuilding, FaCity } from 'react-icons/fa';
// import { FaBuilding , FaHome, FaMapSigns, FaMapMarkerAlt, FaVectorSquare, FaRoad, FaDoorClosed, FaMapPin, FaUserAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';



// import { FaBath, FaChartArea, } from 'react-icons/fa';
// import { FaKitchenSet } from 'react-icons/fa6';
// import { BsBuildingsFill } from 'react-icons/bs';
// import { GiHouse, GiGears } from 'react-icons/gi';
// import { FaClock, FaRegAddressCard } from 'react-icons/fa6';

// function EditProperty() {
//   const location = useLocation();
//   const { ppcId, phoneNumber } = location.state || {};

//   const [formData, setFormData] = useState({
//     phoneNumber: "",
//     rentalPropertyAddress: "",
//     state: "",
//     city: "",
//     district: "",
//     area: "",
//     streetName: "",
//     doorNumber: "",
//     nagar: "",
//     ownerName: "",
//     email: "",
//     alternatePhone: "",
//     countryCode: "+91", // Default value
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

//   const [photos, setPhotos] = useState([]);
//   const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
//   const [video, setVideo] = useState(null);
//   const [countryCodes, setCountryCodes] = useState([
//     { code: "+1", country: "USA/Canada" },
//     { code: "+44", country: "UK" },
//     { code: "+91", country: "India" },
//     { code: "+61", country: "Australia" },
//     { code: "+81", country: "Japan" },
//     { code: "+49", country: "Germany" },
//     { code: "+33", country: "France" },
//     { code: "+34", country: "Spain" },
//     { code: "+55", country: "Brazil" },
//     { code: "+52", country: "Mexico" },
//     { code: "+86", country: "China" },
//     { code: "+39", country: "Italy" },
//     { code: "+7", country: "Russia/Kazakhstan" },
//   ]);
//   const [dropdownState, setDropdownState] = useState({
//       activeDropdown: null,
//       filterText: "",
//     });
  
//     // Toggle dropdown visibility
//     const toggleDropdown = (field) => {
//       setDropdownState((prevState) => ({
//         activeDropdown: prevState.activeDropdown === field ? null : field,
//         filterText: "",
//       }));
//     };
  
//     // Handle dropdown selection
//     const handleDropdownSelect = (field, value) => {
//       setFormData((prevState) => ({ ...prevState, [field]: value }));
//       setDropdownState({ activeDropdown: null, filterText: "" });
//     };
  
//     // Handle filter input change for dropdown
//     const handleFilterChange = (e) => {
//       setDropdownState((prevState) => ({ ...prevState, filterText: e.target.value }));
//     };
//   const [dataList, setDataList] = useState({});

//   // Fetch property data by ppcId
//   useEffect(() => {
//     if (!ppcId) return;  // Prevent fetching if ppcId is not available

//     const fetchPropertyData = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch-data?ppcId=${ppcId}`);
//         const data = response.data.user;

//         setFormData({
//           phoneNumber: data.phoneNumber || "",
//           rentalPropertyAddress: data.rentalPropertyAddress || "",
//           state: data.state || "",
//           city: data.city || "",
//           district: data.district || "",
//           area: data.area || "",
//           streetName: data.streetName || "",
//           doorNumber: data.doorNumber || "",
//           nagar: data.nagar || "",
//           ownerName: data.ownerName || "",
//           email: data.email || "",
//           alternatePhone: data.alternatePhone || "",
//           countryCode: data.countryCode || "+91",
//           propertyMode: data.propertyMode || "",
//           propertyType: data.propertyType || "",
//           bankLoan: data.bankLoan || "",
//           negotiation: data.negotiation || "",
//           ownership: data.ownership || "",
//           bedrooms: data.bedrooms || "",
//           kitchen: data.kitchen || "",
//           kitchenType: data.kitchenType || "",
//           balconies: data.balconies || "",
//           floorNo: data.floorNo || "",
//           areaUnit: data.areaUnit || "",
//           propertyApproved: data.propertyApproved || "",
//           propertyAge: data.propertyAge || "",
//           postedBy: data.postedBy || "",
//           facing: data.facing || "",
//           salesMode: data.salesMode || "",
//           salesType: data.salesType || "",
//           furnished: data.furnished || "",
//           lift: data.lift || "",
//           attachedBathrooms: data.attachedBathrooms || "",
//           western: data.western || "",
//           numberOfFloors: data.numberOfFloors || "",
//           carParking: data.carParking || "",
//           bestTimeToCall: data.bestTimeToCall || "",
//         });

//         // Optionally set photos and video data
//         // setPhotos(data.photos || []);
//         // setVideo(data.video || null);
//       } catch (error) {
//         console.error('Error fetching property data:', error);
//         toast.error('Failed to fetch property details');
//       }
//     };

//     fetchPropertyData();
//   }, [ppcId]);

//   // Fetch dropdown data for select fields
//   useEffect(() => {
//     const fetchDropdownData = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch`);
//         const groupedData = response.data.data.reduce((acc, item) => {
//           if (!acc[item.field]) acc[item.field] = [];
//           acc[item.field].push(item.value);
//           return acc;
//         }, {});
//         setDataList(groupedData);
//       } catch (error) {
//         console.error("Error fetching dropdown data:", error);
//       }
//     };

//     fetchDropdownData();
//   }, []);

//   // Handle field changes for form data
//   const handleFieldChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };


//   // const handlePhotoUpload = (e) => {
//   //   const files = Array.from(e.target.files);
//   //   const maxSize = 10 * 1024 * 1024; // 10MB size limit
//   //   if (photos.length + files.length <= 15) {
//   //     files.forEach((file) => {
//   //       if (file.size > maxSize) {
//   //         alert('File size exceeds the 10MB limit');
//   //         return;
//   //       }
//   //     });
//   //     setPhotos([...photos, ...files]);
//   //     setSelectedPhotoIndex(0);
//   //   } else {
//   //     alert('Maximum 15 photos can be uploaded.');
//   //   }
//   // };

//   // const removePhoto = (index) => {
//   //   setPhotos(photos.filter((_, i) => i !== index));
//   //   if (index === selectedPhotoIndex) {
//   //     setSelectedPhotoIndex(0);
//   //   }
//   // };


  

  
//   const handlePhotoUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const maxSize = 10 * 1024 * 1024; 
//     for (let file of files) {
//       if (file.size > maxSize) {
//         alert('File size exceeds the 10MB limit');
//         return;
//       }
//     }
//     if (photos.length + files.length <= 15) {
//       setPhotos([...photos, ...files]);
//       setSelectedPhotoIndex(0); 
//     } else {
//       alert('Maximum 15 photos can be uploaded.');
//     }
//   };

//   const removePhoto = (index) => {
//     setPhotos(photos.filter((_, i) => i !== index));
//     if (index === selectedPhotoIndex) {
//       setSelectedPhotoIndex(0); 
//     }
//   };

  
//   const handlePhotoSelect = (index) => {
//     setSelectedPhotoIndex(index); 
//   };


//   // Revoke object URLs when component unmounts or photos change
//   useEffect(() => {
//     return () => {
//       photos.forEach((photo) => {
//         if (photo instanceof Blob) {
//           URL.revokeObjectURL(photo);
//         }
//       });
//     };
//   }, [photos]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!ppcId) {
//       alert("PPC-ID is required. Please refresh or try again.");
//       return;
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append("ppcId", ppcId);

//     Object.keys(formData).forEach((key) => {
//       formDataToSend.append(key, formData[key]);
//     });

//     photos.forEach((photo) => {
//       formDataToSend.append("photos", photo);
//     });

//     if (video) {
//       formDataToSend.append("video", video);
//     }

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/update-property`,
//         formDataToSend,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );
//       alert(response.data.message);
//     } catch (error) {
//       console.error("Error saving property data:", error);
//     }
//   };
//      const fieldIcons = {
//         phoneNumber: <FaPhone color="#2F747F" />,
//         rentalPropertyAddress: <MdLocationCity color="#2F747F" />,
//         state: <MdLocationCity color="#2F747F" />,
//         city: <FaCity color="#2F747F" />,
//         district: <RiLayoutLine color="#2F747F" />,
//         area: <FaCity color="#2F747F" />,
//         streetName: <RiLayoutLine color="#2F747F" />,
//         doorNumber: <FaRegBuilding color="#2F747F" />,
//         nagar: <FaRegAddressCard color="#2F747F" />,
//         ownerName: <FaRegBuilding color="#2F747F" />,
//         email: <FaEnvelope color="#2F747F" />,
//         alternatePhone: <FaPhone color="#2F747F" />,
//         propertyMode: <MdApproval color="#2F747F" />,
//         propertyType: <FaRegBuilding color="#2F747F" />,
//         bankLoan: <BsBank color="#2F747F" />,
//         negotiation: <FaRupeeSign color="#2F747F" />,
//         ownership: <FaUserAlt color="#2F747F" />,
//         bedrooms: <FaBed color="#2F747F" />,
//         kitchen: <FaKitchenSet color="#2F747F" />,
//         kitchenType: <FaKitchenSet color="#2F747F" />,
//         balconies: <FaRegBuilding color="#2F747F" />,
//         floorNo: <BsBuildingsFill color="#2F747F" />,
//         areaUnit: <FaChartArea color="#2F747F" />,
//         propertyApproved: <FaCheckCircle color="#2F747F" />,
//         propertyAge: <FaCalendarAlt color="#2F747F" />,
//         postedBy: <FaRegBuilding color="#2F747F" />,
//         facing: <GiHouse color="#2F747F" />,
//         salesMode: <GiGears color="#2F747F" />,
//         salesType: <FaRegBuilding color="#2F747F" />,
//         furnished: <FaHome color="#2F747F" />,
//         lift: <FaRegBuilding color="#2F747F" />,
//         attachedBathrooms: <FaBath color="#2F747F" />,
//         western: <FaBath color="#2F747F" />,
//         numberOfFloors: <BsBuildingsFill color="#2F747F" />,
//         carParking: <FaCar color="#2F747F" />,
//         bestTimeToCall: <FaClock color="#2F747F" />,
//       };
//     const renderDropdown = (field) => {
//       const options = dataList[field] || [];
//       const filteredOptions = options.filter((option) =>
//         option.toLowerCase().includes(dropdownState.filterText.toLowerCase())
//       );
  
//       return (
//         dropdownState.activeDropdown === field && (
//           <div
//             className="dropdown-popup"
//             style={{
//               position: 'fixed',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               backgroundColor: '#fff',
//               width: '100%',
//               maxWidth: '400px',
//               padding: '10px',
//               zIndex: 10,
//               boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//               borderRadius: '8px',
//               overflowY: 'auto',
//               maxHeight: '50vh',
//               animation: 'popupOpen 0.3s ease-in-out',
//             }}
//           >
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//               }}
//             >
//               <input
//                 type="text"
//                 placeholder="Filter options..."
//                 value={dropdownState.filterText}
//                 onChange={handleFilterChange}
//                 style={{
//                   width: '80%',
//                   padding: '5px',
//                   marginBottom: '10px',
//                 }}
//               />
//               <button
//                 type="button"
//                 onClick={() => toggleDropdown(field)}
//                 style={{
//                   cursor: 'pointer',
//                   border: 'none',
//                   background: 'none',
//                 }}
//               >
//                 <FaTimes size={18} color="red" />
//               </button>
//             </div>
//             <ul
//               style={{
//                 listStyleType: 'none',
//                 padding: 0,
//                 margin: 0,
//               }}
//             >
//               {filteredOptions.map((option, index) => (
//                 <li
//                   key={index}
//                   onClick={() => {
//                     setFormData((prevState) => ({
//                       ...prevState,
//                       [field]: option,
//                     }));
//                     toggleDropdown(field);
//                   }}
//                   style={{
//                     padding: '5px',
//                     cursor: 'pointer',
//                     backgroundColor: '#f9f9f9',
//                     marginBottom: '5px',
//                   }}
//                 >
//                   {option}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )
//       );
//     };
//   return (
//     <div>
//       <h1>Edit Property</h1>
//       <form onSubmit={handleSubmit}>
//         <p className="p-3" style={{ color: "white", backgroundColor: "rgb(47,116,127)" }}>
//           PPC-ID: {ppcId}
//         </p>

//         {/* Photo Upload */}
//          {/* <div>
//           <input
//             type="file"
//             multiple
//             accept="image/*"
//             onChange={handlePhotoUpload}
//             name="photos"
//             id="photo-upload"
//             className="photo-upload-input"
//           />
//           <label htmlFor="photo-upload" className="photo-upload-label fw-normal m-0">
//             <MdAddPhotoAlternate
//               style={{
//                 color: "white",
//                 backgroundColor: "#2e86e4",
//                 padding: "5px",
//                 fontSize: "30px",
//                 borderRadius: "50%",
//                 marginRight: "5px",
//               }}
//             />
//             Upload Property Images
//           </label>
//         </div>

//         {photos.length > 0 && (
//           <div className="uploaded-photos">
//             <h4>Uploaded Photos</h4>
//             <div className="uploaded-photos-grid">
//               {photos.map((photo, index) => (
//                 <div key={index} className="uploaded-photo-item">
//                   <input
//                     type="radio"
//                     name="selectedPhoto"
//                     className="me-1"
//                     checked={selectedPhotoIndex === index}
//                     onChange={() => setSelectedPhotoIndex(index)}
//                   />
//                   {photo instanceof Blob ? (
//                     <img
//                       src={URL.createObjectURL(photo)}  // Safe to use since we validated photo as Blob
//                       alt="Uploaded"
//                       className="uploaded-photo mb-3"
//                     />
//                   ) : (
//                     <p>Invalid image</p>  // Display message for invalid data
//                   )}
//                   <button className="remove-photo-btn" onClick={() => removePhoto(index)}>
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )} 
//     */}

//         {/* Video Upload */}
//         {/* <h4 style={{ color: "rgb(47,116,127)", fontWeight: "bold", marginBottom: "10px" }}>
//           Property Video
//         </h4>
//         <div className="form-group">
//           <input
//             type="file"
//             name="video"
//             accept="video/*"
//             id="videoUpload"
//             onChange={(e) => setVideo(e.target.files[0])}
//             className="d-none"
//           />
//           <label htmlFor="videoUpload" className="file-upload-label fw-normal">
//             <span className="ps-5 pt-5">
//               <FaFileVideo
//                 style={{
//                   color: "white",
//                   backgroundColor: "#2e86e4",
//                   padding: "5px",
//                   fontSize: "30px",
//                   marginRight: "5px",
//                 }}
//               />
//               Upload Property Video
//             </span>
//           </label>
//         </div>
//         {video && (
//           <div className="selected-video-container">
//             <h4 className="text-start">Selected Video:</h4>
//             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//               <video width="200" controls>
//                 <source src={URL.createObjectURL(video)} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <Button variant="danger" onClick={() => setVideo(null)} style={{ height: "40px" }}>
//                 Remove
//               </Button>
//             </div>
//           </div>
//         )} */}

//         {/* Form Fields */}
//         {/* <div className="form-group">
//           <label>Phone Number:</label>
//           <input
//             type="text"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleFieldChange}
//             className="form-control"
//           />
//         </div> */}
// <div className="form-group">
// <label>Phone Number:</label>

//   <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
//     <FaPhone className="input-icon" style={{ color: '#2F747F', marginLeft:"10px" }} />
    
//     <div style={{ flex: '0 0 10%' }}>
//       <label>
//         <select
//           name="countryCode"
//           value={formData.countryCode || ""}
//           onChange={handleFieldChange}
//           className="form-control m-0"
//           style={{ width: '100%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
//         >
//           <option value="">Select Country Code</option>
//           {countryCodes.map((item, index) => (
//             <option key={index} value={item.code}>
//               {item.code} - {item.country}
//             </option>
//           ))}
//         </select>
//       </label>
//     </div>

//     <input
//       type="text"
//       name="phoneNumber"
//       value={formData.phoneNumber}
//       onChange={handleFieldChange}
//       className="form-input m-0"
//       placeholder="Phone Number"
//       style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
//     />
//   </div>
// </div>

   
//        <div className="form-group">
//        <label>rental Property Address:</label>
       
//        <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', border: '1px solid #2F747F', background:"#fff"}}>
//            <FaHome className="input-icon" 
//            style={{color: '#2F747F', marginLeft:"10px"}} />
//            <input
//              type="text"
//              name="rentalPropertyAddress"
//              value={formData.rentalPropertyAddress}
//              onChange={handleFieldChange}
//              className="form-input m-0"
//              placeholder="Rental Property Address"
//              style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
//            />
//          </div>
//        </div>
//        <div className="form-group">
//          <label>State:</label>
//          <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
//            <FaMapSigns className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
//            <input
//              type="text"
//              name="state"
//              value={formData.state}
//              onChange={handleFieldChange}
//              className="form-input m-0"
//              placeholder="State"
//              style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
//            />
//          </div>
//        </div>
//   <div className="form-group">
//     <label>City:</label>
//     <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
//       <FaCity className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
//       <input
//         type="text"
//         name="city"
//         value={formData.city}
//         onChange={handleFieldChange}
//         className="form-input m-0"
//         placeholder="City"
//         style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
//       />
//     </div>
//   </div>
//    <div className="form-group">
//      <label>District:</label>
//      <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
//        <FaMapMarkerAlt className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
//        <input
//          type="text"
//          name="district"
//          value={formData.district}
//          onChange={handleFieldChange}
//          className="form-input m-0"
//          placeholder="District"
//          style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
//        />
//      </div>
//    </div>
//       <div className="form-group">
//         <label>Area:</label>
//         <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
//           <FaVectorSquare className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
//           <input
//             type="text"
//             name="area"
//             value={formData.area}
//             onChange={handleFieldChange}
//             className="form-input m-0"
//             placeholder="Area"
//             style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
//           />
//         </div>
//       </div>
//        <div className="form-group">
//          <label>Street Name:</label>
//          <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
//            <FaRoad className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
//            <input
//              type="text"
//              name="streetName"
//              value={formData.streetName}
//              onChange={handleFieldChange}
//              className="form-input m-0"
//              placeholder="Street Name"
//              style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
//            />
//          </div>
//        </div>
//      <div className="form-group">
//        <label>Door Number:</label>
//        <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
//          <FaDoorClosed className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
//          <input
//            type="text"
//            name="doorNumber"
//            value={formData.doorNumber}
//            onChange={handleFieldChange}
//            className="form-input m-0"
//            placeholder="Door Number"
//            style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
//          />
//        </div>
//      </div>
//       <div className="form-group">
//         <label>Nagar:</label>
//         <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
//           <FaMapPin className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
//           <input
//             type="text"
//             name="nagar"
//             value={formData.nagar}
//             onChange={handleFieldChange}
//             className="form-input m-0"
//             placeholder="Nagar"
//             style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
//           />
//         </div>
//       </div>
//    <div className="form-group">
//      <label>Owner Name:</label>
//      <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
//        <FaUserAlt className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
//        <input
//          type="text"
//          name="ownerName"
//          value={formData.ownerName}
//          onChange={handleFieldChange}
//          className="form-input m-0"
//          placeholder="Owner Name"
//          style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
//        />
//      </div>
//    </div>
//   <div className="form-group">
//     <label>Email:</label>
//     <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
//       <FaEnvelope className="input-icon" style={{color: '#2F747F', marginLeft:"10px"}} />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleFieldChange}
//         className="form-input m-0"
//         placeholder="Email"
//         style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
//       />
//     </div>
//   </div>
// <div className="form-group">
// <label>Alternate number:</label>

//   <div className="input-card p-0 rounded-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  border: '1px solid #2F747F', background:"#fff" }}>
//     <FaPhone className="input-icon" style={{ color: '#2F747F', marginLeft:"10px" }} />
    
//     <div style={{ flex: '0 1 10%' }}>
//       <label>
//         <select
//           name="countryCode"
//           value={formData.countryCode || ""}
//           onChange={handleFieldChange}
//           className="form-control m-0"
//           style={{ width: '100%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
//         >
//           <option value="">Select Country Code</option>
//           {countryCodes.map((item, index) => (
//             <option key={index} value={item.code}>
//               {item.code} - {item.country}
//             </option>
//           ))}
//         </select>
//       </label>
//     </div>

//     <input
//       type="text"
//       name="alternatePhone"
//       value={formData.alternatePhone}
//       onChange={handleFieldChange}
//       className="form-input m-0"
//       placeholder="Phone Number"
//       style={{ flex: '1 0 80%', padding: '8px', fontSize: '14px', border: 'none', outline: 'none' }}
//     />
//   </div>
// </div>

//  {/* Dynamic Dropdown Fields */}
//  {[
//           "propertyMode", "propertyType", "bankLoan", "negotiation", "ownership", "bedrooms",
//           "kitchen", "kitchenType", "balconies", "floorNo", "areaUnit", "propertyApproved",
//           "propertyAge", "postedBy", "facing", "salesMode", "salesType", "furnished", "lift",
//           "attachedBathrooms", "western", "numberOfFloors", "carParking", "bestTimeToCall"
//         ].map((field) => (
         
//            <div key={field} style={{ display: "flex", alignItems: "center" }}>
          
          
//             <div style={{ flex: '1' }}>
//               <label>
//                 {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}:
//                 <select
//                   name={field}
//                   value={formData[field] || ""}
//                   onChange={handleFieldChange}
//                   className="form-control"
//                   style={{ display: "none" }} // Hide the default <select> dropdown
//                 >
//                   <option value="">Select {field.replace(/([A-Z])/g, " $1")}</option>
//                   {dataList[field] && dataList[field].map((option, index) => (
//                     <option key={index} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//                 <button className="m-0"
//                   type="button"
//                   onClick={() => toggleDropdown(field)}
//                   style={{
//                     cursor: 'pointer',
//                     border: '1px solid #2F747F',
//                     padding: '10px',
//                     background: '#fff',
//                     borderRadius: '5px',
//                     width: '100%',
//                     textAlign: 'left',
//                     color:"#2F747F"
//                   }}
//                 >
//                      <span style={{ marginRight: "10px" }}>
//                     {fieldIcons[field] || <FaHome />}
//                   </span>
//                   {formData[field] || `Select ${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}`}
//                 </button>
//                 {renderDropdown(field)}
//               </label>
//             </div>
//           </div> 
          
//         ))}


//         {/* Submit Button */}
//         <button type="submit" style={{background:"#2F747F", color:"#fff"}}>
//           Update Property
//         </button>
//       </form>
//     </div>
//   );
// }

// export default EditProperty;




