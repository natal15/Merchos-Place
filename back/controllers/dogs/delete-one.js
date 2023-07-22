const queries = require('../../models/dogs')

module.exports = (db) => async (req, res, next) => {
   
    const dbRes = await queries.eraseDog(await db)(req.params.id)

    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('something went wrong!'),
    })

    res.status(200).json({
        success: true,
        
    })
    
}