"use strict";
// import jwt from 'jsonwebtoken';
//
//
// const verifyAuthToken = (req: Request, res: Response, next) => {
//     try {
//         const authorizationHeader = (req.headers.authorization as unknown) as string
//         const token = authorizationHeader.split(' ')[1]
//         const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
//
//         next()
//     } catch (error) {
//         res.status(401)
//     }
// }
