const bcrypt = require('bcrypt')
const User = require('../model/user.model')

exports.index = async (req, res) => {
    res.render('index')
};

exports.getRegister = async (req, res) => {
    res.render('register')
};

exports.registration = async (req, res) => {
    const {username, password, confirm_password} = req.body;
    let user;

    if (password !== confirm_password) {
        return Error("Error")
    }
    try {
        user = await User.findOne({where: {username}})

        if (user) return res.redirect('/register?error=username_exist')

        const genSalt = await bcrypt.genSalt(12)
        const encryptedPassword = await bcrypt.hashSync(password, genSalt);
        console.log(encryptedPassword)
        user = await User.create({
            username,
            password: encryptedPassword
        })
        console.log(user)
        res.redirect("/");
    } catch (e) {
        res.redirect("/");
        console.log(e)
    }
};

exports.login = async (req, res) => {
    const {username, password} = req.body;
    let user;

    try {
        console.log(username, password)
        res.redirect("/");
    } catch (e) {
        console.log(e)
    }
};
