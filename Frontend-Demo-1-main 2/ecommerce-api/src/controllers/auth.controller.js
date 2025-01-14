const userService = require("../services/user.service.js");
const jwtProvider = require("../config/jwtProvider.js");
const bcrypt = require("bcrypt");
const { createCart } = require("../services/cart.service.js");

const register = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(user._id);

        await createCart(user);

        return res.status(200).send({ token: jwt, message: "Register Success" });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: error.message });
    }
};

const login = async (req, res) => {
    const { password, email } = req.body;

    try {
        console.log("Email passed to getUserByEmail:", email);
        const user = await userService.getUserByEmail(email);

        if (!user) {
            return res.status(404).send({ message: 'User not found with email:', email });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({ message: "Invalid Password" });
        }

        const jwt = jwtProvider.generateToken(user._id);
        return res.status(200).send({ token: jwt, message: "Login success" });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).send({ error: error.message });
    }
};


module.exports = { register, login };
