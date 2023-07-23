const queries = require('../../models/dogs')

module.exports = (db) => async (req, res, next) => {

    const dog = req.query.dogname
    const med = req.query.medname

    const dbRes = await queries.postMed(await db)(dog, med)

    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('something went wrong!'),
    })

    res.status(200).json({
        success: true,
        
    })
    
}