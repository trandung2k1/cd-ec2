const { Router } = require('express');
const { StatusCodes } = require('http-status-codes');
const { v4: uuidv4 } = require('uuid');
const router = Router();

router.get('/', (req, res) => {
    const users = [
        { id: uuidv4(), name: 'Dung Tran' },
        { id: uuidv4(), name: 'Mai Pham' },
    ];
    return res.status(StatusCodes.OK).json(users);
});
module.exports = router;
