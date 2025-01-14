const jwtProvider = require("../config/jwtProvider");
const userService = require("../services/user.service");

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(404).send({ message: "Token not found" });
        }

        const userId = jwtProvider.getUserIdFromToken(token);
        console.log("Extracted User ID:", userId); // Debug log

        const user = await userService.findUserById(userId);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        req.user = user; // Attach user to request
        console.log("Authenticated User:", user); // Debug log
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = authenticate;
