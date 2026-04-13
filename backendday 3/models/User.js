const mongoose = required('mongoose');

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,'Username is required'],
            trim:True,
        },
    email:{
        type:String,
        required:[true,'Email is required'],
        trim:True,
    },
    address:{
        type:String,
        trim:True,
    },
    phone:{
        type:Number,
        trim:True,
        minNumber:[10,'Invalid phone number']
    },
    role:{
        type:String,
        trim:True,
        enum:['admin','author','reader']
    }
    },{timestamps:True})