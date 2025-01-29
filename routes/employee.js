const express = require("express")
const router = express.Router();
const Employee = require("../models/employee")

//get api
router.get('/', async (req, res) => {
    debugger;
    try {
        debugger;
        const { pageSize, limit, position, name } = req.query;
        const pageNumber = req.query.pageNumber || 1; // default to page 1 if not provided
        const skip = (pageNumber - 1) * pageSize;
        let filter = {};
        if (position) {
            filter.position = position;
        }
        if (name) {
            // filter.name = { $regex: `^${name}`, $options: 'i' }; //normal search accrding to write exactly same data as mentioned in list
            filter.name = { $regex: new RegExp(name, 'i') };
        }
        const employeeCount = await Employee.countDocuments(filter);
        const employees = await Employee.find(filter)
            .skip(skip)
            .limit(pageSize || limit || 10); // default to 10 if not provided
        res.status(200).send({
            message: "Get all employees successfully",
            recordCount: employeeCount,
            pageSize,
            pageNumber,
            totalPages: Math.ceil(employeeCount / (pageSize || limit || 10)),
            Data: employees
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
router.get('/selectedDtls', async (req, res) => {
    debugger;
    try {
        const employees = await Employee.find({}, { name: 1, position: 1, dept: 1 }); // Select specific fields
        res.status(200).send({
            message: "get all employee details successfully",
            recordCount: employees.length,
            data: employees // Already contains name, position & department
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
// get details by id
router.get('/:id', async (req, res) => {
    debugger
    try {
        const emp = await Employee.findById(req.params.id);
        if (!emp) {
            res.status(300).send({ message: "employee Id is not present" })
            return
        } else {
            res.status(200).send({
                message: "employee find Successfully",
                recordCount: emp.length,
                Data: [emp]

            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
})
// delete by id
router.delete('/:id', async (req, res) => {
    try {
        const emp = await Employee.findByIdAndDelete(req.params.id);
        if (!emp) {
            res.status(300).send({ message: "employee Id is not present" })
            return
        } else {
            res.status(200).send({
                message: "employee Deleted Successfully",
                Data: [emp]
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
})
//patch by id
router.put('/:id', async (req, res) => {
    try {
        const emp = await Employee.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },
            { new: true });
        res.status(200).send({ message: "Employee Updated Successfully", Data: emp })
    } catch (error) {
        res.status(500).send(error);
    }
})
//post api
router.post('/postemployee', async (req, res) => {
    debugger
    try {
        const emp_check = await Employee.find({ name: req.body.name });
        if (emp_check.length > 0) {
            res.status(302).send({
                message: 'Employee Name Already Present',
                Data: emp_check
            });
            return
        } 
        const emp = new Employee(req.body);
        const save = await emp.save();
        res.status(201).send({
            message: 'Employee created successfully',
            Data: save
        });
    } catch (error) {
        res.status(500).send(error);
    }
})
module.exports = router