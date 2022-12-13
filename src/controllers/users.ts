import { NextFunction, Request, Response } from "express";
import User from "../models/users";


//Create User
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);
    const users = new User(req.body);
    await users.save();
    res.send("created").status(201);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};


//Read Single User
const readAuthor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    // console.log(req.params);
    const userData = await User.findById(id);
    res.status(201).json({ data: userData });
  } catch (error) {
    res.status(400).send(error);
  }
};

//Read Multiple User
const readAllAuthor = async (req: Request,res: Response,next: NextFunction) => {
  try {
    const allUserData = await User.find();
    res.send(allUserData);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Update Single User
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send(updateUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Delete Single User
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deleteUsers = await User.findByIdAndDelete(id);
    res.status(200).send("User Deleted");
  } catch (error) {
    res.status(400).send(error);
  }
};

export default {
  createUser,
  readAllAuthor,
  readAuthor,
  updateUser,
  deleteUser,
};
