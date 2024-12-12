import  UserService  from '../services/userService';

const jwt = require("jsonwebtoken");

export class AuthController {
    constructor() {}

    public signin = async (req: any, res: any) => {
        const requestBody = req.body;
        const user: any = await UserService.getUserByIdPassword(requestBody.username, requestBody.password);
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        const token = jwt.sign({ username: user.username, role: user.role },
            process.env.SECRET,
            {
                algorithm: 'HS256',
                expiresIn: 86400,
            });

        req.session.token = token;

        return res.status(200).send({
            username: user.username,
            role: user.role
        });

    }

    public signout = async (req: any, res: any) => {
        req.session = null;
        return res.status(200).send({
            message: "You've been signed out!"
        });
    }
}