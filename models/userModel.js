const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    avatar: {
        type: String,
        default: 'https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?b=1&k=6&m=1209654046&s=170667a&w=0&h=lCT45WwZL4HBBBJeSqDJI-Z_ZJ9CdcVNU0hr243UnDc='
    },
    role: {type: String, default: 'user'},
    gender: {type: String, default: 'male'},
    mobile: {type: String, default: ''},
    andress: {type: String, default: ''},
    story: {type: String, default: '', maxlength: 200},
    website: {type: String, default: ''},
    followers: [
        {
            type: mongoose.Types.ObjectId, 
            ref: 'user'
        }
    ],
    following: [
        {
            type: mongoose.Types.ObjectId, 
            ref: 'user'
        }
    ],
}, {
    timestamps: true
})

module.exports = mongoose.model('user', userSchema)