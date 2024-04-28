import Lift from '../models/lift.model.js'

export const getLifts = async (req,res) =>{
    const lifts = await Lift.find({
        user: req.user.id,
    });

    res.json(lifts);
}
export const createLift = async (req,res) =>{
    const {name , type} = req.body;
    const newLift =  new Lift({
        name,
        type,
        user: req.user.id,
    })

    const savedLift = await newLift.save();
    res.json(savedLift)
}
export const getLift = async (req,res) =>{
    const lift = await Lift.findById(req.params.id);
    if(!lift) return res.status(404).json({message : 'Lift not found'});
    res.json(lift);
}

export const deleteLift = async (req,res) =>{
    const lift = await Lift.findByIdAndDelete(req.params.id);
    if(!lift) return res.status(404).json({message : 'Lift not found'});
    res.sendStatus(204);
}
