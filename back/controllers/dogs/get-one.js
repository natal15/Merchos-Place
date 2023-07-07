const queries = require('../../models/dogs')

module.exports = (db) => async (req, res, next) => {
   
    const selectDog = req.query.dogname

    const dbRes = await queries.showOne(await db)(selectDog)

    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('something went wrong!'),
    })

    res.status(200).json({
        success: true,
        data: dbRes.response,
    })
    
}