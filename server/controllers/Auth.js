const User = require("../models/user.model");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Account = require("../models/account.model");
require("dotenv").config();

const jwt_secret = process.env.JWT_SECRET;

const signupSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    userName: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6), 
});

exports.signup = async (req, res) => {
    try {
        const { firstName, lastName, userName, email, password } = req.body;
        const { success, error } = signupSchema.safeParse(req.body);
        if (!success) {
            return res.status(400).json({
                success: false,
                message: error.message || "Invalid inputs"
            });
        }

        const existingUserByUsername = await User.findOne({ userName });
        if (existingUserByUsername) {
            return res.status(400).json({
                success: false,
                message: "This username is already taken. Please choose a different username."
            });
        }
        
        const existingUserByEmail = await User.findOne({ email });
        if (existingUserByEmail) {
            return res.status(400).json({
                success: false,
                message: "This email is already registered. Please use a different email address."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await User.create({
            firstName,
            lastName,
            userName,
            email,
            password: hashedPassword,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        });

        const userId = user._id;

        const account = await Account.create({
            userId,
            balance: 1 + Math.random() * 10000
        });

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user,
        });
    } catch (error) {
        console.error("Error in signup", error);
        return res.status(500).json({
            success: false,
            message: "Error while signing up",
        });
    }
};
const signinBody = zod.object({
    email: zod.string().email(),
	password: zod.string()
})

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const { success } = signinBody.safeParse(req.body);
        if (!success) {
            return res.status(411).json({
                message: "Email already taken / Incorrect inputs"
            })
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found. Please ensure you've registered yourself!",
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Password is incorrect!",
            });
        }

        const token = jwt.sign({
            userId: user._id,
            email: user.email
        }, jwt_secret, { expiresIn: "1d" });

        user.token = token;
        user.password = undefined;

        const options = {
            expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // Set cookie expiry to 1 day
            httpOnly: true,
        };

        res.cookie("token", token, options).status(200).json({
            success: true,
            message: "Logged in successfully",
            token,
            user,
        });
    } catch (error) {
        console.error("Error in login", error);
        return res.status(500).json({
            success: false,
            message: "Error while logging in"
        });
    }
};

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
});

exports.updateUser = async(req, res) =>{
    try{
        const { firstName, lastName, password } = req.body;
        const { success } = updateBody.safeParse(req.body);
        if (!success) {
            res.status(411).json({
                message: "Error while updating information"
            })
        }

        const updatedUser = await User.findOneAndUpdate({ _id: req.userId }, { firstName, lastName, password }, { new: true });

        return res.status(200).json({
            success: true,
            message: "Updated successfully",
            updatedUser
        });
    }
    catch(error){
        console.error("Error in updating:", error);
        return res.status(500).json({
            success: false,
            message: "Error while updating"
        });
    }
};

exports.getUsers = async(req, res) => {
    try{
        const filter = req.query.filter || "";
        const users = await User.find({
            $or: [{
                firstName: {
                    "$regex": filter
                }
            } , {
                lastName: [{
                    "$regex" : filter
                }]
            }]
        });

        return res.status(200).json({
            success: true,
            user: users.map(user => ({
                username: user.userName,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                _id: user._id
            }))
        })
    }
    catch(error){
        console.log("error in getting users: ", error);
        return res.status(401).json({
            success: false,
            message: "error while getting users"
        });
    }
}
