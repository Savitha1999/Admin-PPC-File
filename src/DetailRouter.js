const express = require('express');
const AddModel = require('../AddModel');

const router = express.Router();



// -------------------- Detailes Page Image Click Api ---------------




router.get('/fetch-status-interestall', async (req, res) => {
    try {
        const query = { status: 'Interest' };
  
        const users = await AddModel.find(query);
  
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No users with interest status found.' });
        }
  
        res.status(200).json({ message: 'Interest status user data fetched successfully!', users });
    } catch (error) {
        console.error('Error fetching interest status user details:', error);
        res.status(500).json({ message: 'Error fetching interest status user details.', error });
    }
  });
  
  
  
  
  router.get('/fetch-status-interest-all', async (req, res) => {
    try {
        const query = { status: 'Interest' };
  
        // Find all users with 'Interest' status and include specific fields
        const users = await AddModel.find(query, 'ppcId phoneNumber status');
  
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No users with interest status found.' });
        }
  
        res.status(200).json({ message: 'Interest status user data fetched successfully!', users });
    } catch (error) {
        console.error('Error fetching interest status user details:', error);
        res.status(500).json({ message: 'Error fetching interest status user details.', error });
    }
  });
  
  
  
  
  
//   // send Interest Api
//   router.post('/send-interests', async (req, res) => {
//       const { phoneNumber, ppcId } = req.body;
  
//       try {
//           const property = await AddModel.findOne({ ppcId });
  
//           console.log('Fetched Property:', property);
  
//           if (property) {
//               const postedUserPhoneNumber = property.phoneNumber; 
  
//               if (!postedUserPhoneNumber) {
//                   return res.status(404).json({ message: 'Phone number not found for the property owner.' });
//               }
  
//               await AddModel.updateOne(
//                   { ppcId },
//                   { $push: { interestRequests: { phoneNumber } } } 
//               );
  
//               return res.status(200).json({ message: 'Your interest has been recorded!', postedUserPhoneNumber });
//           } else {
//               return res.status(404).json({ message: 'Property not found' });
//           }
//       } catch (error) {
//           return res.status(500).json({ message: 'Internal Server Error', error: error.message });
//       }
//   });
  

// router.post('/add-favorite', async (req, res) => {
//     const { phoneNumber, ppcId } = req.body;

//     try {
//         const property = await AddModel.findOne({ ppcId });

//         if (!property) {
//             return res.status(404).json({ message: 'Property not found' });
//         }

//         // Check if the phone number already exists in the favorite list
//         const isAlreadyFavorite = property.favorite.some(favorite => favorite.phoneNumber === phoneNumber);

//         if (isAlreadyFavorite) {
//             return res.status(400).json({ message: 'You have already favorited this property.', status: 'alreadyFavorited' });
//         }

//         // Add the phone number to the favorite list
//         await AddModel.updateOne(
//             { ppcId },
//             { $push: { favorite: { phoneNumber } } }
//         );

//         return res.status(200).json({
//             message: 'Property added to your favorites!',
//             status: 'favoriteAdded',
//             postedUserPhoneNumber: property.phoneNumber,
//             propertyMode: property.propertyMode,
//             propertyType: property.propertyType,
//             price: property.price,
//             area: property.area,
//         });
//     } catch (error) {
//         return res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// });


// router.post('/add-favorite', async (req, res) => {
//     const { phoneNumber, ppcId } = req.body;

//     try {
//         // Find the property using the provided `ppcId`
//         const property = await AddModel.findOne({ ppcId });

//         if (!property) {
//             return res.status(404).json({ message: 'Property not found' });
//         }

//         // Check if the user has already favorited this property
//         const isAlreadyFavorite = property.favorite.some(favorite => favorite.phoneNumber === phoneNumber);

//         if (isAlreadyFavorite) {
//             return res.status(400).json({
//                 message: 'You have already favorited this property.',
//                 status: 'alreadyFavorited',
//             });
//         }

//         // Add the phone number to the favorites list
//         await AddModel.updateOne(
//             { ppcId },
//             { 
//                 $push: { favorite: { phoneNumber } }, 
//                 $set: { status: 'favoriteAdded' } // Update the status to reflect the new favorite
//             }
//         );

//         return res.status(200).json({
//             message: 'Property added to your favorites!',
//             status: 'favoriteAdded',
//             postedUserPhoneNumber: property.phoneNumber,
//             propertyMode: property.propertyMode,
//             propertyType: property.propertyType,
//             price: property.price,
//             area: property.area,
//         });
//     } catch (error) {
//         console.error("Error in /add-favorite:", error);
//         return res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// });



// Add Favorite
router.post('/add-favorite', async (req, res) => {
    const { phoneNumber, ppcId } = req.body;

    if (!phoneNumber || !ppcId) {
        return res.status(400).json({ message: 'Phone number and Property ID are required' });
    }

    try {
        const property = await AddModel.findOne({ ppcId });

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

       

        await AddModel.updateOne(
            { ppcId },
            {
                $push: { favorite: { phoneNumber } },
                $set: { status: 'favoriteAdded' },
            }
        );

        return res.status(200).json({
            message: 'Property added to your favorites!',
            status: 'favoriteAdded',
            postedUserPhoneNumber: property.phoneNumber,
            propertyMode: property.propertyMode,
            propertyType: property.propertyType,
            price: property.price,
            area: property.area,
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});



// Remove Favorite
router.post('/remove-favorite', async (req, res) => {
    const { phoneNumber, ppcId } = req.body;

    if (!phoneNumber || !ppcId) {
        return res.status(400).json({ message: 'Phone number and Property ID are required' });
    }

    try {
        const property = await AddModel.findOne({ ppcId });

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        const isFavorite = property.favorite.some(fav => fav.phoneNumber === phoneNumber);

        if (!isFavorite) {
            return res.status(400).json({
                message: 'This property is not in your favorites.',
                status: 'notFavorite',
            });
        }

        await AddModel.updateOne(
            { ppcId },
            {
                $pull: { favorite: { phoneNumber } },
                $push: { favoriteRemoved: { phoneNumber } },
                $set: { status: 'favoriteRemoved' },
            }
        );

        return res.status(200).json({
            message: 'Property removed from your favorites!',
            status: 'favoriteRemoved',
            postedUserPhoneNumber: property.phoneNumber,
            propertyMode: property.propertyMode,
            propertyType: property.propertyType,
            price: property.price,
            area: property.area,
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});




// router.post('/add-favorite', async (req, res) => {
//     const { phoneNumber, ppcId } = req.body;

//     if (!phoneNumber || !ppcId) {
//         return res.status(400).json({ message: 'Phone number and Property ID are required' });
//     }

//     try {
//         const property = await AddModel.findOne({ ppcId });

//         if (!property) {
//             return res.status(404).json({ message: 'Property not found' });
//         }

//         const isAlreadyFavorite = property.favorite.some(fav => fav.phoneNumber === phoneNumber);

//         if (isAlreadyFavorite) {
//             return res.status(400).json({
//                 message: 'You have already favorited this property.',
//                 status: 'alreadySaved',
//             });
//         }

//         await AddModel.updateOne(
//             { ppcId },
//             { 
//                 $push: { favorite: { phoneNumber } }, 
//                 $set: { status: 'favoriteAdded' } 
//             }
//         );

//         return res.status(200).json({
//             message: 'Property added to your favorites!',
//             status: 'favoriteAdded',
//             postedUserPhoneNumber: property.phoneNumber,
//             propertyMode: property.propertyMode,
//             propertyType: property.propertyType,
//             price: property.price,
//             area: property.area,
//         });
//     } catch (error) {
//         return res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// });



// // Send Interest API
// router.post("/send-interests", async (req, res) => {
//     const { phoneNumber, ppcId } = req.body;
  
//     try {
//       // Find the property by ppcId
//       const property = await AddModel.findOne({ ppcId });
  
//       // Check if the property exists
//       if (!property) {
//         return res.status(404).json({ message: "Property not found" });
//       }
  
//       // Check if the user has already shown interest in this property
//       const isAlreadyInterested = property.interestRequests.some(
//         (request) => request.phoneNumber === phoneNumber
//       );
  
//       if (isAlreadyInterested) {
//         return res.status(400).json({
//           message: "You have already shown interest in this property.",
//           status: "alreadySaved",
//         });
//       }
  
//       // Add the phoneNumber to the interestRequests array
//       await AddModel.updateOne(
//         { ppcId },
//         {
//           $push: { interestRequests: { phoneNumber } },
//         }
//       );
  
//       // Send success response
//       return res.status(200).json({
//         message: "Your interest has been recorded!",
//         status: "sendInterest",
//         postedUserPhoneNumber: property.phoneNumber,
//         propertyMode: property.propertyMode,
//         propertyType: property.propertyType,
//         price: property.price,
//         area: property.area,
//       });
//     } catch (error) {
//       // Handle server errors
//       return res.status(500).json({ message: "Internal Server Error", error: error.message });
//     }
//   });




router.post("/send-interests", async (req, res) => {
    const { phoneNumber, ppcId } = req.body;

    try {
        // Find the property by ppcId
        const property = await AddModel.findOne({ ppcId });

        // Check if the property exists
        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }

        // Check if the user has already shown interest in this property
        const isAlreadyInterested = property.interestRequests.some(
            (request) => request.phoneNumber === phoneNumber
        );

        if (isAlreadyInterested) {
            return res.status(400).json({
                message: "You have already shown interest in this property.",
                status: "alreadySaved",
                alreadySaved: property.interestRequests.map((request) => request.phoneNumber), // Include already saved numbers
            });
        }

        // Add the phoneNumber to the interestRequests array
        await AddModel.updateOne(
            { ppcId },
            {
                $push: { interestRequests: { phoneNumber } },
            }
        );

        // Send success response
        return res.status(200).json({
            message: "Your interest has been recorded!",
            status: "sendInterest",
            postedUserPhoneNumber: property.phoneNumber,
            propertyMode: property.propertyMode,
            propertyType: property.propertyType,
            price: property.price,
            area: property.area,
            alreadySaved: property.interestRequests.map((request) => request.phoneNumber), // Include updated saved numbers
        });
    } catch (error) {
        // Handle server errors
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});



  

// router.post('/send-interests', async (req, res) => {
//     const { phoneNumber, ppcId } = req.body;

//     try {
//         const property = await AddModel.findOne({ ppcId });

//         if (!property) {
//             return res.status(404).json({ message: 'Property not found' });
//         }

//         // Check if the phone number already exists in interestRequests
//         const isAlreadyInterested = property.interestRequests.some(request => request.phoneNumber === phoneNumber);

//         if (isAlreadyInterested) {
//             return res.status(400).json({ message: 'You have already shown interest in this property.', status: 'alreadyInterested' });
//         }

//         // Add the phone number to the interestRequests array
//         await AddModel.updateOne(
//             { ppcId },
//             { $push: { interestRequests: { phoneNumber } } }
//         );

//         return res.status(200).json({
//             message: 'Your interest has been recorded!',
//             status: 'sendInterest',
//             postedUserPhoneNumber: property.phoneNumber,
//             propertyMode: property.propertyMode,
//             propertyType: property.propertyType,
//             price: property.price,
//             area: property.area,
//         });
//     } catch (error) {
//         return res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// });


router.post('/need-help', async (req, res) => {
    const { phoneNumber, ppcId } = req.body;

    try {
        const property = await AddModel.findOne({ ppcId });

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        // // Check if the phone number already exists in helpRequests
        // const isAlreadyHelpRequested = property.helpRequests.some(request => request.phoneNumber === phoneNumber);

        // if (isAlreadyHelpRequested) {
        //     return res.status(400).json({ message: 'You have already requested help for this property.', status: 'alreadyRequestedHelp' });
        // }

        const isAlreadyInterested = property.helpRequests.some(
            (request) => request.phoneNumber === phoneNumber
          );
      
          if (isAlreadyInterested) {
            return res.status(400).json({
              message: "You have already shown Need Help in this property.",
              status: "alreadySaved",
              alreadySaved: property.helpRequests.map((request) => request.phoneNumber), // Include already saved numbers

            });
          }

        // Add the phone number to the helpRequests array
        await AddModel.updateOne(
            { ppcId },
            { $push: { helpRequests: { phoneNumber } } }
        );

        return res.status(200).json({
            message: 'Your help request has been recorded!',
            status: 'needHelp',
            postedUserPhoneNumber: property.phoneNumber,
            propertyMode: property.propertyMode,
            propertyType: property.propertyType,
            price: property.price,
            area: property.area,
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});



router.post('/report-sold-out', async (req, res) => {
    const { phoneNumber, ppcId } = req.body;

    try {
        const property = await AddModel.findOne({ ppcId });

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        // // Check if the phone number already exists in soldOutReport
        // const isAlreadyReported = property.soldOutReport.some(report => report.phoneNumber === phoneNumber);

        // if (isAlreadyReported) {
        //     return res.status(400).json({ message: 'You have already reported this property as sold out.', status: 'alreadyReported' });
        // }

        const isAlreadyInterested = property.soldOutReport.some(
            (request) => request.phoneNumber === phoneNumber
          );
      
          if (isAlreadyInterested) {
            return res.status(400).json({
              message: "You have already shown Sold Out in this property.",
              status: "alreadySaved",
            });
          }

        // Add the phone number to the soldOutReport array
        await AddModel.updateOne(
            { ppcId },
            { 
                $push: { soldOutReport: { phoneNumber } },  
                $set: { status: 'soldOut' }
            }
        );

        return res.status(200).json({
            message: 'The property has been marked as sold out.',
            status: 'soldOut',
            postedUserPhoneNumber: property.phoneNumber,
            propertyMode: property.propertyMode,
            propertyType: property.propertyType,
            price: property.price,
            area: property.area,
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});


router.post('/report-property', async (req, res) => {
    const { phoneNumber, ppcId, reportReason } = req.body;

    try {
        const property = await AddModel.findOne({ ppcId });

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        // // Check if the phone number already exists in reportedProperty
        // const isAlreadyReported = property.reportProperty.some(report => report.phoneNumber === phoneNumber);

        // if (isAlreadyReported) {
        //     return res.status(400).json({ message: 'You have already reported this property.', status: 'alreadyReported' });
        // }


        const isAlreadyInterested = property.reportProperty.some(
            (request) => request.phoneNumber === phoneNumber
          );
      
          if (isAlreadyInterested) {
            return res.status(400).json({
              message: "You have already shown Reported Property in this property.",
              status: "alreadySaved",
            });
          }

        // Add the phone number and reason to the reportedProperty array
        await AddModel.updateOne(
            { ppcId },
            { 
                $push: { reportProperty: { phoneNumber, reportReason } }
            }
        );

        return res.status(200).json({
            message: 'Your report has been recorded!',
            status: 'reportedProperty',
            postedUserPhoneNumber: property.phoneNumber,
            propertyMode: property.propertyMode,
            propertyType: property.propertyType,
            price: property.price,
            area: property.area,
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});


// // Route to remove property (set status to 'removed')
// router.post('/delete-detail-property', async (req, res) => {
//     const { ppcId, phoneNumber } = req.body;
  
//     if (!ppcId || !phoneNumber) {
//       return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
//     }
  
//     try {
//       const property = await Property.findOne({ ppcId, postedUserPhoneNumber: phoneNumber });
  
//       if (!property) {
//         return res.status(404).json({ message: 'Property not found.' });
//       }
  
//       // Save the current status as previousDetailStatus before updating
//       property.previousDetailStatus = property.status;
  
//       // Update the status to "removed"
//       property.status = 'removed';
  
//       // Save the property with updated status
//       await property.save();
  
//       // Return the updated property
//       return res.status(200).json({
//         message: 'Property removed successfully.',
//         property
//       });
//     } catch (error) {
//       console.error('Error deleting property:', error);
//       return res.status(500).json({ message: 'Internal Server Error.' });
//     }
//   });
  
//   // Route to undo the removal (revert to previous status)
//   router.post('/undo-detail-delete', async (req, res) => {
//     const { ppcId, phoneNumber } = req.body;
  
//     if (!ppcId || !phoneNumber) {
//       return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
//     }
  
//     try {
//       const property = await Property.findOne({ ppcId, postedUserPhoneNumber: phoneNumber });
  
//       if (!property) {
//         return res.status(404).json({ message: 'Property not found.' });
//       }
  
//       // Check if there's a previous status to revert to
//       if (!property.previousDetailStatus) {
//         return res.status(400).json({ message: 'No previous status to revert to.' });
//       }
  
//       // Revert the status to the previous status
//       property.status = property.previousDetailStatus;
  
//       // Clear the previousDetailStatus after reverting
//       property.previousDetailStatus = null;
  
//       // Save the updated property
//       await property.save();
  
//       // Return the updated property
//       return res.status(200).json({
//         message: 'Property status reverted successfully.',
//         property
//       });
//     } catch (error) {
//       console.error('Error undoing delete operation:', error);
//       return res.status(500).json({ message: 'Internal Server Error.' });
//     }
//   });



//   // API endpoint to mark a property as deleted
// router.post('/delete-detail-property', async (req, res) => {
//     const { ppcId, phoneNumber } = req.body;
  
//     console.log("Received body:", req.body);  // Debug log
  
//     if (!ppcId || !phoneNumber) {
//       return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
//     }
  
//     try {
//       const property = await AddModel.findOne({ ppcId: ppcId, phoneNumber: phoneNumber });
//       if (!property) {
//         return res.status(404).json({ message: 'Property not found.' });
//       }
  
//       // Save the current status to previousDetailStatus before changing it
//       property.previousDetailStatus = property.status;
//       property.status = 'delete'; // Change status to 'deleted'
      
//       await property.save();
  
//       return res.status(200).json({
//         message: 'Property removed successfully!',
//         property, // Send back the updated property
//       });
//     } catch (error) {
//       console.error('Error removing property:', error);
//       return res.status(500).json({ message: 'Internal Server Error.', error: error.message });
//     }
//   });
  
  



// // API endpoint to mark a property as deleted
// router.post('/delete-detail-property', async (req, res) => {
//     const { ppcId, phoneNumber } = req.body;
  
  
//     if (!ppcId || !phoneNumber) {
//       return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
//     }
  
//     try {
    
//       const property = await AddModel.findOne({ ppcId: ppcId, phoneNumber: phoneNumber });
// if (!property) {
//   return res.status(404).json({ message: 'Property not found.' });
// }

  
//       // Update the status to 'deleted'
//       property.status = 'delete';
//       await property.save();
  
//       return res.status(200).json({
//         message: 'Property removed successfully!',
//         property, // Send back the updated property
//       });
//     } catch (error) {
//       return res.status(500).json({ message: 'Internal Server Error.', error: error.message });
//     }
//   });
  

// router.post('/delete-detail-property', async (req, res) => {
//     const { ppcId, phoneNumber } = req.body;

//     if (!ppcId || !phoneNumber) {
//         return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
//     }

//     try {
//         const property = await AddModel.findOne({ ppcId: ppcId, phoneNumber: phoneNumber });
//         if (!property) {
//             return res.status(404).json({ message: 'Property not found.' });
//         }

//         // Store the previous status only if it's 'incomplete' or 'complete'
//         if (property.status === 'incomplete' || property.status === 'complete') {
//             property.previousStatus = property.status;
//         }

//         // Update the status to 'delete'
//         property.status = 'delete';
//         await property.save();

//         return res.status(200).json({
//             message: 'Property removed successfully!',
//             property, // Send back the updated property
//         });
//     } catch (error) {
//         return res.status(500).json({ message: 'Internal Server Error.', error: error.message });
//     }
// });

// router.post('/delete-detail-property', async (req, res) => {
//     const { ppcId, phoneNumber } = req.body;

//     console.log('Received:', { ppcId, phoneNumber }); // Log received data

//     if (!ppcId || !phoneNumber) {
//         return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
//     }

//     try {
//         // Log the MongoDB query
//         console.log('Query:', { ppcId: Number(ppcId), phoneNumber: phoneNumber.trim() });

//         // Ensure that ppcId is treated as a Number and phoneNumber is trimmed
//         const property = await AddModel.findOne({
//             ppcId: Number(ppcId),  // Ensure ppcId is cast to a number
//             phoneNumber: phoneNumber.trim()  // Trim the phone number to avoid issues with spaces
//         });

//         if (!property) {
//             return res.status(404).json({ message: 'Property not found.' });
//         }

//         // If the property has a status that's neither 'incomplete' nor 'complete', we store that as the previousStatus
//         if (property.status !== 'incomplete' && property.status !== 'complete') {
//             property.previousStatus = property.status; // Store current status as previousStatus
//         }

//         // Update the status to 'delete'
//         property.status = 'delete';
//         await property.save();

//         return res.status(200).json({
//             message: 'Property removed successfully!',
//             property, // Send back the updated property
//         });
//     } catch (error) {
//         console.error('Error:', error); // Log the error to help with debugging
//         return res.status(500).json({ message: 'Internal Server Error.', error: error.message });
//     }
// });


router.post('/delete-detail-property', async (req, res) => {
    const { ppcId, phoneNumber } = req.body;

    console.log('Received:', { ppcId, phoneNumber }); // Log received data

    if (!ppcId || !phoneNumber) {
        return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
    }

    try {
        // Log the MongoDB query
        console.log('Query:', { ppcId: Number(ppcId), phoneNumber: phoneNumber.trim() });

        // Ensure that ppcId is treated as a Number and phoneNumber is trimmed
        const property = await AddModel.findOne({
            ppcId: Number(ppcId),  // Ensure ppcId is cast to a number
            phoneNumber: phoneNumber.trim()  // Trim the phone number to avoid issues with spaces
        });

        if (!property) {
            return res.status(404).json({ message: 'Property not found.' });
        }

        // If the property has a status that's neither 'incomplete' nor 'complete',
        // we store the current status in previousStatus only if it's valid.
        if (property.status === 'incomplete' || property.status === 'complete') {
            property.previousStatus = property.status; // Store current status as previousStatus
        }

        // Update the status to 'delete'
        property.status = 'delete';
        await property.save();

        return res.status(200).json({
            message: 'Property removed successfully!',
            property, // Send back the updated property
        });
    } catch (error) {
        console.error('Error:', error); // Log the error to help with debugging
        return res.status(500).json({ message: 'Internal Server Error.', error: error.message });
    }
});



// router.post('/undo-detail-delete', async (req, res) => {
//     const { ppcId, phoneNumber } = req.body;

//     if (!ppcId || !phoneNumber) {
//         return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
//     }

//     try {
//         const property = await AddModel.findOne({ ppcId: ppcId, phoneNumber: phoneNumber });
//         if (!property) {
//             return res.status(404).json({ message: 'Property not found.' });
//         }

//         // Revert the status to the previous status
//         if (property.previousStatus === 'incomplete' || property.previousStatus === 'complete') {
//             property.status = property.previousStatus;
//             property.previousStatus = undefined; // Clear the previous status
//             await property.save();
//         } else {
//             return res.status(400).json({ message: 'Invalid previous status.' });
//         }

//         return res.status(200).json({
//             message: 'Property status reverted successfully!',
//             property, // Send back the updated property
//         });
//     } catch (error) {
//         return res.status(500).json({ message: 'Internal Server Error.', error: error.message });
//     }
// });


// router.post('/undo-delete-detail', async (req, res) => {
//     const { ppcId, phoneNumber } = req.body;
  
//     console.log('Received:', { ppcId, phoneNumber }); // Log received data
  
//     if (!ppcId || !phoneNumber) {
//       return res.status(400).json({ message: 'PPC-ID and phone number are required.' });
//     }
  
//     try {
//       // Log the MongoDB query
//       console.log('Query:', { ppcId: Number(ppcId), phoneNumber: phoneNumber.trim() });
  
//       // Ensure that ppcId is treated as a Number and phoneNumber is trimmed
//       const property = await AddModel.findOne({
//         ppcId: Number(ppcId),  // Ensure ppcId is cast to a number
//         phoneNumber: phoneNumber.trim()  // Trim the phone number to avoid issues with spaces
//       });
  
//       if (!property) {
//         return res.status(404).json({ message: 'Property not found.' });
//       }
  
//       // Revert the status to the previous valid status, which could be 'incomplete' or 'complete'
//       if (property.previousStatus) {
//         property.status = property.previousStatus;
//         property.previousStatus = null; // Reset previousStatus after the undo operation
//         await property.save();
  
//         return res.status(200).json({
//           message: 'Property status reverted successfully!',
//           property, // Send back the updated property
//         });
//       } else {
//         return res.status(400).json({ message: 'No previous status to revert to.' });
//       }
//     } catch (error) {
//       console.error('Error:', error); // Log the error to help with debugging
//       return res.status(500).json({ message: 'Internal Server Error.', error: error.message });
//     }
//   });

router.post('/undo-delete-detail', async (req, res) => {
    const { ppcId } = req.body; // Only receive ppcId

    console.log('Received:', { ppcId }); // Log received data

    if (!ppcId) {
        return res.status(400).json({ message: 'PPC-ID is required.' });
    }

    try {
        // Log the MongoDB query
        console.log('Query:', { ppcId: Number(ppcId) });

        // Ensure that ppcId is treated as a Number
        const property = await AddModel.findOne({
            ppcId: Number(ppcId),  // Ensure ppcId is cast to a number
        });

        if (!property) {
            return res.status(404).json({ message: 'Property not found.' });
        }

        // Revert the status to the previous valid status, which could be 'incomplete' or 'complete'
        if (property.previousStatus) {
            property.status = property.previousStatus;
            property.previousStatus = null; // Reset previousStatus after the undo operation
            await property.save();

            return res.status(200).json({
                message: 'Property status reverted successfully!',
                property, // Send back the updated property
            });
        } else {
            return res.status(400).json({ message: 'No previous status to revert to.' });
        }
    } catch (error) {
        console.error('Error:', error); // Log the error to help with debugging
        return res.status(500).json({ message: 'Internal Server Error.', error: error.message });
    }
});

  


// router.post('/contact', async (req, res) => {
//     const { phoneNumber, ppcId, message } = req.body;

//     try {
//         const property = await AddModel.findOne({ ppcId });

//         if (!property) {
//             return res.status(404).json({ message: 'Property not found' });
//         }

//         // Add the phone number and message to contactRequests
//         await AddModel.updateOne(
//             { ppcId },
//             { 
//                 $push: { contactRequests: { phoneNumber, message } }
//             }
//         );

//         return res.status(200).json({
//             message: 'Your contact request has been sent to the property owner.',
//             status: 'contactRequest',
//             postedUserPhoneNumber: property.phoneNumber,
//             propertyMode: property.propertyMode,
//             propertyType: property.propertyType,
//             price: property.price,
//             area: property.area,
//         });
//     } catch (error) {
//         return res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// });

  


// // Send Interest API
// router.post('/send-interests', async (req, res) => {
//     const { phoneNumber, ppcId } = req.body;

//     try {
//         // Fetch the property based on the provided ppcId
//         const property = await AddModel.findOne({ ppcId });

//         if (property) {
//             // Extract necessary details from the property document
//             const postedUserPhoneNumber = property.phoneNumber;  // Property owner's phone number
//             const propertyMode = property.propertyMode;  // Rent or Sale
//             const propertyType = property.propertyType;  // House, Apartment, etc.
//             const price = property.price;  // Price of the property
//             const area = property.area;  // Area in square feet or meters

//             // Check if the property has the owner's phone number, if not return an error
//             if (!postedUserPhoneNumber) {
//                 return res.status(404).json({ message: 'Phone number not found for the property owner.' });
//             }

//             // Add the buyer's phone number to the interestRequests array of the property
//             await AddModel.updateOne(
//                 { ppcId },
//                 { $push: { interestRequests: { phoneNumber } } }
//             );

//             // Respond with a success message and include property details
//             return res.status(200).json({
//                 message: 'Your interest has been recorded!',
//                 status:'sendInterest',
//                 postedUserPhoneNumber,
//                 propertyMode,
//                 propertyType,
//                 price,
//                 area,
//             });
//         } else {
//             return res.status(404).json({ message: 'Property not found' });
//         }
//     } catch (error) {
//         return res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// });


//   //Need Help Api
//     router.post('/need-help', async (req, res) => {
//       const { phoneNumber, ppcId } = req.body;
  
//       try {
//           const property = await AddModel.findOne({ ppcId });
  
//           console.log('Fetched Property:', property);
  
//           if (property) {
//             // Extract necessary details from the property document
//             const postedUserPhoneNumber = property.phoneNumber;  // Property owner's phone number
//             const propertyMode = property.propertyMode;  // Rent or Sale
//             const propertyType = property.propertyType;  // House, Apartment, etc.
//             const price = property.price;  // Price of the property
//             const area = property.area; 
  
//               if (!postedUserPhoneNumber) {
//                   return res.status(404).json({ message: 'Phone number not found for the property owner.' });
//               }
  
//               await AddModel.updateOne(
//                   { ppcId },
//                   { $push: { helpRequests: { phoneNumber } } } 
//               );
//               return res.status(200).json({ 
//                 message: 'Your help request has been recorded!',
//                 status: 'needHelp', 
//                 postedUserPhoneNumber,
//                 propertyMode,
//                 propertyType,
//                 price,
//                 area,
//              });
//           } else {
//               return res.status(404).json({ message: 'Property not found' });
//           }
//       } catch (error) {
//           return res.status(500).json({ message: 'Internal Server Error', error: error.message });
//       }
//   });
  


  
  router.post('/contact', async (req, res) => {
    const { phoneNumber, ppcId } = req.body;
  
    try {
      // Find the property by its ppcId
      const property = await AddModel.findOne({ ppcId });
  
      if (!property) {
        return res.status(404).json({ message: 'Property not found' });
      }
  
      const postedUserPhoneNumber = property.phoneNumber;
      const propertyMode = property.propertyMode;  // Rent or Sale
      const propertyType = property.propertyType;  // House, Apartment, etc.
      const price = property.price;  // Price of the property
      const area = property.area; 
      const email = property.email;
      const bestTimeToCall = property.bestTimeToCall;

      if (!postedUserPhoneNumber) {
        return res.status(404).json({ message: 'Phone number not found for the property owner.' });
      }
  
      // Add the phone number to the contactRequests array
      await AddModel.updateOne(
        { ppcId },
        { 
          $push: { contactRequests: { phoneNumber } },  
          $set: { status: 'contact' }
        }
      );
  
  
      return res.status(200).json({
        postedUserPhoneNumber,
        status: 'contact',
        postedUserPhoneNumber,
        email,
        propertyMode,
        propertyType,
        price,
        area,
        bestTimeToCall,
      });
  
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  });
  
  

  
//   //Report Property Api
//   router.post('/report-property', async (req, res) => {
//     const { phoneNumber, ppcId } = req.body;
  
//     try {
//         const property = await AddModel.findOne({ ppcId });
  
//         if (!property) {
//             return res.status(404).json({ message: 'Property not found' });
//           }
//         const postedUserPhoneNumber = property.phoneNumber;
//         const propertyMode = property.propertyMode;  // Rent or Sale
//         const propertyType = property.propertyType;  // House, Apartment, etc.
//         const price = property.price;  // Price of the property
//         const area = property.area; 
      
//         if (!postedUserPhoneNumber) {
//           return res.status(404).json({ message: 'Phone number not found for the property owner.' });
//         }
  
//         if (property) {
//             await AddModel.updateOne(
//                 { ppcId },
//                 { 
//                     $push: { reportProperty: { phoneNumber } },  
//                     $set: { status: 'reportProperty' }

//                 }
//             );
  
//             // return res.status(200).json({ message: 'Your property code request has been recorded.' });
//             return res.status(200).json({
//                 postedUserPhoneNumber,
//                 status: 'reportProperty',
//                 postedUserPhoneNumber,
//                 propertyMode,
//                 propertyType,
//                 price,
//                 area,
//               });   
//         }
          
//     } catch (error) {
//         return res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
//   });
  
  
//   //Report Sold Out
//   router.post('/report-sold-out', async (req, res) => {
//       const { phoneNumber, ppcId } = req.body;
    
//       try {
//           const property = await AddModel.findOne({ ppcId });
//           if (!property) {
//             return res.status(404).json({ message: 'Property not found' });
//           }
//         const postedUserPhoneNumber = property.phoneNumber;
//         const propertyMode = property.propertyMode;  // Rent or Sale
//         const propertyType = property.propertyType;  // House, Apartment, etc.
//         const price = property.price;  // Price of the property
//         const area = property.area; 
    
//           if (property) {
//               // Add the user's phone number to the soldOutReport array and update the status
//               await AddModel.updateOne(
//                   { ppcId },
//                   { 
//                       $push: { soldOutReport: { phoneNumber } },  // Push an object with the phone number
//                       $set: { status: 'soldOut' }  // Update the status to 'soldOut'
//                   }
//               );
    
//             //   return res.status(200).json({ message: 'Property has been marked as sold out and your report has been recorded.' });
//             return res.status(200).json({
//                 postedUserPhoneNumber,
//                 status: 'soldOut',
//                 postedUserPhoneNumber,
//                 propertyMode,
//                 propertyType,
//                 price,
//                 area,
//               });  
//         } 
//       } catch (error) {
//           return res.status(500).json({ message: 'Internal Server Error', error: error.message });
//       }
//     });
  
  
// **************

   // Get Send Interest Data Api 
  router.get('/get-interest', async (req, res) => {
      try {
          // Fetch properties where there are users who have shown interest in the property (interestRequests is not empty)
          const propertiesWithInterestRequests = await AddModel.find({ 'interestRequests': { $exists: true, $not: { $size: 0 } } });
    
          if (propertiesWithInterestRequests.length === 0) {
              return res.status(404).json({ message: 'No properties with interest requests found' });
          }
    
          // Map through the properties to get the relevant data
          const interestRequestsData = propertiesWithInterestRequests.map(property => ({
              ppcId: property.ppcId,
              postedUserPhoneNumber: property.phoneNumber,  // Property owner's phone number
              interestedUserPhoneNumbers: property.interestRequests ? property.interestRequests.map(request => request.phoneNumber) : []  // Collecting the phone numbers of users who showed interest
          }));
    
          return res.status(200).json({ message: 'Interest requests fetched successfully', interestRequestsData });
      } catch (error) {
          return res.status(500).json({ message: 'Internal Server Error', error: error.message });
      }
    });
    
  


// Get Report sold Out  Data Api 
router.get('/get-sold-out-report', async (req, res) => {
    try {
        // Fetch properties with status 'soldOut'
        const propertiesWithSoldOut = await AddModel.find({ status: 'soldOut' });
  
        if (propertiesWithSoldOut.length === 0) {
            return res.status(404).json({ message: 'No properties with sold-out reports found' });
        }
  
        // Map through the properties to get the relevant data
        const soldOutReportsData = propertiesWithSoldOut.map(property => ({
            ppcId: property.ppcId,
            postedUserPhoneNumber: property.phoneNumber,  // Property owner's phone number
            soldOutReporterPhoneNumbers: property.soldOutReport ? property.soldOutReport.map(report => report.phoneNumber) : []  // Collecting the phone numbers of users who reported the property as sold out
        }));
  
        return res.status(200).json({ message: 'Sold-out reports fetched successfully', soldOutReportsData });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  });
  
  
     // Get Report Property  Data Api 
  router.get('/get-report-property', async (req, res) => {
    try {
        // Fetch properties with reports in 'reportProperty' array
        const propertiesWithPropertyCodeRequests = await AddModel.find({ 'reportProperty.0': { $exists: true } }); // Ensures that there's at least one property code request
  
        if (propertiesWithPropertyCodeRequests.length === 0) {
            return res.status(404).json({ message: 'No properties with property code requests found' });
        }
  
        // Map through the properties to get the relevant data
        const propertyCodeReportsData = propertiesWithPropertyCodeRequests.map(property => ({
            ppcId: property.ppcId,
            postedUserPhoneNumber: property.phoneNumber,  // Property owner's phone number
            propertyCodeRequestersPhoneNumbers: property.reportProperty ? property.reportProperty.map(request => request.phoneNumber) : []  // Collecting the phone numbers of users who requested the property code
        }));
  
        return res.status(200).json({ message: 'Property code requests fetched successfully', propertyCodeReportsData });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  });
  
  
  
     // Get Help request   Data Api 
    router.get('/get-help-request', async (req, res) => {
      try {
          // Fetch properties where there are help requests
          const propertiesWithHelpRequests = await AddModel.find({ 'helpRequests.0': { $exists: true } }); // Checks if there's at least one help request
    
          if (propertiesWithHelpRequests.length === 0) {
              return res.status(404).json({ message: 'No properties with help requests found' });
          }
    
          // Map through the properties to get the relevant data
          const helpRequestsData = propertiesWithHelpRequests.map(property => ({
              ppcId: property.ppcId,
              postedUserPhoneNumber: property.phoneNumber,  // Property owner's phone number
              helpRequestersPhoneNumbers: property.helpRequests ? property.helpRequests.map(request => request.phoneNumber) : []  // Collecting the phone numbers of users who requested help
          }));
    
          return res.status(200).json({ message: 'Help requests fetched successfully', helpRequestsData });
      } catch (error) {
          return res.status(500).json({ message: 'Internal Server Error', error: error.message });
      }
    });
    
  
  // Get Contact Api
  router.get('/get-contact-request', async (req, res) => {
      try {
          const propertiesWithContactRequests = await AddModel.find({ 'contactRequests.0': { $exists: true } }); // Checks if there's at least one contact request
  
          if (propertiesWithContactRequests.length === 0) {
              return res.status(404).json({ message: 'No properties with contact requests found' });
          }
  
          // Map through the properties to get the relevant data
          const contactRequestsData = propertiesWithContactRequests.map(property => ({
              ppcId: property.ppcId,
              postedUserPhoneNumber: property.phoneNumber,  // Property owner's phone number
              contactRequestersPhoneNumbers: property.contactRequests ? property.contactRequests.map(request => request.phoneNumber) : []  // Collecting the phone numbers of users who contacted
          }));
  
          return res.status(200).json({ message: 'Contact requests fetched successfully', contactRequestsData });
      } catch (error) {
          return res.status(500).json({ message: 'Internal Server Error', error: error.message });
      }
  });
  

//   **************
// ----


router.get('/get-property-data', async (req, res) => {
    const { ppcId } = req.query; // Extract ppcId from query parameters
  
    if (!ppcId) {
      return res.status(400).json({ message: 'PPC ID is required.' });
    }
  
    try {
      // Fetch the property from the database using the ppcId
      const property = await AddModel.findOne({ ppcId });
  
      if (!property) {
        return res.status(404).json({ message: 'Property not found.' });
      }
  
      // Get all relevant data
      const propertyData = {
        ppcId: property.ppcId,
        ownerPhoneNumber: property.phoneNumber,
        interestRequests: property.interestRequests || [],
        helpRequests: property.helpRequests || [],
        reportPropertyRequests: property.reportProperty || [],
        soldOutReports: property.soldOutReport || [],
        contactRequests: property.contactRequests || [],
        status: property.status, // If you want to include the property status
      };
  
      // Return all data in the response
      return res.status(200).json({
        message: 'Property data fetched successfully.',
        propertyData
      });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  });




  router.get('/get-property-data', async (req, res) => {
    const { phoneNumber } = req.query; // Extract phoneNumber from query parameters
  
    if (!phoneNumber) {
      return res.status(400).json({ message: 'Phone number is required.' });
    }
  
    try {
        // Fetch the property from the database using the phoneNumber
        const property = await AddModel.findOne({ phoneNumber });
  
        if (!property) {
            return res.status(404).json({ message: 'Property not found.' });
        }
  
        // Get all relevant data
        const propertyData = {
            ppcId: property.ppcId,
            ownerPhoneNumber: property.phoneNumber,
            interestRequests: property.interestRequests || [],
            helpRequests: property.helpRequests || [],
            reportPropertyRequests: property.reportProperty || [],
            soldOutReports: property.soldOutReport || [],
            contactRequests: property.contactRequests || [],
            status: property.status, // If you want to include the property status
        };
  
        // Return all data in the response
        return res.status(200).json({
            message: 'Property data fetched successfully.',
            propertyData
        });
  
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});


  
//   ---

  
  router.get('/owner-data', async (req, res) => {
    const { phoneNumber } = req.query; // Changed to query instead of params

    if (!phoneNumber) {
        return res.status(400).json({ message: 'Phone number is required.' });
    }

    try {
        const ownedProperties = await AddModel.find({ phoneNumber });

        if (!ownedProperties.length) {
            return res.status(404).json({ message: 'No properties found for this phone number.' });
        }

        const ownerData = ownedProperties.map(property => ({
            ppcId: property.ppcId,
            postedTime: property.createdAt, // Assuming you have a 'createdAt' field in the schema
            interestRequests: property.interestRequests || [],
            helpRequests: property.helpRequests || [],
            reportPropertyRequests: property.reportProperty || [],
            soldOutReports: property.soldOutReport || [],
        }));

        return res.status(200).json({ message: 'Owner data fetched successfully.', ownerData });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

  

router.get('/buyer-data', async (req, res) => {
    const { phoneNumber } = req.query; // Extract phone number from query params

    if (!phoneNumber) {
        return res.status(400).json({ message: 'Phone number is required.' });
    }

    try {
        const buyerProperties = await AddModel.find({
            $or: [
                { 'interestRequests.phoneNumber': phoneNumber },
                { 'helpRequests.phoneNumber': phoneNumber },
                { 'reportProperty.phoneNumber': phoneNumber },
                { 'soldOutReport.phoneNumber': phoneNumber }
            ]
        });

        if (!buyerProperties.length) {
            return res.status(404).json({ message: 'No activity found for this phone number.' });
        }

        const buyerData = buyerProperties.map(property => ({
            ppcId: property.ppcId,
            propertyOwner: property.phoneNumber,
            interestSent: property.interestRequests.filter(req => req.phoneNumber === phoneNumber),
            helpRequestsSent: property.helpRequests.filter(req => req.phoneNumber === phoneNumber),
            reportRequestsSent: property.reportProperty.filter(req => req.phoneNumber === phoneNumber),
            soldOutReportsSent: property.soldOutReport.filter(req => req.phoneNumber === phoneNumber),
        }));

        return res.status(200).json({ message: 'Buyer data fetched successfully.', buyerData });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});




// **************  Interest ***********


  

router.get('/get-interest-owner', async (req, res) => {
    try {
        const { phoneNumber } = req.query;  // Extract phoneNumber from query parameters
        
        if (!phoneNumber) {
            return res.status(400).json({ message: 'Phone number is required.' });
        }

        // Fetch properties where the phone number is included in the interestRequests
        const propertiesWithInterestRequests = await AddModel.find({
            'interestRequests.phoneNumber': phoneNumber
        });

        if (propertiesWithInterestRequests.length === 0) {
            return res.status(404).json({ message: 'No properties found for this phone number.' });
        }

        // Map through the properties to get the relevant data
        const interestRequestsData = propertiesWithInterestRequests.map(property => ({
            ppcId: property.ppcId,
            postedUserPhoneNumber: property.phoneNumber,  // Property owner's phone number
            interestedUserPhoneNumbers: property.interestRequests ? 
                property.interestRequests.map(request => request.phoneNumber) : [],  // Collecting the phone numbers of users who showed interest
            propertyMode: property.propertyMode,          // Mode (Rent/Sale)
            propertyType: property.propertyType,          // Type (House, Apartment)
            price: property.price,                        // Price of the property
            area: property.area                           // Area of the property
        }));

        return res.status(200).json({ message: 'Interest requests fetched successfully', interestRequestsData });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});


router.get('/get-properties-by-buyer', async (req, res) => {
    try {
        const { postedPhoneNumber } = req.query;  // Extract posted user's phone number (property owner) from query parameters
        
        // Validate phoneNumber exists
        if (!postedPhoneNumber) {
            return res.status(400).json({ message: 'Posted user phone number is required.' });
        }

        // Query the properties where the posted user (owner) has listed their property
        const propertiesByOwner = await AddModel.find({
            phoneNumber: postedPhoneNumber  // Match posted user (owner's) phone number
        });

        // If no properties are found with the given posted phone number
        if (propertiesByOwner.length === 0) {
            return res.status(404).json({ message: 'No properties found for this owner.' });
        }

        // Map through the found properties and return details with all the buyer's phone numbers who showed interest
        const propertiesData = propertiesByOwner.map(property => ({
            ppcId: property.ppcId,  // Property ID
            postedUserPhoneNumber: property.phoneNumber,  // Property owner's phone number
            propertyDetails: property.propertyDetails,  // Property details (if any)
            interestedUsers: property.interestRequests.map(request => request.phoneNumber)  // All buyers' phone numbers showing interest
        }));

        // Send response with the properties and their interest details
        return res.status(200).json({ message: 'Properties by the posted user', propertiesData });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});



// ******* Need Help ********


router.get('/get-help-as-buyer', async (req, res) => {
    const { postedPhoneNumber } = req.query;  // Extract phoneNumber from query parameters

    if (!postedPhoneNumber) {
        return res.status(400).json({ message: 'Posted user phone number is required.' });
    }


    try {
        // Fetch properties where the buyer has made a helpRequest
        const propertiesWithBuyerHelpRequests = await AddModel.find({
            phoneNumber: postedPhoneNumber  // Match posted user (owner's) phone number
        });

        if (propertiesWithBuyerHelpRequests.length === 0) {
            return res.status(404).json({ message: 'No properties found for this buyer help request.' });
        }

        // Map properties to include details about the help requests
        const helpRequestsData = propertiesWithBuyerHelpRequests.map(property => ({
            ppcId: property.ppcId,
            postedUserPhoneNumber: property.phoneNumber, // Owner's phone number
            propertyDetails: property.propertyDetails,  
            helpRequestersPhoneNumbers: property.helpRequests.map(req => req.phoneNumber) // All interested users
        }));

        return res.status(200).json({
            message: 'Properties with help requests fetched successfully.',
            helpRequestsData
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});




router.get('/get-help-as-owner', async (req, res) => {
    const { phoneNumber } = req.query;  // Extract phoneNumber from query parameters

    if (!phoneNumber) {
        return res.status(400).json({ message: 'Phone number is required.' });
    }

    try {
        // Fetch properties where the phone number is included in the helpRequests
        const propertiesWithHelpRequests = await AddModel.find({
            'helpRequests.phoneNumber': phoneNumber
        });

        if (propertiesWithHelpRequests.length === 0) {
            return res.status(404).json({ message: 'No properties found with help requests for this phone number.' });
        }

        const helpRequestsData = propertiesWithHelpRequests.map(property => ({
            ppcId: property.ppcId,
            postedUserPhoneNumber: property.phoneNumber,  // Property owner's phone number
            helpRequestedUserPhoneNumbers: property.helpRequests ? 
                property.helpRequests.map(request => request.phoneNumber) : [],  
            propertyMode: property.propertyMode,          // Mode (Rent/Sale)
            propertyType: property.propertyType,          // Type (House, Apartment)
            price: property.price,                        // Price of the property
            area: property.area                           // Area of the property
        }));

        return res.status(200).json({ message: 'Help requests fetched successfully', helpRequestsData });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});


// ********* Contact ***********


router.get('/get-contact-buyer', async (req, res) => {
    const { postedPhoneNumber } = req.query;  // Extract phoneNumber from query parameters

    if (!postedPhoneNumber) {
        return res.status(400).json({ message: 'Posted user phone number is required.' });
    }

    try {
        // Fetch properties where the buyer has made a helpRequest
        const propertiesWithBuyerContactRequests = await AddModel.find({
            phoneNumber: postedPhoneNumber  // Match posted user (owner's) phone number
        });

        if (propertiesWithBuyerContactRequests.length === 0) {
            return res.status(404).json({ message: 'No properties found for this buyer help request.' });
        }

        // Map properties to include details about the help requests
        const contactRequestsData = propertiesWithBuyerContactRequests.map(property => ({
            ppcId: property.ppcId,
            postedUserPhoneNumber: property.phoneNumber, // Owner's phone number
            propertyDetails: property.propertyDetails,  
            contactRequestersPhoneNumbers: property.contactRequests.map(req => req.phoneNumber) // All interested users
        }));

        return res.status(200).json({
            message: 'Properties with help requests fetched successfully.',
            contactRequestsData
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});




router.get('/get-contact-owner', async (req, res) => {
    const { phoneNumber } = req.query;  // Extract phoneNumber from query parameters

    if (!phoneNumber) {
        return res.status(400).json({ message: 'Phone number is required.' });
    }

    try {
        // Fetch properties where the phone number is included in the helpRequests
        const propertiesWithContactRequests = await AddModel.find({
            'contactRequests.phoneNumber': phoneNumber
        });

        if (propertiesWithContactRequests.length === 0) {
            return res.status(404).json({ message: 'No properties found with help requests for this phone number.' });
        }

        const contactRequestsData = propertiesWithContactRequests.map(property => ({
            ppcId: property.ppcId,
            postedUserPhoneNumber: property.phoneNumber,  // Property owner's phone number
            contactRequestedUserPhoneNumbers: property.contactRequests ? 
            property.contactRequests.map(request => request.phoneNumber) : [],  
            propertyMode: property.propertyMode,          // Mode (Rent/Sale)
            propertyType: property.propertyType,          // Type (House, Apartment)
            price: property.price,                        // Price of the property
            area: property.area,
            bestTimeToCall: property.bestTimeToCall,
            email:property.email

        }));

        return res.status(200).json({ message: 'Help requests fetched successfully', contactRequestsData });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});


// **************** Report Property **************


router.get('/get-reportproperty-buyer', async (req, res) => {
    const { postedPhoneNumber } = req.query;  // Extract phoneNumber from query parameters

    if (!postedPhoneNumber) {
        return res.status(400).json({ message: 'Posted user phone number is required.' });
    }

    try {
        // Fetch properties where the buyer has made a helpRequest
        const propertiesWithBuyerreportPropertyRequests = await AddModel.find({
            phoneNumber: postedPhoneNumber  // Match posted user (owner's) phone number
        });

        if (propertiesWithBuyerreportPropertyRequests.length === 0) {
            return res.status(404).json({ message: 'No properties found for this buyer help request.' });
        }

        // Map properties to include details about the help requests
        const reportPropertyRequestsData = propertiesWithBuyerreportPropertyRequests.map(property => ({
            ppcId: property.ppcId,
            postedUserPhoneNumber: property.phoneNumber, // Owner's phone number
            propertyDetails: property.propertyDetails,  
            reportPropertyRequestersPhoneNumbers: property.reportProperty.map(req => req.phoneNumber) // All interested users
        }));

        return res.status(200).json({
            message: 'Properties with help requests fetched successfully.',
            reportPropertyRequestsData
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});



router.get('/get-reportproperty-owner', async (req, res) => {
    const { phoneNumber } = req.query;  // Extract phoneNumber from query parameters

    if (!phoneNumber) {
        return res.status(400).json({ message: 'Phone number is required.' });
    }

    try {
        // Fetch properties where the phone number is included in the helpRequests
        const propertiesWithreportPropertyRequests = await AddModel.find({
            'reportProperty.phoneNumber': phoneNumber
        });

        if (propertiesWithreportPropertyRequests.length === 0) {
            return res.status(404).json({ message: 'No properties found with help requests for this phone number.' });
        }

        const reportPropertyRequestsData = propertiesWithreportPropertyRequests.map(property => ({
            ppcId: property.ppcId,
            postedUserPhoneNumber: property.phoneNumber,  // Property owner's phone number
            reportPropertyRequestedUserPhoneNumbers: Array.isArray(property.reportPropertyRequests) ? 
                property.reportPropertyRequests.map(request => request.phoneNumber) : [],  
            propertyMode: property.propertyMode,          // Mode (Rent/Sale)
            propertyType: property.propertyType,          // Type (House, Apartment)
            price: property.price,                        // Price of the property
            area: property.area,
        }));

        return res.status(200).json({ message: 'Help requests fetched successfully', reportPropertyRequestsData });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});




// **************Sold Out **********


router.get('/get-soldout-buyer', async (req, res) => {
    const { postedPhoneNumber } = req.query;  // Extract phoneNumber from query parameters

    if (!postedPhoneNumber) {
        return res.status(400).json({ message: 'Posted user phone number is required.' });
    }

    try {
        // Fetch properties where the buyer has made a helpRequest
        const propertiesWithBuyersoldOutRequests = await AddModel.find({
            phoneNumber: postedPhoneNumber  // Match posted user (owner's) phone number
        });

        if (propertiesWithBuyersoldOutRequests.length === 0) {
            return res.status(404).json({ message: 'No properties found for this buyer soldout request.' });
        }

        // Map properties to include details about the help requests
        const soldOutRequestsData = propertiesWithBuyersoldOutRequests.map(property => ({
            ppcId: property.ppcId,
            postedUserPhoneNumber: property.phoneNumber, // Owner's phone number
            propertyDetails: property.propertyDetails,  
            soldOutRequestersPhoneNumbers: property.soldOutReport.map(req => req.phoneNumber) // All interested users
        }));

        return res.status(200).json({
            message: 'Properties with help requests fetched successfully.',
            soldOutRequestsData
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});


router.get('/get-soldout-owner', async (req, res) => {
    const { phoneNumber } = req.query;  // Extract phoneNumber from query parameters

    if (!phoneNumber) {
        return res.status(400).json({ message: 'Phone number is required.' });
    }

    try {
        console.log('Querying with phoneNumber:', phoneNumber);

        // Use $elemMatch to find documents where soldOutReport contains an object with the specified phoneNumber
        const propertiesWithSoldOutRequests = await AddModel.find({
            // soldOutReport: { $elemMatch: { phoneNumber: phoneNumber } }
            'soldOutReport.phoneNumber': phoneNumber

        });

        console.log('Query Result:', propertiesWithSoldOutRequests);

        if (propertiesWithSoldOutRequests.length === 0) {
            return res.status(404).json({
                message: 'No properties found with soldout requests for this phone number.',
                phoneNumber
            });
        }

        // Map over the results to structure the response
        const soldOutRequestsData = propertiesWithSoldOutRequests.map(property => ({
            ppcId: property.ppcId,
            postedUserPhoneNumber: property.phoneNumber,  // Property owner's phone number
            soldOutRequestedUserPhoneNumbers: Array.isArray(property.soldOutReport) ?
                property.soldOutReport.map(request => request.phoneNumber) : [],  
            propertyMode: property.propertyMode,          // Mode (Rent/Sale)
            propertyType: property.propertyType,          // Type (House, Apartment)
            price: property.price,                        // Price of the property
            area: property.area,
        }));

        return res.status(200).json({ message: 'Soldout requests fetched successfully', soldOutRequestsData });
    } catch (error) {
        console.error('Error fetching soldout requests:', error.message);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});




// ********************* favorite***********

router.get('/get-favorite-owner', async (req, res) => {
    try {
        const { phoneNumber } = req.query;  // Extract phoneNumber from query parameters
        
        if (!phoneNumber) {
            return res.status(400).json({ message: 'Phone number is required.' });
        }

        // Fetch properties where the phone number is included in the favorite list
        const propertiesWithFavorites = await AddModel.find({
            'favorite.phoneNumber': phoneNumber
        });

        if (propertiesWithFavorites.length === 0) {
            return res.status(404).json({ message: 'No properties found for this phone number.' });
        }

        // Map through the properties to get the relevant data
        const favoriteData = propertiesWithFavorites.map(property => ({
            ppcId: property.ppcId,
            postedUserPhoneNumber: property.phoneNumber,  // Property owner's phone number
            favoritedUserPhoneNumbers: property.favorite ? 
                property.favorite.map(fav => fav.phoneNumber) : [],  // Collecting the phone numbers of users who favorited
            propertyMode: property.propertyMode,          // Mode (Rent/Sale)
            propertyType: property.propertyType,          // Type (House, Apartment)
            price: property.price,                        // Price of the property
            area: property.area                           // Area of the property
        }));

        return res.status(200).json({ message: 'Favorite properties fetched successfully', favoriteData });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});


router.get('/get-favorite-buyer', async (req, res) => {
    try {
        const { postedPhoneNumber } = req.query;  // Extract posted user's phone number (property owner) from query parameters
        
        // Validate phoneNumber exists
        if (!postedPhoneNumber) {
            return res.status(400).json({ message: 'Posted user phone number is required.' });
        }

        // Query the properties where the posted user (owner) has listed their property
        const propertiesByOwner = await AddModel.find({
            phoneNumber: postedPhoneNumber  // Match posted user (owner's) phone number
        });

        // If no properties are found with the given posted phone number
        if (propertiesByOwner.length === 0) {
            return res.status(404).json({ message: 'No properties found for this owner.' });
        }

        // Map through the found properties and return details with all the buyers' phone numbers who favorited
        const propertiesData = propertiesByOwner.map(property => ({
            ppcId: property.ppcId,  // Property ID
            postedUserPhoneNumber: property.phoneNumber,  // Property owner's phone number
            propertyDetails: property.propertyDetails,  // Property details (if any)
            favoritedUsers: property.favorite.map(fav => fav.phoneNumber)  // All buyers' phone numbers who favorited
        }));

        // Send response with the properties and their favorite details
        return res.status(200).json({ message: 'Properties by the posted user with favorite details', propertiesData });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});




module.exports = router;
