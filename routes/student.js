const express = require('express')
const router = express.Router()
const Student = require('../models/student')
const { Country } = require('../models/country')
const mongoose = require('mongoose')
//get_lists 
router.get('/', async (req, res) => {
  debugger;
  try {
    const student = await Student.find().populate(
      "country_origin",
      `name`)
    res.status(200).json({
      message: 'Student Lists Fetched Successfully',
      recordcount: student.length,
      data: student.map((x) => {
        return {
          ['student Id']: x._id,
          ['Country Origin']: x.country_origin,
          ['Student Name']: x.name,
          ['Student Class']: x.class,
          ['Subject List']:x.subjectList.length==0?'No Data Present':x.subjectList
        }
      })
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})
router.post('/', async (req, res) => {
  try {
    const formData = req.body;
    if (!mongoose.Types.ObjectId.isValid(req.body.country_origin)) {
      return res.status(400).json({ message: 'Invalid country_origin ID format.' });
    }
    // Find the country origin document using the ID
    let countryOriginDoc = await Country.findById(req.body.country_origin);

    // Handle case where no country origin is found with the ID
    if (!countryOriginDoc) {
      return res.status(400).json({ message: 'Invalid country_origin ID provided.' });
    }
    const student = new Student(formData);
    const save = await student.save();
    res.status(201).send({
      message: 'Student Data Saved successfully',
      Data: save,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})
router.get('/:id', async (req, res) => {
  debugger;
  try {
    const stdnt = await Student.findById(req.params.id).populate(
      "country_origin",
      `name`);
    if (!stdnt) return res.status(300).send({ message: "Employee Id Is Not Present" })
    else res.status(200).send({
      message: `Student Find Successfully For Unique Id _ ${req.params.id}`,
      recordCount: stdnt.length,
      Data: [stdnt].map((x) => {
        debugger;
        return {
          ['student Id']: x._id,
          country_origin: x.country_origin,
          studentName: x.name,
          studentClass: x.class,
          rollNo: x.rollno
        }
      })

    });
  } catch (error) {
    res.status(500).send(error);
  }
})












// router.post('/', upload.none(), async (req, res) => {
//     debugger
//     try {
//         // Access the parsed FormData
//         const formData = req.body;

//         // Create a new Student instance using the formData
//         const student = Student(formData);

//         // Save the student data to the database
//         const save = await student.save();

//         // Respond with a success message and the saved data
//         res.status(201).send({
//           message: 'Student Data Saved successfully',
//           Data: save,
//         });
//     } catch (error) {
//         // Handle any errors that occur
//         res.status(500).json({ message: error.message });
//     }
// });

// const upload = multer();

// router.post('/', upload.none(), async (req, res) => {
//   try {
//     const { name, email, class: studentClass, rollno } = req.body;

//     // Create a new Student instance
//     const student = new Student({ name, email, class: studentClass, rollno });

//     // Check for duplicate class before saving (optional)
//     const existingStudent = await Student.findOne({ class: studentClass });
//     if (existingStudent) {
//       return res.status(400).json({ message: 'Duplicate class value found. Please choose a unique class number.' });
//     }

//     // Save the student data to the database
//     const savedStudent = await student.save();

//     res.status(201).send({ message: 'Student Data Saved successfully', data: savedStudent });
//   } catch (error) {
//     console.error("Error details:", error);
//     if (error.code === 11000) { // Handle duplicate key errors specifically
//       const duplicateField = error.errmsg.split(':')[2].split(' ')[1].trim().slice(0, -1); // Extract the duplicate field
//       res.status(400).json({ message: `Duplicate key error: '${duplicateField}'. Please ensure unique values for '${duplicateField}'.` });
//     } else {
//       res.status(500).json({ message: 'An error occurred during student creation.', error: error.message });
//     }
//   }
// });

module.exports = router