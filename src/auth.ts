import jwt from 'jsonwebtoken';

export function signJwt(obj: any): string {
    return jwt.sign(obj, getJwtSecret(), {
        expiresIn: '15d',
    });
}

export function verifyJwt(token: string): any{
    return jwt.verify(token, getJwtSecret()) as any;
}

function getJwtSecret(): string {
    const secret = process.env.JWT_SECRET;
    if(!secret) {
        console.error('Missing JWT secret');
        process.exit(1);
    }

    return secret;
}
