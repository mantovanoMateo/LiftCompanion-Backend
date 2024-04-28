import Percentage from '../models/percentage.model.js'

export const getPercentages = async (req,res) =>{
    const percentages = await Percentage.find({
        user: req.user.id,
    });
    res.json(percentages);
}

export const getPercentagesByLift = async (req,res) =>{
    const percentages = await Percentage.find({
        user: req.user.id,
        liftId: req.params.liftId,
    });
    res.json(percentages);
}

export const createPercentage = async (req,res) =>{
    const {percentage, liftId} = req.body;
    const newPercentage =  new Percentage({
        percentage,
        liftId,
        user: req.user.id,
    })

    const savedPercentage = await newPercentage.save();
    res.json(savedPercentage);
}
export const getPercentage = async (req,res) =>{
    const percentage = await Percentage.findById(req.params.id);
    if(!percentage) return res.status(404).json({message : 'Percentage not found'});
    res.json(percentage);
}

export const deletePercentage = async (req,res) =>{
    const percentage = await Percentage.findByIdAndDelete(req.params.id);
    if(!percentage) return res.status(404).json({message : 'Percentage not found'});
    res.sendStatus(204);
}
