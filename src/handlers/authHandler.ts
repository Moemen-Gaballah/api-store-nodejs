import {signJwt} from "../auth";
import crypto from "crypto";
import {getUser, storeUser, isEmailExist} from '../models/user.model'

export const loginHandler: any = async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400);
    }

    const user = getUser(email, password);
    if (!user) {
        return res.sendStatus(403);
    }
    const jwt = signJwt({
        // @ts-ignore
        userId: user.id,
    });

    return res.status(200).send({
        user: {
            // @ts-ignore
            username: user.username,
            // @ts-ignore
            email: user.email,
        },
        jwt
    });
};

export const registerHandler: any = async (req, res) => {
    const {username, email, password} = req.body;

    if (!email || !username || !password) {
        return res.status(400).send({error: 'All fields are required'});
    }

    const existing = isEmailExist(email);

    // @ts-ignore
    if (existing) {
        return res.status(403).send({error: 'Email already exists'});
    }


    const user = storeUser(username, email, password);

    // @ts-ignore
    const jwt = signJwt({userId: user.id});
    return res.sendStatus(200);
};

function hashPassword(password: string): string {
    return crypto.pbkdf2Sync(password, process.env.PASSWORD_SALT!, 42, 64, 'sha512').toString('hex');
}

