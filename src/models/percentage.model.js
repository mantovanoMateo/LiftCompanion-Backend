import mongoose from 'mongoose'

const percentageSchema = new mongoose.Schema({
    percentage: {
        type: String,
        required: true,
    },
    liftId: {
        type: String,
        required: true,
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

export default mongoose.model('Percentage', percentageSchema)