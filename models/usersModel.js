
const client = require('pg');

const userSchema = client.Schema({
    email:{
        type: String,
        require: [true, 'Email is required'],
        trim: true,
        unique: [true, 'Email already Exist'],
        minLength: [5, 'Email must be atleast five characters'],
        lowercase: true,
    },

    password:{

        type: String,
        required: [true, 'Password must not be Empty'],
        trim: true,
        select: false,

    },

    verified:{
        type: Boolean,
        default: false,
    },

    verificationCode:{
        type: String,
        select: false,
    },
    verificationCodeValidation:{
        type: Number,
        select: false,
    },
    forgotPasswordCode:{
        type: String,
        select: false,
    },
    forgotPasswordCodeValidation:{
        type: Number,
        select: false,
    },
}, {
    timestamps: true,
});

module.exports = client.model("User", userSchema)

