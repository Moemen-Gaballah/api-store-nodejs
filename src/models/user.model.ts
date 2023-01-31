import client from "../config/database";

// export default class UserModel {
export class UserModel {
    email: string|null = null;
    username: string|null = null;
    password: string|null = null;

    // public constructor(email: string, password: string|null = null, username: string|null = null) {
    //     this.email = email;
    //     this.password = password;
    //     this.username = username;
    // }

    public login(email: any, password: string): string {
        // @ts-ignore
        return client.query("select * from users WHERE email = $1 and password = $2 limit = 1", [
            email,
            this.hashPassword(password),
        ]);
    }

    public isEmailExist(email: string) {
        // @ts-ignore
        const result = client.query("select * from users WHERE email = $1 limit = 1", [
            email
        ]);

        return result;
    }

    public register(email: string, password: string, username: string) {
        // @ts-ignore
        const result = client.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", [
            username,
            email,
            this.hashPassword(password),
        ]);

        return result;
    }

    public hashPassword(password: string) {
        return crypto.pbkdf2Sync(password, process.env.PASSWORD_SALT!, 42, 64, 'sha512').toString('hex');
    }

}


// export async function getUser(email, password){
//
//     return await client.query("select * from users WHERE email = $1 and password = $2 limit = 1", [
//         email,
//         hashPassword(password),
//     ]);
//     // return result;
// }
//
// export const getUser = async (email, password) => {
//
//     return await client.query("select * from users WHERE email = $1 and password = $2 limit = 1", [
//         email,
//         hashPassword(password),
//     ]);
//     // return result;
// }

// export const isEmailExist = async (email) => {
//
//     const result = await client.query("select * from users WHERE email = $1 limit = 1", [
//         email
//     ]);
//
//     return result;
// }

// export async function isEmailExist(email = 'moemen@gmail.com'){
//
//     console.log(email, 'email');
//     const result = await client.query("select * from users WHERE email = $1 limit = 1", [
//         email
//     ]);
//
//     return result;
// }

// export const storeUser = async (username ,email, password) => {
//
//     const result = await client.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", [
//         username,
//         email,
//         hashPassword(password),
//     ]);
//
//     return result;
// }

// export async function storeUser(username ,email, password) {
//     const result = await client.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", [
//         username,
//         email,
//         hashPassword(password),
//     ]);
//
//     return result;
// }
//
// const hashPassword = (password: string): string =>  {
//     return crypto.pbkdf2Sync(password, process.env.PASSWORD_SALT!, 42, 64, 'sha512').toString('hex');
// }


import bcrypt from 'bcrypt'
import Client from "../config/database";
import crypto from "crypto";
// import crypto from "crypto";

// const register = async (username: string, email: string, password: string) => {
//     try {
//         // @ts-ignore
//         const conn = await Client.connect()
//         const sql = 'INSERT INTO users (username, email, password) VALUES($1, $2, $3) RETURNING *'
//
//         const hash = hashPassword(password)
//
//         const result = await conn.query(sql, [username, email ,hash])
//         const user = result.rows[0]
//
//         conn.release()
//
//         return user
//     } catch(err) {
//         throw new Error(`unable create user (${username}): ${err}`)
//     }
// }
//
// function hashPassword(password: string): string {
//     return crypto.pbkdf2Sync(password, process.env.PASSWORD_SALT!, 42, 64, 'sha512').toString('hex');
// }

// const login = async (username: string, email: string, password: string)  => {
//     const conn = await Client.connect()
//     const sql = 'SELECT password_digest FROM users WHERE username=($1)'
//
//     const result = await conn.query(sql, [username])
//
//     console.log(password+pepper)
//
//     if(result.rows.length) {
//
//         const user = result.rows[0]
//
//         console.log(user)
//
//         if (bcrypt.compareSync(password+pepper, user.password_digest)) {
//             return user
//         }
//     }
//
//     return null
// }

//
// const generateToken = async () => {
//
// }

module.exports = UserModel;
