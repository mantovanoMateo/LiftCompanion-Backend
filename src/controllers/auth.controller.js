import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { craeteAccessToken } from '../libs/jwt.js'

export const register = async (req, res) => {
    const { name, lastname, username, email, password } = req.body
    try {

        const userFound = await User.findOne({ email })

        if (userFound) return res.status(400).json(["El email ya existe"]);

        const passwordHash = await bcrypt.hash(password, 10);
        
        const newUser = new User({
            name,
            lastname,
            username,
            email,
            password: passwordHash,
        })
        
        const savedUser = await newUser.save();
        const token = await craeteAccessToken({ id: savedUser._id });
        res.cookie('token', token);
        res.json({
            id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }




}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {

        const userFound = await User.findOne({ email })

        if (!userFound) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, userFound.password);

        if (!isMatch) return res.status(400).json({ message: 'Incorrect Password' });

        const token = await craeteAccessToken({ id: userFound._id });
        res.cookie('token', token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const logout = (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0)
    })
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.payload.id);
    if (!userFound) return res.status(400).json({ message: 'User not found' });
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email
    })
}