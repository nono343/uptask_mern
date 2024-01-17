import jwt from "jsonwebtoken";

const checkAuth = async (req, res, next) => {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {

        try {
            token = req.headers.authorization.split("")[1];

            const decoded = jwt.verify(token, procces.env.JWT_SECRET);

            req.usuario = await Usuario.findById(decoded.id).select(
                "-password -confirmado -token -createdAt -updatedAt -__v"
            );
            return next();
        } catch (error) {
            return res.status(404).json({ msg: "Hubo un error" })
        }
    }
}

export default checkAuth