const UserSchema = require('../Schemas/User');
const Language = require('../Datas/Languages.json');
const EmailValidator = require("email-validator");
const Users = []


const CreateUser = function(data, otherData) {
    return new Promise((resolve, reject) => {

        UserSchema.create(data, (err, user) => {
            if (err) {
                if (err.code === 11000) {
                    reject({
                        status: "failed",
                        message: Language["username-taken"][otherData.Language]
                    })
                }
            }
            else {
                resolve(user);
            }
        });
    });
}

// LOGIN
const LoginUser = function(data, otherData) {
    return new Promise((resolve, reject) => {
        UserSchema.findOne({ username: data.username }, (err, user) => {
            if (err) {
                reject({
                    status: "failed",
                    message: Language["unexpected-error-try-later"][otherData.Language]
                })
            }
            else {
                if (user) {
                    if (user.password === data.password) {
                        resolve(user);
                    }
                    else {
                        reject({
                            status: "failed",
                            message: Language["user-not-found"][otherData.Language]
                        })
                    }
                }
                else {
                    reject({
                        status: "failed",
                        message: Language["user-not-found"][otherData.Language]
                    })
                }
            }
        });
    });
}

// remove user
const RemoveUser = function(id) {
    return new Promise((resolve, reject) => {
        UserSchema.findByIdAndRemove(id, (err, user) => {
            if (err) {
                reject({
                    status: "failed",
                    message: Language["unexpected-error-try-later"][otherData.Language]
                })
            }
            else {
                resolve(user);
            }
        });
    });
}

module.exports = {
    CreateUser,
    LoginUser,
    RemoveUser
};