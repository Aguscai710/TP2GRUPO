import jwt from "jsonwebtoken";
const clave = "miclave"
export const generateToken = (payload) => {
	const token = jwt.sign(payload,clave, {
		expiresIn: "2d",
	});
	return token;
};

export const verifyToken = (token) => {
	return jwt.verify(token, clave);
};