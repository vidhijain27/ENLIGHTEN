import { request, response } from "express";
import User from "../model/user.js";

export const signUpUser = async (request, response) => {
    try {
        const user = { username: request.body.username, name: request.body.name, password: request.body.password};

        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({ msg: 'signup successful '})
    } catch (error) {
        return response.status(500).json({ msg: 'Error while signup '})
    }
}

export const loginUser = async (request, response) => {
    let user = await User.findOne({ username: request.body.username });
    if (!user) {
        return response.status(400).json({ msg: 'username does not match'})
    }

    let match = await User.findOne({ password: request.body.password });
    if (!match) {
        return response.status(400).json({ msg: 'password does not match' })
    }

    }
