import mongoose from 'mongoose'

const prSchema = new mongoose.Schema({
    kg: {
        type: String,
        required: true,
    },
    liftId: {
        type: String,
        required: true,
    },
    date: {
        type:Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
},
{
    timestamps: true
})

export default mongoose.model('Pr', prSchema)