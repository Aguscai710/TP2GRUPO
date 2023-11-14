import { verifyToken } from "../utils/token.js";

export const validatetoken = (req, res, next) => {
	try {
		const { token } = req.cookies;
		if (!token) throw new Error("logueate");
		const data = verifyToken(token);
		req.user = data;
		next();
	} catch (error) {
		res.status(401).send({ error: error.message });
	}
};
