import { Request, Response, NextFunction } from 'express';

const checkforAdminRole = (req: any, res: Response, next: NextFunction) => {
    const user = req.user;
    if (user.role != 'admin') {
        return res.status(403).send({
            message: "Not Authorised",
        });
    }
    next();
};

const checkforUserRole = (req: any, res: Response, next: NextFunction) => {
    const user = req.user;
    if (user.role != 'user') {
        return res.status(403).send({
            message: "Not Authorised",
        });
    }
    next();
};

export const verifyRole = {
    checkforAdminRole,
    checkforUserRole
};