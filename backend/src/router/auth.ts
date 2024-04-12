import express from "express";
const router = express.Router();

router.get('/login', (req, res) => {
    res.json({
        message: "login"
    })
})

router.post('/register', (req, res) => {
    res.json({
        message: "register"
    })
})
export default router;