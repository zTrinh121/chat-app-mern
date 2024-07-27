import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenSetCookie from "../utils/generateToken.js";

export const singup = async (req, res) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const user = await User.findOne({ username });

        if(user){
            return res.status(400).json({ message: "Username already exists" });
        }

        //HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //API avatar image: https://avatar-placeholder.iran.liara.run/
        const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profileImage: gender === "boy"? boyProfile : girlProfile
        });
        
        if(newUser){
            generateTokenSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({ 
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profileImage: newUser.profileImage
             });
        }else{
            res.status(400).json({ message: "Invalid user data" });
        }

        
    } catch (error) {
        console.log("Error in sign up controller: " + error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect) {
            return res.status(400).json({message: "Invalid user or password" });
        }

        generateTokenSetCookie(user._id, res);
        
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profileImage: user.profileImage
        });

    } catch (error) {
        console.log("Error in login controller: " + error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller: " + error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

