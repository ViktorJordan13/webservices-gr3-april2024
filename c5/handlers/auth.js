const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
    AccountLogin,
    AccountSignUp,
    validate
} = require("../pkg/accounts/validate");

const accounts = require("../pkg/accounts");
const config = require("../pkg/config");

const register = async(req, res) => {
    try{
        await validate(req.body, AccountSignUp);
        const exists = await accounts.getByEmail(req.body.email);
        if(exists){
            return res.status(400).send("Account with this email already exists!");
        }
        //console.log("req.body.password", req.body.password); // plain text 123 ke ni go prikaze kako 123
        req.body.password = bcrypt.hashSync(req.body.password);
        //console.log("req.body.password", req.body.password); // passwordot ke mi e hashed, odnosno enkriptiran, nema da e plain text 123
        const acc = await accounts.create(req.body);
        return res.status(201).send(acc);
    }catch(err){
        console.log(err);
        return res.status(err.status).send(err.error);
    }
}

const login = async(req, res) => {
    try{
        await validate(req.body, AccountLogin);

        const {email, password} = req.body;

        const account = await accounts.getByEmail(email);

        if (!account){
            return res.status(400).send("Account not found!");
        }

        if(!bcrypt.compareSync(password, account.password)){
            return res.status(400).send("Incorect password");
        }

        const payload = {
            fullname: account.fullname,
            email: account.email,
            id: account._id,
            expiry: new Date().getTime()/ 1000 + 7 * 24 * 60 * 60 //7 days in the future, 1 week
        }
        const token = jwt.sign(payload, config.getSection("development").jwt);
        return res.status(200).send(token);

    }catch(err){
        console.log(err);
        return res.status(err.status).send(err.error);
    }
}

module.exports = {
    login,
    register
}