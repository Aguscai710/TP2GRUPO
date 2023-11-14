import { SECRET } from "../config/config.js";
import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
	const token = jwt.sign(payload, SECRET, {
		expiresIn: "2d",
	});
	return token;
};

export const verifyToken = (token) => {
	return jwt.verify(token, SECRET);
};
