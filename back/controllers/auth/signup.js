const { hash } = require('simple-stateless-auth-library')
const { createUser } = require('../../models/auth')
const errors = require('../../misc/errors')

module.exports = (db) => async (req, res, next) => {
    const { email, nickname, password } = req.body
    
    const encrypted = await hash.encrypt(password)

    const response = await createUser(await db)(email, nickname, encrypted)

    if(!response.ok) return next(errors[500])

    res.status(200).json({
        success: true,
    })
}