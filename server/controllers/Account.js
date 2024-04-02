const express = require("express");
const { auth } = require("../middlewares/auth");
const Account = require("../models/account.model");
const { default: mongoose } = require('mongoose');

exports.balance = async (req, res) => {
    try {
        const account = await Account.findOne({
            userId: req.user.userId
        });
        
        if (!account) {
            return res.status(404).json({
                success: false,
                message: "Account not found for the user",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Successfully checked the balance",
            balance: account.balance
        });
    } catch (error) {
        console.error("Error checking the balance:", error);
        return res.status(500).json({
            success: false,
            message: "Error while checking the balance"
        });
    }
};

exports.transfer = async(req, res) => {
    try{
        const session = await mongoose.startSession();

        session.startTransaction();
        const { amount, to } = req.body;

        const account = await Account.findOne({ userId: req.user.userId }).session(session);

        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);

        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid account"
            });
        }

        await Account.updateOne({ userId: req.user.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

        await session.commitTransaction();
        return res.status(200).json({
            success: true,
            message: "Transfer successful"
        });
    }
    catch(error){
        console.error("Error in transferring amount:", error);
        return res.status(500).json({
            success: false,
            message: "Error while transferring the amount"
        });
    }
}