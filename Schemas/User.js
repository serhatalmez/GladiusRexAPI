const mongoose = require('mongoose');
const UserObjects = require('../Objects/User');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    inventory: {
        type: Array,
        default: []
    },
    gold: {
        type: Number,
        default: 0
    },
    health: {
        type: Number,
        default: 100
    },
    level: {
        type: Number,
        default: 1
    },
    xp: {
        type: Number,
        default: 0
    },
    currentBattleId: {
        type: Number
    },
    stats: {
        type: Object,
        default: UserObjects.DefaultUserStats
    },
    apperance: {
        type: Object,
        default: UserObjects.DefaultApperance
    }
});

module.exports = mongoose.model('User', UserSchema);