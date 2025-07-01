import express from "express";
import User from "../models/User.js";

const router= express.Router();

// CREATE a new user
router.post("/", async (req, res)=>
{
    try{
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch (err){
        res.status(500).json({ error: err.message});
    }
});

// GET all users
router.get("/", async (req, res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ error : err.message });
    }
});

export default router;