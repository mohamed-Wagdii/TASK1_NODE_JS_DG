require("dotenv").config();
const Student = require('./Models/Student');
const ClassRoom = require('./Models/ClassRoom');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

app.use(express.json());

async function connectDB(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/firstApp")
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.log("Failed to connect to MongoDB");
    }
}
connectDB();

//task1 :

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (err) {
        res.json({
            success: false,
            error: err.message
        });
    }
});

app.post('/tasks', async(req, res) => {
    try{
    const task = await Task.create(req.body);

    
    res.json({
        success: true,
        message: 'Task created successfully',
        data: task,

    })
    }catch(err){
        res.json({
            success: false,
            error: err.message
        });
    }
});

/////////task 2 :
app.get('/contacts' ,async (req , res)=>{
    try{
        const contacts = await Contact.find();
        res.json({
            success: true,
            meessage: 'Contacts retrieved successfully',
            data: contacts
        })
    }catch(err){
       console.log(err);
       
    }
    
});

app.post('/contacts', async(req , res)=>{
    try{
        const contact = await Contact.create(req.body);
        res.json({
            success: true,
            message: 'Contact created successfully',
            data: contact
        })
    }catch(err){
        console.log(err);
    }
});


//taks3
app.post('/books', async(req,res)=>{
    try{
        const books = await Books.create(req.body);
        res.json({
            success: true,
            msg : "Book created successfully",
            data: books
        })
    }
    catch(err){
        console.log(err);
    }
});

app.post('/authors' , async(req,res)=>{
    try{
        const authours = await Author.create(req.body);
        res.json({
            success:true,
            msg: "Author created successfully",
            data: authours
        })
    }
        catch(err){
            console.log(err);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


//taks4
app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.json({
            success: true,
            message: "Product created successfully",
            data: product
        });
    } catch (err) {
        console.log(err);
    }
});

app.get('/products', async(req, res)=>{
    try{
        const getProducts = await Product.find(req.query);
        res.json({
            success: true,
            message: "Products retrieved successfully",
            data: getProducts
        });
    } catch(err){
        console.log(err);
    }
})



//task5 



app.get("/api/classrooms", async (req, res) => {
    try {
        const classrooms = await ClassRoom.find().populate("students", "name email");
        res.json({
            success: true,
            count: classrooms.length,
            data: classrooms
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
    }
});

app.post("/api/students", async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.json({
            success: true,
            count: 1,
            data: student
        });
    } catch (err) {
      
        console.log(err);
    }
});

app.post("/api/classrooms", async (req, res) => {
    try {
        const classroom = await ClassRoom.create(req.body);
        res.json({
            success: true,
            count: 1,
            data: classroom
        });
    } catch (err) {
        console.log(err);
    }
});

app.delete('/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: 'Student deleted successfully',
            data: student
        });
    } catch (err) {
        console.log(err);
    }
});

app.delete('/classrooms/:id', async (req, res) => {
    try {
        const classroom = await ClassRoom.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: 'Classroom deleted successfully',
            data: classroom
        });
    } catch (err) {
        console.log(err);
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

