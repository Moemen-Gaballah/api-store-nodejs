import express, { Request, Response } from 'express'

const router = express.Router();

/* GET quotes listing. */
export default router.post('/', function(req: Request, res: Response, next) {
    res.json({
        data: [
            {
                quote: 'Bla.',
                author: 'Bla Page'
            }
        ],
        meta: {
            page: 1
        }
    });
});

// module.exports = router;