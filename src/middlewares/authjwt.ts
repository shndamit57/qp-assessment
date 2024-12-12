import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const verifyTokenMiddleware = (req: any, res: Response, next: NextFunction) => {
    let token = req.session.token;

    if (!token) {
        return res.status(403).send({
            message: "No token provided!",
        });
    }

    jwt.verify(token,
        process.env.SECRET || '',
        (err: any, decoded: any) => {
            if (err) {
                return res.status(401).send({
                    message: "Unauthorized!",
                });
            }
            req.user = decoded;
            next();
        });
};

export const authJwt = {
    verifyToken: verifyTokenMiddleware,
};