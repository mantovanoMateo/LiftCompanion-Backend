import Pr from '../models/pr.model.js'

export const getPrs = async (req,res) =>{
    const prs = await Pr.find({
        user: req.user.id,
    });
    res.json(prs);
}

export const getPrsByLitf = async (req,res) =>{
    const prs = await Pr.find({
        user: req.user.id,
        liftId: req.params.liftId,
    });
    res.json(prs);
}

export const createPr = async (req,res) =>{
    const {kg, liftId} = req.body;
    const newPr =  new Pr({
        kg,
        liftId,
        user: req.user.id,
    })

    const savedPr = await newPr.save();
    res.json(savedPr);
}

export const getPr = async (req,res) =>{
    const pr = await Pr.findById(req.params.id);
    if(!pr) return res.status(404).json({message : 'Percentage not found'});
    res.json(pr);
}
export const deletePr = async (req,res) =>{
    const pr = await Pr.findByIdAndDelete(req.params.id);
    if(!pr) return res.status(404).json({message : 'Percentage not found'});
    res.sendStatus(204);
}
